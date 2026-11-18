import { BookOpen, Droplets, Gauge, Sun, Wrench } from "lucide-react";
import { AirLines } from "@/components/illustrations/Scenes";
import type { PostCategory } from "@/content/posts";
import { postIcons } from "@/content/postIcons";

const categoryIcons: Record<PostCategory, typeof Wrench> = {
  "AC Repair Tips": Wrench,
  "AC Maintenance": Gauge,
  "Air Conditioning Problems": Droplets,
  "HVAC Guides": BookOpen,
  "Dubai AC Advice": Sun,
};

/**
 * Drawn cover used as an article's featured image until real photography is supplied.
 * Pass `slug` so a topic-specific icon from `postIcons` is used when one exists; otherwise
 * falls back to a generic icon for the article's category.
 */
export function PostCover({
  category,
  slug,
  className = "",
}: {
  category: PostCategory;
  slug?: string;
  className?: string;
}) {
  const Icon = (slug && postIcons[slug]) || categoryIcons[category];
  return (
    <div
      className={`relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg bg-navy ${className}`}
      aria-hidden="true"
    >
      <AirLines className="absolute inset-0 size-full" />
      <span className="relative flex size-20 items-center justify-center rounded-full border border-sky/50 bg-navy-800 text-sky">
        <Icon size={34} strokeWidth={1.5} />
      </span>
    </div>
  );
}
