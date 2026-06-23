import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { joinWaitlist } from '@/lib/api';
import { toast } from 'sonner';
import GiftAangan from '@/components/GiftAangan';

export default function EarlyAccessPage() {
  const [form, setForm] = useState({ name: '', email: '', family_role: '', note: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error('Please share your name and email.');
      return;
    }
    setLoading(true);
    try {
      await joinWaitlist({ ...form, source: 'early-access-page' });
      setDone(true);
      toast.success('Welcome to Aangan.');
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Could not save just now.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="early-access-page" className="relative z-10 pt-[120px] pb-24">
      <div className="max-w-[1080px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <p className="eyebrow"><span className="rule" />Early access</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] mt-3">
            Begin <em className="not-italic italic text-[hsl(var(--aangan-terracotta))]">gently</em>.
          </h1>
          <p className="mt-6 text-[hsl(var(--aangan-forest))]/75 leading-relaxed text-lg max-w-md">
            Aangan opens to a small group of families first. Tell us about yours, and we&rsquo;ll write to you
            with a quiet invitation when your archive is ready.
          </p>
          <p className="mt-8 font-hand text-2xl text-[hsl(var(--aangan-terracotta))]">No spam. No noise. Just a letter.</p>
        </div>

        <div className="md:col-span-6">
          {!done ? (
            <form onSubmit={submit} data-testid="ea-form" className="bg-[hsl(var(--aangan-sand))] p-8 md:p-10">
              <div className="space-y-6">
                <label className="block">
                  <span className="eyebrow">Your name</span>
                  <input data-testid="ea-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 w-full bg-transparent border-b border-[hsl(var(--aangan-forest))]/30 focus:border-[hsl(var(--aangan-forest))] outline-none py-2 font-serif text-xl" placeholder="Riya Sharma" />
                </label>
                <label className="block">
                  <span className="eyebrow">Email</span>
                  <input data-testid="ea-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full bg-transparent border-b border-[hsl(var(--aangan-forest))]/30 focus:border-[hsl(var(--aangan-forest))] outline-none py-2 font-serif text-xl" placeholder="you@family.email" />
                </label>
                <label className="block">
                  <span className="eyebrow">Family role (optional)</span>
                  <input data-testid="ea-role" value={form.family_role} onChange={(e) => setForm({ ...form, family_role: e.target.value })} className="mt-2 w-full bg-transparent border-b border-[hsl(var(--aangan-forest))]/30 focus:border-[hsl(var(--aangan-forest))] outline-none py-2" placeholder="Daughter, parent, grandparent..." />
                </label>
                <label className="block">
                  <span className="eyebrow">A story you want to keep (optional)</span>
                  <textarea data-testid="ea-note" rows={3} value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className="mt-2 w-full bg-transparent border-b border-[hsl(var(--aangan-forest))]/30 focus:border-[hsl(var(--aangan-forest))] outline-none py-2 resize-none" placeholder="The way Nani makes besan ladoo..." />
                </label>
              </div>
              <button data-testid="ea-submit" type="submit" disabled={loading} className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))] text-sm disabled:opacity-50">
                {loading ? 'Saving...' : 'Join the Early Access List'} <ArrowRight size={14} />
              </button>
              <p className="mt-4 flex items-center gap-2 text-[12px] text-[hsl(var(--aangan-forest))]/60">
                <ShieldCheck size={12} className="text-[hsl(var(--aangan-sage))]" /> Your details stay private.
              </p>
            </form>
          ) : (
            <div data-testid="ea-success" className="bg-[hsl(var(--aangan-sand))] p-8 md:p-10">
              <p className="font-hand text-3xl text-[hsl(var(--aangan-terracotta))]">Thank you.</p>
              <h2 className="font-serif text-3xl mt-2">A quiet beginning.</h2>
              <p className="mt-4 text-[hsl(var(--aangan-forest))]/75 leading-relaxed">
                You&rsquo;re on the list. We&rsquo;ll write to you when your family&rsquo;s Aangan is ready.
              </p>
              <Link to="/archive" data-testid="ea-explore" className="mt-6 inline-flex items-center gap-2 text-[hsl(var(--aangan-forest))] border-b border-[hsl(var(--aangan-forest))]/40 pb-0.5 hover:text-[hsl(var(--aangan-terracotta))]">
                Explore a sample archive <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="mt-24">
        <GiftAangan />
      </div>
    </div>
  );
}
