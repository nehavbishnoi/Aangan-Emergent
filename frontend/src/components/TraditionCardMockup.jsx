import { IMG } from '@/lib/images';
import { Play, MapPin, Calendar, Bell } from 'lucide-react';

/**
 * The Family Tradition Card mockup — used in hero and detail pages.
 * Variants: 'floating' (small floating card overlay) or 'full' (detail view)
 */
export default function TraditionCardMockup({ variant = 'floating' }) {
  if (variant === 'floating') {
    return (
      <div
        data-testid="tradition-card-floating"
        className="relative bg-[hsl(var(--aangan-ivory))] border border-black/5 shadow-[0_30px_80px_-30px_rgba(28,28,28,0.35)] w-[320px] md:w-[380px] soft-float"
      >
        {/* Header strip */}
        <div className="px-5 pt-5 pb-3 flex items-center justify-between">
          <span className="eyebrow">Family Tradition</span>
          <span className="text-[10px] text-[hsl(var(--aangan-forest))]/50 tracking-wider">PRIVATE</span>
        </div>

        {/* Title */}
        <div className="px-5">
          <h3 className="font-serif text-3xl md:text-[34px] leading-[1.05] text-[hsl(var(--aangan-forest))]">
            Our Diwali<br />Morning
          </h3>
          <p className="mt-2 text-[13px] text-[hsl(var(--aangan-forest))]/65">
            Recorded by <span className="font-hand text-[15px] text-[hsl(var(--aangan-terracotta))]">Nani, 2026</span>
          </p>
        </div>

        {/* Image */}
        <div className="mt-4 mx-5 h-[120px] overflow-hidden">
          <img src={IMG.diwaliLamp} alt="Diya at dawn" className="w-full h-full object-cover" />
        </div>

        {/* Audio waveform */}
        <div className="px-5 py-4 flex items-center gap-3 border-t border-black/5 mt-4">
          <button className="w-9 h-9 rounded-full bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))] flex items-center justify-center">
            <Play size={14} fill="currentColor" />
          </button>
          <div className="flex items-end gap-[3px] h-6 flex-1">
            {Array.from({ length: 32 }).map((_, i) => (
              <span
                key={i}
                className="wave-bar"
                style={{ animationDelay: `${(i % 8) * 0.08}s`, height: `${6 + ((i * 7) % 18)}px` }}
              />
            ))}
          </div>
          <span className="text-[11px] text-[hsl(var(--aangan-forest))]/55 tabular-nums">02:47</span>
        </div>

        {/* Meta tags */}
        <div className="px-5 pb-5 space-y-2.5">
          <div className="flex items-start gap-2 text-[12px] text-[hsl(var(--aangan-forest))]/75">
            <span className="eyebrow shrink-0 w-20 mt-[2px]">Why</span>
            <span>First sweet of the year, made before sunrise &mdash; for warmth, not luck.</span>
          </div>
          <div className="flex items-start gap-2 text-[12px] text-[hsl(var(--aangan-forest))]/75">
            <span className="eyebrow shrink-0 w-20 mt-[2px]">How</span>
            <span>Besan ladoo, ghee diya at the door, Nana&rsquo;s old shloka.</span>
          </div>
          <div className="flex items-center gap-2 text-[12px] text-[hsl(var(--aangan-forest))]/75">
            <span className="eyebrow shrink-0 w-20">Next</span>
            <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-[hsl(var(--aangan-marigold))]/15 text-[hsl(var(--aangan-forest))]">
              <Bell size={11} /> Reminds Nov 11, 2026
            </span>
          </div>
        </div>
      </div>
    );
  }

  // FULL detail variant
  return (
    <article data-testid="tradition-card-full" className="bg-[hsl(var(--aangan-ivory))] border border-black/5">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-7 relative">
          <img src={IMG.diwaliLamp} alt="Diya at dawn" className="w-full h-[420px] object-cover" />
          <div className="absolute top-5 left-5 eyebrow text-[hsl(var(--aangan-ivory))] bg-[hsl(var(--aangan-forest))]/70 px-3 py-1">
            Tradition &middot; Diwali
          </div>
        </div>
        <div className="md:col-span-5 p-8 md:p-10">
          <span className="eyebrow">Family Tradition</span>
          <h1 className="font-serif text-4xl md:text-5xl leading-[1] text-[hsl(var(--aangan-forest))] mt-2">
            Our Diwali Morning
          </h1>
          <p className="font-hand text-xl text-[hsl(var(--aangan-terracotta))] mt-3">
            Recorded by Nani, Jaipur, 2026
          </p>

          <div className="mt-6 flex items-center gap-3 p-3 bg-[hsl(var(--aangan-sand))]">
            <button className="w-10 h-10 rounded-full bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))] flex items-center justify-center">
              <Play size={14} fill="currentColor" />
            </button>
            <div className="flex items-end gap-[3px] h-7 flex-1">
              {Array.from({ length: 48 }).map((_, i) => (
                <span key={i} className="wave-bar" style={{ animationDelay: `${(i % 10) * 0.07}s`, height: `${6 + ((i * 11) % 22)}px` }} />
              ))}
            </div>
            <span className="text-xs text-[hsl(var(--aangan-forest))]/60 tabular-nums">02:47</span>
          </div>

          <div className="mt-7 space-y-5 text-[hsl(var(--aangan-forest))]/80 text-[15px] leading-relaxed">
            <div>
              <p className="eyebrow mb-1.5">Our story</p>
              <p>
                Before the city wakes, Nani lights the first diya by the kitchen door.
                The besan goes in the heavy iron kadhai &mdash; never the new one.
                It is not for luck, she says. It is to start the year with warmth.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-1.5">Our family version</p>
              <p>
                Ghee diya at the threshold &middot; besan ladoo made before sunrise &middot;
                Nana&rsquo;s old shloka, sung softly &middot; the youngest child carries the first plate.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-1.5">For the children</p>
              <p className="italic">
                &ldquo;We make a sweet before the sun, so the day begins kind.&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-[hsl(var(--aangan-forest))]/70">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-black/10"><MapPin size={11}/> Jaipur</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-black/10"><Calendar size={11}/> Diwali, dawn</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[hsl(var(--aangan-marigold))]/20"><Bell size={11}/> Next: Nov 11, 2026</span>
          </div>
        </div>
      </div>
    </article>
  );
}
