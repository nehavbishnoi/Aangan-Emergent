"""Aangan backend API tests."""
import os
import time
import uuid
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://aangan-stories.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health check
class TestRoot:
    def test_root(self, session):
        r = session.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("message") == "Aangan API"
        assert data.get("status") == "ok"


# Waitlist CRUD + idempotency
class TestWaitlist:
    def test_create_waitlist(self, session):
        email = f"TEST_{uuid.uuid4().hex[:8]}@example.com"
        payload = {"name": "TEST User", "email": email}
        r = session.post(f"{API}/waitlist", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str)
        assert data["email"] == email
        assert data["name"] == "TEST User"
        assert "created_at" in data
        # idempotent — same email
        r2 = session.post(f"{API}/waitlist", json=payload)
        assert r2.status_code == 200
        assert r2.json()["id"] == data["id"]

    def test_invalid_email(self, session):
        r = session.post(f"{API}/waitlist", json={"name": "X", "email": "not-an-email"})
        assert r.status_code == 422

    def test_missing_email(self, session):
        r = session.post(f"{API}/waitlist", json={"name": "X"})
        assert r.status_code == 422

    def test_list_waitlist(self, session):
        # seed one
        email = f"TEST_{uuid.uuid4().hex[:8]}@example.com"
        session.post(f"{API}/waitlist", json={"name": "TEST Lister", "email": email})
        r = session.get(f"{API}/waitlist")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        emails = [i["email"] for i in items]
        assert email in emails


# Ask Aangan AI
class TestAsk:
    def test_ask_simple(self, session):
        payload = {"question": "How did Dadi make Holi special?"}
        r = session.post(f"{API}/ask", json=payload, timeout=60)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "answer" in data and isinstance(data["answer"], str)
        assert len(data["answer"].strip()) > 50, f"Answer too short: {data['answer']!r}"
        assert "session_id" in data
        # warm tone / family attribution heuristic
        lower = data["answer"].lower()
        family_signal = any(t in lower for t in [
            "voice note", "recorded", "dadi", "nani", "papa", "mama", "sharma", "jaipur", "family"
        ])
        assert family_signal, f"No family attribution detected: {data['answer'][:300]}"

    def test_ask_stream(self, session):
        payload = {"question": "Tell me one short Diwali memory."}
        with session.post(f"{API}/ask/stream", json=payload, stream=True, timeout=60) as r:
            assert r.status_code == 200, r.text
            ct = r.headers.get("content-type", "")
            assert "text/event-stream" in ct, f"Unexpected content-type: {ct}"
            saw_data = False
            saw_done = False
            start = time.time()
            for raw in r.iter_lines(decode_unicode=True):
                if raw is None:
                    continue
                if raw.startswith("data:"):
                    saw_data = True
                    if "[DONE]" in raw:
                        saw_done = True
                        break
                if time.time() - start > 45:
                    break
            assert saw_data, "No SSE data chunks received"
            assert saw_done, "No [DONE] sentinel received"
