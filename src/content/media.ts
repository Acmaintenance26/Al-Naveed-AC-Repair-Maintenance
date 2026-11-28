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
  /** Photographer and licence, when the photo needs a credit. */
  credit?: string;
  /** Caption shown under an area photo, in place of the drawn scene's caption. */
  caption?: string;
  /** Name shown before the caption, when the photo shows something other than the drawn scene's landmark. */
  name?: string;
};

export type MediaSlot =
  "hero" | "residential" | "commercial" | "about" | "technician";

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

/**
 * Real photos of each area's landmark, keyed by area slug. While a slug has no entry the page
 * and its thumbnail show the drawn landmark scene instead.
 *
 * To use a photo: save it in /public/images/areas/<slug>.jpg (around 1600px wide) and add an
 * entry here. Use only photos you own or that are licensed for this use, and add the credit
 * if the licence requires one.
 */
export const areaPhotos: Record<string, Photo> = {
  "business-bay": {
    src: "/images/areas/business-bay.jpg",
    alt: "Towers along the Dubai Canal in Business Bay, with Burj Khalifa rising in the distance",
    width: 1200,
    height: 803,
    caption:
      "Business Bay towers along the Dubai Canal, with Burj Khalifa in the distance.",
  },
  naif: {
    src: "/images/areas/naif.jpg",
    alt: "Entrance to Naif Market in Deira, with arched walkways, shops and Arabic and English signage",
    width: 1280,
    height: 720,
    name: "Naif Market",
    caption:
      "The Naif Market entrance, one of the best-known buildings in Naif.",
  },
  "palm-jumeirah": {
    src: "/images/areas/palm-jumeirah.jpg",
    alt: "Aerial view of Palm Jumeirah, with the fronds, the trunk and the crescent surrounded by blue sea",
    width: 820,
    height: 497,
    name: "Palm Jumeirah",
    caption:
      "Aerial view of the island: the trunk, the fronds and the crescent.",
  },
  jumeirah: {
    src: "/images/areas/jumeirah.jpg",
    alt: "Burj Al Arab seen from a Jumeirah beach with sand, sea and rows of umbrellas",
    width: 800,
    height: 599,
    caption: "Burj Al Arab seen from the beach at Jumeirah.",
  },
  "al-barsha": {
    src: "/images/areas/al-barsha.jpg",
    alt: "The indoor snow slope and chairlifts at Ski Dubai inside Mall of the Emirates",
    width: 1040,
    height: 580,
    caption: "The indoor snow slope at Ski Dubai, inside Mall of the Emirates.",
  },
  jlt: {
    src: "/images/areas/jlt.jpg",
    alt: "Towers around a lake in Jumeirah Lakes Towers, with Almas Tower in the centre",
    width: 1500,
    height: 1000,
    caption: "Towers around a JLT lake, with Almas Tower in the middle.",
  },
  jvc: {
    src: "/images/areas/jvc.jpg",
    alt: "Aerial view of the circular park and ring of white villas in Jumeirah Village Circle, with towers behind",
    width: 960,
    height: 640,
    caption:
      "Aerial view of a circle of villas around a park in Jumeirah Village Circle.",
  },
  deira: {
    src: "/images/areas/deira.jpg",
    alt: "Wooden abra boats and dhows on Dubai Creek in Deira, with old buildings and a minaret behind",
    width: 1800,
    height: 1200,
    caption: "Abras and dhows on Dubai Creek, Deira.",
  },
  "downtown-dubai": {
    src: "/images/areas/downtown-dubai.jpg",
    alt: "Burj Khalifa rising above the apartment towers and low-rise buildings of Downtown Dubai",
    width: 1200,
    height: 901,
    caption: "Burj Khalifa and the apartment towers of Downtown Dubai.",
  },
  "dubai-marina": {
    src: "/images/areas/dubai-marina.jpg",
    alt: "Waterfront walkway at Dubai Marina with high-rise towers across the water and cafes on the right",
    width: 1440,
    height: 900,
    caption: "The Marina waterfront walk, with the towers across the water.",
  },
};
