import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — NOI" },
      { name: "description", content: "From roof assessment to your first payout in under 90 days." },
      { property: "og:title", content: "Process — NOI" },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  { n: "01", t: "Underwrite the roof", d: "We model production, tenant load, and local rates. You get a no-cost revenue projection." },
  { n: "02", t: "Sign & schedule", d: "One agreement. We handle permits, the install, and the meters. Zero capex from you." },
  { n: "03", t: "Tenants opt in", d: "We onboard tenants with a simple flow. Solar appears as a line item on their existing invoice." },
  { n: "04", t: "Get paid monthly", d: "We bill, collect, and Stripe-payout the solar revenue directly to your bank — every month." },
];

function ProcessPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="eyebrow">04 — Process</div>
        <h1 className="font-display mt-4 text-5xl tracking-tight">From roof to revenue in 90 days.</h1>
        <p className="mt-6 text-lg text-[color:var(--ink-soft)]">
          Four steps. We do the heavy lifting on each one.
        </p>

        <ol className="mt-14 space-y-2">
          {steps.map((s) => (
            <li
              key={s.n}
              className="grid grid-cols-[auto_1fr] gap-8 border-t border-border py-8"
            >
              <div className="font-mono text-sm text-[color:var(--solar)]">{s.n}</div>
              <div>
                <div className="font-display text-2xl">{s.t}</div>
                <p className="mt-2 max-w-xl text-[color:var(--ink-soft)]">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}
