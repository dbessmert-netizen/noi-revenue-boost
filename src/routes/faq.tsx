import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { seo, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    seo({
      path: "/faq",
      title: "FAQ — Solar Revenue for Landlords, Developers & HOAs | NOI",
      description:
        "Common questions from US landlords, property developers, and HOAs about NOI: legality, financing, tenant payments, regulation, and timelines.",
      keywords: [
        "is tenant solar billing legal",
        "VNEM virtual net metering states",
        "PPA financing landlord questions",
        "RUBS solar allocation",
      ],
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]),
        faqJsonLd(groups.flatMap((g) => g.faqs)),
      ],
    }),
  component: FaqPage,
});

const groups = [
  {
    title: "The basics",
    faqs: [
      {
        q: "Is this legal in my state?",
        a: "Yes — in the states we operate today. Tenant billing for onsite solar is legal and well-established; what differs is the regulatory framework. NOI handles compliance against each state's utility resale and submetering rules on a per-property basis. If we can't operate compliantly in your jurisdiction, we'll tell you up front.",
      },
      {
        q: "Do I need to install new hardware in each unit?",
        a: "No physical hardware beyond the solar system itself. Tenant consumption is allocated via virtual net metering (VNEM) or RUBS depending on your state. No in-unit meters, no sensors, no rewiring.",
      },
      {
        q: "How fast from signup to first income?",
        a: "Typical timeline is 45–60 days: intake call, site assessment, permitting and interconnect, install, tenant onboarding, first billing cycle. If your roof already has solar producing today, we can begin tenant billing in under a week.",
      },
    ],
  },
  {
    title: "Money & risk",
    faqs: [
      {
        q: "What's the zero-upfront option?",
        a: "Our installer partners offer PPA-style financing. You pay nothing upfront and revenue begins on day one. A portion of tenant payments services the financing over 10–15 years; afterwards, you own the system outright. We'll quote financed and owned options side by side so you can pick.",
      },
      {
        q: "What happens if a tenant doesn't pay?",
        a: "Stripe Smart Retries handle most failed ACH payments automatically. We layer a 3-step email and SMS dunning sequence on top. After 21 days you're notified and can choose how to proceed — retry, write off, or escalate. NOI never performs a service shutoff; that decision always stays with you.",
      },
      {
        q: "What if I sell the building?",
        a: "The NOI agreement transfers cleanly to the new owner. In practice, the additional five-figure revenue line tends to lift the building's appraised value at typical multifamily cap rates — and gives you a story to tell during diligence.",
      },
    ],
  },
  {
    title: "Tenants & operations",
    faqs: [
      {
        q: "What's the impact on my landlord–tenant relationship?",
        a: "Tenants on NOI typically save 15–30% versus their previous utility bill. We see retention improve, not degrade. You can co-brand the tenant portal so the saving feels like a benefit you're providing.",
      },
      {
        q: "Do I lose any control over the system?",
        a: "No. You own the building and the agreement. NOI operates the meter and billing rail on top. You can pull a full revenue report, exception list, or tenant export at any time from your dashboard.",
      },
      {
        q: "What does the tenant actually see?",
        a: "A simple invoice — solar usage as a clearly labeled line item alongside their existing rent or utility breakdown. One bill, one payment, one autopay. We handle support emails directly so your team isn't in the loop.",
      },
    ],
  },
];

function FaqPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="eyebrow">06 — FAQ</div>
        <h1 className="font-display mt-4 text-5xl tracking-tight">Straight answers to the common ones.</h1>
        <p className="mt-6 text-lg text-[color:var(--ink-soft)]">
          The questions landlords ask most often, answered without marketing fluff. Don't see yours? <a href="mailto:hello@joinnoi.com" className="underline decoration-[color:var(--solar)]/50 underline-offset-4 hover:text-foreground">Email us</a>.
        </p>

        {groups.map((g) => (
          <div key={g.title} className="mt-14">
            <div className="eyebrow">{g.title}</div>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {g.faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-left">
                    <span className="font-display text-xl">{f.q}</span>
                    <span className="text-[color:var(--solar)] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[color:var(--ink-soft)]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
