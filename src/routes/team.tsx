import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { seo, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/team")({
  head: () =>
    seo({
      path: "/team",
      title: "Team — NOI · Rooftop Solar Revenue for US Property Owners",
      description:
        "Meet the NOI team. Operators behind the rooftop solar revenue platform for US landlords, property developers, BTR operators, and HOAs.",
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Team", path: "/team" },
      ]),
    }),
  component: TeamPage,
});

type Person = {
  slug: "daniel-bessmert" | "dan-katzman" | "margo-ivanenko";
  name: string;
  title: string;
  area: string;
  bio: string;
  photo: string;
  email: string;
  phone: string;
};

const TEAM: Person[] = [
  {
    slug: "daniel-bessmert",
    name: "Daniel Bessmert",
    title: "Founder & CEO",
    area: "All States",
    bio: "Building NOI to make every rental rooftop in America a recurring revenue line for its owner.",
    photo: "/daniel-bessmert.jpg",
    email: "daniel@joinnoi.com",
    phone: "(561) 800-0550",
  },
  {
    slug: "dan-katzman",
    name: "Dan Katzman",
    title: "CEO & Founder",
    area: "All States",
    bio: "Decades in real estate operations, focused on turning underused roofs into NOI for owners and HOAs.",
    photo: "/dan-katzman.jpg",
    email: "dan@joinnoi.com",
    phone: "(917) 748-5280",
  },
  {
    slug: "margo-ivanenko",
    name: "Margo Ivanenko",
    title: "Partnerships",
    area: "All States",
    bio: "Works with multifamily owners, developers, and HOA boards to scope NOI's solar revenue program.",
    photo: "/margo-ivanenko.jpg",
    email: "margo@joinnoi.com",
    phone: "(732) 558-6555",
  },
];

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-border pt-4">
      <div className="font-display text-4xl pb-num text-foreground">{k}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-[color:var(--ink-mute)]">{v}</div>
    </div>
  );
}

function TeamPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-border bg-[color:var(--paper)]">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <div className="eyebrow text-[color:var(--solar)]">About NOI</div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Turning every American rooftop into{" "}
            <span className="text-[color:var(--solar)]">recurring NOI</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[color:var(--ink-soft)]">
            Born inside real estate and energy, NOI is the rooftop solar revenue platform built by
            operators who lived the problem — for US landlords, developers, BTR operators, and HOAs.
          </p>
        </div>
      </section>

      {/* Team photo */}
      <section className="bg-[color:var(--paper-deep)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src="/team-noi.jpg"
              alt="The NOI team in front of a multifamily building with rooftop solar"
              width={1920}
              height={1080}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[color:var(--paper)]">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="eyebrow">Our Story</div>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
              Built by operators who lived the rooftop problem
            </h2>
          </div>
          <div className="space-y-5 text-[color:var(--ink-soft)]">
            <p>
              Before NOI, our founders spent years inside real estate portfolios and energy
              companies across the US. They saw the same pattern at every multifamily, BTR, and HOA
              property: rooftops sitting idle while energy bills kept climbing for tenants and
              owners alike.
            </p>
            <p>
              Solar was the obvious answer — but the existing model was broken. Six-figure capex,
              year-long install timelines, and economics that only worked for utility-scale
              developers. Landlords were left out. Tenants kept paying full retail to the utility.
              And owners watched a recurring revenue line evaporate above their heads, every month.
            </p>
            <p className="font-medium text-foreground">They decided enough was enough.</p>
            <p>
              NOI finances the system, installs the panels, meters every tenant, and bills on the
              owner's behalf. Zero capex. Monthly payouts via Stripe Connect. A new NOI line on the
              P&amp;L from day one — across all 50 states.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-[color:var(--paper-deep)]">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-4">
          <Stat k="50" v="States covered" />
          <Stat k="0" v="Capex for owners" />
          <Stat k="25 yr" v="Revenue contract" />
          <Stat k="2024" v="Founded" />
        </div>
      </section>

      {/* People */}
      <section className="bg-[color:var(--paper)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <div className="eyebrow text-[color:var(--solar)]">The Team</div>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              Talk to the operator covering your portfolio
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[color:var(--ink-soft)]">
              Each NOI lead can scope your roofs, model the NOI uplift, and walk you through the
              program end-to-end.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {TEAM.map((p) => (
              <Link
                key={p.slug}
                to="/team/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-[color:var(--paper-deep)] transition hover:border-[color:var(--solar)] hover:shadow-lg"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[color:var(--rule-soft)]">
                  <img
                    src={p.photo}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="font-display text-2xl text-foreground">{p.name}</div>
                  <div className="mt-1 text-sm font-medium text-[color:var(--solar)]">
                    {p.title}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-[color:var(--ink-mute)]">
                    {p.area}
                  </div>
                  <p className="mt-4 flex-1 text-sm text-[color:var(--ink-soft)]">{p.bio}</p>
                  <div className="mt-6 space-y-1 border-t border-border pt-4 text-sm text-[color:var(--ink-soft)]">
                    <div>{p.email}</div>
                    <div>{p.phone}</div>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    View pitch &amp; download PDF
                    <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners CTA */}
      <section className="border-t border-border bg-[color:var(--paper-deep)]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <div className="eyebrow text-[color:var(--solar)]">Work with NOI</div>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
            Want to partner or join the team?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[color:var(--ink-soft)]">
            NOI is expanding fast across all 50 states. We are actively looking for growth-minded
            partners — sales professionals, property consultants, and solar specialists — who want
            to turn idle rooftops into real revenue. We offer competitive benefit packages and
            revenue-share structures that scale with your portfolio reach.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-medium text-[color:var(--paper)] transition hover:opacity-90"
            >
              Send us a message
              <span aria-hidden className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
