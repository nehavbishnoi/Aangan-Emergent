import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { askAanganStream } from '@/lib/api';

const SUGGESTIONS = [
  'How did Dadi make Holi special?',
  'What do we usually do before Diwali?',
  'Explain our Diwali morning tradition to a 6-year-old.',
  'Create a 20-minute version of our family tradition for this Friday.',
];

export default function AskAanganPage() {
  const [messages, setMessages] = useState([
    {
      role: 'aangan',
      text: 'I am Aangan. I answer from your family\u2019s archive first \u2014 not the internet. Ask me anything about your family\u2019s traditions, recipes, or stories.',
    },
  ]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const sessionRef = useRef(`ask-${Date.now()}`);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async (q) => {
    const question = (q ?? input).trim();
    if (!question || streaming) return;
    setInput('');
    setMessages((m) => [...m, { role: 'user', text: question }, { role: 'aangan', text: '' }]);
    setStreaming(true);

    await askAanganStream(
      question,
      sessionRef.current,
      (delta) =>
        setMessages((m) => {
          const next = [...m];
          next[next.length - 1] = { ...next[next.length - 1], text: next[next.length - 1].text + delta };
          return next;
        }),
      () => setStreaming(false),
      (err) => {
        setMessages((m) => {
          const next = [...m];
          next[next.length - 1] = {
            ...next[next.length - 1],
            text: next[next.length - 1].text || `(Aangan is quiet right now \u2014 ${err})`,
          };
          return next;
        });
        setStreaming(false);
      }
    );
  };

  return (
    <div data-testid="ask-aangan-page" className="relative z-10 pt-[120px] pb-24">
      <div className="max-w-[1080px] mx-auto px-6 md:px-10">
        <Link to="/archive" data-testid="ask-back" className="inline-flex items-center gap-2 text-sm text-[hsl(var(--aangan-forest))]/70 hover:text-[hsl(var(--aangan-forest))]">
          <ArrowLeft size={14} /> Back to My Aangan
        </Link>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-10">
          <aside className="md:col-span-4">
            <p className="eyebrow">Private AI &middot; live demo</p>
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.05] mt-3">Ask Aangan</h1>
            <p className="mt-4 font-hand text-2xl text-[hsl(var(--aangan-terracotta))]">From the Sharma family&rsquo;s archive</p>
            <p className="mt-5 text-[hsl(var(--aangan-forest))]/75 leading-relaxed text-[15px]">
              This is a live conversation with Aangan, answering as if it knows the Sharma family&rsquo;s memories.
              Try one of the questions below, or ask your own.
            </p>
            <ul className="mt-6 space-y-2">
              {SUGGESTIONS.map((s) => (
                <li key={s}>
                  <button
                    data-testid={`ask-suggestion-${s.slice(0, 12).replace(/\s/g, '-')}`}
                    onClick={() => send(s)}
                    disabled={streaming}
                    className="text-left w-full px-4 py-3 border border-black/10 hover:border-[hsl(var(--aangan-terracotta))]/60 text-[14px] text-[hsl(var(--aangan-forest))]/85 transition-colors disabled:opacity-50"
                  >
                    &ldquo;{s}&rdquo;
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-[12px] text-[hsl(var(--aangan-forest))]/60">
              <ShieldCheck size={12} className="text-[hsl(var(--aangan-sage))]" /> Conversations stay inside your family Aangan.
            </p>
          </aside>

          <div className="md:col-span-8">
            <div className="border border-black/10 bg-[hsl(var(--aangan-ivory))] flex flex-col h-[640px]">
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                {messages.map((m, i) => (
                  <div key={i} data-testid={`ask-msg-${i}`} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] ${m.role === 'user' ? '' : ''}`}>
                      {m.role === 'aangan' && (
                        <p className="eyebrow flex items-center gap-1.5 mb-2 text-[hsl(var(--aangan-terracotta))]">
                          <Sparkles size={11} /> Aangan
                        </p>
                      )}
                      <div
                        className={`whitespace-pre-wrap leading-relaxed ${
                          m.role === 'user'
                            ? 'bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))] px-4 py-3 text-[15px]'
                            : 'font-serif text-[19px] text-[hsl(var(--aangan-forest))]'
                        }`}
                      >
                        {m.text || (streaming && i === messages.length - 1 ? <span className="opacity-50">listening...</span> : null)}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              <form
                data-testid="ask-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
                className="border-t border-black/10 p-4 flex items-center gap-3 bg-[hsl(var(--aangan-sand))]"
              >
                <input
                  data-testid="ask-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={streaming}
                  placeholder="Ask about a tradition, recipe, person, or place..."
                  className="flex-1 bg-transparent outline-none text-[hsl(var(--aangan-forest))] placeholder:text-[hsl(var(--aangan-forest))]/40"
                />
                <button
                  data-testid="ask-send"
                  type="submit"
                  disabled={streaming || !input.trim()}
                  className="w-10 h-10 bg-[hsl(var(--aangan-forest))] text-[hsl(var(--aangan-ivory))] flex items-center justify-center disabled:opacity-40"
                >
                  <Send size={15} />
                </button>
              </form>
            </div>
            <p className="mt-3 text-[11px] text-[hsl(var(--aangan-forest))]/50">
              Live demo powered by Claude Sonnet 4.5 via the Aangan archive layer. Replies are streamed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
