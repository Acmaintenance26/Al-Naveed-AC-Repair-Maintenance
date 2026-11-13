import { FaqList } from "@/components/FaqList";
import { homeFaqs } from "@/content/faqs";
import { site, telHref, whatsappHref } from "@/lib/site";

export function HomeFaqs() {
  return (
    <section className="section bg-mist" aria-labelledby="faq-heading">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 id="faq-heading" className="t-h2">
            Questions we are asked most
          </h2>
          <p className="t-lead mt-5 text-slate">
            If yours is not here, ask us directly. Call{" "}
            <a href={telHref()} className="link tabular whitespace-nowrap">
              {site.phone.primary.display}
            </a>{" "}
            or{" "}
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="link">
              send a WhatsApp message
            </a>
            .
          </p>
        </div>
        <div className="rounded-lg bg-white px-6 sm:px-9">
          <FaqList faqs={homeFaqs} name="home-faq" />
        </div>
      </div>
    </section>
  );
}
