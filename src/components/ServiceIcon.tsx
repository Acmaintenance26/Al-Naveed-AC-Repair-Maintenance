import {
  AirVent,
  ClipboardCheck,
  Gauge,
  Siren,
  Snowflake,
  Sparkles,
  Thermometer,
  Wind,
  Wrench,
  type LucideProps,
} from "lucide-react";
import type { ServiceIconKey } from "@/content/services";

const icons = {
  repair: Wrench,
  maintenance: ClipboardCheck,
  servicing: Sparkles,
  installation: AirVent,
  gas: Gauge,
  duct: Wind,
  emergency: Siren,
  coil: Snowflake,
  thermostat: Thermometer,
} satisfies Record<ServiceIconKey, unknown>;

export function ServiceIcon({ name, ...props }: { name: ServiceIconKey } & LucideProps) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" strokeWidth={1.75} {...props} />;
}
