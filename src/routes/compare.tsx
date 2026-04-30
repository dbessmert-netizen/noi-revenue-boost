import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { seo, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/compare")({
  head: () =>
    seo({
      path: "/compare",
      title: "NOI vs. PPAs vs. Solar Installers vs. Billing Software",
      description:
        "How NOI compares to third-party PPAs, solar installers, and rent-roll billing tools. The full-stack solar revenue platform built for US landlords, developers, and HOAs.",
      keywords: [
        "PPA vs ownership solar landlord",
        "solar installer vs platform",
        "tenant billing software comparison",
      ],
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Compare", path: "/compare" },
      ]),
    }),
  component: ComparePage,
});

const cols = [
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

function Check({ on }: { on: boolean }) {
  return on ? (
    <span className="text-[color:var(--solar)]">✓</span>
  ) : (
    <span className="text-[color:var(--ink-mute)]">—</span>
  );
}

function ComparePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="eyebrow">03 — Compare</div>
        <h1 className="font-display mt-4 max-w-3xl text-5xl tracking-tight">
          Installers install. Billing tools bill. <span className="italic text-[color:var(--solar)]">NOI does both.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[color:var(--ink-soft)]">
          Most landlords think they have to pick between expensive ownership, a developer who keeps the upside, or stitching together five vendors themselves. NOI replaces all three.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cols.map((c) => (
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
                    <Check on={p.on} />
                    <span className={p.on ? "" : "text-[color:var(--ink-mute)] line-through decoration-[color:var(--ink-mute)]/30"}>{p.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Vs. third-party PPA */}
      <section className="border-t border-border bg-[color:var(--paper-deep)]">
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
