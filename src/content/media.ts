/**
 * Photo slots.
 *
 * The site ships with drawn illustrations because no photographs of Al Naveed's own
 * technicians, vehicles or workshop were available. Stock photos of other companies'
 * staff would misrepresent the business, so none are used.
 *
 * To use a real photo: put the file in /public/images, then fill in the slot below.
 * When a slot is null the illustration is shown instead.
 *
 * Recommended: JPEG or WebP, at least 1600px on the long edge, shot in landscape.
 */

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type MediaSlot = "hero" | "residential" | "commercial" | "about";

export const media: Record<MediaSlot, Photo | null> = {
  // Example:
  // hero: { src: "/images/technician-servicing-split-ac.jpg", alt: "Al Naveed technician cleaning the filter of a wall-mounted air conditioner", width: 1600, height: 1200 },
  hero: null,
  residential: null,
  commercial: null,
  about: null,
};
