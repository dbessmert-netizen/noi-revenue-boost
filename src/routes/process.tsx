import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { seo, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/process")({
  head: () =>
    seo({
      path: "/process",
      title: "How NOI Works — Utility Bill to Payout in 60 Days",
      description:
        "Four steps: assess, install, enroll tenants, collect monthly payouts. NOI handles permits, install, billing & Stripe payouts across the US.",
      keywords: [
        "how solar billing works landlord",
        "tenant solar onboarding",
        "Stripe Connect solar payouts",
        "solar permitting interconnect timeline",
      ],
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Process", path: "/process" },
      ]),
    }),
  component: ProcessPage,
});

const steps = [
  {
    n: "01",
    t: "Assess",
    d: "Send us one recent utility bill. We parse the rate, 6 months of consumption, and the address. Within days you get a no-cost revenue projection for your property — per unit, per building, and across your portfolio.",
    detail: "What we need: a PDF or photo of any tenant's recent bill. That's it.",
  },
  {
    n: "02",
    t: "Install",
    d: "Our vetted installer partners handle permits, install, and interconnect. You choose financed (zero capex, revenue starts day one) or owned (higher long-term margin). We quote both transparently.",
    detail: "Typical timeline: 30–45 days from signed agreement to system live.",
  },
  {
    n: "03",
    t: "Enroll",
    d: "Tenants get a magic-link invite. They see exactly what they save versus the grid, then enroll in autopay in under two minutes. No account creation, no app download, no friction.",
    detail: "Average enrollment: 87% of units in the first 14 days.",
  },
  {
    n: "04",
    t: "Collect",
    d: "Tenants pay via ACH or card. Stripe Connect routes net revenue to your bank monthly. You get branded invoices, statements, and a real-time dashboard of revenue, payments, and exceptions.",
    detail: "First payout typically lands within 30 days of system activation.",
  },
];

function ProcessPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-20">
        <div className="eyebrow">04 — Process</div>
        <h1 className="font-display mt-4 text-5xl tracking-tight">
          From rooftop to revenue, in about 60 days.
        </h1>
        <p className="mt-6 text-lg text-[color:var(--ink-soft)]">
          Four steps. We do the heavy lifting on each one. You sign two documents, approve a quote, and start receiving monthly payouts.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <ol className="space-y-2">
          {steps.map((s) => (
            <li key={s.n} className="grid grid-cols-[auto_1fr] gap-8 border-t border-border py-10">
              <div className="font-mono text-sm text-[color:var(--solar)]">{s.n}</div>
              <div>
                <div className="font-display text-2xl">{s.t}</div>
                <p className="mt-3 max-w-2xl text-[color:var(--ink-soft)]">{s.d}</p>
                <p className="mt-3 text-xs uppercase tracking-wider text-[color:var(--ink-mute)]">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* What you don't have to do */}
      <section className="border-t border-border bg-[color:var(--paper-deep)]">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="eyebrow">What you don't have to do</div>
          <h2 className="font-display mt-4 text-3xl tracking-tight">
            We absorb the operational surface area.
          </h2>
          <ul className="mt-8 grid gap-4 text-sm md:grid-cols-2">
            {[
              "Chase tenants for payment — Stripe Smart Retries plus our dunning sequence handle 95% of failed payments automatically.",
              "Reconcile statements — we generate branded invoices, payout reports, and tax-ready summaries.",
              "Manage installer relationships — we underwrite, schedule, and warranty every install in our partner network.",
              "Stay on top of regulation — we maintain compliance against state utility resale and submetering rules per property.",
            ].map((p) => (
              <li key={p} className="flex gap-3 rounded-xl border border-border bg-card p-5">
                <span className="text-[color:var(--solar)]">✓</span>
                <span className="text-[color:var(--ink-soft)]">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              to="/pricing"
              className="inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-[color:var(--paper)] hover:opacity-90"
            >
              See pricing →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
