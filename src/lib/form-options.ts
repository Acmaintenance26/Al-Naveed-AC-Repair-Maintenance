import { areas, areaShortName } from "@/content/areas";
import { services } from "@/content/services";
import type { Option } from "@/components/forms/EnquiryForm";

export const serviceOptions: Option[] = [
  ...services.map((s) => ({ value: s.slug, label: s.name })),
  { value: "other", label: "Not sure / something else" },
];

export const areaOptions: string[] = areas.map((a) => areaShortName(a));
