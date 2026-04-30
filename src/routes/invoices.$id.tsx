import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/pb/Sidebar";
import { Btn, PageHeader, Pill } from "@/components/pb/atoms";
import { Icons } from "@/components/pb/icons";
import { T } from "@/components/pb/tokens";

export const Route = createFileRoute("/invoices/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.id} — NOI` },
      { name: "description", content: `Invoice ${params.id} on NOI.` },
    ],
  }),
  component: InvoiceDetailPage,
});

const lines = [
  { d: "Monthly rent — Cedar Court · Apt 3B", q: 1, u: "$2,840.00", t: "$2,840.00" },
  { d: "Solar consumption — 162.4 kWh @ $0.14/kWh", q: 162.4, u: "$0.14", t: "$22.74" },
  { d: "Late fee waiver — courtesy", q: 1, u: "−$0.00", t: "$0.00" },
];

function Row({ k, v, mute }: { k: string; v: string; mute?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "4px 0", fontSize: 13 }}>
      <span style={{ color: T.inkSoft }}>{k}</span>
      <span className="pb-num" style={{ fontWeight: 500, color: mute ? T.inkMute : T.ink }}>{v}</span>
    </div>
  );
}

function InvoiceDetailPage() {
  const { id } = Route.useParams();
  return (
    <AppShell>
      <div style={{ flex: 1, background: T.paper, padding: "32px 40px 40px", overflow: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Link to="/invoices" style={{ textDecoration: "none" }}>
              <Btn kind="ghost" style={{ padding: "6px 12px" }}>← Back</Btn>
            </Link>
            <h1 className="font-display" style={{ fontSize: 26, margin: 0, fontWeight: 500 }}>{id}</h1>
            <Pill tone="green">● Paid</Pill>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Btn kind="ghost" icon={Icons.copy({ size: 14 })}>Duplicate</Btn>
            <Btn kind="ghost">Download PDF</Btn>
            <Btn kind="primary" icon={Icons.send({ size: 14 })}>Resend</Btn>
          </div>
        </div>

        <div style={{
          maxWidth: 820, margin: "0 auto",
          background: T.card, border: `1px solid ${T.rule}`, borderRadius: 12,
          padding: 56, boxShadow: "0 1px 0 rgba(0,0,0,0.02), 0 18px 40px -28px rgba(26,23,20,0.18)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: `2px solid ${T.ink}`, paddingBottom: 24 }}>
            <div>
              <div className="font-mono" style={{ fontSize: 11, color: T.inkMute, letterSpacing: "0.2em", textTransform: "uppercase" }}>Invoice</div>
              <h2 className="font-display" style={{ fontSize: 44, margin: "6px 0 4px", fontWeight: 500, letterSpacing: "-0.02em" }}>{id}</h2>
              <div style={{ fontSize: 13, color: T.inkSoft }}>For period <strong style={{ color: T.ink }}>April 2026</strong></div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "flex-end" }}>
                <div style={{ width: 20, height: 20, borderRadius: 5, background: T.solar }}/>
                <div className="font-display" style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em" }}>NOI</div>
              </div>
              <div style={{ fontSize: 11.5, color: T.inkSoft, marginTop: 8, lineHeight: 1.5 }}>
                Maciel Holdings, LLC<br/>1422 Cedar St, Oakland, CA 94612<br/>tax ID 88-1142331
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, padding: "24px 0", borderBottom: `1px solid ${T.ruleSoft}` }}>
            <div>
              <div className="font-mono" style={{ fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase" }}>Billed to</div>
              <div style={{ fontSize: 13.5, fontWeight: 600, marginTop: 6 }}>Lina Okafor</div>
              <div style={{ fontSize: 12, color: T.inkSoft }}>lina.okafor@gmail.com</div>
              <div style={{ fontSize: 12, color: T.inkSoft }}>Cedar Court · Apt 3B</div>
            </div>
            <div>
              <div className="font-mono" style={{ fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase" }}>Issued</div>
              <div className="font-mono" style={{ fontSize: 13.5, fontWeight: 600, marginTop: 6 }}>Apr 01, 2026</div>
            </div>
            <div>
              <div className="font-mono" style={{ fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase" }}>Due</div>
              <div className="font-mono" style={{ fontSize: 13.5, fontWeight: 600, marginTop: 6 }}>Apr 15, 2026</div>
            </div>
            <div>
              <div className="font-mono" style={{ fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase" }}>Paid</div>
              <div className="font-mono" style={{ fontSize: 13.5, fontWeight: 600, marginTop: 6, color: T.green }}>Apr 11, 2026</div>
            </div>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 24, fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${T.rule}` }}>
                <th className="font-mono" style={{ textAlign: "left",  padding: "10px 0", fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500 }}>Description</th>
                <th className="font-mono" style={{ textAlign: "right", padding: "10px 14px", fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500 }}>Qty</th>
                <th className="font-mono" style={{ textAlign: "right", padding: "10px 14px", fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500 }}>Unit</th>
                <th className="font-mono" style={{ textAlign: "right", padding: "10px 0", fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500 }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {lines.map(l => (
                <tr key={l.d} style={{ borderBottom: `1px solid ${T.ruleSoft}` }}>
                  <td style={{ padding: "14px 0" }}>{l.d}</td>
                  <td className="pb-num" style={{ padding: "14px 14px", textAlign: "right" }}>{l.q}</td>
                  <td className="pb-num" style={{ padding: "14px 14px", textAlign: "right" }}>{l.u}</td>
                  <td className="pb-num" style={{ padding: "14px 0",  textAlign: "right", fontWeight: 600 }}>{l.t}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
            <div style={{ width: 280 }}>
              <Row k="Subtotal"     v="$2,862.74"/>
              <Row k="Solar credit" v="−$0.00" mute/>
              <div style={{ borderTop: `2px solid ${T.ink}`, marginTop: 10, paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span className="font-mono" style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>Total due</span>
                <span className="font-display pb-num" style={{ fontSize: 28, fontWeight: 600, color: T.solar, letterSpacing: "-0.02em" }}>$2,862.74</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 28, padding: 18, background: T.solarTint, border: `1px solid ${T.solarSoft}`, borderRadius: 10, display: "flex", gap: 14 }}>
            <div style={{ color: T.solar, marginTop: 1 }}>{Icons.sun({ size: 16 })}</div>
            <div style={{ flex: 1 }}>
              <div className="font-mono" style={{ fontSize: 10, color: T.solar, letterSpacing: "0.16em", textTransform: "uppercase" }}>Solar period detail</div>
              <div style={{ fontSize: 13, marginTop: 6, color: "#7A2A0E", lineHeight: 1.55 }}>
                Your meter recorded <strong>162.4 kWh</strong> of consumption from the building array between <strong>Apr 01 – Apr 30</strong>.
                You produced <strong>118.7 kWh</strong> of credit toward the grid. Net charge billed at $0.14/kWh.
              </div>
            </div>
          </div>

          <div style={{ marginTop: 28, fontSize: 11.5, color: T.inkMute, lineHeight: 1.6 }}>
            Pay via ACH to Mercury Bank · Maciel Holdings, LLC · routing ••••6789 · acct ••••4192. Please include {id} in the memo. Thank you for being a NOI tenant.
          </div>
        </div>
      </div>
    </AppShell>
  );
}
