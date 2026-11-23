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

export type MediaSlot = "hero" | "residential" | "commercial" | "about" | "technician";

export const media: Record<MediaSlot, Photo | null> = {
  // The hero keeps the drawn cooling scene.
  hero: null,
  technician: {
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

/**
 * Article cover photos, keyed by post slug. When a slug has no entry here, `PostCover`
 * shows the drawn icon cover instead.
 */
export const postPhotos: Record<string, Photo> = {
  "ac-freezing-up-causes-and-fixes": {
    src: "/images/ac-freezing-outdoor-unit-ice.jpg",
    alt: "Air conditioner outdoor unit with frost and ice covering its copper pipes and coil, with the Dubai skyline behind",
    width: 1200,
    height: 670,
  },
  "reduce-ac-electricity-bill-dubai": {
    src: "/images/reduce-ac-electricity-bill-infographic.jpg",
    alt: "Infographic showing where air conditioning electricity goes in a Dubai home and the settings, habits and upkeep changes that cut the bill",
    width: 1200,
    height: 675,
  },
  "how-to-clean-ac-filters-properly": {
    src: "/images/how-to-clean-ac-filters-dirty-vs-clean.jpg",
    alt: "Side-by-side comparison of a dust-clogged AC filter and the same filter washed clean under a tap",
    width: 1200,
    height: 675,
  },
  "signs-ac-needs-professional-attention": {
    src: "/images/signs-ac-needs-professional-attention.jpg",
    alt: "Infographic listing seven signs an AC needs a technician: three safety signs to switch off for and four performance signs to repair soon",
    width: 1200,
    height: 675,
  },
  "split-ac-vs-central-ac-dubai": {
    src: "/images/split-ac-vs-central-ac-dubai.jpg",
    alt: "Three Dubai AC systems compared: split AC on a villa balcony, central ducted AC with rooftop unit, and district cooling fan coil unit in a high-rise",
    width: 1200,
    height: 675,
  },
  "why-is-my-ac-making-noise": {
    src: "/images/why-is-my-ac-making-noise.jpg",
    alt: "Guide to AC noises: clicks, buzzes, hisses, and bangs and clanks, with common causes and what to do for each",
    width: 1200,
    height: 675,
  },
  "ac-coil-cleaning-benefits": {
    src: "/images/ac-coil-cleaning-benefits.jpg",
    alt: "Comparison of a clean AC coil with efficient airflow and a dust-clogged coil that cools less and costs more to run",
    width: 1200,
    height: 675,
  },
  "prepare-ac-for-dubai-summer": {
    src: "/images/prepare-ac-for-dubai-summer.jpg",
    alt: "Pre-season checklist for getting an AC ready for a Dubai summer, split into DIY checks and jobs for a technician",
    width: 1200,
    height: 675,
  },
  "thermostat-problems-affecting-ac": {
    src: "/images/thermostat-problems-affecting-ac.jpg",
    alt: "Infographic comparing thermostat problems with a genuinely failing AC, and the checks that tell the two apart",
    width: 1200,
    height: 675,
  },
  "does-your-building-need-duct-cleaning": {
    src: "/images/does-your-building-need-duct-cleaning.jpg",
    alt: "Signs of dusty air ducts, such as clogged vents and dust on surfaces, next to a technician cleaning ductwork",
    width: 1200,
    height: 675,
  },
  "why-does-my-ac-smell-bad": {
    src: "/images/why-does-my-ac-smell-bad.jpg",
    alt: "Guide to AC smells: musty, burning, sewage and dusty odours, with the cause and fix for each",
    width: 1200,
    height: 675,
  },
  "what-counts-as-an-ac-emergency": {
    src: "/images/what-counts-as-an-ac-emergency.jpg",
    alt: "Guide to what counts as an AC emergency to call about now and what can wait until morning, set against the Dubai skyline",
    width: 1200,
    height: 675,
  },
  "installing-a-new-ac-what-to-expect": {
    src: "/images/installing-a-new-ac-what-to-expect.jpg",
    alt: "AC installation process in Dubai from site survey to handover, with questions to ask an installer before work starts",
    width: 1200,
    height: 675,
  },
  "what-affects-ac-repair-cost": {
    src: "/images/what-affects-ac-repair-cost.jpg",
    alt: "Technician testing an outdoor AC unit on a Dubai balcony, with the five factors that affect the cost of an AC repair",
    width: 1200,
    height: 675,
  },
  "are-ac-maintenance-contracts-worth-it": {
    src: "/images/are-ac-maintenance-contracts-worth-it.jpg",
    alt: "Technician servicing rooftop AC units in Dubai, with annual maintenance contracts compared against as-needed repairs",
    width: 1200,
    height: 675,
  },
};
