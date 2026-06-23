import { Link } from 'react-router-dom';
import { IMG } from '@/lib/images';
import { ArrowRight, MapPin, Bell, Mic, BookOpen, Calendar, MessageCircleHeart, Utensils } from 'lucide-react';

const tiles = [
  { to: '/archive/tradition/diwali',  k: 'Our Diwali Morning', kind: 'Tradition', img: IMG.diwaliLamp, by: 'Nani, Jaipur', icon: BookOpen },
  { to: '/archive/recipe/besan-ladoo', k: 'Besan Ladoo, Nani\u2019s way', kind: 'Recipe', img: IMG.cooking, by: 'Nani, Jaipur', icon: Utensils },
  { to: '/archive/voice-story', k: 'Holi at the old house', kind: 'Voice story', img: IMG.archival, by: 'Dadi, Lucknow, 1986', icon: Mic },
  { to: '/archive/calendar', k: 'Our family calendar', kind: 'Calendar', img: IMG.calendarHero, by: '14 upcoming days', icon: Calendar },
  { to: '/archive/ask-aangan', k: 'Ask Aangan', kind: 'AI assistant', img: IMG.childListening, by: 'Live, powered by Claude', icon: MessageCircleHeart },
  { to: '/archive/tradition/diwali', k: 'Our Roots', kind: 'Family tree', img: IMG.oldPhoto, by: 'Sharma, since 1908', icon: MapPin },
];

export default function MyAangan() {
  return (
    <div data-testid="my-aangan" className="relative z-10 pt-[120px] pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow"><span className="rule" />Welcome home</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-3 leading-[1]">My Aangan</h1>
            <p className="mt-4 font-hand text-2xl text-[hsl(var(--aangan-terracotta))]">The Sharma family &middot; Jaipur &middot; since 1908</p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <button data-testid="archive-add" className="inline-flex items-center gap-2 px-4 py-2.5 bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))]">
              <Mic size={14} /> Record a memory
            </button>
            <Link to="/archive/ask-aangan" data-testid="archive-ask" className="inline-flex items-center gap-2 px-4 py-2.5 border border-[hsl(var(--aangan-forest))]/30">
              <MessageCircleHeart size={14} /> Ask Aangan
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-[hsl(var(--aangan-forest))]">
          {[
            ['12', 'Traditions'],
            ['38', 'Recipes'],
            ['126', 'Voice notes'],
            ['09', 'Languages'],
          ].map(([n, l]) => (
            <div key={l} className="border-l-2 border-[hsl(var(--aangan-terracotta))]/60 pl-4">
              <p className="font-serif text-4xl md:text-5xl leading-none">{n}</p>
              <p className="mt-2 text-[12px] tracking-widest uppercase opacity-70">{l}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6">
          {tiles.map((t, i) => (
            <Link
              key={t.k}
              to={t.to}
              data-testid={`archive-tile-${i}`}
              className={`group relative block bg-[hsl(var(--aangan-sand))] overflow-hidden ${
                i === 0 ? 'md:col-span-7' : i === 1 ? 'md:col-span-5' : i === 2 ? 'md:col-span-4' : i === 3 ? 'md:col-span-4' : i === 4 ? 'md:col-span-4' : 'md:col-span-12'
              }`}
            >
              <div className="relative h-[260px] overflow-hidden">
                <img src={t.img} alt="" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--aangan-forest))]/85 via-[hsl(var(--aangan-forest))]/20 to-transparent" />
                <div className="absolute top-4 left-4 eyebrow text-[hsl(var(--aangan-ivory))]/90 flex items-center gap-2">
                  <t.icon size={12} /> {t.kind}
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-serif text-3xl text-[hsl(var(--aangan-ivory))]">{t.k}</h3>
                  <p className="mt-1 text-[13px] text-[hsl(var(--aangan-ivory))]/80">{t.by}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-10 bg-[hsl(var(--aangan-sand))] flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <p className="font-hand text-2xl text-[hsl(var(--aangan-terracotta))]">Gentle reminder</p>
            <p className="font-serif text-2xl md:text-3xl mt-1">Diwali is in 14 days. Would you like to record this year&rsquo;s memory?</p>
          </div>
          <Link to="/archive/voice-story" data-testid="archive-reminder-cta" className="inline-flex items-center gap-2 px-5 py-3 bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))] text-sm">
            <Bell size={14} /> Record now <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
