import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { addressOneLine, mailHref, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms and Conditions",
  description:
    "The terms that apply when you use the Al Naveed AC Repair & Maintenance website, its forms and its AI assistant.",
  path: "/terms",
});

const sections: LegalSection[] = [
  {
    id: "about-these-terms",
    title: "About these terms",
    body: (
      <>
        <p>
          These terms apply to your use of this website, which is operated by {site.name},{" "}
          {addressOneLine}, United Arab Emirates. By using the website you agree to them.
        </p>
        <p>
          They cover the website only. Work we carry out at your property is governed by what is
          agreed with you when that work is quoted and booked.
        </p>
      </>
    ),
  },
  {
    id: "information-on-this-website",
    title: "Information on this website",
    body: (
      <>
        <p>
          The pages and guides on this website describe air conditioning problems and services in
          general terms. They are not a diagnosis of your equipment. A fault can only be confirmed
          by a technician who has inspected the system.
        </p>
        <p>
          Do not attempt electrical or refrigerant work on the basis of anything you read here.
          Both are dangerous without training and the right equipment.
        </p>
      </>
    ),
  },
  {
    id: "enquiries-and-booking-requests",
    title: "Enquiries and booking requests",
    body: (
      <>
        <p>
          Sending a form on this website makes a request. It does not create a booking or a
          contract. A visit is booked only when we have contacted you and agreed a time.
        </p>
        <p>
          Please give accurate contact details. If we cannot reach you on the number you provide,
          we cannot arrange the visit.
        </p>
      </>
    ),
  },
  {
    id: "prices",
    title: "Prices and quotations",
    body: (
      <p>
        We do not publish prices on this website, because the cost of a job depends on the
        equipment, the fault and the parts required. Nothing on the website is an offer to carry
        out work at a particular price. Ask for a quotation before work begins.
      </p>
    ),
  },
  {
    id: "ai-assistant",
    title: "The AI assistant",
    body: (
      <>
        <p>
          The Al Naveed AC Assistant is an automated tool that gives general information about our
          services and common air conditioning problems. It can make mistakes.
        </p>
        <ul>
          <li>It cannot diagnose a fault with certainty</li>
          <li>It cannot quote prices or confirm that an appointment is available</li>
          <li>It is not a substitute for speaking to our team</li>
          <li>It should not be relied on in an emergency. Call us instead</li>
        </ul>
        <p>
          How the assistant handles what you type is explained in our{" "}
          <Link href="/privacy-policy" className="link">
            privacy policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <p>
        You must not misuse the website: for example by sending spam through the forms, attempting
        to gain unauthorised access, interfering with how the site works or using automated tools
        to overload it.
      </p>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-party services and links",
    body: (
      <p>
        The website links to services we do not control, including Google and WhatsApp. Reviews
        shown on Google are written by third parties and hosted by Google. We are not responsible
        for the content or availability of other websites.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <p>
        The text, design and illustrations on this website belong to {site.name} or are used with
        permission. You may view and print pages for your own use. You may not copy them for
        commercial purposes without our written consent.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Liability",
    body: (
      <p>
        We take care to keep this website accurate and available, but we provide it without any
        guarantee that it is complete, current or free of errors. To the extent the law allows, we
        are not liable for loss arising from reliance on the general information on the website or
        from the website being unavailable. Nothing in these terms limits liability that cannot be
        limited by law.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of the United Arab Emirates as applied in the Emirate
        of Dubai, and the courts of Dubai have jurisdiction over any dispute about them.
      </p>
    ),
  },
  {
    id: "changes-and-contact",
    title: "Changes and contact",
    body: (
      <p>
        We may update these terms, and the date at the top of the page shows when they last
        changed. Questions can be sent to{" "}
        <a href={mailHref} className="link">
          {site.email}
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and conditions"
      path="/terms"
      lead="The terms for using this website, its forms and its AI assistant."
      updated="12 November 2026"
      sections={sections}
    />
  );
}
