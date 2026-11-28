"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ButtonLink } from "@/components/ui/Button";
import { LogoMark, WhatsAppIcon } from "@/components/ui/icons";
import type { ServiceIconKey } from "@/content/services";
import { site, telHref, whatsappHref } from "@/lib/site";

export type HeaderNav = {
  services: { href: string; name: string; icon: ServiceIconKey }[];
  areas: { href: string; name: string }[];
  areaCount: number;
  showBlog: boolean;
};

export function Logo({ onClick, tone = "light" }: { onClick?: () => void; tone?: "light" | "dark" }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex shrink-0 items-center gap-3"
    >
      <LogoMark size={40} />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[1.1875rem] font-extrabold tracking-[-0.03em] ${tone === "dark" ? "text-white" : "text-navy"}`}
        >
          Al Naveed
        </span>
        <span
          className={`mt-1 text-[0.75rem] font-semibold tracking-[0.01em] ${tone === "dark" ? "text-white/70" : "text-slate"}`}
        >
          AC Repair &amp; Maintenance
        </span>
      </span>
      <span className="sr-only">, home page</span>
    </Link>
  );
}

export function Header({ nav }: { nav: HeaderNav }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuId = useId();
  const areasMenuId = useId();
  const mobileId = useId();

  const closeAll = () => {
    setServicesOpen(false);
    setAreasOpen(false);
    setMobileOpen(false);
  };

  useEffect(() => {
    if (!servicesOpen && !areasOpen && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setAreasOpen(false);
        setMobileOpen(false);
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
        setAreasOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [servicesOpen, areasOpen, mobileOpen]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const links = [
    { href: "/about", label: "About us" },
    ...(nav.showBlog ? [{ href: "/blog", label: "Guides" }] : []),
    { href: "/contact", label: "Contact" },
  ];

  const navLink =
    "rounded-sm px-3 py-2 text-[0.9688rem] font-semibold text-navy transition-colors hover:text-blue";

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="shell flex h-[4.25rem] items-center justify-between gap-4 lg:h-[4.75rem]">
        <Logo onClick={closeAll} />

        <nav ref={navRef} aria-label="Main" className="hidden items-center lg:flex">
          <div className="relative">
            <button
              type="button"
              className={`${navLink} flex items-center gap-1.5`}
              aria-expanded={servicesOpen}
              aria-controls={menuId}
              onClick={() => {
                setServicesOpen((v) => !v);
                setAreasOpen(false);
              }}
            >
              Services
              <ChevronDown
                size={16}
                aria-hidden="true"
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              id={menuId}
              hidden={!servicesOpen}
              className="absolute left-1/2 top-full mt-3 w-[38rem] -translate-x-1/2 rounded-lg border border-line bg-white p-3 shadow-[0_24px_60px_-20px_rgb(16_28_44/0.28)]"
            >
              <ul className="grid grid-cols-2 gap-1">
                {nav.services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      onClick={closeAll}
                      className="flex items-center gap-3 rounded-md px-3 py-2.5 text-[0.9688rem] font-semibold text-navy transition-colors hover:bg-mist hover:text-blue"
                    >
                      <ServiceIcon name={s.icon} size={20} className="shrink-0 text-blue" />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2 border-t border-line px-3 pt-3 pb-1">
                <Link href="/services" onClick={closeAll} className="link text-[0.9375rem]">
                  See all services
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <button
              type="button"
              className={`${navLink} flex items-center gap-1.5`}
              aria-expanded={areasOpen}
              aria-controls={areasMenuId}
              onClick={() => {
                setAreasOpen((v) => !v);
                setServicesOpen(false);
              }}
            >
              Areas
              <ChevronDown
                size={16}
                aria-hidden="true"
                className={`transition-transform duration-200 ${areasOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              id={areasMenuId}
              hidden={!areasOpen}
              className="absolute left-1/2 top-full mt-3 w-[34rem] -translate-x-1/2 rounded-lg border border-line bg-white p-3 shadow-[0_24px_60px_-20px_rgb(16_28_44/0.28)]"
            >
              <ul className="grid grid-cols-3 gap-1">
                {nav.areas.map((a) => (
                  <li key={a.href}>
                    <Link
                      href={a.href}
                      onClick={closeAll}
                      className="flex rounded-md px-3 py-2.5 text-[0.9688rem] font-semibold text-navy transition-colors hover:bg-mist hover:text-blue"
                    >
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2 border-t border-line px-3 pt-3 pb-1">
                <Link href="/areas" onClick={closeAll} className="link text-[0.9375rem]">
                  All {nav.areaCount} areas
                </Link>
              </div>
            </div>
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={closeAll} className={navLink}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="hidden lg:block">
            <ButtonLink href={whatsappHref()} variant="outline" aria-label="Message us on WhatsApp">
              <WhatsAppIcon className="text-whatsapp" />
              <span className="hidden xl:inline">WhatsApp</span>
            </ButtonLink>
          </div>
          <div className="hidden sm:block">
            <ButtonLink href={telHref()} data-cta="header-call">
              <Phone size={18} aria-hidden="true" />
              <span>
                <span className="sr-only">Call now: </span>
                <span className="tabular">{site.phone.primary.display}</span>
              </span>
            </ButtonLink>
          </div>
          <a
            href={telHref()}
            data-cta="header-call-mobile"
            aria-label={`Call now: ${site.phone.primary.display}`}
            className="inline-flex size-12 items-center justify-center rounded-md bg-blue text-white sm:hidden"
          >
            <Phone size={20} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex size-12 items-center justify-center rounded-md border border-[#b8c4d3] text-navy lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={mobileId}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id={mobileId}
        hidden={!mobileOpen}
        className="absolute inset-x-0 top-full z-50 h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain border-t border-line bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="shell flex min-h-full flex-col py-6">
          <details className="group border-b border-line" open>
            <summary className="flex min-h-14 items-center justify-between text-lg font-bold text-navy">
              Services
              <ChevronDown
                size={20}
                aria-hidden="true"
                className="transition-transform group-open:rotate-180"
              />
            </summary>
            <ul className="pb-4">
              {nav.services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    onClick={closeAll}
                    className="flex min-h-12 items-center gap-3 font-semibold text-ink"
                  >
                    <ServiceIcon name={s.icon} size={20} className="shrink-0 text-blue" />
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" onClick={closeAll} className="link flex min-h-12 items-center">
                  See all services
                </Link>
              </li>
            </ul>
          </details>
          <details className="group border-b border-line">
            <summary className="flex min-h-14 items-center justify-between text-lg font-bold text-navy">
              Areas we serve
              <ChevronDown
                size={20}
                aria-hidden="true"
                className="transition-transform group-open:rotate-180"
              />
            </summary>
            <ul className="grid grid-cols-2 pb-4">
              {nav.areas.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    onClick={closeAll}
                    className="flex min-h-12 items-center font-semibold text-ink"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
              <li className="col-span-2">
                <Link href="/areas" onClick={closeAll} className="link flex min-h-12 items-center">
                  All {nav.areaCount} areas
                </Link>
              </li>
            </ul>
          </details>
          {links
            .filter((l) => l.href !== "/areas")
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeAll}
                className="flex min-h-14 items-center border-b border-line text-lg font-bold text-navy"
              >
                {l.label}
              </Link>
            ))}

          <div className="mt-auto grid gap-3 pt-8">
            <ButtonLink href="/book" size="lg" variant="navy" onClick={closeAll}>
              Book a service
            </ButtonLink>
            <ButtonLink href={whatsappHref()} size="lg" variant="outline">
              <WhatsAppIcon className="text-whatsapp" />
              WhatsApp us
            </ButtonLink>
            <p className="t-small pt-1 text-center text-slate">{site.hours.summary}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
