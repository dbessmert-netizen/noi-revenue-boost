import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — NOI" },
      { name: "description", content: "Common questions from landlords about NOI." },
      { property: "og:title", content: "FAQ — NOI" },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "Do I have to pay anything to install the panels?", a: "No. NOI covers all capex, permitting, and installation. You pay nothing up front." },
  { q: "Who owns the system?", a: "NOI owns and maintains the hardware. You own the roof, the building, and the new revenue line generated on it." },
  { q: "How are tenants billed?", a: "Solar usage appears as a line item on the same invoice as their rent — one bill, one payment, no separate utility account to set up." },
  { q: "When do I get paid?", a: "Monthly via Stripe, the day after the billing cycle closes." },
  { q: "What happens if a tenant moves out?", a: "We handle the handoff and re-onboard the new tenant. Your revenue line continues uninterrupted." },
  { q: "What if I sell the building?", a: "The NOI agreement transfers cleanly to the new owner — and the additional cash flow tends to support a higher sale price." },
];

function FaqPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="eyebrow">06 — FAQ</div>
        <h1 className="font-display mt-4 text-5xl tracking-tight">Questions, answered.</h1>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left">
                <span className="font-display text-xl">{f.q}</span>
                <span className="text-[color:var(--solar)] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[color:var(--ink-soft)]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
