import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer data-testid="site-footer" className="relative z-10 bg-[hsl(var(--aangan-sand))] border-t border-black/5">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <h3 className="font-serif text-3xl md:text-4xl text-[hsl(var(--aangan-forest))] leading-tight">
            A home for what matters.
          </h3>
          <p className="mt-4 text-[hsl(var(--aangan-forest))]/70 max-w-md leading-relaxed">
            Aangan is a private place for your family&rsquo;s living culture &mdash; the stories, recipes, and
            traditions only your family can tell.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-[hsl(var(--aangan-forest))]/75">
            <li><Link data-testid="footer-link-how" to="/how-it-works" className="hover:text-[hsl(var(--aangan-terracotta))]">How It Works</Link></li>
            <li><Link data-testid="footer-link-archive" to="/archive" className="hover:text-[hsl(var(--aangan-terracotta))]">The Family Archive</Link></li>
            <li><Link data-testid="footer-link-ask" to="/archive/ask-aangan" className="hover:text-[hsl(var(--aangan-terracotta))]">Ask Aangan</Link></li>
            <li><Link data-testid="footer-link-privacy" to="/privacy" className="hover:text-[hsl(var(--aangan-terracotta))]">Privacy</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">For Families</p>
          <p className="text-sm text-[hsl(var(--aangan-forest))]/75 leading-relaxed">
            Built for families who want culture to feel lived, loved, and passed on.
          </p>
          <Link
            to="/early-access"
            data-testid="footer-cta"
            className="inline-flex items-center gap-2 mt-5 text-sm text-[hsl(var(--aangan-forest))] border-b border-[hsl(var(--aangan-forest))]/40 pb-1 hover:border-[hsl(var(--aangan-terracotta))] hover:text-[hsl(var(--aangan-terracotta))] transition-colors"
          >
            Join the Early Access List
            <span>→</span>
          </Link>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[hsl(var(--aangan-forest))]/55">
          <p>&copy; {new Date().getFullYear()} Aangan. The living archive of your family culture.</p>
          <p className="font-hand text-base text-[hsl(var(--aangan-terracotta))]/80">Keep the voice. Keep the meaning.</p>
        </div>
      </div>
    </footer>
  );
}
