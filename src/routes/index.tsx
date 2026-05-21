import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { NoiCalculator } from "@/components/site/NoiCalculator";
import { ProductWalkthrough } from "@/components/site/ProductWalkthrough";
import { seo, productJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import heroRooftop from "@/assets/hero-rooftop.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      path: "/",
      title: "NOI — Rooftop Solar Revenue for US Landlords, Developers & HOAs",
      description:
        "Turn your rental rooftop into recurring revenue. NOI finances solar, meters tenants, and bills on your behalf — built for US landlords, property developers, BTR operators, and HOAs. Zero capex.",
      keywords: [
        "increase NOI rental property",
        "passive income for landlords",
        "multifamily solar revenue",
        "BTR solar program",
        "HOA solar income",
        "property developer ROI solar",
      ],
      jsonLd: [productJsonLd, breadcrumbJsonLd([{ name: "Home", path: "/" }])],
    }),
  component: HomePage,
});

function Stat({ k, v, sub }: { k: string; v: string; sub: string }) {
  return (
    <div>
      <div className="font-display pb-num text-4xl">{k}</div>
      <div className="mt-1 text-sm font-medium">{v}</div>
      <div className="text-xs text-[color:var(--ink-mute)]">{sub}</div>
    </div>
  );
}

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-16 md:grid-cols-2 md:pt-24">
          <div>
            <div className="eyebrow">The NOI growth platform</div>
            <h1 className="font-display mt-5 text-5xl font-medium leading-[1.02] tracking-tight md:text-6xl">
              Your roof is a<br />
              <span className="italic text-[color:var(--solar)]">revenue line.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-[color:var(--ink-soft)]">
              NOI installs rooftop solar on your rental, meters tenant consumption, and bills them on your behalf. You collect a new monthly check — without writing one first.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-[color:var(--paper)] hover:opacity-90"
              >
                Get a revenue estimate →
              </Link>
              <Link
                to="/economics"
                className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-[color:var(--paper-deep)]"
              >
                See the economics
              </Link>
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
              <div className="eyebrow">Avg. NOI uplift</div>
              <div className="font-display pb-num mt-1 text-3xl">+8.4% <span className="text-sm text-[color:var(--ink-soft)]">/ mo</span></div>
            </div>
          </div>
        </div>

        {/* Hero stats */}
        <div className="mx-auto max-w-6xl border-t border-border px-6 py-10">
          <div className="grid gap-10 md:grid-cols-3">
            <Stat k="$5K–$30K" v="Annual revenue per property" sub="Depends on units, roof size, and local rates." />
            <Stat k="$0" v="Capex from owner" sub="We finance, install, and operate." />
            <Stat k="~60 days" v="From signup to first payout" sub="Faster if your roof is already producing." />
          </div>
        </div>
      </section>

      {/* Interactive NOI calculator */}
      <NoiCalculator />

      {/* Reposition strip */}
      <section className="border-y border-border bg-[color:var(--paper-deep)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="eyebrow">The reposition</div>
          <h2 className="font-display mt-4 max-w-3xl text-4xl tracking-tight">
            Most landlords think of solar as a cost to manage. We think of it as a line item to grow.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              { k: "Own the roof", v: "You keep the asset and the agreement. We add the meter and the billing rail underneath it." },
              { k: "Own the revenue", v: "Solar income lands next to rent — one invoice to the tenant, one payout to you, every month." },
              { k: "Own the upside", v: "When local power prices rise, your revenue per unit rises with them. The roof keeps appreciating." },
            ].map((b) => (
              <div key={b.k}>
                <div className="font-display text-2xl">{b.k}.</div>
                <p className="mt-2 text-sm text-[color:var(--ink-soft)]">{b.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanism / How it works */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="eyebrow">The mechanism</div>
            <h2 className="font-display mt-4 text-4xl tracking-tight">From rooftop to revenue, in four steps.</h2>
            <p className="mt-4 text-[color:var(--ink-soft)]">
              You own the building. We operate the revenue layer on top of it.
            </p>
          </div>
          <ol className="space-y-2">
            {[
              { n: "01", t: "Assess", d: "Send us a recent utility bill. We model production, tenant load, and local rates, then return a no-cost revenue projection in days." },
              { n: "02", t: "Install", d: "Our partner network handles permitting, installation, and interconnection. Financed or owned — we'll quote both side by side." },
              { n: "03", t: "Enroll", d: "Tenants get a magic-link invite. They see exactly what they save vs. the grid and enroll in autopay in under two minutes." },
              { n: "04", t: "Collect", d: "Tenants pay via ACH or card. Stripe Connect routes net revenue to your bank. You get a clean monthly statement and dashboard." },
            ].map((s) => (
              <li key={s.n} className="grid grid-cols-[auto_1fr] gap-6 border-t border-border py-6">
                <div className="font-mono text-sm text-[color:var(--solar)]">{s.n}</div>
                <div>
                  <div className="font-display text-2xl">{s.t}</div>
                  <p className="mt-1 max-w-xl text-[color:var(--ink-soft)]">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Economics teaser */}
      <section className="border-y border-border bg-[color:var(--paper-deep)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="eyebrow">The economics</div>
          <h2 className="font-display mt-4 max-w-3xl text-4xl tracking-tight">
            A 24-unit building can add <span className="text-[color:var(--solar)]">~$17.7K</span> in annual NOI. With no capex.
          </h2>
          <p className="mt-4 max-w-2xl text-[color:var(--ink-soft)]">
            Tenants pay less than they did to the utility. You collect the margin. NOI takes a small share for running the rail.
          </p>
          <div className="mt-10">
            <Link
              to="/economics"
              className="inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-[color:var(--paper)] hover:opacity-90"
            >
              See the full breakdown →
            </Link>
          </div>
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

      {/* Final CTA */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <div className="eyebrow">Ready when you are</div>
            <div className="font-display mt-3 text-3xl">The roof is already paid for.</div>
            <p className="mt-2 max-w-md text-sm text-[color:var(--ink-soft)]">
              Tell us about your property. We'll come back with a free, no-obligation revenue estimate.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-[color:var(--paper)] hover:opacity-90"
          >
            Get my estimate →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
