/**
 * Per-article icon for the drawn post cover (`PostCover`), one step more specific than the
 * category icon it falls back to. These are line icons, not photographs — the site has no
 * stock photography (see AGENTS.md), so a topic-relevant icon on the navy `AirLines` cover is
 * the "featured image" for a guide article until real photography is supplied.
 *
 * Add a slug here when it deserves something more specific than its category's default icon
 * (`PostCover`'s own `icons` map). Omit it and the category default is used.
 */
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Calculator,
  CalendarCheck,
  CircleAlert,
  FileCheck,
  Filter,
  GitCompare,
  Hammer,
  Siren,
  Snowflake,
  Sparkles,
  Thermometer,
  Volume2,
  Wind,
  Zap,
} from "lucide-react";

export const postIcons: Record<string, LucideIcon> = {
  "ac-freezing-up-causes-and-fixes": Snowflake,
  "reduce-ac-electricity-bill-dubai": Zap,
  "how-to-clean-ac-filters-properly": Filter,
  "signs-ac-needs-professional-attention": AlertTriangle,
  "split-ac-vs-central-ac-dubai": GitCompare,
  "why-is-my-ac-making-noise": Volume2,
  "ac-coil-cleaning-benefits": Sparkles,
  "prepare-ac-for-dubai-summer": CalendarCheck,
  "thermostat-problems-affecting-ac": Thermometer,
  "does-your-building-need-duct-cleaning": Wind,
  "why-does-my-ac-smell-bad": CircleAlert,
  "what-counts-as-an-ac-emergency": Siren,
  "installing-a-new-ac-what-to-expect": Hammer,
  "what-affects-ac-repair-cost": Calculator,
  "are-ac-maintenance-contracts-worth-it": FileCheck,
};
