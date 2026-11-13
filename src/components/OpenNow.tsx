"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/lib/site";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Dubai",
});

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
}

const getSnapshot = () => formatter.format(new Date());
const getServerSnapshot = () => null;

/**
 * "Open now" with the current time in Dubai. The business is open 24 hours every day,
 * so this is always true. The clock appears after hydration; the server renders the
 * hours text only.
 */
export function OpenNow({ className = "" }: { className?: string }) {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="pulse-dot size-2 shrink-0 rounded-full bg-whatsapp" aria-hidden="true" />
      <span>
        {time ? (
          <>
            Open now, <span className="tabular">{time}</span> in Dubai
          </>
        ) : (
          site.hours.summary
        )}
      </span>
    </span>
  );
}
