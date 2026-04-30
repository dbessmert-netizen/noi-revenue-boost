import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/hero-rooftop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOI — Increase your NOI with solar" },
      { name: "description", content: "NOI turns your rooftop into a recurring income stream. Add $300–$1,200 per unit per year. Zero upfront." },
      { property: "og:title", content: "NOI — Increase your NOI with solar" },
      { property: "og:description", content: "The NOI growth platform for landlords. Own your roof. Own the revenue." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.joinnoi.com" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-3xl md:text-4xl text-ink">{value}</span>
      <span className="text-sm text-muted-foreground mt-1">{label}</span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* HERO */}
      <section className="relative bg-hero">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              For multifamily owners & operators
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-ink">
              Increase your NOI with solar.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Most landlords install solar to save costs. The smartest ones use it to generate revenue. NOI turns your rooftop into a recurring income stream — zero upfront.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#economics"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity shadow-elegant"
              >
                See your revenue upside →
              </a>
              <a href="https://my.joinnoi.com" className="text-sm text-muted-foreground hover:text-ink">
                Already a customer? Sign in
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
              <Stat value="+$300–$1,200" label="per unit / year" />
              <Stat value="$0" label="upfront cost" />
              <Stat value="20yr" label="recurring income" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
            <img
              src={heroImg}
              alt="Aerial view of multifamily rooftop with solar panels generating NOI"
              width={1536}
              height={1024}
              className="relative rounded-2xl shadow-elegant w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* ECONOMICS PREVIEW */}
      <section id="economics" className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm text-primary font-medium mb-3">The economics</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
              Solar is the mechanism. <br />NOI is the outcome.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              We don't sell you panels. We turn unused rooftop square footage into a yield-bearing asset that flows directly into your operating income.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { k: "Asset yield", v: "+6–11%", d: "Incremental rooftop yield, uncorrelated to rent rolls." },
              { k: "Per-unit revenue", v: "+$300–$1,200/yr", d: "Recurring income added to every door, every month." },
              { k: "Cap rate impact", v: "+25–80 bps", d: "Higher NOI compounds directly into asset valuation." },
            ].map((x) => (
              <div key={x.k} className="rounded-2xl bg-card border border-border p-7 shadow-card">
                <div className="text-sm text-muted-foreground">{x.k}</div>
                <div className="mt-2 font-display text-4xl text-ink">{x.v}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm text-primary font-medium mb-3">The reframe</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
              Cost savings vs. revenue generation.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Traditional solar</div>
              <h3 className="mt-2 font-display text-2xl text-ink">Cut your utility bill</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li>— Reduces operating expenses (maybe)</li>
                <li>— Capex-heavy or financed at high rates</li>
                <li>— Tenants keep the bill, you keep the headache</li>
                <li>— Years of payback before any return</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-card p-8 shadow-elegant relative overflow-hidden">
              <div className="absolute top-4 right-4 text-xs rounded-full bg-primary/10 text-primary px-2.5 py-1">NOI</div>
              <div className="text-xs uppercase tracking-wider text-primary">The NOI model</div>
              <h3 className="mt-2 font-display text-2xl text-ink">Generate per-unit revenue</h3>
              <ul className="mt-5 space-y-3 text-sm text-foreground">
                <li>✓ Adds $300–$1,200 NOI per unit annually</li>
                <li>✓ Zero upfront — we install and operate</li>
                <li>✓ Revenue flows to ownership, not tenants</li>
                <li>✓ Asset value lifts on day one</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm text-primary font-medium mb-3">How it works</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
              Four steps from rooftop to revenue.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Underwrite", d: "We model your portfolio's per-unit revenue upside in 48 hours." },
              { n: "02", t: "Approve", d: "Sign a revenue-share agreement. No capex, no debt, no liens." },
              { n: "03", t: "Install", d: "We design, permit, install and commission. You approve the schedule." },
              { n: "04", t: "Earn", d: "Recurring NOI hits your operating account every month." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border p-6 bg-card">
                <div className="font-display text-3xl text-primary">{s.n}</div>
                <div className="mt-3 font-medium text-ink">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-ink text-background p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-20" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                What's your rooftop worth?
              </h2>
              <p className="mt-4 text-background/70 max-w-xl mx-auto">
                Free, no-obligation NOI upside report for your portfolio in 48 hours.
              </p>
              <a
                href="https://my.joinnoi.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-background text-ink px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                See your revenue upside →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
