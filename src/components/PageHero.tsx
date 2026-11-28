import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { site, telHref, whatsappHref } from "@/lib/site";

type Props = {
  crumbs: Crumb[];
  title: string;
  lead: string;
  /** Show call and WhatsApp buttons. */
  actions?: boolean;
  whatsappMessage?: string;
  bookHref?: string;
  children?: ReactNode;
  /** Decorative band drawn along the bottom of the header. */
  banner?: ReactNode;
};

/** Navy header band for every page except the homepage. */
export function PageHero({
  crumbs,
  title,
  lead,
  actions,
  whatsappMessage,
  bookHref,
  children,
  banner,
}: Props) {
  return (
    <section className="on-dark bg-navy">
      <div
        className={
          banner
            ? "shell pt-8 pb-8 lg:pt-10 lg:pb-10"
            : "shell pt-8 pb-14 lg:pt-10 lg:pb-20"
        }
      >
        <Breadcrumbs crumbs={crumbs} />
        <h1 className="t-h1 mt-8 max-w-[20ch] lg:mt-12">{title}</h1>
        <p className="t-lead mt-6 max-w-[58ch]">{lead}</p>
        {actions && (
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={telHref()}
              variant="sky"
              size="lg"
              data-cta="page-call"
            >
              <Phone size={20} aria-hidden="true" />
              <span>
                Call now{" "}
                <span className="tabular font-semibold">
                  {site.phone.primary.display}
                </span>
              </span>
            </ButtonLink>
            <ButtonLink
              href={whatsappHref(whatsappMessage)}
              variant="white"
              size="lg"
              data-cta="page-whatsapp"
            >
              <WhatsAppIcon className="text-[#128C4B]" />
              WhatsApp us
            </ButtonLink>
            {bookHref && (
              <ButtonLink
                href={bookHref}
                variant="outlineDark"
                size="lg"
                data-cta="page-book"
              >
                Book a service
              </ButtonLink>
            )}
          </div>
        )}
        {children}
      </div>
      {banner}
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </section>
  );
}
