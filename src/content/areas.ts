import type { Faq } from "./services";
import { alNahda } from "./area-pages/al-nahda";
import { alQuoz } from "./area-pages/al-quoz";
import { arabianRanches } from "./area-pages/arabian-ranches";
import { barshaHeights } from "./area-pages/barsha-heights";
import { burDubai } from "./area-pages/bur-dubai";
import { dubaiHillsEstate } from "./area-pages/dubai-hills-estate";
import { internationalCity } from "./area-pages/international-city";
import { karama } from "./area-pages/karama";
import { mirdif } from "./area-pages/mirdif";
import { satwa } from "./area-pages/satwa";
import { alBarsha } from "./area-pages/al-barsha";
import { businessBay } from "./area-pages/business-bay";
import { deira } from "./area-pages/deira";
import { downtownDubai } from "./area-pages/downtown-dubai";
import { dubaiMarina } from "./area-pages/dubai-marina";
import { jlt } from "./area-pages/jlt";
import { jumeirah } from "./area-pages/jumeirah";
import { jvc } from "./area-pages/jvc";
import { naif } from "./area-pages/naif";
import { palmJumeirah } from "./area-pages/palm-jumeirah";

/**
 * Drawn landmark scenes available for area pages (see AreaScenes.tsx).
 * Add a name here and a matching scene when a new area needs its own picture.
 */
export type AreaScene =
  | "souq"
  | "creek"
  | "burj"
  | "canal"
  | "burj-al-arab"
  | "ski-mall"
  | "circle"
  | "lakes"
  | "marina"
  | "atlantis"
  | "warehouses"
  | "villas"
  | "heights"
  | "market"
  | "street"
  | "windtowers"
  | "pond"
  | "hills"
  | "ranches"
  | "clusters";

/** One H2 block of an area page. Items render as H3 + paragraph. */
export type AreaSection = {
  /** Anchor id, used by the "On this page" list. */
  id: string;
  title: string;
  paragraphs?: string[];
  items?: { title: string; text: string }[];
  points?: string[];
  /** Paragraphs shown after the items or points. */
  closing?: string[];
};

export type Area = {
  slug: string;
  name: string;
  /** Short label for menus and chips when `name` is long, e.g. "JVC". */
  shortName?: string;
  /** One line used in lists and cards. */
  blurb: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  /** Direct answer shown at the top of the page; written to be quoted by search and AI answers. */
  quickAnswer: string;
  /** The well-known place the illustration shows. Used as the page image, thumbnail and caption. */
  landmark: { name: string; scene: AreaScene; alt: string; caption: string };
  sections: AreaSection[];
  /** Service slugs most relevant here, in order. */
  services: string[];
  faqs: Faq[];
  nearby: string[];
};

export const areas: Area[] = [
  naif,
  deira,
  downtownDubai,
  businessBay,
  jumeirah,
  alBarsha,
  jvc,
  jlt,
  dubaiMarina,
  palmJumeirah,
  alQuoz,
  mirdif,
  barshaHeights,
  karama,
  satwa,
  burDubai,
  alNahda,
  dubaiHillsEstate,
  arabianRanches,
  internationalCity,
];

/** Shown first on the homepage and in the menu. */
const featuredSlugs = [
  "downtown-dubai",
  "dubai-marina",
  "business-bay",
  "jumeirah",
  "palm-jumeirah",
  "jlt",
  "al-barsha",
  "jvc",
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);

export const areaPath = (slug: string) => `/areas/${slug}`;

export const areaShortName = (area: Area) => area.shortName ?? area.name;

export const featuredAreas: Area[] = featuredSlugs
  .map(getArea)
  .filter((a): a is Area => a !== undefined);

/** Areas listed in the menu and footer: featured first, then the rest, capped so the lists stay short. */
export const menuAreas: Area[] = [
  ...featuredAreas,
  ...areas.filter((a) => !featuredSlugs.includes(a.slug)),
].slice(0, 12);
