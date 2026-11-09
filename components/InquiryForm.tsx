"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { intentPresets, interests, roles, type Interest } from "@/lib/inquiry";

type Status = "idle" | "submitting" | "success" | "error";

export function InquiryForm({ initialIntent = "" }: { initialIntent?: string }) {
  const intent = initialIntent in intentPresets ? initialIntent : "";
  const preset = intent ? intentPresets[intent] : undefined;
  const [selected, setSelected] = useState<Set<Interest>>(() => new Set(preset?.interests ?? []));
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<string[]>([]);

  function toggle(interest: Interest) {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(interest)) next.delete(interest);
      else next.add(interest);
      return next;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setErrors([]);

    const payload = {
      company: data.get("company"),
      contactName: data.get("contactName"),
      role: data.get("role"),
      country: data.get("country"),
      city: data.get("city"),
      email: data.get("email"),
      phone: data.get("phone"),
      productInterest: Array.from(selected),
      quantity: data.get("quantity"),
      message: data.get("message"),
      intent: data.get("intent"),
      consent: data.get("consent") === "on",
      website: data.get("website"),
    };

    try {
      const response = await fetch("/api/inquiry/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json()) as { ok?: boolean; errors?: string[] };
      if (!response.ok || !body.ok) {
        setStatus("error");
        setErrors(body.errors?.length ? body.errors : ["The inquiry could not be sent. Try again, or use the phone number below."]);
        return;
      }
      setStatus("success");
      form.reset();
      setSelected(new Set());
    } catch {
      setStatus("error");
      setErrors(["The inquiry could not be sent. Try again, or use the phone number below."]);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-white p-6" role="status">
        <h3 className="text-xl font-semibold text-navy-950">Inquiry received</h3>
        <p className="mt-3 text-sm leading-7 text-ink/80">
          We have your inquiry. We will reply by email or phone. The target response time is TBD.
          You can keep browsing the PPF series or the wholesale outline while you wait.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/products/ppf/" className="rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white">
            Browse PPF
          </Link>
          <Link href="/wholesale/" className="rounded-full border border-navy-900 px-4 py-2 text-sm font-semibold">
            Wholesale policy
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form id="inquiry-form" onSubmit={onSubmit} className="rounded-2xl border border-line bg-white p-5 sm:p-7" noValidate>
      <h2 className="text-2xl font-semibold tracking-tight text-navy-950">Send an inquiry</h2>
      <p className="mt-2 text-sm leading-6 text-ink/75">
        The more complete the form, the faster a quote can be prepared. Fields marked * are required.
      </p>
      {preset ? (
        <p className="mt-4 rounded-xl bg-sand px-4 py-3 text-sm text-navy-900">
          {preset.banner}{" "}
          {intent === "dealer" ? (
            <Link className="font-semibold underline" href="/dealers/apply/">
              Dealer application outline
            </Link>
          ) : null}
        </p>
      ) : null}
      {errors.length ? (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">
          <p className="font-semibold">Submission failed. Please try again, or use the backup channels below (email is still TBD).</p>
          <ul className="mt-2 list-disc pl-5">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Company name *" name="company" required placeholder="Shop or company name" />
        <Field label="Contact name *" name="contactName" required placeholder="Who should we ask for?" />
        <label className="grid gap-1 text-sm font-medium">
          Your role *
          <select name="role" required defaultValue="" className="rounded-lg border border-line bg-paper px-3 py-2 font-normal">
            <option value="" disabled>
              Shop owner / purchasing / install lead / dealer / other
            </option>
            {roles.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </label>
        <Field label="Country / region *" name="country" required placeholder="Example: China, United States, a Gulf market" />
        <Field label="City" name="city" placeholder="Helps us judge freight and coverage" />
        <Field label="Work email *" name="email" type="email" required placeholder="For the quote and documents" autoComplete="email" />
        <Field label="Phone / WhatsApp" name="phone" type="tel" placeholder="Include the country code" autoComplete="tel" />
        <Field label="Estimated volume / MOQ need" name="quantity" placeholder="Monthly use or first-order rolls. “To be discussed” is fine." />
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-medium">Product interest *</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {interests.map((interest) => (
            <label key={interest} className="flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm">
              <input
                type="checkbox"
                checked={selected.has(interest)}
                onChange={() => toggle(interest)}
              />
              {interest}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-4 grid gap-1 text-sm font-medium">
        Notes
        <textarea
          name="message"
          rows={5}
          placeholder="Vehicle project, sample request, regional dealership, or timing."
          className="rounded-lg border border-line bg-paper px-3 py-2 font-normal"
        />
      </label>

      <input type="hidden" name="intent" value={intent in intentPresets ? intent : ""} />

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="mt-4 flex items-start gap-2 text-sm">
        <input type="checkbox" name="consent" className="mt-1" required />
        <span>I agree that PanPan Auto may contact me about this inquiry. *</span>
      </label>
      <p className="mt-3 text-xs leading-5 text-ink/65">
        We use this information only for this wholesale or partnership conversation. We do not sell it to unrelated third parties. Privacy policy URL: TBD.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit inquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-1 text-sm font-medium">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="rounded-lg border border-line bg-paper px-3 py-2 font-normal"
      />
    </label>
  );
}
