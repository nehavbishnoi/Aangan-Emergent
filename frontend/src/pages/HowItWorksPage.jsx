import { Link } from 'react-router-dom';
import { IMG } from '@/lib/images';
import { ArrowRight, Mic, Sparkles, BookHeart } from 'lucide-react';

export default function HowItWorksPage() {
  const steps = [
    { n: '01', icon: Mic, t: 'Capture', d: 'Record a voice note, photograph a handwritten recipe, or write a short story. Use the language your family uses.' },
    { n: '02', icon: Sparkles, t: 'Aangan understands', d: 'AI transcribes, translates, and quietly organises the memory \u2014 preserving the original voice as the source.' },
    { n: '03', icon: BookHeart, t: 'A card you can hand down', d: 'A Family Tradition Card is created. Your story, your way. Ready for next year, and the year after.' },
  ];
  return (
    <div data-testid="how-page" className="relative z-10 pt-[120px] pb-24">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <p className="eyebrow"><span className="rule" />How Aangan works</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] mt-3">From a voice note<br />to a tradition you can <em className="not-italic italic text-[hsl(var(--aangan-terracotta))]">pass down</em>.</h1>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-[hsl(var(--aangan-forest))]/15 pt-6">
              <div className="flex items-baseline justify-between">
                <p className="font-serif text-5xl text-[hsl(var(--aangan-terracotta))]/80">{s.n}</p>
                <s.icon size={22} className="text-[hsl(var(--aangan-sage))]" />
              </div>
              <h3 className="font-serif text-3xl mt-5 leading-snug">{s.t}</h3>
              <p className="mt-3 text-[hsl(var(--aangan-forest))]/75 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <img src={IMG.handsRecipe} alt="" className="w-full h-[460px] object-cover" />
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow">A quiet way of using AI</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mt-3">Aangan never decides<br />what is &ldquo;right&rdquo; for your family.</h2>
            <p className="mt-6 text-[hsl(var(--aangan-forest))]/75 leading-relaxed text-lg">
              It listens, gently. It organises. It reminds. But the voice, the story, the way &mdash; those belong to
              the person who shared them.
            </p>
            <Link to="/archive/ask-aangan" data-testid="how-ask-cta" className="mt-7 inline-flex items-center gap-2 px-5 py-3 bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))] text-sm">
              Try a live conversation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
