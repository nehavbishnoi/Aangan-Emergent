import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Quote, Languages } from 'lucide-react';
import { IMG } from '@/lib/images';

export default function VoiceStoryPage() {
  return (
    <div data-testid="voice-story-page" className="relative z-10 pt-[120px] pb-24">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <Link to="/archive" data-testid="voice-back" className="inline-flex items-center gap-2 text-sm text-[hsl(var(--aangan-forest))]/70 hover:text-[hsl(var(--aangan-forest))]">
          <ArrowLeft size={14} /> Back to My Aangan
        </Link>

        <p className="eyebrow mt-8">Voice note &middot; transformed</p>
        <h1 className="font-serif text-4xl md:text-6xl mt-3 leading-[1.05]">Holi at the old house</h1>
        <p className="mt-3 font-hand text-2xl text-[hsl(var(--aangan-terracotta))]">Recorded by Dadi &middot; Lucknow, 1986 (re-told 2024)</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="relative">
              <img src={IMG.archival} alt="" className="w-full h-[440px] object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-[hsl(var(--aangan-forest))]/85 text-[hsl(var(--aangan-ivory))] p-5">
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-[hsl(var(--aangan-marigold))] text-[hsl(var(--aangan-forest))] flex items-center justify-center">
                    <Play size={14} fill="currentColor" />
                  </button>
                  <div className="flex items-end gap-[3px] h-6 flex-1">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <span key={i} className="wave-bar" style={{ animationDelay: `${(i % 9) * 0.07}s`, height: `${6 + ((i * 9) % 22)}px` }} />
                    ))}
                  </div>
                  <span className="text-xs opacity-80 tabular-nums">04:12</span>
                </div>
                <p className="mt-3 text-xs opacity-70">Original audio &middot; Hindi &middot; Hindi to English transcription below</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-8">
            <div>
              <p className="eyebrow flex items-center gap-2"><Quote size={12}/> What Dadi said</p>
              <p className="mt-3 font-serif text-2xl leading-snug italic text-[hsl(var(--aangan-forest))]">
                &ldquo;Holi nahi thi, ek mausam tha. Aangan mein paani ke chhinte, aur dada ji ki haveli ki seedhi
                jahan se hum sab gulaal phenkte the &mdash; bas wahi yaad hai.&rdquo;
              </p>
            </div>
            <div>
              <p className="eyebrow flex items-center gap-2"><Languages size={12}/> Aangan&rsquo;s translation</p>
              <p className="mt-3 text-[hsl(var(--aangan-forest))]/80 leading-relaxed text-[16px]">
                &ldquo;Holi wasn&rsquo;t a festival &mdash; it was a season. Water splashed across the courtyard.
                The old staircase of Dadaji&rsquo;s haveli was where we all stood, throwing colour. That&rsquo;s what I remember.&rdquo;
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Festival', 'Holi'],
                ['Person', 'Dadi (Lalita)'],
                ['Place', 'Lucknow, old haveli'],
                ['Year', '1986'],
                ['Language', 'Hindi'],
                ['Mood', 'Tender, joyful'],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-black/10 pt-3">
                  <p className="eyebrow text-[10px]">{k}</p>
                  <p className="font-serif text-xl mt-1">{v}</p>
                </div>
              ))}
            </div>
            <div className="p-5 bg-[hsl(var(--aangan-sand))]">
              <p className="eyebrow">Aangan suggests</p>
              <p className="mt-2 text-[hsl(var(--aangan-forest))]/80 leading-relaxed">
                Would you like to turn this into a Family Tradition Card? We&rsquo;ll keep Dadi&rsquo;s voice as the source
                and gently structure the rest.
              </p>
              <button data-testid="voice-create-card" className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))] text-sm">
                Create Tradition Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
