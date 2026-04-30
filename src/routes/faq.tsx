import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — NOI" },
      { name: "description", content: "How NOI grows landlord revenue with rooftop solar. Pricing, ownership, tenant impact, and more." },
      { property: "og:title", content: "FAQ — NOI" },
      { property: "og:description", content: "Answers on NOI revenue-share, ownership, tenants, and asset value." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "How does NOI actually grow my revenue?", a: "We install and operate solar on your rooftop, then sell the power back into the grid or to common-area loads. The revenue flows to your operating account as new NOI — typically $300–$1,200 per unit per year." },
  { q: "What's the upfront cost?", a: "Zero on the revenue-share plan. NOI funds the entire install. You contribute the roof; we contribute the capital, operations, and maintenance." },
  { q: "Does this affect my tenants?", a: "No. There are no rent increases, no metering changes, and no billing complexity. Tenant utility relationships stay exactly as they are." },
  { q: "Will this impact my asset value?", a: "Yes — positively. Adding $70k/year of NOI to a 100-unit asset at a 5.5% cap rate lifts valuation by roughly $1.27M. Lenders and buyers underwrite NOI, and so do we." },
  { q: "Are there liens on the property?", a: "No. Our agreements are revenue-share, not debt. There are no UCCs, mortgages, or liens placed on your asset." },
  { q: "What happens at sale or refi?", a: "The NOI revenue stream transfers with the asset and is fully assumable. Buyers love it — it's documented, recurring income that lifts cap-rate value." },
];

function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm text-primary font-medium mb-3">FAQ</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight">
            Questions, answered.
          </h1>
          <div className="mt-12 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-6 open:shadow-card">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="font-medium text-ink text-lg">{f.q}</span>
                  <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
