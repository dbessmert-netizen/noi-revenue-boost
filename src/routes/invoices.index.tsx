import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/pb/Sidebar";
import { Btn, Card, PageHeader, Pill, type Tone } from "@/components/pb/atoms";
import { Icons } from "@/components/pb/icons";
import { T } from "@/components/pb/tokens";

export const Route = createFileRoute("/invoices/")({
  head: () => ({
    meta: [
      { title: "Get paid — NOI" },
      { name: "description", content: "Bill tenants for rent, deposits, and metered solar usage. One invoice per period." },
    ],
  }),
  component: InvoicesPage,
});

const rows = [
  { n: "INV-0184", t: "Lina Okafor",     u: "Cedar Court · 3B", amt: "$2,840.00", s: "paid",    issue: "Apr 01", due: "Apr 15", period: "April 2026" },
  { n: "INV-0183", t: "Marcus Lindgren", u: "Cedar Court · 2A", amt: "$2,680.00", s: "paid",    issue: "Apr 01", due: "Apr 15", period: "April 2026" },
  { n: "INV-0182", t: "Iris Tanaka",     u: "Sunset Lofts · 5", amt: "$3,420.00", s: "sent",    issue: "Apr 01", due: "Apr 15", period: "April 2026" },
  { n: "INV-0181", t: "David Voss",      u: "14 Pine Hollow",   amt: "$4,148.17", s: "overdue", issue: "Mar 28", due: "Apr 12", period: "April 2026" },
  { n: "INV-0180", t: "Priya Shankar",   u: "Sunset Lofts · 2", amt: "$2,950.00", s: "paid",    issue: "Apr 01", due: "Apr 15", period: "April 2026" },
  { n: "INV-0179", t: "Aïcha Diop",      u: "Cedar Court · 3B", amt: "$2,840.00", s: "draft",   issue: "—",      due: "—",      period: "May 2026" },
  { n: "INV-0178", t: "Jonas Werner",    u: "Sunset Lofts · 5", amt: "$3,420.00", s: "void",    issue: "Mar 14", due: "Mar 28", period: "March 2026" },
];

function InvoicesPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="04 — Billing"
        title="Get paid."
        sub="Bill tenants for rent, deposits, and metered solar usage. One invoice per period."
        right={<>
          <Btn kind="ghost" icon={Icons.send({ size: 14 })}>Send all drafts</Btn>
          <Btn kind="solar" icon={Icons.plus({ size: 14 })}>New invoice</Btn>
        </>}
      />
      <div style={{ padding: "24px 40px 40px", display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { l: "Outstanding", v: "$10,488.17", s: "4 invoices",                accent: T.warn },
            { l: "Paid",        v: "$22,310.00", s: "12 invoices this month",    accent: T.green },
            { l: "Drafts",      v: "$3,820.00",  s: "2 ready to send",           accent: T.inkMute },
          ].map(k => (
            <Card key={k.l}>
              <div className="font-mono" style={{ fontSize: 10.5, color: T.inkMute, letterSpacing: "0.18em", textTransform: "uppercase" }}>{k.l}</div>
              <div className="font-display pb-num" style={{ fontSize: 32, fontWeight: 500, marginTop: 8, color: k.accent, letterSpacing: "-0.02em" }}>{k.v}</div>
              <div style={{ fontSize: 12, color: T.inkSoft, marginTop: 4 }}>{k.s}</div>
            </Card>
          ))}
        </div>

        <Card pad={0}>
          <div style={{ padding: "16px 24px", borderBottom: `1px solid ${T.ruleSoft}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 4 }}>
              {["All", "Draft", "Sent", "Paid", "Overdue", "Void"].map((t, i) => (
                <span key={t} style={{
                  padding: "6px 14px", fontSize: 12, borderRadius: 6, fontWeight: 500,
                  background: i === 0 ? T.ink : "transparent",
                  color: i === 0 ? T.paper : T.inkSoft,
                }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <Btn kind="ghost" icon={Icons.filter({ size: 12 })} style={{ padding: "6px 12px", fontSize: 12 }}>Filter</Btn>
              <Btn kind="ghost" icon={Icons.search({ size: 12 })} style={{ padding: "6px 12px", fontSize: 12 }}>Search</Btn>
            </div>
          </div>

          <div>
            {rows.map((r, i) => {
              const tone: Tone = r.s === "paid" ? "green" : r.s === "sent" ? "warn" : r.s === "overdue" ? "red" : "mute";
              const lbl = r.s === "paid" ? "● Paid" : r.s === "sent" ? "○ Sent" : r.s === "overdue" ? "! Overdue" : r.s === "draft" ? "◇ Draft" : "✕ Void";
              return (
                <Link key={r.n} to="/invoices/$id" params={{ id: r.n }} style={{
                  padding: "18px 24px", borderTop: i ? `1px solid ${T.ruleSoft}` : "none",
                  display: "grid", gridTemplateColumns: "120px 1.5fr 1fr 1fr 130px 220px",
                  gap: 16, alignItems: "center",
                  opacity: r.s === "void" ? 0.55 : 1, color: T.ink, textDecoration: "none",
                }}>
                  <div className="font-mono" style={{ fontSize: 12, color: T.inkSoft }}>{r.n}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, textDecoration: r.s === "void" ? "line-through" : "none" }}>{r.t}</div>
                    <div style={{ fontSize: 12, color: T.inkSoft }}>{r.u}</div>
                  </div>
                  <div>
                    <div className="font-mono" style={{ fontSize: 9.5, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase" }}>Period</div>
                    <div style={{ fontSize: 12.5 }}>{r.period}</div>
                  </div>
                  <div>
                    <div className="font-mono" style={{ fontSize: 9.5, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase" }}>Due</div>
                    <div className="font-mono" style={{ fontSize: 12.5 }}>{r.due}</div>
                  </div>
                  <div className="pb-num" style={{ fontWeight: 700, fontSize: 16, textAlign: "right" }}>{r.amt}</div>
                  <div style={{ display: "flex", gap: 6, justifyContent: "flex-end", alignItems: "center" }}>
                    <Pill tone={tone}>{lbl}</Pill>
                    {r.s === "draft"   && <Btn kind="primary" style={{ padding: "5px 10px", fontSize: 11 }} icon={Icons.send({ size: 12 })}>Send</Btn>}
                    {r.s === "sent"    && <Btn kind="solar"   style={{ padding: "5px 10px", fontSize: 11 }} icon={Icons.check({ size: 12 })}>Mark paid</Btn>}
                    {r.s === "overdue" && <Btn kind="solar"   style={{ padding: "5px 10px", fontSize: 11 }} icon={Icons.bell({ size: 12 })}>Remind</Btn>}
                  </div>
                </Link>
              );
            })}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
