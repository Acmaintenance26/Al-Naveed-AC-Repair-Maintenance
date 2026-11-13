import { Clock, Mail, MapPin } from "lucide-react";
import { mailHref, site, telHref } from "@/lib/site";

/** Slim utility bar above the header. Desktop only; phones get the sticky contact bar. */
export function TopBar() {
  return (
    <aside
      aria-label="Opening hours and contact details"
      className="hidden bg-navy text-[0.8438rem] font-medium text-white/80 lg:block"
    >
      <div className="shell flex h-10 items-center justify-between gap-6">
        <span className="flex items-center gap-2">
          <Clock size={14} aria-hidden="true" className="text-sky" />
          {site.hours.summary}
        </span>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <MapPin size={14} aria-hidden="true" className="text-sky" />
            Naif, Deira, Dubai
          </span>
          <a href={mailHref} className="flex items-center gap-2 transition-colors hover:text-white">
            <Mail size={14} aria-hidden="true" className="text-sky" />
            {site.email}
          </a>
          <a
            href={telHref(site.phone.secondary.e164)}
            className="tabular transition-colors hover:text-white"
          >
            <span className="sr-only">Alternative number: </span>
            {site.phone.secondary.display}
          </a>
        </div>
      </div>
    </aside>
  );
}
