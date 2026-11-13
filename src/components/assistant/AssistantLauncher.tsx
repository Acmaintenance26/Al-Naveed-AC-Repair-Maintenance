"use client";

import dynamic from "next/dynamic";
import { useCallback, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import type { ChatMessage } from "@/components/assistant/AssistantPanel";

// The chat panel and its animation library load only when someone opens the assistant.
const AssistantPanel = dynamic(
  () => import("@/components/assistant/AssistantPanel").then((m) => m.AssistantPanel),
  { ssr: false },
);

export const WELCOME: ChatMessage = {
  role: "assistant",
  content:
    "Hello. I'm the Al Naveed AC Assistant, an AI assistant. I can explain our services, help you make sense of an AC problem, or point you to the right page. I can't quote prices or confirm appointments, but I can show you how to reach the team.\n\nWhat is your AC doing?",
};

export function AssistantLauncher() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => {
          setLoaded(true);
          setOpen((v) => !v);
        }}
        aria-expanded={open}
        aria-haspopup="dialog"
        data-assistant-launcher
        className={`fixed right-4 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-30 flex h-14 items-center gap-2.5 rounded-full bg-navy px-4 font-bold text-white shadow-[0_12px_30px_-10px_rgb(16_28_44/0.6)] ring-1 ring-white/15 transition-colors hover:bg-navy-700 lg:right-6 lg:bottom-6 lg:px-5 ${open ? "max-lg:hidden" : ""}`}
      >
        <MessageCircle size={22} aria-hidden="true" className="text-sky" />
        <span className="max-lg:sr-only">Ask the AC Assistant</span>
      </button>

      {loaded && (
        <AssistantPanel
          open={open}
          messages={messages}
          setMessages={setMessages}
          onClose={close}
        />
      )}
    </>
  );
}
