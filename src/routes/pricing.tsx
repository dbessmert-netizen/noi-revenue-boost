import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { seo, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () =>
    seo({
      path: "/pricing",
      title: "Pricing — Performance-Aligned Solar Revenue Platform | NOI",
      description:
        "Transparent pricing for US landlords, property developers, REITs, and HOAs. No setup fees. No lock-in. Platform fee scales inversely with portfolio size — Starter, Growth, and Portfolio tiers.",
      keywords: [
        "solar revenue platform pricing",
        "tenant billing pricing landlord",
        "REIT solar SaaS pricing",
        "HOA solar platform cost",
      ],
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Pricing", path: "/pricing" },
      ]),
    }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Starter",
    price: "5%",
    sub: "application fee",
    blurb: "Free platform access. Pay only when tenants pay you.",
    features: ["Up to 10 units", "NOI revenue calculator", "Tenant portal", "Email support"],
    cta: "Get started",
    accent: false,
  },
  {
    name: "Growth",
    price: "$99 /mo",
    sub: "+ 3% application fee",
    blurb: "For active landlords scaling across 10–100 units.",
    features: ["Up to 100 units", "Advanced analytics", "Branded tenant portal", "Priority support"],
    cta: "Start 14-day trial",
    accent: true,
    badge: "Most popular",
  },
  {
    name: "Portfolio",
    price: "$499 /mo",
    sub: "+ 1.5% application fee",
    blurb: "Institutional operators, REITs, and BTR developers.",
    features: ["Unlimited units", "Multi-org, multi-entity", "API + webhooks", "Dedicated account manager"],
    cta: "Talk to sales",
    accent: false,
  },
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="eyebrow">05 — Pricing</div>
        <h1 className="font-display mt-4 text-5xl tracking-tight">
          You keep the income. We take a small share.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[color:var(--ink-soft)]">
          No setup fees. No lock-in. Our platform fee scales inversely with volume — the more units you bring, the less we take per dollar billed.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-8 shadow-paper ${
                t.accent
                  ? "border-[color:var(--solar)]/40 bg-[color:var(--solar-tint)]"
                  : "border-border bg-card"
              }`}
            >
              {t.badge && (
                <div className="absolute -top-3 left-6 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-[color:var(--paper)]">
                  {t.badge}
                </div>
              )}
              <div className="font-display text-2xl">{t.name}</div>
              <div className="mt-4">
                <div className="font-display pb-num text-4xl">{t.price}</div>
                <div className="text-sm text-[color:var(--ink-soft)]">{t.sub}</div>
              </div>
              <p className="mt-4 text-sm text-[color:var(--ink-soft)]">{t.blurb}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-[color:var(--solar)]">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium ${
                  t.accent
                    ? "bg-foreground text-[color:var(--paper)] hover:opacity-90"
                    : "border border-border hover:bg-[color:var(--paper-deep)]"
                }`}
              >
                {t.cta} →
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-[color:var(--ink-mute)]">
          Application fee is a small percentage of tenant payments — only charged on revenue you actually collect. Stripe processing fees apply on top.
        </p>
      </section>
    </SiteLayout>
  );
}
