import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Crumb } from "@/lib/schema";

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.875rem] font-medium text-white/65">
        <li>
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
        </li>
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              <ChevronRight size={14} aria-hidden="true" className="text-white/35" />
              {last ? (
                <span aria-current="page" className="text-white/90">
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="transition-colors hover:text-white">
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
