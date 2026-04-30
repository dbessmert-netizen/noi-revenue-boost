import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { seo, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/economics")({
  head: () =>
    seo({
      path: "/economics",
      title: "Solar Economics for Landlords & Developers — NOI",
      description:
        "See how NOI lifts revenue per unit across US multifamily, single-family rentals, BTR, and HOA portfolios. Real numbers from 12-unit and 24-unit properties.",
      keywords: [
        "multifamily NOI calculator",
        "rental property cash flow solar",
        "cap rate uplift solar",
        "submetered solar economics",
      ],
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Economics", path: "/economics" },
      ]),
    }),
  component: EconomicsPage,
});

function EconomicsPage() {
  const small = [
    { label: "Units", before: "12", after: "12" },
    { label: "Avg. monthly rent / unit", before: "$1,850", after: "$1,850" },
    { label: "Solar revenue / unit / mo", before: "—", after: "+$148" },
    { label: "Revenue per unit", before: "$1,850", after: "$1,998" },
    { label: "Annual NOI lift", before: "—", after: "+$21,312" },
    { label: "Capex from owner", before: "—", after: "$0" },
  ];

  const tampa = [
    { label: "Property units", v: "24" },
    { label: "Avg. tenant utility bill (before)", v: "$187 / mo" },
    { label: "Avg. tenant bill on NOI", v: "$132 / mo" },
    { label: "Monthly revenue to landlord", v: "+$1,584" },
    { label: "NOI platform fee (5%)", v: "−$79" },
    { label: "Stripe & processing", v: "−$28" },
    { label: "Annual NOI uplift", v: "+$17,724", strong: true },
  ];

  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-20">
        <div className="eyebrow">02 — Economics</div>
        <h1 className="font-display mt-4 text-5xl tracking-tight">
          Revenue per unit, not panels per roof.
        </h1>
        <p className="mt-6 text-lg text-[color:var(--ink-soft)]">
          NOI underwrites your roof, finances the system, meters consumption, and bills tenants directly. You see a new revenue line — not a construction project. Here's how the math typically lands.
        </p>
      </section>

      {/* 12-unit model */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="eyebrow">Model · 12-unit multifamily</div>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card shadow-paper">
          <div className="grid grid-cols-3 border-b border-border bg-[color:var(--paper-deep)] px-6 py-4 text-xs font-medium uppercase tracking-wider text-[color:var(--ink-mute)]">
            <div>Line item</div>
            <div className="text-right">Before NOI</div>
            <div className="text-right">With NOI</div>
          </div>
          {small.map((r, i) => (
            <div key={r.label} className={`grid grid-cols-3 px-6 py-4 text-sm ${i < small.length - 1 ? "border-b border-border/60" : ""}`}>
              <div className="text-[color:var(--ink-soft)]">{r.label}</div>
              <div className="pb-num text-right">{r.before}</div>
              <div className="pb-num text-right font-semibold text-[color:var(--solar)]">{r.after}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Live property */}
      <section className="border-t border-border bg-[color:var(--paper-deep)]">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="eyebrow">Live property · 24-unit, Tampa</div>
          <h2 className="font-display mt-4 text-3xl tracking-tight">
            Tenants pay less. You collect the margin. Everyone wins except the utility.
          </h2>
          <p className="mt-4 max-w-2xl text-[color:var(--ink-soft)]">
            Below is a real Tampa property running on NOI today. Tenants save roughly 30% versus their previous bill — and the landlord adds a five-figure revenue line they didn't have last year.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-paper">
            {tampa.map((r, i) => (
              <div
                key={r.label}
                className={`flex items-center justify-between px-6 py-4 text-sm ${i < tampa.length - 1 ? "border-b border-border/60" : ""} ${r.strong ? "bg-[color:var(--solar-tint)]" : ""}`}
              >
                <div className={r.strong ? "font-medium" : "text-[color:var(--ink-soft)]"}>{r.label}</div>
                <div className={`pb-num ${r.strong ? "text-lg font-semibold text-[color:var(--solar)]" : ""}`}>{r.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three levers */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="eyebrow">Three levers</div>
        <h2 className="font-display mt-4 max-w-3xl text-4xl tracking-tight">
          Why the NOI line keeps growing.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { k: "Rate inflation", v: "Utility prices have risen ~4–6% annually for a decade. Your tenant rate moves with the market — your cost basis doesn't." },
            { k: "Higher occupancy", v: "Tenants on cheaper power renew at higher rates. We see meaningful retention lift across NOI portfolios." },
            { k: "Asset value", v: "An extra five-figure revenue line at typical multifamily cap rates can add six figures to your building's appraised value." },
          ].map((b) => (
            <div key={b.k} className="rounded-2xl border border-border bg-card p-8 shadow-paper">
              <div className="font-display text-2xl">{b.k}</div>
              <p className="mt-3 text-sm text-[color:var(--ink-soft)]">{b.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link
            to="/process"
            className="inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-[color:var(--paper)] hover:opacity-90"
          >
            How we make it happen →
          </Link>
        </div>

        <p className="mt-10 text-xs text-[color:var(--ink-mute)]">
          Illustrative. Final numbers depend on roof orientation, local utility rates, tenant load profile, and financing structure.
        </p>
      </section>
    </SiteLayout>
  );
}
