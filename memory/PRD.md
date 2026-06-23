# Aangan — Product Requirements (PRD)

## Original problem statement
Build a premium, emotionally warm, editorial landing page for **Aangan** — a private AI-powered
family culture and legacy platform. Aangan preserves family stories, traditions, recipes, rituals,
values, languages, celebrations, voice notes, photos, and memories across generations.

Positioning: "Aangan — The living archive of your family culture."

The site should feel like a luxury family-memoir brand or editorial magazine, not a SaaS landing
page. Warm ivory background, deep forest-green text, muted terracotta/marigold/sage accents,
elegant serif headlines (Cormorant Garamond) + clean sans-serif body (Outfit), candid
multigenerational photography, and a lot of breathing space.

Non-religious. Non-genealogical. Non-social-media. Non-photo-album. A private, beautiful digital
home for a family's living culture.

## User personas
1. **Adult children of ageing parents** — want to record grandparents' stories before it's too late.
2. **Diaspora families / NRI** — want to keep a home language and home traditions alive abroad.
3. **New parents** — want to start a memory archive for their child.
4. **Interfaith / inter-regional couples** — want both cultures honoured side by side.
5. **Families preparing for weddings / milestones** — want a legacy book.

## Core requirements (static)
- Editorial landing page with all 9 brand sections (hero → final CTA waitlist).
- Six clickable product mockup screens:
  Family Tradition Card (Our Diwali Morning), Voice-note → story transformation, Family Calendar,
  Ask Aangan (live AI), Recipe Card (Besan Ladoo), My Aangan dashboard.
- Working waitlist saved to MongoDB.
- Ask Aangan as a *live* streaming AI conversation, citing the family's archive first.
- Warm ivory + forest green palette, no saffron-heavy / religious / corporate-SaaS visuals.
- Premium typography (Cormorant Garamond + Outfit + Caveat hand-script).
- `data-testid` on every interactive and key informational element.

## Implemented (Dec 2025)
- Backend
  - `POST/GET /api/waitlist` — idempotent waitlist on email.
  - `POST /api/ask` and `POST /api/ask/stream` — Claude Sonnet 4.5 via `emergentintegrations`,
    using `EMERGENT_LLM_KEY` and an Ask Aangan system prompt that grounds answers in a
    sample (Sharma family, Jaipur) archive.
- Frontend (React + Tailwind + shadcn + sonner)
  - Routes: `/`, `/how-it-works`, `/for-families`, `/privacy`, `/early-access`, `/archive`,
    `/archive/tradition/:slug`, `/archive/voice-story`, `/archive/calendar`,
    `/archive/recipe/:slug`, `/archive/ask-aangan`.
  - Landing page with hero (floating Family Tradition Card mockup over a family photograph),
    problem section, five-questions, three-step product experience, asymmetric feature
    showcase, AI section, privacy section, emotional use-cases, final CTA + waitlist form.
  - Six clickable mockup pages (Tradition / Voice story / Calendar / Recipe / Ask Aangan / My Aangan).
  - Editorial palette via CSS variables, paper-grain SVG noise overlay, Cormorant Garamond +
    Outfit + Caveat fonts, soft float + audio-waveform animations, no harsh gradients.
  - `data-testid` on every interactive element.

## Backlog
- **P0** — (none, MVP is complete)
- **P1**
  - Pre-generate hero & feature imagery via Gemini Nano Banana for full aesthetic control
    (currently uses curated Pexels imagery).
  - Admin view at `/admin/waitlist` (gated) to review signups.
  - Voice-note recording flow that actually transcribes via Whisper.
- **P2**
  - "Invite a family member" flow with shareable invite links.
  - Multi-language UI (Hindi, Tamil, Punjabi to start).
  - A Family Calendar that imports from Google Calendar.
  - PDF export of a Family Tradition Card / Recipe Card as a printed legacy book.
