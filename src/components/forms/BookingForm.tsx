"use client";

import { useSearchParams } from "next/navigation";
import { EnquiryForm, type Option } from "@/components/forms/EnquiryForm";

/** Booking form that preselects a service or area from the URL, e.g. /book?service=ac-repair-dubai. */
export function BookingForm({ services, areas }: { services: Option[]; areas: string[] }) {
  const params = useSearchParams();
  const requested = params.get("service") ?? "";
  const service = services.some((s) => s.value === requested) ? requested : "";
  const area = params.get("area") ?? "";
  const location = areas.includes(area) ? area : "";

  return (
    <EnquiryForm
      key={`${service}|${location}`}
      kind="booking"
      services={services}
      areas={areas}
      defaultService={service}
      defaultLocation={location}
    />
  );
}
