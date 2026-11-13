import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { telHref, whatsappHref } from "@/lib/site";

/** Contact actions fixed to the bottom of the screen on phones and tablets. */
export function MobileBar() {
  const item =
    "flex min-h-[3.75rem] flex-1 items-center justify-center gap-2 text-[0.9375rem] font-bold";
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 flex border-t border-line bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_rgb(16_28_44/0.25)] lg:hidden"
      role="region"
      aria-label="Quick contact"
    >
      <a href={telHref()} className={`${item} bg-blue text-white`} data-cta="mobile-call">
        <Phone size={18} aria-hidden="true" />
        Call now
      </a>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className={`${item} border-x border-line text-navy`}
        data-cta="mobile-whatsapp"
      >
        <WhatsAppIcon className="text-whatsapp" />
        WhatsApp
      </a>
      <Link href="/book" className={`${item} text-navy`} data-cta="mobile-book">
        <CalendarCheck size={18} aria-hidden="true" className="text-blue" />
        Book
      </Link>
    </div>
  );
}
