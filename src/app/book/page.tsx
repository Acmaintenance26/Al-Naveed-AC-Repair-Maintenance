import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingForm } from "@/components/forms/BookingForm";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { areaOptions, serviceOptions } from "@/lib/form-options";
import { pageMetadata } from "@/lib/seo";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Book an AC Service in Dubai | Booking Request",
  description:
    "Request an AC repair, service or maintenance visit in Dubai. Send your details and Al Naveed AC Repair & Maintenance will call you to agree a time.",
  path: "/book",
});

const next = [
  {
    title: "We receive your request",
    text: "Your details come straight to our team.",
  },
  {
    title: "We call you",
    text: "We ring the number you gave to check the details and agree a time.",
  },
  {
    title: "Your visit is confirmed",
    text: "The booking is confirmed on that call, not before.",
  },
];

export default function BookPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Book a service", path: "/book" }]}
        title="Book an AC service"
        lead="Send us the details and we will call you to agree a time. If the AC has failed and you need help now, phoning is faster."
      />

      <section className="section bg-white">
        <div className="shell grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <h2 className="t-h2">Booking request</h2>
            <div className="mt-8">
              <Suspense
                fallback={<EnquiryForm kind="booking" services={serviceOptions} areas={areaOptions} />}
              >
                <BookingForm services={serviceOptions} areas={areaOptions} />
              </Suspense>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg bg-mist p-7 lg:p-9">
              <h2 className="text-[1.375rem] leading-tight tracking-[-0.02em]">What happens next</h2>
              <ol className="mt-6">
                {next.map((n, i) => (
                  <li key={n.title} className="flex gap-4 border-t border-line py-5">
                    <span className="tabular flex size-9 shrink-0 items-center justify-center rounded-full border border-blue/50 text-[0.9375rem] font-bold text-blue">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-[1.0625rem] leading-snug">{n.title}</h3>
                      <p className="t-small mt-1 text-slate">{n.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-4 border-t border-line pt-6">
                <h3 className="text-[1.0625rem]">Need someone now?</h3>
                <p className="t-small mt-1 text-slate">{site.hours.summary}.</p>
                <ButtonLink href={telHref()} className="mt-4 w-full" data-cta="book-call">
                  <span className="tabular">Call {site.phone.primary.display}</span>
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
