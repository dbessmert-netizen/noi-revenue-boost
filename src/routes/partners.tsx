import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { seo, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/partners")({
  head: () =>
    seo({
      path: "/partners",
      title: "Partner with NOI — Solar Installers, Brokers, Developers, PMs",
      description:
        "Join the NOI partner network. We bring landlords, capital, and a turnkey tenant billing rail. You bring installs, deals, or distribution. Recurring referral economics, no friction.",
      keywords: [
        "solar installer partner program",
        "solar referral broker",
        "BTR developer solar partner",
        "property management solar partner",
        "loan broker solar partner",
        "real estate broker solar program",
      ],
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Partners", path: "/partners" },
      ]),
    }),
  component: PartnersPage,
});

type PartnerType = {
  tag: string;
  title: string;
  pitch: string;
  benefits: string[];
  fit: string;
};

const partners: PartnerType[] = [
  {
    tag: "01",
    title: "Solar Installers",
    pitch:
      "Stop chasing one-off residential leads. Get fed a recurring pipeline of qualified, financeable multifamily and BTR rooftops with the tenant billing layer already solved.",
    benefits: [
      "Pre-qualified projects — site, structural, and regulatory diligence done",
      "Predictable deal flow, not seasonal pipeline whiplash",
      "Standardized scope of work; clean specs, clean bids",
      "Net-30 payment terms backed by NOI's financing partners",
      "Long-term service contracts on every project you install",
    ],
    fit: "EPCs and licensed installers with 100kW+ commercial experience and crews in our active states.",
  },
  {
    tag: "02",
    title: "Loan Brokers & Capital Partners",
    pitch:
      "Solar revenue is the cleanest new NOI line on the market. Add it to your refi, acquisition, and CRE financing conversations — your borrowers close stronger, you close more deals.",
    benefits: [
      "Recurring referral economics — payouts on every closed install in your book",
      "Co-branded underwriting packs for your borrower conversations",
      "NOI-uplift modeling to support stronger DSCR on refinances",
      "White-glove handoff — we close the project, you keep the relationship",
      "First-look access to portfolio rollouts across SFR, BTR, and multifamily",
    ],
    fit: "CRE mortgage brokers, agency lenders, debt funds, and capital advisors with active multifamily, SFR, or BTR books.",
  },
  {
    tag: "03",
    title: "Builders & BTR Developers",
    pitch:
      "Wire every roof for solar at construction and capture 12–18% additional yield-on-cost. We work from pre-construction so conduit, meters, and tenant onboarding ship with your CO.",
    benefits: [
      "Pre-construction design support — roof layout, electrical, structural",
      "Capex at construction is 35–45% lower than retrofit installs",
      "Solar NOI shows up in your offering memo at acquisition or refi",
      "Tenant rollout solved at lease-up — opt-in baked into your lease docs",
      "Bundled financing on full community rollouts (PPA or owned)",
    ],
    fit: "BTR developers, SFR builders, and multifamily ground-up developers with 50+ units in active pipeline.",
  },
  {
    tag: "04",
    title: "Property Management Companies",
    pitch:
      "Bring your owners a five-figure-per-property revenue line they don't have today — at zero capex and near-zero operational lift for your team. Win RFPs you couldn't before.",
    benefits: [
      "Portfolio-level rollout playbook across all assets you manage",
      "Resident-facing comms templates, addendum language, FAQ docs",
      "Dedicated PM line for tenant exceptions (<24hr SLA)",
      "Revenue share on installed properties across your book",
      "Co-marketing collateral for owner pitches and RFPs",
    ],
    fit: "Property management firms with 500+ doors under management across multifamily, SFR, or HOA.",
  },
  {
    tag: "05",
    title: "Real Estate Brokers & Advisors",
    pitch:
      "Cap rate compression on owned assets, NOI uplift on listings, a differentiator at exit. Solar revenue is now a value-add line in every multifamily and BTR conversation.",
    benefits: [
      "Per-deal referral on closed installs originating from your network",
      "Listing enhancement — quantified NOI uplift and appraisal-ready data",
      "Buyer-side ammunition — show prospective owners the value-add path",
      "Sponsor-friendly modeling for IM / offering memo inclusion",
      "Quarterly market briefings on solar economics by metro",
    ],
    fit: "Investment sales brokers, advisory firms, and capital markets desks active in US multifamily, SFR, BTR, or HOA.",
  },
  {
    tag: "06",
    title: "Energy Consultants & ESG Advisors",
    pitch:
      "Your clients ask about decarbonization and ROI in the same breath. NOI is the only stack that delivers both — onsite generation plus a recurring revenue line.",
    benefits: [
      "Joint client diligence — bring NOI in as the implementation partner",
      "Carbon abatement and LL97-style compliance modeling support",
      "Standardized data exports for ESG reporting frameworks",
      "Per-engagement referral economics",
      "First call on new state programs and incentive stacks",
    ],
    fit: "Independent energy advisors, ESG consulting firms, and decarbonization advisory practices.",
  },
];

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display pb-num text-4xl tracking-tight">{k}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-[color:var(--ink-mute)]">{v}</div>
    </div>
  );
}

function PartnersPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 md:pt-28">
          <div className="eyebrow">Partner program</div>
          <h1 className="font-display mt-5 text-5xl leading-[1.05] tracking-tight md:text-6xl">
            Build with us.<br />
            <span className="italic text-[color:var(--solar)]">Earn with us.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[color:var(--ink-soft)]">
            NOI runs the rooftop revenue stack end-to-end: capital, install, meter, tenant billing, payout. We work with installers, brokers, developers, and PMs who bring deal flow or distribution. Recurring economics. Real handoffs. No tire-kickers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-[color:var(--paper)] hover:opacity-90"
            >
              Apply to partner
            </Link>
            <a
              href="#partner-types"
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-foreground"
            >
              See partner tracks
            </a>
          </div>

          {/* Trust stats */}
          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
            <Stat k="14+" v="Active US states" />
            <Stat k="$0" v="Capex to landlords" />
            <Stat k="45–60d" v="Signup to revenue" />
            <Stat k="Recurring" v="Partner economics" />
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="border-t border-border bg-[color:var(--paper-deep)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="eyebrow">Why NOI</div>
              <h2 className="font-display mt-3 text-3xl tracking-tight">
                We solve the parts your clients can't.
              </h2>
              <p className="mt-4 text-[color:var(--ink-soft)]">
                Installers can install. Brokers can finance. But nobody else operates the tenant billing rail at scale. That's the bottleneck — and that's what we own.
              </p>
            </div>
            <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
              {[
                { h: "Real deal flow", p: "We don't recycle expired leads. Every project is qualified, financeable, and ready to scope." },
                { h: "Clean economics", p: "Recurring referral revenue, not one-time spiffs. We track every project for life." },
                { h: "Co-marketing", p: "Co-branded models, decks, and owner-facing materials built for your sales motion." },
                { h: "Single point of contact", p: "One partner manager. One Slack channel. No support tickets." },
              ].map((b) => (
                <div key={b.h} className="rounded-xl border border-border bg-[color:var(--paper)] p-6">
                  <div className="font-display text-xl tracking-tight">{b.h}</div>
                  <p className="mt-2 text-sm text-[color:var(--ink-soft)]">{b.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner types */}
      <section id="partner-types" className="mx-auto max-w-6xl px-6 py-24">
        <div className="eyebrow">Partner tracks</div>
        <h2 className="font-display mt-3 text-4xl tracking-tight md:text-5xl">
          Six ways to plug in.
        </h2>
        <p className="mt-4 max-w-2xl text-[color:var(--ink-soft)]">
          Pick the track that matches what you already do. We'll tailor the deal structure to your business — referral, revenue share, or full white-label.
        </p>

        <div className="mt-14 space-y-6">
          {partners.map((p) => (
            <div
              key={p.title}
              className="grid gap-8 rounded-2xl border border-border bg-[color:var(--paper)] p-8 transition hover:border-[color:var(--solar)] md:grid-cols-12 md:p-10"
            >
              <div className="md:col-span-4">
                <div className="font-mono text-xs tracking-widest text-[color:var(--solar)]">
                  {p.tag}
                </div>
                <h3 className="font-display mt-2 text-2xl tracking-tight md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 text-[color:var(--ink-soft)]">{p.pitch}</p>
                <div className="mt-6 rounded-lg border border-dashed border-border bg-[color:var(--paper-deep)] p-4">
                  <div className="text-[11px] uppercase tracking-wider text-[color:var(--ink-mute)]">
                    Best fit
                  </div>
                  <div className="mt-1 text-sm">{p.fit}</div>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="eyebrow">What you get</div>
                <ul className="mt-4 space-y-3">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-[color:var(--ink-soft)]">
                      <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--solar)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-[color:var(--paper-deep)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="eyebrow">How partnering works</div>
          <h2 className="font-display mt-3 text-4xl tracking-tight">
            Four steps. No fluff.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              { n: "01", h: "Apply", p: "Tell us who you are and what you bring. 5-minute form, real human reply within 48 hours." },
              { n: "02", h: "Align", p: "30-minute call to scope deal structure, geographies, and your first 3–5 opportunities." },
              { n: "03", h: "Sign + launch", p: "Mutual NDA, partner agreement, dedicated partner manager. First project live in 30 days." },
              { n: "04", h: "Earn forever", p: "Recurring economics for the life of every project. Quarterly business reviews on growth." },
            ].map((s) => (
              <div key={s.n}>
                <div className="font-mono text-xs tracking-widest text-[color:var(--solar)]">
                  {s.n}
                </div>
                <div className="font-display mt-2 text-xl tracking-tight">{s.h}</div>
                <p className="mt-2 text-sm text-[color:var(--ink-soft)]">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="eyebrow">Get started</div>
        <h2 className="font-display mt-3 text-4xl tracking-tight md:text-5xl">
          The next conversation builds the network.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[color:var(--ink-soft)]">
          Tell us about your business. We'll come back with a partner structure tailored to how you already work — not a generic referral form.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-[color:var(--paper)] hover:opacity-90"
          >
            Apply to partner
          </Link>
          <a
            href="mailto:partners@joinnoi.com"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-foreground"
          >
            partners@joinnoi.com
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
