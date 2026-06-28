"use client";

import { useState } from "react";
import { CONTACT } from "@/constants/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  title?: string;
  submitLabel?: string;
  className?: string;
  mode?: "contact" | "demo";
}

export function ContactForm({
  title = "Let's Start the Conversation",
  submitLabel = "Submit Request",
  className,
  mode = "contact",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    if (!data.get("fullName")) newErrors.fullName = "Full name is required";

    if (mode === "demo") {
      if (!data.get("companyName")) newErrors.companyName = "Company name is required";
      if (!data.get("workEmail")) newErrors.workEmail = "Email is required";
      if (!data.get("phone")) newErrors.phone = "Phone number is required";
      else {
        const phone = String(data.get("phone")).replace(/\D/g, "");
        if (phone.length < 10 || phone.length > 15) {
          newErrors.phone = "Enter a valid phone number (10–15 digits)";
        }
      }
    } else {
      if (!data.get("workEmail")) newErrors.workEmail = "Work email is required";
      if (!data.get("phone")) newErrors.phone = "Phone number is required";
      if (!data.get("industry")) newErrors.industry = "Please select an industry";
      if (!data.get("companySize")) newErrors.companySize = "Please select company size";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={cn("rounded-2xl border border-border bg-white p-8 text-center shadow-lg", className)}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-text">
          {mode === "demo" ? "Thank You!" : "Thank you for contacting us"}
        </h3>
        <p className="text-text-secondary">
          {mode === "demo"
            ? "Your demo request has been submitted successfully. Our team will contact you shortly."
            : "Our team will get in touch with you shortly."}
        </p>
      </div>
    );
  }

  return (
    <div className={cn("rounded-2xl border border-border bg-white p-6 shadow-lg lg:p-8", className)}>
      <h2 className="mb-6 text-xl font-bold text-text">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <Field label="Full name" name="fullName" required error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className="form-input"
          />
        </Field>

        {mode === "demo" ? (
          <>
            <Field label="Company name" name="companyName" required error={errors.companyName}>
              <input
                id="companyName"
                name="companyName"
                type="text"
                autoComplete="organization"
                placeholder="Your company name"
                className="form-input"
              />
            </Field>
            <Field label="Email" name="workEmail" required error={errors.workEmail}>
              <input
                id="workEmail"
                name="workEmail"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="form-input"
              />
            </Field>
            <Field label="Phone number" name="phone" required error={errors.phone}>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="10–15 digit phone number"
                className="form-input"
              />
            </Field>
            <Field label="Message" name="requirements">
              <textarea
                id="requirements"
                name="requirements"
                rows={4}
                placeholder="Goals, timelines, locations, integrations…"
                className="form-input resize-none"
              />
            </Field>
          </>
        ) : (
          <>
            <Field label="Company website" name="companyWebsite">
              <input
                id="companyWebsite"
                name="companyWebsite"
                type="url"
                autoComplete="url"
                placeholder="https://"
                className="form-input"
              />
            </Field>
            <Field label="Work email" name="workEmail" required error={errors.workEmail}>
              <input
                id="workEmail"
                name="workEmail"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="form-input"
              />
            </Field>
            <Field label="Phone number" name="phone" required error={errors.phone}>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="10-digit mobile number"
                className="form-input"
              />
            </Field>
            <Field label="Industry" name="industry" required error={errors.industry}>
              <select id="industry" name="industry" className="form-input" defaultValue="">
                <option value="" disabled>
                  Select industry
                </option>
                {CONTACT.industries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Company size" name="companySize" required error={errors.companySize}>
              <select id="companySize" name="companySize" className="form-input" defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                {CONTACT.companySizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Describe your requirements" name="requirements">
              <textarea
                id="requirements"
                name="requirements"
                rows={4}
                placeholder="Tell us about your business and what you're looking for..."
                className="form-input resize-none"
              />
            </Field>
          </>
        )}

        <Button type="submit" className="w-full" size="lg">
          {submitLabel}
        </Button>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  required,
  error,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-text">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
