import { CircleAlert } from "lucide-react";

/** Shown only when draft preview is switched on. Never appears in production. */
export function DraftNotice() {
  return (
    <p className="flex gap-3 rounded-lg border border-[#E9C46A] bg-[#FFF8E6] p-5 text-[0.9375rem] text-[#5C4400]">
      <CircleAlert size={20} aria-hidden="true" className="mt-0.5 shrink-0" />
      <span>
        <strong>Draft preview.</strong> This article has not been approved by Al Naveed and is
        hidden from the public site and from search engines until it is.
      </span>
    </p>
  );
}
