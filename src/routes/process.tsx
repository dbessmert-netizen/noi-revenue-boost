import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — NOI" },
      { name: "description", content: "From underwriting to recurring revenue in four steps. NOI handles design, permitting, install, and operations." },
      { property: "og:title", content: "From rooftop to recurring NOI in 4 steps" },
      { property: "og:description", content: "Underwrite. Approve. Install. Earn. NOI does the rest." },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  { n: "01", t: "Underwrite", d: "Send us a portfolio list. We model per-unit NOI upside and cap-rate impact within 48 hours. No commitment." },
  { n: "02", t: "Approve", d: "Sign a simple revenue-share agreement. No capex, no debt, no liens on the property." },
  { n: "03", t: "Install", d: "We handle design, permitting, utility interconnection, install, and commissioning end-to-end." },
  { n: "04", t: "Earn", d: "Monthly NOI distributions begin the month after commissioning. We monitor and maintain for 20+ years." },
];

function ProcessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm text-primary font-medium mb-3">Process</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight">
            From rooftop to recurring NOI.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Four steps. We do the heavy lifting. You add a new revenue line to every door in your portfolio.
          </p>

          <div className="mt-12 space-y-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card p-7 flex gap-6 items-start">
                <div className="font-display text-4xl text-primary leading-none">{s.n}</div>
                <div>
                  <div className="font-medium text-ink text-lg">{s.t}</div>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
