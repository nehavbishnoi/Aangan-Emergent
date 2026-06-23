import TraditionCardMockup from '@/components/TraditionCardMockup';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TraditionCardPage() {
  return (
    <div data-testid="tradition-page" className="relative z-10 pt-[120px] pb-24">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <Link to="/archive" data-testid="tradition-back" className="inline-flex items-center gap-2 text-sm text-[hsl(var(--aangan-forest))]/70 hover:text-[hsl(var(--aangan-forest))]">
          <ArrowLeft size={14} /> Back to My Aangan
        </Link>
        <div className="mt-8">
          <TraditionCardMockup variant="full" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: 'A 20-minute version', d: 'For a busy Friday, simplified by Aangan with Nani\u2019s blessing.' },
            { t: 'For the children', d: 'A two-line explanation a 6-year-old can understand.' },
            { t: 'Translate', d: 'Read this in Hindi, Marwari, English, or your home language.' },
          ].map((x) => (
            <div key={x.t} className="border border-black/10 p-6 hover:border-[hsl(var(--aangan-terracotta))]/60 transition-colors">
              <p className="eyebrow">Action</p>
              <h3 className="font-serif text-2xl mt-2">{x.t}</h3>
              <p className="mt-2 text-[hsl(var(--aangan-forest))]/70 text-sm leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
