"use client";

import Link from "next/link";
import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type FormEvent,
  type ReactNode,
  type SetStateAction,
} from "react";
import { AnimatePresence, domAnimation, LazyMotion, m } from "motion/react";
import { Phone, SendHorizontal, X } from "lucide-react";
import { LogoMark, WhatsAppIcon } from "@/components/ui/icons";
import { site, telHref, whatsappHref } from "@/lib/site";

export type ChatMessage = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "My AC is not cooling",
  "Water is leaking from my AC",
  "How do I book a service?",
  "Which areas do you cover?",
];

const MAX_INPUT = 500;
const MAX_USER_TURNS = 20;

const OFFLINE_REPLY = `I can't reach the assistant service right now. For help, call ${site.phone.primary.display} or message us on WhatsApp. We are open 24 hours. You can also send a [booking request](/book).`;

/** Turns [label](/internal-path) and the business phone numbers into links. Nothing else is interpreted. */
function renderText(text: string, onNavigate: () => void): ReactNode[] {
  const phones = [site.phone.primary, site.phone.secondary];
  const pattern = new RegExp(
    `\\[([^\\]\\n]{1,80})\\]\\((\\/[a-z0-9\\-\\/?=&%]{0,120})\\)|(${phones
      .map((p) => p.display.replace(/[+]/g, "\\+"))
      .join("|")})`,
    "g",
  );
  const out: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) out.push(text.slice(last, index));
    if (match[1] && match[2]) {
      out.push(
        <Link key={index} href={match[2]} onClick={onNavigate} className="link">
          {match[1]}
        </Link>,
      );
    } else if (match[3]) {
      const phone = phones.find((p) => p.display === match[3]);
      out.push(
        <a key={index} href={telHref(phone?.e164)} className="link tabular whitespace-nowrap">
          {match[3]}
        </a>,
      );
    }
    last = index + match[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Bubble({ message, onNavigate }: { message: ChatMessage; onNavigate: () => void }) {
  const mine = message.role === "user";
  return (
    <li className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[86%] rounded-lg px-4 py-3 text-[0.9375rem] leading-relaxed ${
          mine ? "bg-blue text-white" : "bg-mist text-ink"
        }`}
      >
        <span className="sr-only">{mine ? "You: " : "Assistant: "}</span>
        {message.content.split(/\n{2,}/).map((para, i) => (
          <p key={i} className={i > 0 ? "mt-2.5" : ""}>
            {para.split("\n").map((line, j) => (
              <Fragment key={j}>
                {j > 0 && <br />}
                {mine ? line : renderText(line, onNavigate)}
              </Fragment>
            ))}
          </p>
        ))}
      </div>
    </li>
  );
}

type Props = {
  open: boolean;
  messages: ChatMessage[];
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>;
  onClose: () => void;
};

export function AssistantPanel({ open, messages, setMessages, onClose }: Props) {
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const userTurns = messages.filter((m) => m.role === "user").length;
  const limitReached = userTurns >= MAX_USER_TURNS;

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages, open]);

  useEffect(() => () => abortRef.current?.abort(), []);

  async function send(text: string) {
    const content = text.trim().slice(0, MAX_INPUT);
    if (!content || busy || limitReached) return;

    const history: ChatMessage[] = [...messages, { role: "user", content }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    const setReply = (reply: string) =>
      setMessages((current) => [...current.slice(0, -1), { role: "assistant", content: reply }]);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
        signal: controller.signal,
      });

      if (res.status === 429) {
        setReply(
          `You have sent a lot of messages in a short time. Please call ${site.phone.primary.display} or message us on WhatsApp and the team will help.`,
        );
        return;
      }
      if (!res.ok || !res.body) throw new Error("assistant unavailable");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setReply(reply);
      }
      if (!reply.trim()) setReply(OFFLINE_REPLY);
    } catch {
      if (!controller.signal.aborted) setReply(OFFLINE_REPLY);
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(input);
  }

  const waiting = busy && messages[messages.length - 1]?.content === "";

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {open && (
          <m.div
            role="dialog"
            aria-label="Al Naveed AC Assistant"
            data-assistant-panel
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2, ease: [0.22, 0.8, 0.26, 1] }}
            className="fixed inset-x-0 bottom-[calc(3.75rem+env(safe-area-inset-bottom))] z-40 flex h-[min(34rem,calc(100dvh-8.5rem))] flex-col overflow-hidden border-t border-line bg-white shadow-[0_-18px_50px_-18px_rgb(16_28_44/0.45)] lg:inset-x-auto lg:right-6 lg:bottom-24 lg:h-[min(37rem,calc(100dvh-8rem))] lg:w-[25rem] lg:rounded-lg lg:border lg:shadow-[0_24px_70px_-20px_rgb(16_28_44/0.5)]"
          >
            <div className="flex items-center gap-3 bg-navy px-4 py-3.5 text-white">
              <LogoMark size={36} />
              <div className="min-w-0 flex-1">
                <h2 className="truncate text-[1rem] leading-tight font-bold text-white">
                  Al Naveed AC Assistant
                </h2>
                <p className="text-[0.8125rem] leading-tight text-white/70">
                  AI assistant. General answers only.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close assistant"
                className="flex size-11 items-center justify-center rounded-md text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div ref={logRef} className="flex-1 overflow-y-auto overscroll-contain px-4 py-5">
              <div role="log" aria-live="polite" aria-busy={busy}>
                <ul className="grid gap-3">
                {messages.map((message, i) =>
                  message.content ? (
                    <Bubble key={i} message={message} onNavigate={onClose} />
                  ) : null,
                )}
                {waiting && (
                  <li className="flex justify-start">
                    <span className="flex gap-1.5 rounded-lg bg-mist px-4 py-4" role="status">
                      <span className="sr-only">The assistant is writing</span>
                      {[0, 1, 2].map((d) => (
                        <span
                          key={d}
                          className="size-1.5 animate-pulse rounded-full bg-slate"
                          style={{ animationDelay: `${d * 160}ms` }}
                          aria-hidden="true"
                        />
                      ))}
                    </span>
                  </li>
                )}
                </ul>
              </div>

              {userTurns === 0 && (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Suggested questions">
                  {SUGGESTIONS.map((s) => (
                    <li key={s}>
                      <button
                        type="button"
                        onClick={() => void send(s)}
                        className="min-h-11 rounded-full border border-[#b8c4d3] px-4 text-left text-[0.875rem] font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-line p-3">
              {limitReached ? (
                <p className="px-1 py-2 text-[0.9375rem] text-ink">
                  That is as far as this chat goes. For anything more, please call or WhatsApp the
                  team.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="flex gap-2">
                  <label htmlFor="assistant-input" className="sr-only">
                    Your message
                  </label>
                  <input
                    ref={inputRef}
                    id="assistant-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    maxLength={MAX_INPUT}
                    placeholder="Type your question"
                    autoComplete="off"
                    enterKeyHint="send"
                    className="field min-h-12"
                  />
                  <button
                    type="submit"
                    disabled={busy || !input.trim()}
                    aria-label="Send message"
                    className="flex size-12 shrink-0 items-center justify-center rounded-md bg-blue text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
                  >
                    <SendHorizontal size={20} aria-hidden="true" />
                  </button>
                </form>
              )}
              <div className="mt-3 flex items-center justify-between gap-3 px-1 text-[0.8125rem]">
                <p className="text-slate">Urgent? Speak to the team:</p>
                <div className="flex gap-4 font-bold">
                  <a href={telHref()} className="flex items-center gap-1.5 text-blue hover:underline">
                    <Phone size={14} aria-hidden="true" />
                    Call
                  </a>
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-blue hover:underline"
                  >
                    <WhatsAppIcon width={14} height={14} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
