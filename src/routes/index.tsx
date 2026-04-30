import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/pb/Sidebar";
import { Btn, Card, PageHeader, Pill, Dot } from "@/components/pb/atoms";
import { Icons } from "@/components/pb/icons";
import { T } from "@/components/pb/tokens";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Overview — NOI" },
      { name: "description", content: "Your portfolio at a glance — revenue, occupancy, and what needs your attention this week." },
    ],
  }),
  component: OverviewPage,
});

function Stat({ label, value, delta, deltaUp, helper, accent }: {
  label: string; value: string; delta?: string; deltaUp?: boolean; helper?: string; accent?: string;
}) {
  return (
    <div style={{ padding: "4px 0" }}>
      <div className="font-mono" style={{ fontSize: 10.5, color: T.inkMute, letterSpacing: "0.16em", textTransform: "uppercase" }}>{label}</div>
      <div className="font-display pb-num" style={{ fontSize: 38, fontWeight: 500, marginTop: 8, color: accent || T.ink, lineHeight: 1, letterSpacing: "-0.03em" }}>{value}</div>
      <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
        {delta && (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 3, color: deltaUp ? T.green : T.red, fontWeight: 600 }}>
            {deltaUp ? Icons.upRight({ size: 14 }) : Icons.downRight({ size: 14 })}{delta}
          </span>
        )}
        {helper && <span style={{ color: T.inkSoft }}>{helper}</span>}
      </div>
    </div>
  );
}

function OverviewPage() {
  const months = [
    { m: "Sep", r: 18.4 }, { m: "Oct", r: 21.2 }, { m: "Nov", r: 19.8 },
    { m: "Dec", r: 22.1 }, { m: "Jan", r: 24.6 }, { m: "Feb", r: 23.0 },
    { m: "Mar", r: 27.8 }, { m: "Apr", r: 31.4 },
  ];
  const max = 36;
  const W = 560, H = 200, pad = { l: 36, r: 8, t: 14, b: 22 };
  const innerW = W - pad.l - pad.r, innerH = H - pad.t - pad.b;
  const x = (i: number) => pad.l + (i * innerW) / (months.length - 1);
  const y = (v: number) => pad.t + innerH - (v / max) * innerH;
  const linePath = months.map((p, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(p.r)}`).join(" ");
  const areaPath = `${linePath} L ${x(months.length - 1)} ${pad.t + innerH} L ${x(0)} ${pad.t + innerH} Z`;

  const donut = [
    { name: "Multi-family",  pct: 58, color: T.solar },
    { name: "Single-family", pct: 27, color: T.ink },
    { name: "Mixed-use",     pct: 15, color: "#A87617" },
  ];
  let acc = 0;
  const cx = 70, cy = 70, rO = 60, rI = 38;
  const arc = (start: number, end: number) => {
    const a1 = (start / 100) * Math.PI * 2 - Math.PI / 2;
    const a2 = (end / 100) * Math.PI * 2 - Math.PI / 2;
    const large = end - start > 50 ? 1 : 0;
    const x1 = cx + rO * Math.cos(a1), y1 = cy + rO * Math.sin(a1);
    const x2 = cx + rO * Math.cos(a2), y2 = cy + rO * Math.sin(a2);
    const x3 = cx + rI * Math.cos(a2), y3 = cy + rI * Math.sin(a2);
    const x4 = cx + rI * Math.cos(a1), y4 = cy + rI * Math.sin(a1);
    return `M ${x1} ${y1} A ${rO} ${rO} 0 ${large} 1 ${x2} ${y2} L ${x3} ${y3} A ${rI} ${rI} 0 ${large} 0 ${x4} ${y4} Z`;
  };

  const invoices = [
    { n: "INV-0184", t: "Lina Okafor",     u: "Cedar Court · 3B", amt: "$2,840.00", s: "paid",    d: "Apr 28" },
    { n: "INV-0183", t: "Marcus Lindgren", u: "Cedar Court · 2A", amt: "$2,680.00", s: "paid",    d: "Apr 26" },
    { n: "INV-0182", t: "Iris Tanaka",     u: "Sunset Lofts · 5", amt: "$3,420.00", s: "sent",    d: "Apr 24" },
    { n: "INV-0181", t: "David Voss",      u: "14 Pine Hollow",   amt: "$4,100.00", s: "overdue", d: "Apr 12" },
    { n: "INV-0180", t: "Priya Shankar",   u: "Sunset Lofts · 2", amt: "$2,950.00", s: "paid",    d: "Apr 08" },
  ];

  return (
    <AppShell>
      <PageHeader
        eyebrow="01 — Dashboard"
        title="Overview"
        sub="Your portfolio at a glance — revenue, occupancy, and what needs your attention this week."
        right={<>
          <Btn kind="ghost" icon={Icons.refresh({ size: 14 })}>Sync solar</Btn>
          <Btn kind="primary" icon={Icons.plus({ size: 14 })}>New invoice</Btn>
        </>}
      />

      <div style={{ padding: "28px 40px 40px", display: "flex", flexDirection: "column", gap: 24 }}>
        {/* KPI strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", background: T.card, border: `1px solid ${T.rule}`, borderRadius: 12, padding: "24px 28px" }}>
          {[
            { label: "Total revenue",     value: "$188,420", delta: "+14.7%", up: true,  helper: "vs. last month" },
            { label: "Active properties", value: "6",        helper: "17 units" },
            { label: "Active tenants",    value: "14",       helper: "2 leases starting May 1" },
            { label: "Pending payouts",   value: "$12,340",  helper: "4 outstanding invoices", accent: T.solar },
          ].map((k, i) => (
            <div key={i} style={{ borderLeft: i ? `1px solid ${T.ruleSoft}` : "none", paddingLeft: i ? 28 : 0 }}>
              <Stat label={k.label} value={k.value} delta={k.delta} deltaUp={k.up} helper={k.helper} accent={k.accent} />
            </div>
          ))}
        </div>

        {/* Revenue + Donut */}
        <div style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: 16 }}>
          <Card pad={24}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div>
                <div className="font-mono" style={{ fontSize: 10.5, color: T.inkMute, letterSpacing: "0.18em", textTransform: "uppercase" }}>Revenue</div>
                <div className="font-display pb-num" style={{ fontSize: 28, marginTop: 6, fontWeight: 500 }}>$31,420 <span style={{ fontSize: 13, color: T.green, fontFamily: "inherit" }}>+13.0%</span></div>
                <div style={{ fontSize: 12, color: T.inkSoft }}>April · paid invoices, last 8 months</div>
              </div>
              <div style={{ display: "flex", gap: 4, fontSize: 11.5 }}>
                {["8M", "1Y", "All"].map((l, i) => (
                  <span key={l} style={{
                    padding: "4px 10px", borderRadius: 6,
                    background: i === 0 ? T.ink : "transparent",
                    color: i === 0 ? T.paper : T.inkSoft,
                    border: i === 0 ? "none" : `1px solid ${T.rule}`,
                  }}>{l}</span>
                ))}
              </div>
            </div>
            <svg width={W} height={H} style={{ marginTop: 12, width: "100%", height: "auto" }} viewBox={`0 0 ${W} ${H}`}>
              <defs>
                <linearGradient id="rev-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={T.solar} stopOpacity="0.32"/>
                  <stop offset="100%" stopColor={T.solar} stopOpacity="0"/>
                </linearGradient>
              </defs>
              {[0, 9, 18, 27, 36].map(v => (
                <g key={v}>
                  <line x1={pad.l} x2={W - pad.r} y1={y(v)} y2={y(v)} stroke={T.ruleSoft} strokeDasharray="2 4"/>
                  <text x={pad.l - 8} y={y(v) + 3} fontSize="10" textAnchor="end" fill={T.inkMute} fontFamily="ui-monospace">${v}k</text>
                </g>
              ))}
              <path d={areaPath} fill="url(#rev-grad)"/>
              <path d={linePath} fill="none" stroke={T.solar} strokeWidth="2"/>
              {months.map((p, i) => (
                <g key={i}>
                  <circle cx={x(i)} cy={y(p.r)} r="3" fill={T.card} stroke={T.solar} strokeWidth="2"/>
                  <text x={x(i)} y={H - 6} fontSize="10" textAnchor="middle" fill={T.inkMute}>{p.m}</text>
                </g>
              ))}
              <circle cx={x(7)} cy={y(31.4)} r="5" fill={T.solar} stroke={T.card} strokeWidth="2"/>
            </svg>
          </Card>

          <Card pad={24}>
            <div className="font-mono" style={{ fontSize: 10.5, color: T.inkMute, letterSpacing: "0.18em", textTransform: "uppercase" }}>Income mix</div>
            <div style={{ fontSize: 12, color: T.inkSoft, marginTop: 4 }}>By property type · YTD</div>
            <div style={{ display: "flex", gap: 18, alignItems: "center", marginTop: 14 }}>
              <svg width="140" height="140" viewBox="0 0 140 140">
                {donut.map((d, i) => {
                  const start = acc; acc += d.pct;
                  return <path key={i} d={arc(start, acc)} fill={d.color}/>;
                })}
                <text x="70" y="68" textAnchor="middle" className="font-display" fontSize="20" fontWeight="500" fill={T.ink}>YTD</text>
                <text x="70" y="84" textAnchor="middle" fontSize="10" fill={T.inkMute} fontFamily="ui-monospace">$188.4K</text>
              </svg>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                {donut.map(d => (
                  <div key={d.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <Dot color={d.color} size={8}/>{d.name}
                    </span>
                    <span className="font-mono" style={{ color: T.inkSoft }}>{d.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 16, padding: 12, background: T.solarTint, border: `1px solid ${T.solarSoft}`, borderRadius: 8, fontSize: 11.5, color: "#7A2A0E", display: "flex", gap: 10 }}>
              <span style={{ color: T.solar, marginTop: 1 }}>{Icons.sun({ size: 14 })}</span>
              <div><strong>Solar adds 8.4%</strong> to monthly revenue across 4 metered units.</div>
            </div>
          </Card>
        </div>

        {/* Recent invoices */}
        <Card pad={0}>
          <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${T.ruleSoft}` }}>
            <div>
              <div className="font-display" style={{ fontSize: 18, fontWeight: 500 }}>Recent invoices</div>
              <div style={{ fontSize: 12, color: T.inkSoft, marginTop: 2 }}>Latest tenant billing activity</div>
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              {["All", "Paid", "Pending", "Overdue"].map((t, i) => (
                <span key={t} style={{
                  padding: "5px 12px", fontSize: 12, borderRadius: 6,
                  background: i === 0 ? T.ink : "transparent",
                  color: i === 0 ? T.paper : T.inkSoft,
                }}>{t}</span>
              ))}
            </div>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: T.paperDeep }}>
                {["Invoice", "Tenant", "Unit", "Date", "Amount", "Status"].map((h, i) => (
                  <th key={h} className="font-mono" style={{
                    textAlign: i === 4 ? "right" : "left",
                    padding: "10px 24px", fontSize: 10, color: T.inkMute,
                    letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {invoices.map(r => (
                <tr key={r.n} style={{ borderTop: `1px solid ${T.ruleSoft}` }}>
                  <td className="font-mono" style={{ padding: "14px 24px", color: T.inkSoft, fontSize: 12 }}>{r.n}</td>
                  <td style={{ padding: "14px 24px", fontWeight: 500 }}>{r.t}</td>
                  <td style={{ padding: "14px 24px", color: T.inkSoft }}>{r.u}</td>
                  <td className="font-mono" style={{ padding: "14px 24px", color: T.inkSoft, fontSize: 12 }}>{r.d}</td>
                  <td className="pb-num" style={{ padding: "14px 24px", textAlign: "right", fontWeight: 600 }}>{r.amt}</td>
                  <td style={{ padding: "14px 24px" }}>
                    {r.s === "paid"    && <Pill tone="green">● Paid</Pill>}
                    {r.s === "sent"    && <Pill tone="warn">○ Pending</Pill>}
                    {r.s === "overdue" && <Pill tone="red">! Overdue</Pill>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </AppShell>
  );
}
