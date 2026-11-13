import Link from "next/link";
import { Building2, Clock, MapPin, MessageSquareText, PhoneCall, Star } from "lucide-react";
import { site } from "@/lib/site";

const reasons = [
  {
    icon: Clock,
    title: "Open 24 hours, every day",
    text: "Air conditioners fail at night and at weekends too. You can call or message us at any hour, on any day of the week.",
  },
  {
    icon: MapPin,
    title: "A workshop you can visit",
    text: `We work from ${site.address.line1} in Naif, Deira. A real address in Dubai, with a shopfront.`,
  },
  {
    icon: Building2,
    title: "Homes and business premises",
    text: "Apartments, villas, offices and shops. Split, ducted, window and central systems.",
  },
  {
    icon: MessageSquareText,
    title: "Explained before work starts",
    text: "You hear what the technician found and what is recommended, in plain language, so you can decide.",
  },
  {
    icon: PhoneCall,
    title: "Three ways to reach us",
    text: "Phone, WhatsApp or a booking request form. Use whichever is easiest for you.",
  },
  {
    icon: Star,
    title: "Reviewed on Google",
    text: `Rated ${site.google.rating} out of 5 across ${site.google.reviewCount} Google reviews. Read them on Google, where we cannot edit them.`,
  },
];

export function WhyChooseUs() {
  return (
    <section className="section bg-white" aria-labelledby="why-heading">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 id="why-heading" className="t-h2">
            Why choose Al Naveed?
          </h2>
          <p className="t-lead mt-5 text-slate">
            We would sooner tell you what is true than what sounds impressive. These are the things
            about us you can check for yourself.
          </p>
          <Link href="/about" className="link mt-7 inline-block">
            More about us
          </Link>
        </div>

        <ul className="grid gap-x-12 sm:grid-cols-2">
          {reasons.map((r) => (
            <li key={r.title} className="border-t border-line py-8">
              <r.icon size={26} strokeWidth={1.75} aria-hidden="true" className="text-blue" />
              <h3 className="t-h3 mt-5">{r.title}</h3>
              <p className="t-small mt-2.5 text-slate">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
