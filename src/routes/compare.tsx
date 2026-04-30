import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare — NOI vs. traditional solar" },
      { name: "description", content: "NOI generates landlord revenue. Traditional solar cuts tenant bills. See the difference for your portfolio." },
      { property: "og:title", content: "NOI vs. traditional solar" },
      { property: "og:description", content: "Revenue generation, not cost savings. Why NOI is built for owners, not utilities." },
    ],
  }),
  component: ComparePage,
});

const rows = [
  ["Who captures the value", "Tenants (utility bill)", "Owner (NOI)"],
  ["Upfront cost", "$$$ capex or financed", "$0"],
  ["Impact on NOI", "Indirect / minimal", "+$300–$1,200 per unit / yr"],
  ["Impact on asset value", "Negligible", "+25–80 bps cap rate"],
  ["Operations", "You manage the system", "We design, install, operate"],
  ["Tenant disruption", "Billing changes, metering", "None"],
];

function ComparePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm text-primary font-medium mb-3">Compare</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight">
            Cost savings is the old play. <br />Revenue generation is the new one.
          </h1>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid grid-cols-3 bg-surface border-b border-border text-sm font-medium text-ink">
              <div className="p-5"></div>
              <div className="p-5">Traditional solar</div>
              <div className="p-5 text-primary">NOI</div>
            </div>
            {rows.map(([label, a, b], i) => (
              <div key={i} className="grid grid-cols-3 border-b border-border last:border-0 text-sm">
                <div className="p-5 text-muted-foreground">{label}</div>
                <div className="p-5 text-foreground">{a}</div>
                <div className="p-5 text-ink font-medium">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
