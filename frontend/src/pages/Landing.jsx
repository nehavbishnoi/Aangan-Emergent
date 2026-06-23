import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mic, Sparkles, ShieldCheck, Volume2, Languages, Image as ImageIcon, BookHeart, BellRing } from 'lucide-react';
import { IMG } from '@/lib/images';
import { joinWaitlist } from '@/lib/api';
import { toast } from 'sonner';
import TraditionCardMockup from '@/components/TraditionCardMockup';

const FiveQ = [
  { n: '01', t: 'What do we do?', d: 'Traditions, celebrations, recipes, customs, and family rituals.' },
  { n: '02', t: 'Why do we do it?', d: 'The story, meaning, symbolism, and personal family connection.' },
  { n: '03', t: 'How do we do it today?', d: 'Practical, simple steps that fit modern family life.' },
  { n: '04', t: 'When do we do it?', d: 'A personalised family rhythm calendar with gentle reminders.' },
  { n: '05', t: 'Who taught us this?', d: 'Preserve the original voice, video, photo, handwriting, and memory.' },
];

const Features = [
  { id: 'roots',     k: 'Our Roots',      d: 'Family tree, origin places, languages, migration stories, and family values.', img: IMG.archival, to: '/archive' },
  { id: 'tradition', k: 'Our Traditions', d: 'Living cards for traditions, celebrations, rituals, and meaningful habits.', img: IMG.celebration, to: '/archive/tradition/diwali' },
  { id: 'table',     k: 'Our Table',      d: 'Family recipes, cooking videos, handwritten notes, and stories behind dishes.', img: IMG.cooking, to: '/archive/recipe/besan-ladoo' },
  { id: 'calendar',  k: 'Our Calendar',   d: 'A family calendar for festivals, birthdays, anniversaries, and remembrance days.', img: IMG.calendarHero, to: '/archive/calendar' },
  { id: 'ask',       k: 'Ask Aangan',     d: 'A private AI assistant that answers from your family\u2019s archive first.', img: IMG.childListening, to: '/archive/ask-aangan' },
];

export default function Landing() {
  return (
    <div data-testid="landing-page" className="relative z-10">
      <Hero />
      <Problem />
      <FiveQuestions />
      <ProductExperience />
      <FeatureShowcase />
      <AISection />
      <Privacy />
      <UseCases />
      <FinalCTA />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section data-testid="hero" className="relative pt-[120px] pb-24 md:pt-[160px] md:pb-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 fade-up">
          <p className="eyebrow"><span className="rule" />The living archive of your family culture</p>
          <h1 className="font-serif text-[44px] md:text-6xl lg:text-[72px] leading-[1.02] text-[hsl(var(--aangan-forest))] mt-5 tracking-tight">
            The stories that made<br />
            your family should not<br />
            disappear in a <em className="text-[hsl(var(--aangan-terracotta))] not-italic font-serif italic">WhatsApp chat</em>.
          </h1>
          <p className="mt-7 max-w-xl text-lg text-[hsl(var(--aangan-forest))]/75 leading-relaxed">
            Aangan helps you preserve your family&rsquo;s traditions, recipes, memories, languages, and values
            &mdash; then makes them easy for the next generation to understand and live.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/early-access"
              data-testid="hero-cta-primary"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))] text-sm tracking-wide hover:bg-[hsl(var(--aangan-charcoal))] transition-colors duration-300"
            >
              Begin Your Family Archive <ArrowRight size={16} />
            </Link>
            <Link
              to="/how-it-works"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[hsl(var(--aangan-forest))]/30 text-[hsl(var(--aangan-forest))] text-sm tracking-wide hover:border-[hsl(var(--aangan-forest))] transition-colors duration-300"
            >
              See How Aangan Works
            </Link>
          </div>

          <p className="mt-6 flex items-center gap-2 text-[12px] text-[hsl(var(--aangan-forest))]/60">
            <ShieldCheck size={13} className="text-[hsl(var(--aangan-sage))]" />
            Private by default. Your family stories belong only to your family.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative">
            <div className="absolute -inset-6 bg-[hsl(var(--aangan-sand))] -z-10 translate-x-6 translate-y-6" aria-hidden />
            <img
              src={IMG.heroFamily}
              alt="A family together"
              className="w-full h-[520px] object-cover grayscale-[10%]"
            />
            <div className="absolute -bottom-10 -left-10 hidden md:block">
              <TraditionCardMockup />
            </div>
          </div>
          <div className="md:hidden mt-10 flex justify-center">
            <TraditionCardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  const fragments = [
    'Voice notes buried in WhatsApp',
    'Recipes written in old notebooks',
    'Stories only grandparents remember',
    'Photos without context',
    'Festival traditions repeated but not understood',
    'Children who know the name of a celebration, but not its meaning',
  ];
  return (
    <section data-testid="problem-section" className="relative py-24 md:py-32 bg-[hsl(var(--aangan-sand))]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="eyebrow">The quiet problem</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[hsl(var(--aangan-forest))] mt-4">
            Culture is often passed down in fragments.
          </h2>
          <p className="mt-6 text-[hsl(var(--aangan-forest))]/70 leading-relaxed max-w-md">
            What used to be passed at the kitchen table now lives in a hundred small places &mdash;
            and slowly, quietly, gets lost.
          </p>
        </div>
        <div className="md:col-span-7">
          <ul className="space-y-0">
            {fragments.map((f, i) => (
              <li
                key={f}
                data-testid={`fragment-${i}`}
                className="flex items-baseline gap-5 py-5 border-t border-[hsl(var(--aangan-forest))]/10 last:border-b"
              >
                <span className="font-serif text-2xl text-[hsl(var(--aangan-terracotta))]">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-lg text-[hsl(var(--aangan-forest))]">{f}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 font-serif text-2xl md:text-3xl text-[hsl(var(--aangan-forest))] italic max-w-xl">
            Aangan brings these fragments together into one living family archive.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FIVE QUESTIONS ---------------- */
function FiveQuestions() {
  return (
    <section data-testid="five-questions" className="relative py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Five questions, one archive</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[hsl(var(--aangan-forest))] mt-4">
            Everything your family needs to remember &mdash;<br />in one place.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
          {FiveQ.map((q) => (
            <div key={q.n} data-testid={`question-${q.n}`} className="group">
              <p className="font-serif text-5xl text-[hsl(var(--aangan-terracotta))]/80">{q.n}</p>
              <div className="mt-3 h-px w-10 bg-[hsl(var(--aangan-forest))]/40" />
              <h3 className="font-serif text-2xl text-[hsl(var(--aangan-forest))] mt-5 leading-snug">{q.t}</h3>
              <p className="mt-3 text-[hsl(var(--aangan-forest))]/70 leading-relaxed text-[15px]">{q.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRODUCT EXPERIENCE ---------------- */
function ProductExperience() {
  const extracted = [
    ['Festival', 'Diwali'],
    ['Person', 'Nani'],
    ['Place', 'Jaipur'],
    ['Recipe', 'Besan Ladoo'],
    ['Tradition', 'First sweet made before sunrise'],
    ['Language', 'Hindi'],
  ];
  return (
    <section data-testid="product-experience" className="relative py-24 md:py-32 bg-[hsl(var(--aangan-sand))]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">How it happens</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[hsl(var(--aangan-forest))] mt-4">
            From a voice note to a tradition<br />your children can carry forward.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {/* Step 1 */}
          <div data-testid="step-capture" className="bg-[hsl(var(--aangan-ivory))] border border-black/5 p-7">
            <p className="eyebrow text-[hsl(var(--aangan-terracotta))]">Step 01 &middot; Capture</p>
            <h3 className="font-serif text-3xl mt-3 text-[hsl(var(--aangan-forest))]">A voice. A story. A photo.</h3>
            <p className="mt-3 text-[hsl(var(--aangan-forest))]/70 text-[15px] leading-relaxed">
              A family member records what they remember, in their own words.
            </p>
            <div className="mt-6 p-5 bg-[hsl(var(--aangan-sand))]">
              <p className="font-hand text-xl text-[hsl(var(--aangan-terracotta))]">Prompt</p>
              <p className="mt-1 font-serif italic text-xl text-[hsl(var(--aangan-forest))] leading-snug">
                &ldquo;What did Diwali feel like in your childhood home?&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <button className="w-11 h-11 rounded-full bg-[hsl(var(--aangan-terracotta))] text-white flex items-center justify-center">
                  <Mic size={16} />
                </button>
                <div className="flex items-end gap-[3px] h-6 flex-1">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <span key={i} className="wave-bar" style={{ animationDelay: `${(i % 7) * 0.09}s`, height: `${6 + ((i * 5) % 20)}px` }} />
                  ))}
                </div>
                <span className="text-xs text-[hsl(var(--aangan-forest))]/60 tabular-nums">01:12</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div data-testid="step-understand" className="bg-[hsl(var(--aangan-ivory))] border border-black/5 p-7">
            <p className="eyebrow text-[hsl(var(--aangan-terracotta))]">Step 02 &middot; Aangan understands</p>
            <h3 className="font-serif text-3xl mt-3 text-[hsl(var(--aangan-forest))]">It listens, gently.</h3>
            <p className="mt-3 text-[hsl(var(--aangan-forest))]/70 text-[15px] leading-relaxed">
              AI transcribes, translates, and organises &mdash; while keeping the original voice intact.
            </p>
            <ul className="mt-6 space-y-2">
              {extracted.map(([k, v]) => (
                <li key={k} className="flex items-baseline gap-3 text-[14px]">
                  <span className="eyebrow w-20 shrink-0">{k}</span>
                  <span className="text-[hsl(var(--aangan-forest))] font-serif text-lg">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step 3 */}
          <div data-testid="step-living" className="bg-[hsl(var(--aangan-ivory))] border border-black/5 p-7">
            <p className="eyebrow text-[hsl(var(--aangan-terracotta))]">Step 03 &middot; Part of family life</p>
            <h3 className="font-serif text-3xl mt-3 text-[hsl(var(--aangan-forest))]">A card you can hand down.</h3>
            <p className="mt-3 text-[hsl(var(--aangan-forest))]/70 text-[15px] leading-relaxed">
              A Family Tradition Card with your story, your way &mdash; ready for next year, and the year after.
            </p>
            <div className="mt-6 -mx-2 scale-[0.85] origin-top-left">
              <TraditionCardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURE SHOWCASE ---------------- */
function FeatureShowcase() {
  return (
    <section data-testid="feature-showcase" className="relative py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">A private home for everything</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[hsl(var(--aangan-forest))] mt-4">
            A private home for everything<br />that makes your family yours.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {Features.map((f, i) => (
            <Link
              to={f.to}
              key={f.id}
              data-testid={`feature-${f.id}`}
              className={`group block relative overflow-hidden bg-[hsl(var(--aangan-sand))] ${
                i === 0 ? 'md:col-span-7' : i === 1 ? 'md:col-span-5' : i === 2 ? 'md:col-span-5' : i === 3 ? 'md:col-span-4' : 'md:col-span-3'
              }`}
            >
              <div className="relative h-[280px] md:h-[340px] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.k}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--aangan-forest))]/85 via-[hsl(var(--aangan-forest))]/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="eyebrow text-[hsl(var(--aangan-ivory))]/80">Feature</p>
                <h3 className="font-serif text-3xl text-[hsl(var(--aangan-ivory))] mt-1.5">{f.k}</h3>
                <p className="mt-2 text-[14px] text-[hsl(var(--aangan-ivory))]/85 max-w-md leading-relaxed">{f.d}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] text-[hsl(var(--aangan-ivory))] border-b border-[hsl(var(--aangan-ivory))]/40 pb-0.5 group-hover:border-[hsl(var(--aangan-marigold))]">
                  Open <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 max-w-xl">
          <p className="font-hand text-2xl text-[hsl(var(--aangan-terracotta))]">Ask Aangan, for example</p>
          <ul className="mt-3 space-y-1.5 text-[15px] text-[hsl(var(--aangan-forest))]/80 italic">
            <li>&ldquo;How did Dadi make Holi special?&rdquo;</li>
            <li>&ldquo;What do we usually do before Diwali?&rdquo;</li>
            <li>&ldquo;Explain this tradition to my child in simple English.&rdquo;</li>
            <li>&ldquo;Create a 20-minute version of our family tradition for this Friday.&rdquo;</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI SECTION ---------------- */
function AISection() {
  const caps = [
    { icon: Volume2,   t: 'Voice-to-story transcription' },
    { icon: Languages, t: 'Translation across languages' },
    { icon: ImageIcon, t: 'Photo and memory organisation' },
    { icon: BookHeart, t: 'Family tradition cards' },
    { icon: BellRing,  t: 'Gentle annual reminders' },
    { icon: Sparkles,  t: 'Child-friendly explanations' },
  ];
  return (
    <section data-testid="ai-section" className="relative py-24 md:py-32 bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <p className="eyebrow text-[hsl(var(--aangan-marigold))]">The Aangan AI</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mt-4">
            AI that listens to your family<br />&mdash; not just the internet.
          </h2>
          <p className="mt-7 text-[hsl(var(--aangan-ivory))]/80 leading-relaxed text-lg max-w-lg">
            Aangan turns voice notes, photographs, handwritten recipes, and family conversations
            into a structured archive your family can revisit for generations.
          </p>
          <p className="mt-8 font-serif italic text-xl text-[hsl(var(--aangan-marigold))] leading-snug max-w-lg">
            Aangan never decides what is &ldquo;right&rdquo; for your family.<br />It preserves your family&rsquo;s way.
          </p>
          <Link
            to="/archive/ask-aangan"
            data-testid="ai-section-cta"
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 border border-[hsl(var(--aangan-ivory))]/40 text-[hsl(var(--aangan-ivory))] text-sm hover:bg-[hsl(var(--aangan-ivory))]/10 transition-colors"
          >
            Try a live conversation with Aangan <ArrowRight size={14} />
          </Link>
        </div>
        <div className="md:col-span-6 grid grid-cols-2 gap-px bg-[hsl(var(--aangan-ivory))]/10">
          {caps.map((c) => (
            <div key={c.t} className="p-6 md:p-7 bg-[hsl(var(--aangan-forest))]">
              <c.icon size={18} className="text-[hsl(var(--aangan-marigold))]" />
              <p className="mt-4 font-serif text-xl leading-snug">{c.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRIVACY ---------------- */
function Privacy() {
  const items = [
    'Private by default',
    'Invite-only family spaces',
    'No public feed',
    'No advertising',
    'No sale of family data',
    'Full control over sharing, export, and deletion',
    'Family stories are always attributed to the person who shared them',
  ];
  return (
    <section data-testid="privacy" className="relative py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <p className="eyebrow"><span className="rule" />A different kind of platform</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[hsl(var(--aangan-forest))] mt-4">
            Your family archive<br />is not content.<br /><em className="not-italic font-serif italic text-[hsl(var(--aangan-terracotta))]">It is yours.</em>
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-3">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
            {items.map((t) => (
              <li key={t} className="flex items-start gap-3 text-[15px] text-[hsl(var(--aangan-forest))]/85 leading-relaxed">
                <ShieldCheck size={16} className="text-[hsl(var(--aangan-sage))] mt-1 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- USE CASES ---------------- */
function UseCases() {
  const cases = [
    'Record a grandmother\u2019s recipes in her own voice.',
    'Help children understand why their family celebrates a tradition.',
    'Preserve two cultures in an inter-regional or interfaith family.',
    'Create a family legacy book for a wedding or milestone birthday.',
    'Keep grandparents close to grandchildren living abroad.',
    'Make annual traditions simple enough to continue.',
  ];
  return (
    <section data-testid="use-cases" className="relative py-24 md:py-32 bg-[hsl(var(--aangan-sand))]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="relative">
            <img src={IMG.cooking} alt="" className="w-full h-[420px] object-cover" />
            <div className="absolute -bottom-5 -right-5 hidden md:block bg-[hsl(var(--aangan-ivory))] p-4 max-w-[240px] shadow-xl">
              <p className="font-hand text-2xl text-[hsl(var(--aangan-terracotta))]">For the stories</p>
              <p className="text-sm text-[hsl(var(--aangan-forest))]/75">you mean to ask about someday.</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="eyebrow">For real families</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[hsl(var(--aangan-forest))] mt-4">
            For the stories you mean<br />to ask about someday.
          </h2>
          <ul className="mt-10 space-y-0">
            {cases.map((c, i) => (
              <li key={c} className="flex items-baseline gap-5 py-5 border-t border-[hsl(var(--aangan-forest))]/10 last:border-b">
                <span className="font-serif text-lg text-[hsl(var(--aangan-terracotta))]">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[hsl(var(--aangan-forest))] text-[17px]">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA + WAITLIST ---------------- */
function FinalCTA() {
  const [form, setForm] = useState({ name: '', email: '', family_role: '', note: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error('Please share your name and email.');
      return;
    }
    setLoading(true);
    try {
      await joinWaitlist({ ...form, source: 'landing-final-cta' });
      setDone(true);
      toast.success('Welcome to Aangan. A quiet beginning.');
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Could not save just now. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section data-testid="final-cta" className="relative py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 text-center">
        <p className="eyebrow">Begin gently</p>
        <h2 className="font-serif text-4xl md:text-6xl lg:text-[72px] leading-[1.02] text-[hsl(var(--aangan-forest))] mt-5 tracking-tight">
          Start with one story.<br />
          <em className="not-italic font-serif italic text-[hsl(var(--aangan-terracotta))]">Keep it for generations.</em>
        </h2>
        <p className="mt-7 text-lg text-[hsl(var(--aangan-forest))]/75 max-w-2xl mx-auto leading-relaxed">
          Create your private family Aangan and begin preserving what only your family knows.
        </p>

        {!done ? (
          <form
            onSubmit={submit}
            data-testid="waitlist-form"
            className="mt-12 max-w-2xl mx-auto bg-[hsl(var(--aangan-sand))] p-7 md:p-10 text-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="eyebrow">Your name</span>
                <input
                  data-testid="waitlist-input-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-[hsl(var(--aangan-forest))]/30 focus:border-[hsl(var(--aangan-forest))] outline-none py-2 font-serif text-xl text-[hsl(var(--aangan-forest))]"
                  placeholder="Riya Sharma"
                />
              </label>
              <label className="block">
                <span className="eyebrow">Email</span>
                <input
                  data-testid="waitlist-input-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-[hsl(var(--aangan-forest))]/30 focus:border-[hsl(var(--aangan-forest))] outline-none py-2 font-serif text-xl text-[hsl(var(--aangan-forest))]"
                  placeholder="you@family.email"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="eyebrow">Your role in the family <span className="opacity-50">(optional)</span></span>
                <input
                  data-testid="waitlist-input-role"
                  value={form.family_role}
                  onChange={(e) => setForm({ ...form, family_role: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-[hsl(var(--aangan-forest))]/30 focus:border-[hsl(var(--aangan-forest))] outline-none py-2 text-[hsl(var(--aangan-forest))]"
                  placeholder="Daughter, son, parent, grandparent..."
                />
              </label>
              <label className="block md:col-span-2">
                <span className="eyebrow">One story you want to keep <span className="opacity-50">(optional)</span></span>
                <textarea
                  data-testid="waitlist-input-note"
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  rows={2}
                  className="mt-2 w-full bg-transparent border-b border-[hsl(var(--aangan-forest))]/30 focus:border-[hsl(var(--aangan-forest))] outline-none py-2 text-[hsl(var(--aangan-forest))] resize-none"
                  placeholder="The way Dadi makes besan ladoo..."
                />
              </label>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                data-testid="waitlist-submit"
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))] text-sm tracking-wide hover:bg-[hsl(var(--aangan-charcoal))] transition-colors disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Begin Your Family Archive'} <ArrowRight size={15} />
              </button>
              <Link
                to="/early-access"
                data-testid="waitlist-secondary"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[hsl(var(--aangan-forest))]/30 text-[hsl(var(--aangan-forest))] text-sm hover:border-[hsl(var(--aangan-forest))]"
              >
                Join the Early Access List
              </Link>
            </div>
            <p className="mt-5 text-[12px] text-[hsl(var(--aangan-forest))]/60 flex items-center gap-2">
              <ShieldCheck size={13} className="text-[hsl(var(--aangan-sage))]" />
              Built for families who want culture to feel lived, loved, and passed on.
            </p>
          </form>
        ) : (
          <div
            data-testid="waitlist-success"
            className="mt-12 max-w-2xl mx-auto bg-[hsl(var(--aangan-sand))] p-10"
          >
            <p className="font-hand text-3xl text-[hsl(var(--aangan-terracotta))]">Thank you.</p>
            <h3 className="font-serif text-3xl mt-3 text-[hsl(var(--aangan-forest))]">A quiet beginning.</h3>
            <p className="mt-4 text-[hsl(var(--aangan-forest))]/75 leading-relaxed">
              You&rsquo;re on the list, {form.name.split(' ')[0]}. We&rsquo;ll write to you with a small invitation
              when your family&rsquo;s Aangan is ready &mdash; gently, never often.
            </p>
            <Link
              to="/archive"
              data-testid="waitlist-explore"
              className="mt-6 inline-flex items-center gap-2 text-[hsl(var(--aangan-forest))] border-b border-[hsl(var(--aangan-forest))]/40 pb-0.5 hover:border-[hsl(var(--aangan-terracotta))] hover:text-[hsl(var(--aangan-terracotta))]"
            >
              Explore a sample family archive <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
