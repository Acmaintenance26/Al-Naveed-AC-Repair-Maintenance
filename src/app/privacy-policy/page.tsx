import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { addressOneLine, mailHref, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Al Naveed AC Repair & Maintenance collects, uses and protects the personal information you share through this website.",
  path: "/privacy-policy",
});

const email = (
  <a href={mailHref} className="link">
    {site.email}
  </a>
);

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          This website is operated by {site.name} (“we”, “us”), {addressOneLine}, United Arab
          Emirates, P.O. Box {site.address.poBox}.
        </p>
        <p>
          This policy explains what personal information we receive through the website, why we
          need it and what we do with it. Questions about it can be sent to {email}.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>We only receive information that you choose to give us:</p>
        <ul>
          <li>
            <strong>Enquiry and booking request forms.</strong> Your name, phone number, the
            service you need, your location, your description of the problem and, for booking
            requests, a preferred time.
          </li>
          <li>
            <strong>The AI assistant.</strong> The messages you type into the Al Naveed AC
            Assistant.
          </li>
          <li>
            <strong>Phone, WhatsApp and email.</strong> If you contact us this way we receive your
            number or address and whatever you tell us. WhatsApp is operated by Meta and its own
            privacy policy applies to that service.
          </li>
          <li>
            <strong>Technical information.</strong> Your IP address is used for a short time to
            limit abuse of our forms and assistant. Our hosting provider keeps standard server
            logs.
          </li>
        </ul>
        <p>
          This website does not set advertising cookies and does not run third-party tracking
          scripts.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    body: (
      <>
        <ul>
          <li>To reply to your enquiry and call you about a booking request</li>
          <li>To arrange and carry out the service you ask for</li>
          <li>To answer the questions you put to the AI assistant</li>
          <li>To keep records of work we have done, where the law requires it</li>
          <li>To protect the website against spam and misuse</li>
        </ul>
        <p>
          We do not use your details for marketing unless you ask us to, and we do not sell
          personal information to anyone.
        </p>
      </>
    ),
  },
  {
    id: "who-we-share-it-with",
    title: "Who we share it with",
    body: (
      <>
        <p>
          We share personal information only with companies that help us run the website and reply
          to you, and only as far as they need it:
        </p>
        <ul>
          <li>The company that hosts this website</li>
          <li>The email or messaging service that delivers form submissions to our team</li>
          <li>
            The provider of the artificial intelligence model behind the AI assistant, which
            processes the messages you type so that it can generate a reply
          </li>
        </ul>
        <p>
          Some of these providers process information outside the United Arab Emirates. We may also
          disclose information where the law requires us to.
        </p>
      </>
    ),
  },
  {
    id: "how-long-we-keep-it",
    title: "How long we keep it",
    body: (
      <>
        <p>
          The website itself does not keep a database of enquiries. Form submissions are passed to
          our team and kept for as long as needed to deal with your request and to maintain
          business records.
        </p>
        <p>
          Conversations with the AI assistant are held in your browser while the page is open and
          are not saved by this website. The provider of the AI model may retain messages for a
          limited period under its own policies.
        </p>
      </>
    ),
  },
  {
    id: "ai-assistant",
    title: "About the AI assistant",
    body: (
      <>
        <p>
          The Al Naveed AC Assistant is an automated tool. Please do not type sensitive
          information into it, such as payment card numbers, passwords or identity document
          numbers. To arrange a visit, use the booking request form, phone or WhatsApp.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>
          Under the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) you may
          ask us to:
        </p>
        <ul>
          <li>Tell you what personal information we hold about you</li>
          <li>Correct information that is wrong or out of date</li>
          <li>Delete your information, where we have no legal reason to keep it</li>
          <li>Stop or restrict our use of it</li>
        </ul>
        <p>To make a request, email {email}. We may need to confirm your identity first.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        This website is intended for adults arranging services for a home or business. We do not
        knowingly collect information from children.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        If we change how we handle personal information we will update this page and the date at
        the top of it.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        {site.name}, {addressOneLine}, United Arab Emirates. Email {email} or call{" "}
        <span className="tabular">{site.phone.primary.display}</span>.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      path="/privacy-policy"
      lead="What information this website receives from you, why, and what happens to it."
      updated="12 November 2026"
      sections={sections}
    />
  );
}
