import { Plus } from "lucide-react";
import type { Faq } from "@/content/services";

/** Accordion built on native <details>, so it works without JavaScript. */
export function FaqList({ faqs, name = "faq" }: { faqs: Faq[]; name?: string }) {
  return (
    <div className="border-b border-line">
      {faqs.map((f) => (
        <details key={f.q} name={name} className="group border-t border-line">
          <summary className="flex min-h-16 items-center justify-between gap-6 py-4 text-[1.0625rem] font-bold leading-snug text-navy transition-colors hover:text-blue">
            {f.q}
            <Plus
              size={20}
              aria-hidden="true"
              className="shrink-0 text-blue transition-transform duration-200 group-open:rotate-45"
            />
          </summary>
          <p className="max-w-[68ch] pb-6 pr-10 text-ink">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
