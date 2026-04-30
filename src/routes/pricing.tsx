import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — NOI" },
      { name: "description", content: "Simple, performance-aligned pricing. You pay nothing up front." },
      { property: "og:title", content: "Pricing — NOI" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="eyebrow">05 — Pricing</div>
        <h1 className="font-display mt-4 text-5xl tracking-tight">You don't pay until your roof does.</h1>
        <p className="mt-6 max-w-2xl text-lg text-[color:var(--ink-soft)]">
          NOI is performance-aligned. We win when your NOI grows — not when a panel ships.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-10 shadow-paper">
            <div className="eyebrow">Standard</div>
            <div className="font-display mt-3 text-5xl">$0<span className="text-base text-[color:var(--ink-soft)]"> upfront</span></div>
            <p className="mt-3 text-sm text-[color:var(--ink-soft)]">For landlords with 4+ units. NOI keeps a small revenue share; the rest is yours.</p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>✓ Full system install</li>
              <li>✓ Tenant billing & support</li>
              <li>✓ Stripe payouts to your account</li>
              <li>✓ Performance dashboard</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[color:var(--solar)]/40 bg-[color:var(--solar-tint)] p-10 shadow-paper">
            <div className="eyebrow text-[color:var(--solar)]">Portfolio</div>
            <div className="font-display mt-3 text-5xl">Custom</div>
            <p className="mt-3 text-sm text-[color:var(--ink-soft)]">For 50+ units across multiple addresses. Bespoke economics and dedicated underwriting.</p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>✓ Everything in Standard</li>
              <li>✓ Portfolio-wide reporting</li>
              <li>✓ Higher revenue share to owner</li>
              <li>✓ Named account team</li>
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
