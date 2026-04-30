import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/economics")({
  head: () => ({
    meta: [
      { title: "Economics — NOI" },
      { name: "description", content: "How NOI moves revenue per unit. Real numbers from a 12-unit multifamily building." },
      { property: "og:title", content: "Economics — NOI" },
      { property: "og:description", content: "Revenue per unit, not panels per roof. See the math." },
    ],
  }),
  component: EconomicsPage,
});

function EconomicsPage() {
  const rows = [
    { label: "Units", before: "12", after: "12" },
    { label: "Avg. rent / unit / mo", before: "$1,850", after: "$1,850" },
    { label: "Solar revenue / unit / mo", before: "—", after: "+$148" },
    { label: "Revenue per unit", before: "$1,850", after: "$1,998" },
    { label: "Annual NOI lift", before: "—", after: "+$21,312" },
    { label: "Capex from owner", before: "—", after: "$0" },
  ];
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="eyebrow">02 — Economics</div>
        <h1 className="font-display mt-4 text-5xl tracking-tight">Revenue per unit, not panels per roof.</h1>
        <p className="mt-6 text-lg text-[color:var(--ink-soft)]">
          NOI underwrites your roof, installs the system at no cost, meters consumption, and bills tenants directly. You see a new revenue line — not a construction project.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-paper">
          <div className="grid grid-cols-3 border-b border-border bg-[color:var(--paper-deep)] px-6 py-4 text-xs font-medium uppercase tracking-wider text-[color:var(--ink-mute)]">
            <div>12-unit building</div>
            <div className="text-right">Before NOI</div>
            <div className="text-right">With NOI</div>
          </div>
          {rows.map((r, i) => (
            <div key={r.label} className={`grid grid-cols-3 px-6 py-4 text-sm ${i < rows.length - 1 ? "border-b border-border/60" : ""}`}>
              <div className="text-[color:var(--ink-soft)]">{r.label}</div>
              <div className="pb-num text-right">{r.before}</div>
              <div className="pb-num text-right font-semibold text-[color:var(--solar)]">{r.after}</div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-[color:var(--ink-mute)]">
          Illustrative. Final numbers depend on roof orientation, local utility rates, and tenant load profile.
        </p>
      </section>
    </SiteLayout>
  );
}
