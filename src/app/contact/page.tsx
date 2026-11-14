import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { WhatsAppIcon } from "@/components/ui/icons";
import { areaOptions, serviceOptions } from "@/lib/form-options";
import { pageMetadata } from "@/lib/seo";
import { mailHref, site, telHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | Call, WhatsApp or Visit in Naif, Deira",
  description:
    "Contact Al Naveed AC Repair & Maintenance: call +971 50 297 7603, WhatsApp, email or visit Shop 2, Ayesha Mohammed Belhool Building, Naif, Deira. Open 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  const row = "flex gap-4 border-t border-line py-6";
  const icon = "mt-1 shrink-0 text-blue";

  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path: "/contact" }]}
        title="Contact us"
        lead="Phone is quickest when the AC has failed. For anything else, WhatsApp, email or the form below all reach the same team. We are open 24 hours, every day."
      />

      <section className="section bg-white">
        <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 className="t-h2">Reach us directly</h2>
            <ul className="mt-8 border-b border-line">
              <li className={row}>
                <Phone size={22} aria-hidden="true" className={icon} />
                <div>
                  <h3 className="text-[1.0625rem]">Call</h3>
                  <p className="mt-1.5">
                    <a href={telHref()} className="link tabular text-[1.125rem]" data-cta="contact-call">
                      {site.phone.primary.display}
                    </a>
                  </p>
                </div>
              </li>
              <li className={row}>
                <WhatsAppIcon width={22} height={22} className={icon} />
                <div>
                  <h3 className="text-[1.0625rem]">WhatsApp</h3>
                  <p className="mt-1.5">
                    <a
                      href={whatsappHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                      data-cta="contact-whatsapp"
                    >
                      Start a chat on {site.whatsapp.display}
                    </a>
                  </p>
                  <p className="t-small mt-1 text-slate">Send a photo or video of the unit.</p>
                </div>
              </li>
              <li className={row}>
                <Mail size={22} aria-hidden="true" className={icon} />
                <div>
                  <h3 className="text-[1.0625rem]">Email</h3>
                  <p className="mt-1.5">
                    <a href={mailHref} className="link break-all">
                      {site.email}
                    </a>
                  </p>
                  <p className="t-small mt-1 text-slate">Best for quotations and contracts.</p>
                </div>
              </li>
              <li className={row}>
                <MapPin size={22} aria-hidden="true" className={icon} />
                <div>
                  <h3 className="text-[1.0625rem]">Visit the workshop</h3>
                  <address className="mt-1.5 not-italic">
                    {site.address.line1}
                    <br />
                    {site.address.line2}, {site.address.district}
                    <br />
                    {site.address.city}, {site.address.country}
                    <br />
                    P.O. Box {site.address.poBox}
                  </address>
                  <p className="mt-2">
                    <a
                      href={site.google.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      Find us on Google Maps
                    </a>
                  </p>
                </div>
              </li>
              <li className={row}>
                <Clock size={22} aria-hidden="true" className={icon} />
                <div>
                  <h3 className="text-[1.0625rem]">Opening hours</h3>
                  <p className="mt-1.5">Monday to Sunday, 24 hours</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="t-h2">Send an enquiry</h2>
            <p className="mt-4 max-w-[52ch] text-slate">
              Tell us what you need and how to reach you. We reply by phone.
            </p>
            <div className="mt-8">
              <EnquiryForm kind="enquiry" services={serviceOptions} areas={areaOptions} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
