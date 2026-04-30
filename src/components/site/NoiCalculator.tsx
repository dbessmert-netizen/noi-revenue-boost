import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function Slider({
  label, value, min, max, step, onChange, suffix,
}: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; suffix: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium">{label}</label>
        <span className="font-mono pb-num text-sm text-[color:var(--ink-soft)]">
          {value}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-full bg-[color:var(--rule)] accent-[color:var(--solar)]"
      />
      <div className="mt-1 flex justify-between font-mono text-[10px] text-[color:var(--ink-mute)]">
        <span>{min}{suffix}</span><span>{max}{suffix}</span>
      </div>
    </div>
  );
}

export function NoiCalculator() {
  const [units, setUnits] = useState(12);
  const [kwh, setKwh] = useState(850);          // monthly kWh / unit
  const [tenantRate, setTenantRate] = useState(0.22); // $/kWh tenants pay
  const [solarCost, setSolarCost] = useState(0.11);   // $/kWh NOI cost

  const { perUnitMo, perUnitYr, propertyMo, propertyYr, fee, netYr, gridSavings } = useMemo(() => {
    const margin = Math.max(0, tenantRate - solarCost);
    const perUnitMo = kwh * margin;
    const propertyMo = perUnitMo * units;
    const fee = propertyMo * 0.05;
    const netMo = propertyMo - fee;
    const grid = 0.29; // reference grid rate
    return {
      perUnitMo,
      perUnitYr: perUnitMo * 12,
      propertyMo,
      propertyYr: propertyMo * 12,
      fee,
      netYr: netMo * 12,
      gridSavings: kwh * (grid - tenantRate),
    };
  }, [units, kwh, tenantRate, solarCost]);

  const presets = [
    { name: "Duplex", units: 2, kwh: 900 },
    { name: "Small multifamily", units: 8, kwh: 850 },
    { name: "Mid multifamily", units: 24, kwh: 820 },
    { name: "Portfolio", units: 80, kwh: 800 },
  ];

  return (
    <section id="calculator" className="border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="eyebrow">Interactive · NOI calculator</div>
            <h2 className="font-display mt-4 max-w-2xl text-4xl tracking-tight md:text-5xl">
              See your number. <span className="italic text-[color:var(--solar)]">Move the sliders.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--ink-soft)]">
              A live model based on real properties on NOI today. Final numbers depend on roof orientation, local utility rates, and load profile.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p.name}
                onClick={() => { setUnits(p.units); setKwh(p.kwh); }}
                className="rounded-full border border-border px-4 py-2 text-xs font-medium hover:bg-[color:var(--paper-deep)]"
              >
                {p.name} · {p.units}u
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[1.1fr_1fr]">
          {/* Inputs */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-paper">
            <div className="eyebrow">Adjust to match your property</div>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <Slider label="Units" value={units} min={1} max={250} step={1} suffix="" onChange={setUnits} />
              <Slider label="Monthly kWh / unit" value={kwh} min={300} max={1500} step={10} suffix=" kWh" onChange={setKwh} />
              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-medium">Tenant price</label>
                  <span className="font-mono pb-num text-sm text-[color:var(--ink-soft)]">${tenantRate.toFixed(2)} / kWh</span>
                </div>
                <input
                  type="range" min={0.10} max={0.35} step={0.005}
                  value={tenantRate}
                  onChange={(e) => setTenantRate(Number(e.target.value))}
                  className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-full bg-[color:var(--rule)] accent-[color:var(--solar)]"
                />
                <div className="mt-1 flex justify-between font-mono text-[10px] text-[color:var(--ink-mute)]">
                  <span>$0.10</span><span>Grid ref. $0.29</span><span>$0.35</span>
                </div>
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-medium">Solar cost (you)</label>
                  <span className="font-mono pb-num text-sm text-[color:var(--ink-soft)]">${solarCost.toFixed(2)} / kWh</span>
                </div>
                <input
                  type="range" min={0.05} max={0.20} step={0.005}
                  value={solarCost}
                  onChange={(e) => setSolarCost(Number(e.target.value))}
                  className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-full bg-[color:var(--rule)] accent-[color:var(--solar)]"
                />
                <div className="mt-1 flex justify-between font-mono text-[10px] text-[color:var(--ink-mute)]">
                  <span>$0.05</span><span>$0.20</span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center text-xs text-[color:var(--ink-soft)]">
              <div>
                <div className="font-display pb-num text-2xl text-foreground">{fmt(perUnitMo)}</div>
                <div className="mt-1">Revenue / unit / mo</div>
              </div>
              <div>
                <div className="font-display pb-num text-2xl text-foreground">{fmt(perUnitYr)}</div>
                <div className="mt-1">Revenue / unit / yr</div>
              </div>
              <div>
                <div className="font-display pb-num text-2xl text-[color:var(--solar)]">{fmt(gridSavings)}</div>
                <div className="mt-1">Tenant saves / mo</div>
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="rounded-2xl border border-[color:var(--solar)]/40 bg-[color:var(--solar-tint)] p-8 shadow-paper">
            <div className="eyebrow text-[color:var(--solar)]">Your NOI uplift</div>
            <div className="mt-4">
              <div className="font-display pb-num text-6xl tracking-tight">
                {fmt(netYr)}
              </div>
              <div className="mt-1 text-sm text-[color:var(--ink-soft)]">Net annual revenue, after platform fee</div>
            </div>

            <dl className="mt-8 space-y-3 text-sm">
              {[
                ["Property monthly revenue", fmt(propertyMo)],
                ["Property annual revenue", fmt(propertyYr)],
                ["NOI platform fee (5%)", `−${fmt(fee * 12)}`],
                ["Annual NOI uplift", fmt(netYr), true],
              ].map(([k, v, strong]) => (
                <div
                  key={k as string}
                  className={`flex items-center justify-between border-t border-[color:var(--solar)]/20 pt-3 ${strong ? "font-semibold" : "text-[color:var(--ink-soft)]"}`}
                >
                  <dt>{k}</dt>
                  <dd className="pb-num">{v}</dd>
                </div>
              ))}
            </dl>

            <Link
              to="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-[color:var(--paper)] hover:opacity-90"
            >
              Get my real estimate →
            </Link>
            <p className="mt-3 text-center text-xs text-[color:var(--ink-mute)]">
              We'll model your specific roof using a recent utility bill.
            </p>
          </div>
        </div>

        {/* Scale comparison */}
        <div className="mt-12">
          <div className="eyebrow">At a glance · annual NOI uplift by portfolio size</div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-paper">
            <div className="grid grid-cols-4 border-b border-border bg-[color:var(--paper-deep)] px-6 py-3 text-[11px] font-medium uppercase tracking-wider text-[color:var(--ink-mute)]">
              <div>Property type</div>
              <div className="text-right">Units</div>
              <div className="text-right">Monthly</div>
              <div className="text-right">Annual (net)</div>
            </div>
            {[
              { name: "Single-family rental", u: 1 },
              { name: "Duplex", u: 2 },
              { name: "Small multifamily", u: 8 },
              { name: "Mid multifamily", u: 24 },
              { name: "Large multifamily", u: 60 },
              { name: "Portfolio", u: 150 },
            ].map((row, i, arr) => {
              const margin = Math.max(0, tenantRate - solarCost);
              const mo = kwh * margin * row.u;
              const yr = mo * 12 * 0.95;
              return (
                <div key={row.name} className={`grid grid-cols-4 px-6 py-4 text-sm ${i < arr.length - 1 ? "border-b border-border/60" : ""}`}>
                  <div>{row.name}</div>
                  <div className="pb-num text-right text-[color:var(--ink-soft)]">{row.u}</div>
                  <div className="pb-num text-right">{fmt(mo)}</div>
                  <div className="pb-num text-right font-semibold text-[color:var(--solar)]">{fmt(yr)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
