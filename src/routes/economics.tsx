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

      {/* Compare */}
      <section className="border-t border-border bg-[color:var(--paper-deep)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="eyebrow">Compare</div>
          <h2 className="font-display mt-4 max-w-3xl text-4xl tracking-tight">
            Installers install. Billing tools bill. <span className="italic text-[color:var(--solar)]">NOI does both.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[color:var(--ink-soft)]">
            Most landlords think they have to pick between expensive ownership, a developer who keeps the upside, or stitching together five vendors themselves. NOI replaces all three.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {compareCols.map((c) => (
              <div
                key={c.name}
                className={`rounded-2xl border p-8 shadow-paper ${
                  c.tone === "accent"
                    ? "border-[color:var(--solar)]/40 bg-[color:var(--solar-tint)]"
                    : "border-border bg-card"
                }`}
              >
                <div className="eyebrow">{c.sub}</div>
                <div className="font-display mt-2 text-2xl">{c.name}</div>
                <ul className="mt-6 space-y-3 text-sm">
                  {c.points.map((p) => (
                    <li key={p.label} className="flex items-start gap-3">
                      {p.on ? (
                        <span className="text-[color:var(--solar)]">✓</span>
                      ) : (
                        <span className="text-[color:var(--ink-mute)]">—</span>
                      )}
                      <span className={p.on ? "" : "text-[color:var(--ink-mute)] line-through decoration-[color:var(--ink-mute)]/30"}>{p.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vs. third-party PPA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="eyebrow">vs. third-party PPA</div>
          <h2 className="font-display mt-4 text-3xl tracking-tight">
            With a developer-owned PPA, the developer keeps the revenue. With NOI, you do.
          </h2>
          <div className="mt-8 grid gap-4 text-sm">
            {[
              "Developer PPAs are designed to retire the developer's capital — your tenants' payments service their balance sheet, not yours.",
              "NOI is designed around the landlord. The system can be financed or owned, but the recurring revenue line always belongs to you.",
              "When the building sells, the NOI line transfers cleanly. PPAs often complicate diligence and reduce buyer appetite.",
            ].map((p) => (
              <p key={p} className="border-l-2 border-[color:var(--solar)]/40 pl-4 text-[color:var(--ink-soft)]">{p}</p>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

const compareCols = [
  {
    name: "Solar installer",
    sub: "Hardware only",
    points: [
      { label: "Installation", on: true },
      { label: "Zero-upfront financing", on: false },
      { label: "Tenant billing", on: false },
      { label: "Revenue management", on: false },
      { label: "Landlord dashboard", on: false },
    ],
    tone: "muted" as const,
  },
  {
    name: "NOI",
    sub: "Full-stack revenue platform",
    points: [
      { label: "Installation (partner network)", on: true },
      { label: "Zero-upfront financing", on: true },
      { label: "Tenant billing via Stripe", on: true },
      { label: "Real-time NOI analytics", on: true },
      { label: "Full landlord dashboard", on: true },
    ],
    tone: "accent" as const,
  },
  {
    name: "Billing software",
    sub: "Software only",
    points: [
      { label: "Installation", on: false },
      { label: "Zero-upfront financing", on: false },
      { label: "Tenant billing", on: true },
      { label: "Basic revenue tracking", on: true },
      { label: "End-to-end ownership", on: false },
    ],
    tone: "muted" as const,
  },
];
