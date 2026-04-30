import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare — NOI" },
      { name: "description", content: "NOI vs. third-party PPAs vs. owning panels yourself." },
      { property: "og:title", content: "Compare — NOI" },
    ],
  }),
  component: ComparePage,
});

function ComparePage() {
  const cols = [
    { name: "DIY install", points: ["High capex", "You manage tenants", "You handle billing", "You take outage risk"], tone: "muted" },
    { name: "Third-party PPA", points: ["No capex", "Developer keeps revenue", "Tenants billed by 3rd party", "You don't own the upside"], tone: "muted" },
    { name: "NOI", points: ["No capex", "You keep the revenue", "One unified invoice", "Stripe payouts to your account"], tone: "accent" },
  ];
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="eyebrow">03 — Compare</div>
        <h1 className="font-display mt-4 text-5xl tracking-tight">Three paths. One outcome that's yours.</h1>
        <p className="mt-6 max-w-2xl text-lg text-[color:var(--ink-soft)]">
          Most landlords think they have to choose between expensive ownership and giving away the upside to a developer. With NOI, you don't.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cols.map((c) => (
            <div
              key={c.name}
              className={`rounded-2xl border p-8 shadow-paper ${
                c.tone === "accent"
                  ? "border-[color:var(--solar)]/40 bg-[color:var(--solar-tint)]"
                  : "border-border bg-card"
              }`}
            >
              <div className="font-display text-2xl">{c.name}</div>
              <ul className="mt-6 space-y-3 text-sm">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className={c.tone === "accent" ? "text-[color:var(--solar)]" : "text-[color:var(--ink-mute)]"}>●</span>
                    <span className="text-[color:var(--ink-soft)]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
