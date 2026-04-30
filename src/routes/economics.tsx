import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/economics")({
  head: () => ({
    meta: [
      { title: "Economics — NOI" },
      { name: "description", content: "How rooftop solar adds $300–$1,200 of NOI per unit per year, lifts cap rate, and grows asset value with zero upfront." },
      { property: "og:title", content: "The economics of rooftop NOI — NOI" },
      { property: "og:description", content: "Per-unit revenue. Asset yield. Cap-rate compression. The numbers behind NOI." },
    ],
  }),
  component: EconomicsPage,
});

function EconomicsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm text-primary font-medium mb-3">Economics</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight">
            A new revenue line for every door.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            NOI converts under-utilized rooftop into a yield-bearing asset that flows directly into your operating income — no rent increases, no tenant friction.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { k: "Per-unit NOI lift", v: "+$300–$1,200 / yr", d: "Net of all operating costs. Recurring for 20+ years." },
              { k: "Asset yield", v: "+6–11%", d: "Incremental rooftop yield, uncorrelated to rent rolls." },
              { k: "Cap-rate impact", v: "+25–80 bps", d: "Direct lift to valuation at your portfolio's prevailing cap rate." },
              { k: "Payback to NOI", v: "Month 1", d: "Revenue starts the month systems are commissioned." },
            ].map((x) => (
              <div key={x.k} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <div className="text-sm text-muted-foreground">{x.k}</div>
                <div className="mt-2 font-display text-4xl text-ink">{x.v}</div>
                <p className="mt-3 text-sm text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-surface p-8">
            <h2 className="font-display text-2xl text-ink">Worked example — 100-unit asset</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
              <li>• 100 units × $700 average annual NOI = <span className="text-ink font-medium">$70,000 / year</span></li>
              <li>• At a 5.5% cap rate = <span className="text-ink font-medium">+$1.27M asset value</span></li>
              <li>• Upfront cost to ownership: <span className="text-ink font-medium">$0</span></li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
