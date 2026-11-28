import { cacheLife } from "next/cache";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Header";
import { WhatsAppIcon } from "@/components/ui/icons";
import { areas, areaPath, areaShortName, menuAreas } from "@/content/areas";
import { visiblePosts } from "@/content/posts";
import { servicePath, services } from "@/content/services";
import { mailHref, site, telHref, whatsappHref } from "@/lib/site";

async function currentYear() {
  "use cache";
  // The copyright year only changes once a year, so pages need not regenerate often.
  cacheLife("days");
  return new Date().getFullYear();
}

const heading = "text-[0.9375rem] font-bold text-white";
const item = "text-[0.9375rem] text-white/70 transition-colors hover:text-white";

export async function Footer() {
  const year = await currentYear();

  return (
    <footer className="on-dark border-t border-white/10 bg-navy">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.2fr] lg:gap-10 lg:py-20">
        <div>
          <Logo tone="dark" />
          <p className="t-small mt-6 max-w-[34ch] text-white/70">
            Air conditioning repair, maintenance and installation for homes and businesses in Dubai,
            from a workshop in Naif, Deira.
          </p>
          <a
            href={site.google.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link mt-5 inline-block text-[0.9375rem]"
          >
            Find us on Google
          </a>
        </div>

        <nav aria-label="Services">
          <h2 className={heading}>Services</h2>
          <ul className="mt-5 grid gap-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={servicePath(s.slug)} className={item}>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Areas">
          <h2 className={heading}>Areas</h2>
          <ul className="mt-5 grid gap-3">
            {menuAreas.map((a) => (
              <li key={a.slug}>
                <Link href={areaPath(a.slug)} className={item}>
                  {areaShortName(a)}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/areas" className={`${item} font-bold`}>
                All {areas.length} areas
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className={heading}>Contact</h2>
          <ul className="mt-5 grid gap-4 text-[0.9375rem] text-white/70">
            <li className="flex gap-3">
              <Phone size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-sky" />
              <a href={telHref()} className="tabular font-semibold text-white hover:underline">
                {site.phone.primary.display}
              </a>
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon width={18} height={18} className="mt-0.5 shrink-0 text-sky" />
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Message us on WhatsApp
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-sky" />
              <a href={mailHref} className="break-all transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-sky" />
              <address className="not-italic">
                {site.address.line1}
                <br />
                {site.address.line2}, {site.address.district}
                <br />
                {site.address.city}, UAE
                <br />
                P.O. Box {site.address.poBox}
              </address>
            </li>
            <li className="flex gap-3">
              <Clock size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-sky" />
              <span>{site.hours.summary}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-4 py-6 text-[0.875rem] text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/about" className="transition-colors hover:text-white">
                About us
              </Link>
            </li>
            {visiblePosts.length > 0 && (
              <li>
                <Link href="/blog" className="transition-colors hover:text-white">
                  Guides
                </Link>
              </li>
            )}
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="transition-colors hover:text-white">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms and conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Space for the fixed contact bar on phones and tablets. */}
      <div className="h-[3.75rem] pb-[env(safe-area-inset-bottom)] lg:hidden" aria-hidden="true" />
    </footer>
  );
}
