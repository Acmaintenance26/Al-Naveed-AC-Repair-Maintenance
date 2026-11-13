import { Building2, MapPin, Phone } from "lucide-react";
import { CoolingScene } from "@/components/illustrations/CoolingScene";
import { OpenNow } from "@/components/OpenNow";
import { ButtonLink } from "@/components/ui/Button";
import { Stars } from "@/components/ui/icons";
import { site, telHref } from "@/lib/site";

export function Hero() {
  return (
    <section className="on-dark overflow-hidden bg-navy">
      <div className="shell grid items-center gap-12 pt-12 pb-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:pt-20 lg:pb-24">
        <div>
          <OpenNow className="text-[0.9375rem] font-semibold text-white" />
          <h1 className="t-display mt-6 max-w-[15ch]">
            Reliable AC Repair &amp; Maintenance Services in Dubai
          </h1>
          <p className="t-lead mt-6 max-w-[46ch]">
            Keep your home and business comfortable with professional air conditioning repair,
            maintenance and servicing from Al Naveed AC Repair &amp; Maintenance.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={telHref()} variant="sky" size="lg" data-cta="hero-call">
              <Phone size={20} aria-hidden="true" />
              <span>
                Call now <span className="tabular font-semibold">{site.phone.primary.display}</span>
              </span>
            </ButtonLink>
            <ButtonLink href="/book" variant="outlineDark" size="lg" data-cta="hero-book">
              Book a service
            </ButtonLink>
          </div>

          <ul className="mt-11 flex flex-col gap-x-9 gap-y-4 border-t border-white/12 pt-7 text-[0.9375rem] font-medium text-white/85 sm:flex-row sm:flex-wrap sm:items-center">
            <li>
              <a
                href={site.google.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
              >
                <Stars rating={site.google.rating} size={17} />
                <span>
                  <span className="font-bold text-white">{site.google.rating}</span> on Google,{" "}
                  <span className="underline decoration-white/35 underline-offset-4 group-hover:decoration-white">
                    {site.google.reviewCount} reviews
                  </span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Building2 size={18} aria-hidden="true" className="text-sky" />
              Homes and businesses
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin size={18} aria-hidden="true" className="text-sky" />
              Based in Deira, serving Dubai
            </li>
          </ul>
        </div>

        <CoolingScene />
      </div>
    </section>
  );
}
