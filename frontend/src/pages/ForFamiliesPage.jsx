import { Link } from 'react-router-dom';
import { IMG } from '@/lib/images';
import { ArrowRight } from 'lucide-react';

const families = [
  { t: 'Inter-regional & interfaith families', d: 'When two cultures meet, both deserve to be remembered. Aangan keeps both alive, side by side.' },
  { t: 'Grandparents abroad', d: 'When the family lives across cities and countries, Aangan keeps grandparents close to grandchildren.' },
  { t: 'New parents', d: 'Start your child\u2019s family memory before they can speak. Add to it as they grow.' },
  { t: 'Adult children of ageing parents', d: 'For the stories you mean to ask about someday. Begin now, gently.' },
  { t: 'Diaspora families', d: 'Hold on to a home language, a home recipe, and a home way \u2014 even when home is far.' },
  { t: 'For a wedding or milestone', d: 'A legacy book of family traditions, gifted to the next generation.' },
];

export default function ForFamiliesPage() {
  return (
    <div data-testid="for-families-page" className="relative z-10 pt-[120px] pb-24">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <p className="eyebrow"><span className="rule" />For families</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] mt-3">Aangan is built<br />for <em className="not-italic italic text-[hsl(var(--aangan-terracotta))]">real families</em>.</h1>
        <p className="mt-6 text-[hsl(var(--aangan-forest))]/75 leading-relaxed text-lg max-w-2xl">
          Not idealised, not curated, not perfect. Aangan meets your family where it is &mdash; and helps you keep what
          you love about it.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {families.map((f, i) => (
            <div key={f.t} className="grid grid-cols-12 gap-4 items-start">
              <span className="col-span-2 font-serif text-4xl text-[hsl(var(--aangan-terracotta))]/80">{String(i + 1).padStart(2, '0')}</span>
              <div className="col-span-10">
                <h3 className="font-serif text-2xl text-[hsl(var(--aangan-forest))]">{f.t}</h3>
                <p className="mt-2 text-[hsl(var(--aangan-forest))]/75 leading-relaxed">{f.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <img src={IMG.table} alt="" className="w-full h-[420px] object-cover" />
          </div>
          <div className="md:col-span-5">
            <p className="font-hand text-2xl text-[hsl(var(--aangan-terracotta))]">A home for what matters.</p>
            <h2 className="font-serif text-3xl md:text-4xl mt-3 leading-snug">Start with one story. Keep it for generations.</h2>
            <Link to="/early-access" data-testid="forfam-cta" className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))] text-sm">
              Begin Your Family Archive <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
