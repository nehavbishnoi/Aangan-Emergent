import { Link } from 'react-router-dom';
import { ArrowLeft, Bell } from 'lucide-react';

const events = [
  { d: 'Nov 11', y: 'Tue', t: 'Diwali Morning',          k: 'Tradition', tag: 'In 14 days', warm: true },
  { d: 'Nov 12', y: 'Wed', t: 'Goverdhan, Nani\u2019s recipe', k: 'Recipe',    tag: 'In 15 days' },
  { d: 'Nov 25', y: 'Tue', t: 'Papa\u2019s birthday',       k: 'Birthday',  tag: 'In 28 days' },
  { d: 'Dec 02', y: 'Tue', t: 'Dada ji\u2019s remembrance day', k: 'Remember', tag: 'Quiet day' },
  { d: 'Dec 24', y: 'Wed', t: 'Christmas with the Joseph cousins', k: 'Family', tag: 'In Bangalore' },
  { d: 'Jan 14', y: 'Wed', t: 'Lohri / Pongal',           k: 'Tradition', tag: 'Two homes' },
  { d: 'Feb 01', y: 'Sun', t: 'Riya & Aarav anniversary', k: 'Anniversary', tag: '7 years' },
  { d: 'Mar 14', y: 'Sat', t: 'Holi at the old house',    k: 'Tradition', tag: 'Record this year' },
];

export default function FamilyCalendarPage() {
  return (
    <div data-testid="family-calendar-page" className="relative z-10 pt-[120px] pb-24">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <Link to="/archive" data-testid="cal-back" className="inline-flex items-center gap-2 text-sm text-[hsl(var(--aangan-forest))]/70 hover:text-[hsl(var(--aangan-forest))]">
          <ArrowLeft size={14} /> Back to My Aangan
        </Link>
        <p className="eyebrow mt-8">Our family rhythm</p>
        <h1 className="font-serif text-4xl md:text-6xl mt-3 leading-[1.05]">A calendar that knows<br />what your family celebrates.</h1>
        <p className="mt-4 font-hand text-2xl text-[hsl(var(--aangan-terracotta))]">Next twelve months &middot; the Sharma family</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <ul className="border-t border-black/10">
              {events.map((e, i) => (
                <li key={i} data-testid={`cal-event-${i}`} className="grid grid-cols-12 gap-4 items-center py-5 border-b border-black/10 hover:bg-[hsl(var(--aangan-sand))]/60 px-2 -mx-2 transition-colors">
                  <div className="col-span-2">
                    <p className="font-serif text-2xl md:text-3xl text-[hsl(var(--aangan-forest))] leading-none">{e.d}</p>
                    <p className="text-[11px] opacity-60 mt-1 tracking-widest uppercase">{e.y}</p>
                  </div>
                  <div className="col-span-7">
                    <p className="eyebrow">{e.k}</p>
                    <p className="font-serif text-xl mt-1 text-[hsl(var(--aangan-forest))]">{e.t}</p>
                  </div>
                  <div className="col-span-3 text-right">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] ${e.warm ? 'bg-[hsl(var(--aangan-marigold))]/25 text-[hsl(var(--aangan-forest))]' : 'border border-black/10 text-[hsl(var(--aangan-forest))]/70'}`}>
                      <Bell size={10} /> {e.tag}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className="md:col-span-5">
            <div className="p-7 bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))]">
              <p className="eyebrow text-[hsl(var(--aangan-marigold))]">This week</p>
              <h3 className="font-serif text-3xl mt-3 leading-snug">Diwali in 14 days. Time to prepare gently.</h3>
              <ul className="mt-5 space-y-3 text-sm opacity-90">
                <li>&middot; Soak the besan two days before</li>
                <li>&middot; Borrow Nani&rsquo;s heavy iron kadhai from Bua</li>
                <li>&middot; Light the threshold diya at 5:42 am</li>
                <li>&middot; Aarav (age 6) carries the first plate</li>
              </ul>
              <button className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 bg-[hsl(var(--aangan-marigold))] text-[hsl(var(--aangan-forest))] text-sm">
                Open Tradition Card
              </button>
            </div>
            <p className="mt-6 font-hand text-2xl text-[hsl(var(--aangan-terracotta))]">Not a notification.<br />A gentle reminder.</p>
          </aside>
        </div>
      </div>
    </div>
  );
}
