import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/pb/Sidebar";
import { Btn, Card, PageHeader, Pill, type Tone } from "@/components/pb/atoms";
import { Icons } from "@/components/pb/icons";
import { T } from "@/components/pb/tokens";

export const Route = createFileRoute("/payouts")({
  head: () => ({
    meta: [
      { title: "Payouts — NOI" },
      { name: "description", content: "Your earnings, ready to deposit. Stripe handles bank verification and transfers automatically." },
    ],
  }),
  component: PayoutsPage,
});

const accounts = [
  { label: "Maciel Holdings — Operating", bank: "Mercury Bank", last4: "4192", country: "US", cur: "USD", state: "ready",      def: true  },
  { label: "Cedar Court LLC",             bank: "Chase",        last4: "8821", country: "US", cur: "USD", state: "ready",      def: false },
  { label: "Pine Hollow Trust",           bank: "—",            last4: null,   country: "US", cur: "USD", state: "incomplete", def: false },
];
const balances = [
  { p: "Cedar Court",     earned: 78420, fees: 392, paid: 64200, avail: 13828 },
  { p: "Sunset Lofts",    earned: 64280, fees: 321, paid: 51400, avail: 12559 },
  { p: "14 Pine Hollow",  earned: 28840, fees: 144, paid: 24700, avail:  3996 },
  { p: "Mission Triplex", earned: 16920, fees:  85, paid: 14000, avail:  2835 },
];
const payouts = [
  { d: "Apr 28", acc: "Maciel — Operating", amt: 13828, s: "in_transit", arr: "May 2"  },
  { d: "Apr 14", acc: "Cedar Court LLC",    amt: 12559, s: "paid",       arr: "Apr 17" },
  { d: "Mar 31", acc: "Maciel — Operating", amt: 11800, s: "paid",       arr: "Apr 03" },
  { d: "Mar 14", acc: "Cedar Court LLC",    amt: 11240, s: "paid",       arr: "Mar 18" },
  { d: "Mar 02", acc: "Pine Hollow Trust",  amt:  3120, s: "failed",     arr: "—"      },
];
const fmt = (c: number) => "$" + c.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function PayoutsPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="05 — Banking"
        title="Payouts"
        sub="Your earnings, ready to deposit. Stripe handles bank verification and transfers automatically."
        right={<>
          <Btn kind="ghost" icon={Icons.refresh({ size: 14 })}>Refresh</Btn>
          <Btn kind="primary" icon={Icons.plus({ size: 14 })}>Connect account</Btn>
        </>}
      />
      <div style={{ padding: "24px 40px 40px", display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {[
            { l: "Available to pay out", v: "$33,218.00", helper: "Across 4 properties", accent: T.solar, icon: Icons.wallet({ size: 16 }) },
            { l: "Lifetime earned",      v: "$188,460.00", helper: "Since Jan 2023",     icon: Icons.bank({ size: 16 }) },
            { l: "Paid out to date",     v: "$154,300.00", helper: "47 payouts",         icon: Icons.upRight({ size: 16 }), accent: T.green },
          ].map(k => (
            <Card key={k.l}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div className="font-mono" style={{ fontSize: 10.5, color: T.inkMute, letterSpacing: "0.18em", textTransform: "uppercase" }}>{k.l}</div>
                <span style={{ color: k.accent || T.inkMute }}>{k.icon}</span>
              </div>
              <div className="font-display pb-num" style={{ fontSize: 30, fontWeight: 500, marginTop: 10, letterSpacing: "-0.02em", color: k.accent || T.ink }}>{k.v}</div>
              <div style={{ fontSize: 12, color: T.inkSoft, marginTop: 4 }}>{k.helper}</div>
            </Card>
          ))}
        </div>

        <Card pad={0}>
          <div style={{ padding: "18px 24px", borderBottom: `1px solid ${T.ruleSoft}` }}>
            <h2 className="font-display" style={{ fontSize: 18, margin: 0, fontWeight: 500 }}>Bank accounts</h2>
            <div style={{ fontSize: 12, color: T.inkSoft, marginTop: 2 }}>Connect Stripe to deposit tenant payments to your bank.</div>
          </div>
          <div>
            {accounts.map((a, i) => {
              const ready = a.state === "ready";
              return (
                <div key={a.label} style={{
                  padding: "16px 24px", borderTop: i ? `1px solid ${T.ruleSoft}` : "none",
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap",
                }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: 8, background: T.paperDeep, color: T.ink,
                      display: "grid", placeItems: "center", border: `1px solid ${T.rule}`,
                    }}>{Icons.bank({ size: 18 })}</div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                        <span style={{ fontWeight: 600, fontSize: 14 }}>{a.label}</span>
                        {a.def && <Pill tone="ink">Default</Pill>}
                        {ready
                          ? <Pill tone="green">● Ready</Pill>
                          : <Pill tone="warn">! Onboarding incomplete</Pill>}
                      </div>
                      <div className="font-mono" style={{ fontSize: 11.5, color: T.inkSoft, marginTop: 4 }}>
                        {a.last4 ? `${a.bank} ····${a.last4}` : "No bank linked yet"} · {a.country} · {a.cur}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    {!ready
                      ? <Btn kind="solar">Continue setup →</Btn>
                      : <>
                          {!a.def && <Btn kind="ghost" style={{ fontSize: 12 }}>Set default</Btn>}
                          <Btn kind="ghost" icon={Icons.upRight({ size: 12 })} style={{ fontSize: 12 }}>Stripe dashboard</Btn>
                        </>}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>
          <Card pad={0}>
            <div style={{ padding: "16px 22px", borderBottom: `1px solid ${T.ruleSoft}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h3 className="font-display" style={{ fontSize: 16, margin: 0, fontWeight: 500 }}>Property balances</h3>
              <span className="font-mono" style={{ fontSize: 10.5, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase" }}>This month</span>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
              <thead>
                <tr style={{ background: T.paperDeep }}>
                  {["Property", "Earned", "Fees", "Paid out", "Available"].map((h, i) => (
                    <th key={h} className="font-mono" style={{
                      textAlign: i ? "right" : "left", padding: "8px 22px", fontSize: 9.5,
                      color: T.inkMute, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {balances.map(b => (
                  <tr key={b.p} style={{ borderTop: `1px solid ${T.ruleSoft}` }}>
                    <td style={{ padding: "14px 22px", fontWeight: 500 }}>{b.p}</td>
                    <td className="pb-num" style={{ padding: "14px 22px", textAlign: "right" }}>{fmt(b.earned)}</td>
                    <td className="pb-num" style={{ padding: "14px 22px", textAlign: "right", color: T.inkMute }}>−{fmt(b.fees)}</td>
                    <td className="pb-num" style={{ padding: "14px 22px", textAlign: "right", color: T.inkMute }}>−{fmt(b.paid)}</td>
                    <td className="pb-num" style={{ padding: "14px 22px", textAlign: "right", fontWeight: 700, color: T.solar }}>{fmt(b.avail)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <Card pad={0}>
            <div style={{ padding: "16px 22px", borderBottom: `1px solid ${T.ruleSoft}` }}>
              <h3 className="font-display" style={{ fontSize: 16, margin: 0, fontWeight: 500 }}>Payout history</h3>
            </div>
            <div>
              {payouts.map((p, i) => {
                const tone: Tone = p.s === "paid" ? "green" : p.s === "in_transit" ? "solar" : p.s === "failed" ? "red" : "mute";
                const lbl = p.s === "in_transit" ? "In transit" : p.s.charAt(0).toUpperCase() + p.s.slice(1);
                return (
                  <div key={i} style={{
                    padding: "14px 22px", borderTop: i ? `1px solid ${T.ruleSoft}` : "none",
                    display: "grid", gridTemplateColumns: "1fr auto", gap: 8,
                  }}>
                    <div>
                      <div className="pb-num" style={{ fontWeight: 600, fontSize: 14 }}>{fmt(p.amt)}</div>
                      <div style={{ fontSize: 11.5, color: T.inkSoft }}>{p.acc}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Pill tone={tone}>{lbl}</Pill>
                      <div className="font-mono" style={{ fontSize: 10.5, color: T.inkMute, marginTop: 4 }}>{p.d} · arr {p.arr}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
