"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Phone } from "lucide-react";
import { buttonClass, ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import {
  enquirySummary,
  LIMITS,
  PREFERRED_TIMES,
  validateEnquiry,
  type Enquiry,
  type EnquiryErrors,
  type EnquiryField,
  type EnquiryKind,
} from "@/lib/enquiry";
import { site, telHref, whatsappHref } from "@/lib/site";

export type Option = { value: string; label: string };

type Props = {
  kind: EnquiryKind;
  services: Option[];
  areas: string[];
  defaultService?: string;
  defaultLocation?: string;
  /** Tighter layout for sidebars. */
  compact?: boolean;
};

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent"; data: Enquiry }
  | { state: "fallback"; data: Enquiry; reason: "not_configured" | "failed" }
  | { state: "error"; message: string };

const FIELD_ORDER: EnquiryField[] = ["name", "phone", "service", "location", "message"];

export function EnquiryForm({
  kind,
  services,
  areas,
  defaultService = "",
  defaultLocation = "",
  compact = false,
}: Props) {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const startedAt = useRef(0);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  useEffect(() => {
    startedAt.current = performance.now();
  }, []);

  useEffect(() => {
    if (status.state === "sent" || status.state === "fallback") resultRef.current?.focus();
  }, [status.state]);

  const allowed = services.map((s) => s.value);
  const labelFor = (value: string) => services.find((s) => s.value === value)?.label ?? value;

  function read(): { values: Record<string, unknown>; honeypot: string } {
    const fd = new FormData(formRef.current!);
    return {
      values: {
        kind,
        name: fd.get("name"),
        phone: fd.get("phone"),
        service: fd.get("service"),
        location: fd.get("location"),
        message: fd.get("message"),
        preferredTime: fd.get("preferredTime") ?? "",
      },
      honeypot: String(fd.get("al_ref") ?? ""),
    };
  }

  function validate() {
    const { values, honeypot } = read();
    const result = validateEnquiry(values, allowed);
    if (!result.ok) {
      setErrors(result.errors);
      const first = FIELD_ORDER.find((f) => result.errors[f]);
      if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return null;
    }
    setErrors({});
    return { data: result.data, honeypot };
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const valid = validate();
    if (!valid) return;

    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...valid.data,
          al_ref: valid.honeypot,
          elapsedMs: Math.round(performance.now() - startedAt.current),
        }),
      });
      const body = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        code?: string;
        errors?: EnquiryErrors;
      };

      if (res.ok && body.ok) return setStatus({ state: "sent", data: valid.data });
      if (body.code === "invalid" && body.errors) {
        setErrors(body.errors);
        return setStatus({ state: "idle" });
      }
      if (body.code === "too_fast") {
        return setStatus({ state: "error", message: "That did not go through. Press send again." });
      }
      if (body.code === "rate_limited") {
        return setStatus({
          state: "error",
          message: `Too many requests from this connection. Call us on ${site.phone.primary.display} instead.`,
        });
      }
      setStatus({
        state: "fallback",
        data: valid.data,
        reason: body.code === "not_configured" ? "not_configured" : "failed",
      });
    } catch {
      setStatus({ state: "fallback", data: valid.data, reason: "failed" });
    }
  }

  function sendByWhatsApp() {
    const valid = validate();
    if (!valid) return;
    window.open(
      whatsappHref(`Hello Al Naveed AC.\n${enquirySummary(valid.data, labelFor(valid.data.service))}`),
      "_blank",
      "noopener,noreferrer",
    );
  }

  if (status.state === "sent") {
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        role="status"
        className="rounded-lg border border-line bg-white p-7 outline-none lg:p-9"
      >
        <CircleCheck size={36} aria-hidden="true" className="text-success" />
        <h3 className="mt-5 text-[1.5rem] leading-tight tracking-[-0.02em]">Request sent</h3>
        <p className="mt-3 text-ink">
          Thank you, {status.data.name}. We have your {kind === "booking" ? "booking request" : "enquiry"}{" "}
          and will call you on <span className="tabular font-semibold">{status.data.phone}</span> to{" "}
          {kind === "booking" ? "agree a time" : "follow up"}.
        </p>
        <p className="mt-3 text-ink">
          <strong className="text-navy">This is not a confirmed booking.</strong> A visit is confirmed
          once we have spoken to you.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={telHref()}>
            <Phone size={18} aria-hidden="true" />
            Urgent? Call now
          </ButtonLink>
        </div>
      </div>
    );
  }

  if (status.state === "fallback") {
    const message = `Hello Al Naveed AC.\n${enquirySummary(status.data, labelFor(status.data.service))}`;
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        role="alert"
        className="rounded-lg border border-line bg-white p-7 outline-none lg:p-9"
      >
        <CircleAlert size={36} aria-hidden="true" className="text-danger" />
        <h3 className="mt-5 text-[1.5rem] leading-tight tracking-[-0.02em]">
          Your request was not sent
        </h3>
        <p className="mt-3 text-ink">
          {status.reason === "not_configured"
            ? "Our online form is not connected at the moment."
            : "Something went wrong while sending the form."}{" "}
          Your details are ready to go by WhatsApp, or you can call us directly.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={whatsappHref(message)} variant="navy">
            <WhatsAppIcon className="text-whatsapp" />
            Send by WhatsApp
          </ButtonLink>
          <ButtonLink href={telHref()} variant="outline">
            <Phone size={18} aria-hidden="true" />
            <span className="tabular">{site.phone.primary.display}</span>
          </ButtonLink>
        </div>
        <button
          type="button"
          className="link mt-6 text-[0.9375rem]"
          onClick={() => setStatus({ state: "idle" })}
        >
          Go back to the form
        </button>
      </div>
    );
  }

  const sending = status.state === "sending";
  const label = "t-label mb-2 block text-navy";
  const errorText = "mt-2 flex gap-1.5 text-[0.875rem] font-semibold text-danger";
  const field = (name: EnquiryField) => ({
    id: `${id}-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
  });
  const error = (name: EnquiryField) =>
    errors[name] && (
      <p id={`${id}-${name}-error`} className={errorText}>
        <CircleAlert size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
        {errors[name]}
      </p>
    );

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className={`rounded-lg border border-line bg-white ${compact ? "p-6 lg:p-7" : "p-7 lg:p-9"}`}
    >
      <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor={`${id}-name`} className={label}>
            Your name
          </label>
          <input
            {...field("name")}
            type="text"
            autoComplete="name"
            maxLength={LIMITS.name}
            required
            className="field"
          />
          {error("name")}
        </div>

        <div>
          <label htmlFor={`${id}-phone`} className={label}>
            Phone number
          </label>
          <input
            {...field("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+971 50 000 0000"
            maxLength={LIMITS.phone}
            required
            className="field"
          />
          {error("phone")}
        </div>

        <div>
          <label htmlFor={`${id}-service`} className={label}>
            Service required
          </label>
          <select {...field("service")} defaultValue={defaultService} required className="field">
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          {error("service")}
        </div>

        <div>
          <label htmlFor={`${id}-location`} className={label}>
            Your location
          </label>
          <input
            {...field("location")}
            type="text"
            list={`${id}-areas`}
            defaultValue={defaultLocation}
            autoComplete="address-level2"
            placeholder="Area and building"
            maxLength={LIMITS.location}
            required
            className="field"
          />
          <datalist id={`${id}-areas`}>
            {areas.map((a) => (
              <option key={a} value={a} />
            ))}
          </datalist>
          {error("location")}
        </div>

        {kind === "booking" && (
          <div className={compact ? "" : "sm:col-span-2"}>
            <label htmlFor={`${id}-preferredTime`} className={label}>
              Preferred time <span className="font-medium text-slate">(optional)</span>
            </label>
            <select id={`${id}-preferredTime`} name="preferredTime" defaultValue="" className="field">
              <option value="">No preference</option>
              {PREFERRED_TIMES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor={`${id}-message`} className={label}>
            What is the AC doing?
          </label>
          <textarea
            {...field("message")}
            rows={compact ? 3 : 4}
            placeholder="For example: split unit in the bedroom runs but blows warm air"
            maxLength={LIMITS.message}
            required
            className="field"
          />
          {error("message")}
        </div>
      </div>

      {/* Hidden from people; bots that fill it in are ignored. */}
      <div className="absolute -left-[9999px] size-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${id}-ref`}>Leave this field empty</label>
        <input id={`${id}-ref`} name="al_ref" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status.state === "error" && (
        <p role="alert" className={`${errorText} mt-5 text-[0.9375rem]`}>
          <CircleAlert size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
          {status.message}
        </p>
      )}

      <div className={`mt-7 flex flex-col gap-3 ${compact ? "" : "sm:flex-row"}`}>
        <button type="submit" disabled={sending} className={buttonClass("primary", "lg")}>
          {sending && <LoaderCircle size={20} aria-hidden="true" className="animate-spin" />}
          {sending ? "Sending" : kind === "booking" ? "Send booking request" : "Send enquiry"}
        </button>
        <button
          type="button"
          onClick={sendByWhatsApp}
          disabled={sending}
          className={buttonClass("outline", "lg")}
        >
          <WhatsAppIcon className="text-whatsapp" />
          Send by WhatsApp instead
        </button>
      </div>

      <p className="mt-5 text-[0.875rem] leading-relaxed text-slate">
        {kind === "booking"
          ? "This sends a request. We call you to agree a time, and the booking is confirmed then."
          : "We use these details only to reply to you."}{" "}
        See our{" "}
        <Link href="/privacy-policy" className="link font-semibold">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
