import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import heroRooftop from "@/assets/hero-rooftop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOI — Increase your NOI with solar" },
      { name: "description", content: "NOI is the revenue platform for landlords. Turn your roof into a recurring income line. Bill rent and metered solar in one invoice." },
      { property: "og:title", content: "NOI — Increase your NOI with solar" },
      { property: "og:description", content: "Own your roof. Own the revenue. The NOI growth platform for landlords." },
      { property: "og:url", content: "https://www.joinnoi.com" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:pt-24">
          <div>
            <div className="eyebrow">The NOI growth platform</div>
            <h1 className="font-display mt-5 text-5xl font-medium leading-[1.02] tracking-tight md:text-6xl">
              Increase your NOI<br />
              <span className="italic text-[color:var(--solar)]">with solar.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-[color:var(--ink-soft)]">
              NOI turns your rooftop into a metered revenue line. We install, bill tenants by the kilowatt-hour, and pay you out — every month.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://my.joinnoi.com"
                className="inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-[color:var(--paper)] hover:opacity-90"
              >
                Get a revenue estimate →
              </a>
              <Link
                to="/economics"
                className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-[color:var(--paper-deep)]"
              >
                See the economics
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-[color:var(--ink-mute)]">
              <span>● Zero capex</span>
              <span>● Tenant-billed</span>
              <span>● Stripe payouts</span>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border shadow-paper">
              <img
                src={heroRooftop}
                alt="Apartment rooftop with metered solar panels"
                width={1600}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card px-5 py-4 shadow-paper md:block">
              <div className="eyebrow">Avg. uplift</div>
              <div className="font-display pb-num mt-1 text-3xl">+8.4% <span className="text-sm text-[color:var(--ink-soft)]">/ month</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Reposition strip */}
      <section className="border-y border-border bg-[color:var(--paper-deep)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          {[
            { k: "Own the roof", v: "You keep the asset. We add the meter and the billing rail." },
            { k: "Own the revenue", v: "Solar income shows up next to rent — one invoice, one payout." },
            { k: "Own the upside", v: "As power prices rise, your revenue per unit rises with them." },
          ].map((b) => (
            <div key={b.k}>
              <div className="font-display text-2xl">{b.k}.</div>
              <p className="mt-2 text-sm text-[color:var(--ink-soft)]">{b.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="eyebrow">Repositioning</div>
        <p className="font-display mt-6 text-3xl leading-snug md:text-4xl">
          “Solar is the mechanism. <span className="italic text-[color:var(--solar)]">NOI is the outcome.</span>”
        </p>
        <p className="mt-6 text-sm text-[color:var(--ink-soft)]">
          Stop thinking about panels. Start thinking about revenue per unit.
        </p>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <div className="font-display text-3xl">Ready to grow your NOI?</div>
            <p className="mt-2 text-sm text-[color:var(--ink-soft)]">15-minute call. No obligation. We'll model your roof.</p>
          </div>
          <a
            href="https://my.joinnoi.com"
            className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-[color:var(--paper)] hover:opacity-90"
          >
            Get started →
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
