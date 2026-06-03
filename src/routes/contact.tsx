import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useId, useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { submitContact } from "@/lib/contact.functions";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact NOI — Talk to a rooftop revenue specialist",
      description:
        "Tell us about your portfolio and we'll show you exactly how much extra NOI your rooftops can generate. Built for US landlords, property developers, and HOAs.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      role: String(fd.get("role") || ""),
      units: fd.get("units") ? Number(fd.get("units")) : null,
      message: String(fd.get("message") || ""),
      source: String(fd.get("source") || "contact_page"),
    };
    try {
      const res = await submit({ data: payload });
      if (res.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMsg(res.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Network error. Please try again.",
      );
    }
  }

  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-10">
          <div className="eyebrow">Contact</div>
          <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
            Let's run the NOI math on your portfolio.
          </h1>
          <p className="mt-4 max-w-xl text-[color:var(--ink-soft)]">
            Tell us a few details and we'll come back with a tailored revenue
            estimate — typically within one business day. For US landlords,
            property developers, and HOAs.
          </p>
        </div>

        {status === "success" ? (
          <div className="rounded-2xl border border-border bg-[color:var(--paper-deep)] p-8">
            <h2 className="font-display text-2xl">Got it — talk soon.</h2>
            <p className="mt-3 text-[color:var(--ink-soft)]">
              Your details are in. Someone from the NOI team will be in touch
              shortly at the email you provided.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="grid gap-5 rounded-2xl border border-border bg-[color:var(--paper-deep)] p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name" name="name" required maxLength={100} />
              <Field
                label="Work email"
                name="email"
                type="email"
                required
                maxLength={255}
              />
              <Field label="Company" name="company" maxLength={150} />
              <Field
                label="Your role"
                name="role"
                placeholder="Landlord, Developer, HOA board…"
                maxLength={80}
              />
              <Field
                label="Units in portfolio"
                name="units"
                type="number"
                min={0}
                max={1000000}
                placeholder="e.g. 120"
              />
              <input type="hidden" name="source" value="contact_page" />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
                What are you hoping to figure out?
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                maxLength={2000}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                placeholder="A few sentences about your portfolio, locations, timeline…"
              />
            </div>
            {status === "error" && errorMsg && (
              <div
                role="alert"
                className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
              >
                {errorMsg}
              </div>
            )}
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-[color:var(--ink-mute)]">
                We'll only use your details to respond to your inquiry.
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-[color:var(--paper)] transition hover:opacity-90 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Request my estimate"}
              </button>
            </div>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  maxLength,
  min,
  max,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
  min?: number;
  max?: number;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
        min={min}
        max={max}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
      />
    </div>
  );
}
