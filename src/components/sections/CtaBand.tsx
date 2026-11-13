import { Phone } from "lucide-react";
import { AirLines } from "@/components/illustrations/Scenes";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { site, telHref, whatsappHref } from "@/lib/site";

type Props = {
  title?: string;
  text?: string;
  /** Pre-fills the WhatsApp message and the booking form. */
  serviceSlug?: string;
  whatsappMessage?: string;
};

/** Closing call to action used at the foot of every page. */
export function CtaBand({
  title = "Need Professional AC Repair in Dubai?",
  text = `${site.hours.summary}. Call, message or send a booking request and tell us what is wrong.`,
  serviceSlug,
  whatsappMessage,
}: Props) {
  return (
    <section className="on-dark relative overflow-hidden bg-navy" aria-labelledby="cta-heading">
      <AirLines className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] w-full" />
      <div className="shell relative py-20 lg:py-28">
        <h2 id="cta-heading" className="t-h1 max-w-[18ch]">
          {title}
        </h2>
        <p className="t-lead mt-6 max-w-[48ch]">{text}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={telHref()} variant="sky" size="lg" data-cta="band-call">
            <Phone size={20} aria-hidden="true" />
            <span>
              Call now <span className="tabular font-semibold">{site.phone.primary.display}</span>
            </span>
          </ButtonLink>
          <ButtonLink
            href={whatsappHref(whatsappMessage)}
            variant="white"
            size="lg"
            data-cta="band-whatsapp"
          >
            <WhatsAppIcon className="text-[#128C4B]" />
            WhatsApp us
          </ButtonLink>
          <ButtonLink
            href={serviceSlug ? `/book?service=${serviceSlug}` : "/book"}
            variant="outlineDark"
            size="lg"
            data-cta="band-book"
          >
            Book a service
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
