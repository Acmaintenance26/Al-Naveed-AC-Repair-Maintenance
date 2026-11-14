/**
 * Photo slots.
 *
 * These are real photos supplied by the business. The source files were around
 * 800px on the long edge (phone/WhatsApp quality), so they are used at that size
 * rather than upscaled. Replace with higher-resolution originals when available.
 *
 * To use a different photo: put the file in /public/images, then update the slot
 * below. When a slot is null the drawn illustration is shown instead.
 */

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type MediaSlot = "hero" | "residential" | "commercial" | "about";

export const media: Record<MediaSlot, Photo | null> = {
  hero: {
    src: "/images/technician-rooftop-condenser-units.jpg",
    alt: "Al Naveed AC technician servicing outdoor condenser units on a Dubai rooftop",
    width: 800,
    height: 777,
  },
  residential: {
    src: "/images/wall-mounted-split-unit-dubai-home.jpg",
    alt: "Wall-mounted split air conditioner installed in a Dubai home",
    width: 800,
    height: 406,
  },
  commercial: {
    src: "/images/ac-control-panel-wiring-repair.jpg",
    alt: "Close-up of an air conditioning unit's control board and wiring during a repair",
    width: 800,
    height: 406,
  },
  about: {
    src: "/images/al-naveed-workshop-storefront-naif.jpg",
    alt: "The Al Naveed AC workshop and showroom front on 28C Street, Naif, Deira",
    width: 812,
    height: 499,
  },
};
