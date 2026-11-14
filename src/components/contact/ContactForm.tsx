"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AlertCircle, ArrowRight, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/common/Button";

const enquiryTypes = [
  "General enquiry",
  "Product enquiry",
  "Distribution enquiry",
  "Manufacturing / quality",
  "Other",
];

interface FormValues {
  name: string;
  email: string;
  phone: string;
  product: string;
  enquiryType: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  product: "",
  enquiryType: "General enquiry",
  message: "",
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product") ?? "";

  const [values, setValues] = useState<FormValues>(() => ({
    ...initialValues,
    product: productParam,
    enquiryType: productParam ? "Product enquiry" : "General enquiry",
    message: productParam
      ? `I would like to enquire about ${productParam}.`
      : "",
  }));
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};

    if (values.name.trim().length < 2) {
      next.name = "Please enter your full name (at least 2 characters).";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    if (values.phone.trim() && !/^[+()\d\s-]{7,20}$/.test(values.phone.trim())) {
      next.phone = "Please use a valid phone format, or leave this field blank.";
    }

    if (values.message.trim().length < 10) {
      next.message = "Please include a message of at least 10 characters.";
    }

    return next;
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(`contact-${firstField}`)?.focus();
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="rounded-3xl border border-brand/20 bg-brand-50 p-6 sm:p-9"
        role="status"
        aria-live="polite"
      >
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-2xl font-bold text-navy">Your details were validated</h2>
        <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted">
          No message has been sent and no data has been stored or transmitted. Email delivery
          will be connected when the company provides a backend or form service.
        </p>
        <div className="mt-5 rounded-2xl border border-line bg-white p-4">
          <p className="text-[12px] leading-relaxed text-muted">
            <span className="font-semibold text-navy">What happens next: </span>
            once backend integration is added, an enquiry submitted here would be delivered to
            the company&apos;s contact channel and acknowledged by email.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <Button onClick={() => setSubmitted(false)} variant="primary" icon={Send}>
            Send Another Enquiry
          </Button>
          <Button href="/products" variant="outline" icon={ArrowRight}>
            Browse Catalogue
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="rounded-3xl border border-line bg-white p-5 shadow-soft sm:p-8"
      aria-labelledby="contact-form-heading"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id="contact-form-heading" className="text-xl font-bold text-navy sm:text-2xl">
          Send an enquiry
        </h2>
        <span className="rounded-full border border-accent/20 bg-accent-light px-2.5 py-1 text-[10.5px] font-semibold text-[#b5161c]">
          Not sent
        </span>
      </div>
      <p className="mt-2 text-[13px] leading-relaxed text-muted">
        Fields marked with <span className="font-semibold text-accent">*</span> are required.
        This form validates locally only; no email is transmitted.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field
          id="contact-name"
          label="Full name"
          required
          error={errors.name}
        >
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={inputClass(Boolean(errors.name))}
            placeholder="Your full name"
          />
        </Field>

        <Field id="contact-email" label="Email address" required error={errors.email}>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={inputClass(Boolean(errors.email))}
            placeholder="you@example.com"
          />
        </Field>

        <Field id="contact-phone" label="Phone number" error={errors.phone}>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : "contact-phone-hint"}
            className={inputClass(Boolean(errors.phone))}
            placeholder="+880 …"
          />
          <p id="contact-phone-hint" className="mt-1.5 text-[11px] text-muted">
            Optional. Use a reachable number if you would like a callback.
          </p>
        </Field>

        <Field id="contact-enquiryType" label="Enquiry type">
          <select
            id="contact-enquiryType"
            name="enquiryType"
            value={values.enquiryType}
            onChange={(event) => update("enquiryType", event.target.value)}
            className={inputClass(false)}
          >
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field id="contact-product" label="Product of interest">
            <input
              id="contact-product"
              name="product"
              type="text"
              value={values.product}
              onChange={(event) => update("product", event.target.value)}
              className={inputClass(false)}
              placeholder="Optional — e.g. a product from the catalogue"
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field id="contact-message" label="Message" required error={errors.message}>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={values.message}
              onChange={(event) => update("message", event.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              className={`${inputClass(Boolean(errors.message))} h-auto resize-y py-3`}
              placeholder="Tell us how we can help…"
            />
          </Field>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <p className="text-[11.5px] leading-relaxed text-muted">
          By submitting this form you acknowledge that no message will be sent and no personal
          data will be stored. See the{" "}
          <Link href="/contact" className="font-semibold text-brand hover:text-brand-dark">
            contact information
          </Link>{" "}
          for current placeholders.
        </p>
        <Button type="submit" size="lg" icon={Send} iconPosition="left" className="w-full sm:w-auto">
          Submit Enquiry
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required = false,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[12px] font-semibold text-navy">
        {label}
        {required && (
          <span className="ml-0.5 text-accent" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 flex items-start gap-1.5 text-[11.5px] font-medium text-[#b5161c]"
        >
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "h-11 w-full rounded-xl border bg-white px-3.5 text-[13.5px] text-ink transition-colors placeholder:text-muted focus:outline-none focus:ring-2",
    hasError
      ? "border-accent/50 focus:border-accent focus:ring-accent/15"
      : "border-line focus:border-brand/50 focus:ring-brand/15",
  ].join(" ");
}
