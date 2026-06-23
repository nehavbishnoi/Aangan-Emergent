import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Users, EyeOff, Download, UserCheck } from 'lucide-react';
import { IMG } from '@/lib/images';

const points = [
  { i: Lock, t: 'Private by default', d: 'Every story, photo, and recipe is invisible to the world by default.' },
  { i: Users, t: 'Invite-only family', d: 'Your Aangan is shared only with the family you choose, one person at a time.' },
  { i: EyeOff, t: 'No public feed', d: 'There is no algorithm, no scroll, no audience. Just your family.' },
  { i: ShieldCheck, t: 'No ads. Never sold.', d: 'We do not show you ads, and we do not sell family data \u2014 not now, not ever.' },
  { i: Download, t: 'Yours to take', d: 'Full export and deletion, anytime, no questions asked.' },
  { i: UserCheck, t: 'Attributed, always', d: 'Stories are always attributed to the person who shared them. That is the dignity.' },
];

export default function PrivacyPage() {
  return (
    <div data-testid="privacy-page" className="relative z-10 pt-[120px] pb-24">
      <div className="max-w-[1080px] mx-auto px-6 md:px-10">
        <p className="eyebrow"><span className="rule" />A different kind of platform</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] mt-3">Your family archive<br />is not content. <em className="not-italic italic text-[hsl(var(--aangan-terracotta))]">It is yours.</em></h1>
        <p className="mt-6 max-w-2xl text-[hsl(var(--aangan-forest))]/75 leading-relaxed text-lg">
          The internet rewards what is loud and shareable. A family&rsquo;s culture is quiet and earned. Aangan is built
          for the second kind. Here is what that means, in plain language.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          {points.map((p) => (
            <div key={p.t} className="flex items-start gap-5">
              <div className="w-11 h-11 border border-[hsl(var(--aangan-sage))]/40 text-[hsl(var(--aangan-sage))] flex items-center justify-center shrink-0">
                <p.i size={18} />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[hsl(var(--aangan-forest))]">{p.t}</h3>
                <p className="mt-1.5 text-[hsl(var(--aangan-forest))]/75 leading-relaxed text-[15px]">{p.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))]">
          <p className="font-hand text-2xl text-[hsl(var(--aangan-marigold))]">A small promise</p>
          <p className="mt-3 font-serif text-3xl md:text-4xl leading-snug max-w-3xl">
            Your family stories will never be training data for someone else&rsquo;s model.
            They will not be sold. They will not be public. They are yours.
          </p>
          <Link to="/early-access" data-testid="privacy-cta" className="mt-7 inline-flex items-center gap-2 px-5 py-3 bg-[hsl(var(--aangan-marigold))] text-[hsl(var(--aangan-forest))] text-sm">
            Begin Your Family Archive
          </Link>
        </div>

        <div className="mt-12 relative">
          <img src={IMG.grandparents} alt="" className="w-full h-[380px] object-cover" />
        </div>
      </div>
    </div>
  );
}
