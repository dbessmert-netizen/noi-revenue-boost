import { useEffect, useState } from "react";

type Step = {
  label: string;
  caption: string;
  cursor: { x: number; y: number };
};

const STEPS: Step[] = [
  {
    label: "Start a property assessment",
    caption: "Owner logs into the NOI portal and starts a free assessment.",
    cursor: { x: 78, y: 28 },
  },
  {
    label: "Upload your utility bill",
    caption: "Drop in a recent utility bill — we read the tariff, usage, and rate schedule.",
    cursor: { x: 50, y: 55 },
  },
  {
    label: "Confirm property details",
    caption: "Address, units, and roof type. Pre-filled from the bill — owner just confirms.",
    cursor: { x: 70, y: 72 },
  },
  {
    label: "See your revenue estimate",
    caption: "Annual NOI uplift, payback, and tenant savings — in under 60 seconds.",
    cursor: { x: 60, y: 60 },
  },
];

const STEP_MS = 3200;

export function ProductWalkthrough() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % STEPS.length), STEP_MS);
    return () => clearInterval(id);
  }, []);

  const active = STEPS[step];

  return (
    <section className="border-y border-border bg-[color:var(--paper-deep)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.4fr]">
          {/* Left: step list */}
          <div>
            <div className="eyebrow">See it in action</div>
            <h2 className="font-display mt-4 text-4xl tracking-tight">
              From utility bill to revenue estimate, in <span className="italic text-[color:var(--solar)]">under a minute</span>.
            </h2>
            <p className="mt-4 max-w-md text-[color:var(--ink-soft)]">
              Watch a landlord turn a single PDF into a no-capex revenue projection — live in the NOI portal.
            </p>
            <ol className="mt-8 space-y-1">
              {STEPS.map((s, i) => {
                const isActive = i === step;
                return (
                  <li key={s.label}>
                    <button
                      onClick={() => setStep(i)}
                      className={`group grid w-full grid-cols-[auto_1fr] items-start gap-4 rounded-lg border-l-2 px-4 py-3 text-left transition-colors ${
                        isActive
                          ? "border-[color:var(--solar)] bg-card"
                          : "border-transparent hover:bg-card/60"
                      }`}
                    >
                      <span
                        className={`font-mono text-xs pt-1 ${
                          isActive ? "text-[color:var(--solar)]" : "text-[color:var(--ink-mute)]"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span>
                        <span
                          className={`font-display text-lg leading-tight ${
                            isActive ? "" : "text-[color:var(--ink-soft)]"
                          }`}
                        >
                          {s.label}
                        </span>
                        {isActive && (
                          <span className="mt-1 block text-sm text-[color:var(--ink-soft)]">{s.caption}</span>
                        )}
                        {isActive && (
                          <span className="mt-3 block h-0.5 w-full overflow-hidden rounded-full bg-border">
                            <span
                              key={step}
                              className="block h-full bg-[color:var(--solar)]"
                              style={{ animation: `noi-progress ${STEP_MS}ms linear forwards` }}
                            />
                          </span>
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Right: animated browser mock */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-paper">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-border bg-[color:var(--paper-deep)] px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <div className="mx-auto rounded-md bg-card px-3 py-0.5 text-[11px] text-[color:var(--ink-mute)]">
                  portal.joinnoi.com / assess
                </div>
              </div>

              {/* Canvas */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-background">
                {/* Screen 0: dashboard */}
                <Screen visible={step === 0}>
                  <DashboardScreen />
                </Screen>
                {/* Screen 1: upload */}
                <Screen visible={step === 1}>
                  <UploadScreen />
                </Screen>
                {/* Screen 2: confirm details */}
                <Screen visible={step === 2}>
                  <DetailsScreen />
                </Screen>
                {/* Screen 3: estimate */}
                <Screen visible={step === 3}>
                  <EstimateScreen />
                </Screen>

                {/* Animated cursor */}
                <div
                  className="pointer-events-none absolute z-30 transition-all duration-[1400ms] ease-[cubic-bezier(.6,.05,.2,1)]"
                  style={{ left: `${active.cursor.x}%`, top: `${active.cursor.y}%` }}
                >
                  <CursorSvg />
                  <span
                    key={`pulse-${step}`}
                    className="absolute -left-2 -top-2 block h-6 w-6 rounded-full bg-[color:var(--solar)]/40"
                    style={{ animation: "noi-pulse 1.4s ease-out 1s both" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes noi-progress { from { width: 0% } to { width: 100% } }
        @keyframes noi-pulse {
          0% { transform: scale(.3); opacity: .9 }
          100% { transform: scale(2.2); opacity: 0 }
        }
        @keyframes noi-fade-in {
          from { opacity: 0; transform: translateY(8px) }
          to { opacity: 1; transform: translateY(0) }
        }
        @keyframes noi-bar-grow { from { transform: scaleY(.1); } to { transform: scaleY(1); } }
        @keyframes noi-count {
          from { opacity: 0; transform: translateY(6px) }
          to { opacity: 1; transform: translateY(0) }
        }
      `}</style>
    </section>
  );
}

function Screen({ visible, children }: { visible: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-500 ${
        visible ? "z-20 opacity-100" : "z-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function CursorSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="drop-shadow-md">
      <path d="M5 3l14 8-6 1.5L10 20 5 3z" fill="#111" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------------- Screens ---------------- */

function DashboardScreen() {
  return (
    <div className="flex h-full" style={{ animation: "noi-fade-in .5s ease-out" }}>
      <aside className="hidden w-36 shrink-0 border-r border-border bg-[color:var(--paper-deep)] p-3 text-xs md:block">
        <div className="font-display text-base">NOI</div>
        <ul className="mt-4 space-y-2 text-[color:var(--ink-soft)]">
          <li className="rounded bg-card px-2 py-1 text-foreground">Properties</li>
          <li className="px-2">Assessments</li>
          <li className="px-2">Payouts</li>
          <li className="px-2">Tenants</li>
        </ul>
      </aside>
      <div className="flex-1 p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[color:var(--ink-mute)]">Portfolio</div>
            <div className="font-display text-lg">Welcome back, Daniel</div>
          </div>
          <button className="rounded-full bg-foreground px-3 py-1.5 text-[11px] font-medium text-[color:var(--paper)] ring-2 ring-[color:var(--solar)]/40">
            + New assessment
          </button>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
          {[
            { k: "12", l: "Properties" },
            { k: "284", l: "Units" },
            { k: "$41.2K", l: "Annual NOI added" },
          ].map((s) => (
            <div key={s.l} className="rounded-md border border-border bg-card p-3">
              <div className="font-display pb-num text-xl">{s.k}</div>
              <div className="text-[10px] text-[color:var(--ink-mute)]">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-md border border-dashed border-border p-4 text-center text-xs text-[color:var(--ink-mute)]">
          Click <span className="text-foreground">+ New assessment</span> to add a property →
        </div>
      </div>
    </div>
  );
}

function UploadScreen() {
  return (
    <div className="flex h-full items-center justify-center p-6" style={{ animation: "noi-fade-in .5s ease-out" }}>
      <div className="w-full max-w-sm">
        <div className="text-[10px] uppercase tracking-wider text-[color:var(--ink-mute)]">Step 1 of 3</div>
        <div className="font-display mt-1 text-lg">Upload a recent utility bill</div>
        <div className="mt-4 rounded-lg border-2 border-dashed border-[color:var(--solar)]/60 bg-[color:var(--solar)]/5 p-6 text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--solar)]/20 text-[color:var(--solar)]">
            ⬆
          </div>
          <div className="mt-2 text-xs font-medium">utility-bill-march.pdf</div>
          <div className="mt-1 text-[10px] text-[color:var(--ink-mute)]">324 KB · uploaded</div>
          <div className="mx-auto mt-3 h-1 w-32 overflow-hidden rounded-full bg-border">
            <div
              className="h-full bg-[color:var(--solar)]"
              style={{ animation: "noi-progress 1.6s ease-out forwards" }}
            />
          </div>
        </div>
        <div className="mt-3 text-[10px] text-[color:var(--ink-mute)]">
          We extract tariff, kWh usage, and rate schedule automatically.
        </div>
      </div>
    </div>
  );
}

function DetailsScreen() {
  const rows = [
    ["Address", "1428 Oak Ridge, Atlanta GA"],
    ["Units", "24"],
    ["Roof type", "Flat membrane"],
    ["Avg kWh / unit / mo", "820"],
  ];
  return (
    <div className="flex h-full items-center justify-center p-6" style={{ animation: "noi-fade-in .5s ease-out" }}>
      <div className="w-full max-w-sm">
        <div className="text-[10px] uppercase tracking-wider text-[color:var(--ink-mute)]">Step 2 of 3</div>
        <div className="font-display mt-1 text-lg">Confirm property details</div>
        <div className="mt-3 divide-y divide-border rounded-md border border-border bg-card text-xs">
          {rows.map(([k, v], i) => (
            <div
              key={k}
              className="flex items-center justify-between px-3 py-2"
              style={{ animation: `noi-count .4s ease-out ${i * 120}ms both` }}
            >
              <span className="text-[color:var(--ink-mute)]">{k}</span>
              <span className="font-medium">{v}</span>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full rounded-full bg-foreground py-2 text-xs font-medium text-[color:var(--paper)] ring-2 ring-[color:var(--solar)]/40">
          Calculate revenue →
        </button>
      </div>
    </div>
  );
}

function EstimateScreen() {
  const bars = [40, 55, 62, 70, 78, 84, 88, 92];
  return (
    <div className="flex h-full flex-col p-5" style={{ animation: "noi-fade-in .5s ease-out" }}>
      <div className="text-[10px] uppercase tracking-wider text-[color:var(--ink-mute)]">Your estimate</div>
      <div className="font-display mt-1 text-lg">1428 Oak Ridge · 24 units</div>

      <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
        {[
          { k: "+$17.7K", l: "Annual NOI uplift" },
          { k: "$0", l: "Capex from owner" },
          { k: "~58 days", l: "To first payout" },
        ].map((s, i) => (
          <div
            key={s.l}
            className="rounded-md border border-border bg-card p-3"
            style={{ animation: `noi-count .5s ease-out ${i * 160}ms both` }}
          >
            <div className="font-display pb-num text-base text-[color:var(--solar)]">{s.k}</div>
            <div className="text-[10px] text-[color:var(--ink-mute)]">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex-1 rounded-md border border-border bg-card p-3">
        <div className="flex items-center justify-between text-[10px] text-[color:var(--ink-mute)]">
          <span>Projected monthly revenue</span>
          <span className="text-[color:var(--solar)]">+8.4% NOI</span>
        </div>
        <div className="mt-2 flex h-20 items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 origin-bottom rounded-sm bg-[color:var(--solar)]/70"
              style={{
                height: `${h}%`,
                animation: `noi-bar-grow .5s ease-out ${i * 70}ms both`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
