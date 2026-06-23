import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Mic } from 'lucide-react';
import { IMG } from '@/lib/images';

export default function RecipeCardPage() {
  const ingredients = [
    ['1 cup',  'Besan (fine, sifted twice)'],
    ['\u00be cup', 'Pure ghee (Nani uses her own)'],
    ['\u00be cup', 'Bura sugar (boora), warmed slightly'],
    ['2 tbsp', 'Chopped almonds, raw (never roasted)'],
    ['Pinch',  'Elaichi powder, fresh'],
  ];
  const steps = [
    'Warm the kadhai on the lowest flame. Always cast iron, never new.',
    'Add ghee. Wait until it smells like Sunday afternoons.',
    'Stir the besan in slow, even circles. Twenty minutes. Do not rush. Nani says: \u201Cthe smell will tell you.\u201D',
    'When it turns the colour of evening sunlight, take it off the heat.',
    'Let it cool. Add boora, almonds, elaichi. Shape with palms warmed by the kadhai.',
  ];
  return (
    <div data-testid="recipe-page" className="relative z-10 pt-[120px] pb-24">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <Link to="/archive" data-testid="recipe-back" className="inline-flex items-center gap-2 text-sm text-[hsl(var(--aangan-forest))]/70 hover:text-[hsl(var(--aangan-forest))]">
          <ArrowLeft size={14} /> Back to My Aangan
        </Link>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="eyebrow">Our Table &middot; Recipe</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.02] mt-3">Besan Ladoo,<br /><em className="not-italic italic text-[hsl(var(--aangan-terracotta))]">Nani&rsquo;s way</em></h1>
            <p className="mt-4 font-hand text-2xl text-[hsl(var(--aangan-terracotta))]">Jaipur &middot; first sweet of Diwali morning</p>

            <p className="mt-7 text-[hsl(var(--aangan-forest))]/80 leading-relaxed max-w-xl">
              Nani learned this from her own mother, in a small kitchen above the silver bazaar.
              She refuses to weigh anything; she goes by the smell of ghee. We&rsquo;ve written it down anyway &mdash;
              for the days she isn&rsquo;t there to tell us.
            </p>

            <div className="mt-8 flex items-center gap-3 p-4 bg-[hsl(var(--aangan-sand))]">
              <button className="w-11 h-11 rounded-full bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))] flex items-center justify-center">
                <Play size={14} fill="currentColor" />
              </button>
              <div className="flex-1">
                <p className="text-sm text-[hsl(var(--aangan-forest))]">Nani teaching, in her own voice</p>
                <p className="text-xs opacity-60 mt-0.5">Hindi &middot; 06:18</p>
              </div>
              <button data-testid="recipe-cook-along" className="px-3 py-2 border border-[hsl(var(--aangan-forest))]/30 text-xs flex items-center gap-1">
                <Mic size={12}/> Cook-along
              </button>
            </div>

            <div className="mt-10">
              <p className="eyebrow">The way</p>
              <ol className="mt-4 space-y-5">
                {steps.map((s, i) => (
                  <li key={i} className="grid grid-cols-12 gap-4 items-baseline">
                    <span className="col-span-1 font-serif text-3xl text-[hsl(var(--aangan-terracotta))]">{String(i + 1).padStart(2, '0')}</span>
                    <p className="col-span-11 text-[16px] text-[hsl(var(--aangan-forest))]/85 leading-relaxed">{s}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="bg-[hsl(var(--aangan-sand))] p-5">
              <img src={IMG.notebook} alt="Handwritten recipe" className="w-full h-[300px] object-cover" />
              <p className="font-hand text-xl text-[hsl(var(--aangan-terracotta))] mt-4 leading-snug">
                &ldquo;Bahut zyada mat hilaao. Besan ko apni khushboo ka time do.&rdquo;
                <span className="block text-sm opacity-80 mt-1 not-italic">&mdash; Nani, in the margin of her notebook</span>
              </p>
            </div>

            <div className="mt-6 border border-black/10 p-6">
              <p className="eyebrow">Ingredients</p>
              <ul className="mt-4 space-y-3">
                {ingredients.map(([q, n]) => (
                  <li key={n} className="grid grid-cols-12 gap-3 text-[15px]">
                    <span className="col-span-3 font-serif text-lg text-[hsl(var(--aangan-forest))]">{q}</span>
                    <span className="col-span-9 text-[hsl(var(--aangan-forest))]/80">{n}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-6 bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))]">
              <p className="eyebrow text-[hsl(var(--aangan-marigold))]">Why we make this</p>
              <p className="mt-3 font-serif text-xl leading-snug">
                Because the first sweet of the year is for warmth, not luck. Because Nani learned it from her mother.
                Because Aarav, age six, should know.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
