import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — NOI" },
      { name: "description", content: "Zero upfront. Revenue-share aligned with your NOI. No software fees, no capex, no liens." },
      { property: "og:title", content: "NOI pricing — aligned with your asset yield" },
      { property: "og:description", content: "Revenue-share, not subscription. We only win when your NOI grows." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm text-primary font-medium mb-3">Pricing</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight">
            Aligned with your NOI growth.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            We don't charge software fees or take capex. We share the revenue our systems generate on your roofs — so we only win when you do.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Owner-financed</div>
              <h3 className="mt-2 font-display text-3xl text-ink">Keep 100%</h3>
              <p className="mt-3 text-muted-foreground">You fund the install, you keep all the NOI. We design, build, and operate for a flat fee.</p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>✓ Maximum per-unit yield</li>
                <li>✓ Asset stays 100% yours</li>
                <li>✓ Best for stabilized portfolios</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-card p-8 shadow-elegant relative">
              <div className="absolute top-4 right-4 text-xs rounded-full bg-primary/10 text-primary px-2.5 py-1">Most popular</div>
              <div className="text-xs uppercase tracking-wider text-primary">NOI revenue-share</div>
              <h3 className="mt-2 font-display text-3xl text-ink">$0 upfront</h3>
              <p className="mt-3 text-muted-foreground">We fund, install, and operate. You receive a guaranteed share of revenue every month.</p>
              <ul className="mt-6 space-y-2 text-sm text-foreground">
                <li>✓ Zero capex, zero debt</li>
                <li>✓ +$300–$1,200 per unit / year</li>
                <li>✓ NOI starts month one</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
