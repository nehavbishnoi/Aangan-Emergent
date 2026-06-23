import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({ baseURL: API, timeout: 60000 });

export const joinWaitlist = (payload) => api.post('/waitlist', payload).then((r) => r.data);

// Streaming ask via SSE-like response (manual parse from fetch)
export async function askAanganStream(question, sessionId, onDelta, onDone, onError) {
  try {
    const res = await fetch(`${API}/ask/stream`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, session_id: sessionId }),
    });
    if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const events = buffer.split('\n\n');
      buffer = events.pop() || '';
      for (const evt of events) {
        const line = evt.replace(/^data: /, '');
        if (line === '[DONE]') {
          onDone?.();
          return;
        }
        if (line.startsWith('[ERROR]')) {
          onError?.(line);
          return;
        }
        // unescape newlines we replaced on backend
        onDelta?.(line.replace(/\\n/g, '\n'));
      }
    }
    onDone?.();
  } catch (e) {
    onError?.(e.message || 'stream error');
  }
}
