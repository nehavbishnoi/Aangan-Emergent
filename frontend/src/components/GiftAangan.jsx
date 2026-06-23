import { useState } from 'react';
import { Copy, Mail, Check, Send } from 'lucide-react';
import { toast } from 'sonner';

const TEMPLATES = [
  {
    id: 'wa',
    label: 'WhatsApp',
    title: 'A short message to send to a parent',
    body: `Hi Ma / Papa,

I just started something called Aangan — a private place to keep our family's stories, recipes and traditions. The voice notes, the way you make besan ladoo, the things only you remember.

Will you record one story for me? Even two minutes is enough.

It is private. Only our family will ever see it.

aangan.family`,
  },
  {
    id: 'sibling',
    label: 'Sibling / cousin',
    title: 'For a sibling — to start it together',
    body: `Hey,

I'm starting a private family archive on Aangan for Ma / Papa / Nani — for the stories and recipes we always say we'll write down someday.

Will you add the things you remember too? Even one voice note from your side helps.

It stays inside the family. No ads, no posting, nothing public.

Love.`,
  },
  {
    id: 'gp',
    label: 'For Nani / Dadi',
    title: 'A gentle ask, when you live far',
    body: `Nani / Dadi,

I miss your stories.

I'm keeping a small family book — just for us — so the children can hear you, even when they're far away. Will you tell me one thing today? Anything. The way you used to do something. The way someone made you laugh.

I'll listen as many times as you want me to.`,
  },
];

const waLink = (text) => `https://wa.me/?text=${encodeURIComponent(text)}`;
const mailLink = (text) =>
  `mailto:?subject=${encodeURIComponent('A small thing I started — for our family')}&body=${encodeURIComponent(text)}`;

export default function GiftAangan({ compact = false }) {
  const [active, setActive] = useState(TEMPLATES[0].id);
  const [copied, setCopied] = useState(false);
  const tpl = TEMPLATES.find((t) => t.id === active);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(tpl.body);
      setCopied(true);
      toast.success('Copied. Paste it where it feels right.');
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error('Could not copy. Long-press the message instead.');
    }
  };

  return (
    <section
      data-testid="gift-aangan"
      className={`relative ${compact ? '' : 'py-20 md:py-24'} bg-[hsl(var(--aangan-sand))]`}
    >
      <div className={`${compact ? '' : 'max-w-[1180px] mx-auto px-6 md:px-10'}`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow"><span className="rule" />Begin with a small ask</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mt-3">
              Gift Aangan to your <em className="not-italic italic text-[hsl(var(--aangan-terracotta))]">parents</em>.
            </h2>
            <p className="mt-5 text-[hsl(var(--aangan-forest))]/75 leading-relaxed">
              The hardest part of preserving family stories is asking for one. Send a parent, a sibling, or a
              grandparent a short, gentle message &mdash; in your voice, but written for the moment.
            </p>
            <p className="mt-4 font-hand text-2xl text-[hsl(var(--aangan-terracotta))]">No pressure. Just one story.</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {TEMPLATES.map((t) => (
                <button
                  key={t.id}
                  data-testid={`gift-tab-${t.id}`}
                  onClick={() => setActive(t.id)}
                  className={`px-4 py-2 text-[13px] tracking-wide border transition-colors ${
                    active === t.id
                      ? 'bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))] border-[hsl(var(--aangan-forest))]'
                      : 'border-[hsl(var(--aangan-forest))]/25 text-[hsl(var(--aangan-forest))]/80 hover:border-[hsl(var(--aangan-forest))]/60'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="bg-[hsl(var(--aangan-ivory))] border border-black/10 p-7 md:p-9">
              <p className="eyebrow">{tpl.title}</p>
              <pre
                data-testid="gift-message-body"
                className="mt-4 whitespace-pre-wrap font-serif text-[19px] leading-relaxed text-[hsl(var(--aangan-forest))] bg-transparent border-l-2 border-[hsl(var(--aangan-marigold))] pl-5"
              >
{tpl.body}
              </pre>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  data-testid="gift-send-whatsapp"
                  href={waLink(tpl.body)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))] text-sm hover:bg-[hsl(var(--aangan-charcoal))] transition-colors"
                >
                  <Send size={14} /> Send on WhatsApp
                </a>
                <a
                  data-testid="gift-send-email"
                  href={mailLink(tpl.body)}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-[hsl(var(--aangan-forest))]/25 text-[hsl(var(--aangan-forest))] text-sm hover:border-[hsl(var(--aangan-forest))]/60 transition-colors"
                >
                  <Mail size={14} /> Email it
                </a>
                <button
                  data-testid="gift-copy"
                  onClick={copy}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-[hsl(var(--aangan-forest))]/25 text-[hsl(var(--aangan-forest))] text-sm hover:border-[hsl(var(--aangan-forest))]/60 transition-colors"
                >
                  {copied ? <Check size={14} className="text-[hsl(var(--aangan-sage))]" /> : <Copy size={14} />}
                  {copied ? 'Copied' : 'Copy message'}
                </button>
              </div>
              <p className="mt-5 text-[12px] text-[hsl(var(--aangan-forest))]/55">
                You can edit any of these before sending. Most families say yes when the ask is small.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
