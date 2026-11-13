import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-md font-bold tracking-[-0.01em] whitespace-nowrap transition-colors duration-150 disabled:opacity-60 disabled:pointer-events-none";

const sizes = {
  md: "min-h-12 px-5 text-base",
  lg: "min-h-14 px-7 text-[1.0625rem]",
};

const variants = {
  /** Main action on light backgrounds. */
  primary: "bg-blue text-white hover:bg-blue-700",
  /** Main action on navy backgrounds. */
  sky: "bg-sky text-navy hover:bg-sky-200",
  /** Secondary action on light backgrounds. */
  outline: "border border-[#b8c4d3] bg-white text-navy hover:border-navy",
  /** Secondary action on navy backgrounds. */
  outlineDark: "border border-white/30 text-white hover:bg-white/10",
  navy: "bg-navy text-white hover:bg-navy-700",
  white: "bg-white text-navy hover:bg-mist",
};

export type ButtonVariant = keyof typeof variants;

export function buttonClass(
  variant: ButtonVariant = "primary",
  size: keyof typeof sizes = "md",
  className = "",
) {
  return `${base} ${sizes[size]} ${variants[variant]} ${className}`;
}

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

/** A link styled as a button. Internal paths use client-side navigation. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  const cls = buttonClass(variant, size, className);
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
