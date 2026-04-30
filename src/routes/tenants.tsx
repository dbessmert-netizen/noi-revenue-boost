import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/pb/Sidebar";
import { Btn, Card, PageHeader, Pill } from "@/components/pb/atoms";
import { Icons } from "@/components/pb/icons";
import { T } from "@/components/pb/tokens";

export const Route = createFileRoute("/tenants")({
  head: () => ({
    meta: [
      { title: "Tenants — NOI" },
      { name: "description", content: "Invite tenants by email — they get a private signup link tied to a unit and rent amount." },
    ],
  }),
  component: TenantsPage,
});

const pending = [
  { name: "Iris Tanaka", email: "iris.tanaka@hey.com", unit: "Cedar Court · Apt 3A", rent: "$3,100", exp: "May 4", link: "noi.app/invite/k3J9-pX7t-2L4q" },
  { name: "Marco Reyes", email: "marco@reyesarch.co",  unit: "Sunset Lofts · Unit 4", rent: "$2,890", exp: "May 7", link: "noi.app/invite/8nFa-qW2v-9R1m" },
];

const tenants = [
  { name: "Lina Okafor",     email: "lina.okafor@gmail.com",    phone: "+1 510 555 0142",  unit: "Cedar Court · 1A",  since: "May 2024", status: "active"  },
  { name: "Marcus Lindgren", email: "mlindgren@protonmail.com", phone: "+1 510 555 0188",  unit: "Cedar Court · 2A",  since: "Aug 2024", status: "active"  },
  { name: "David Voss",      email: "d.voss@northbay.law",      phone: "+1 415 555 0107",  unit: "14 Pine Hollow",    since: "Mar 2023", status: "active"  },
  { name: "Priya Shankar",   email: "priya.s@onlymail.com",     phone: "+1 510 555 0233",  unit: "Sunset Lofts · 2",  since: "Jan 2025", status: "active"  },
  { name: "Jonas Werner",    email: "jonas.w@studio-ow.de",     phone: "+49 30 5550 0917", unit: "Sunset Lofts · 5",  since: "Sep 2023", status: "pending" },
  { name: "Aïcha Diop",      email: "aicha.diop@kanga.studio",  phone: "+1 510 555 0399",  unit: "Cedar Court · 3B",  since: "Jan 2024", status: "active"  },
];

function TenantsPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="03 — People"
        title="Tenants"
        sub="Invite tenants by email — they get a private signup link tied to a unit and rent amount."
        right={<>
          <Btn kind="ghost" icon={Icons.search({ size: 14 })}>Search</Btn>
          <Btn kind="primary" icon={Icons.plus({ size: 14 })}>Invite tenant</Btn>
        </>}
      />
      <div style={{ padding: "24px 40px 40px", display: "flex", flexDirection: "column", gap: 20 }}>
        <Card pad={0}>
          <div style={{ padding: "18px 24px", borderBottom: `1px solid ${T.ruleSoft}`, display: "flex", alignItems: "baseline", gap: 12 }}>
            <h2 className="font-display" style={{ fontSize: 18, margin: 0, fontWeight: 500 }}>Pending invites</h2>
            <span className="font-mono" style={{ fontSize: 11, color: T.inkMute }}>{pending.length} awaiting signup</span>
          </div>
          <div>
            {pending.map((p, i) => (
              <div key={p.email} style={{
                padding: "18px 24px", borderTop: i ? `1px solid ${T.ruleSoft}` : "none",
                display: "grid", gridTemplateColumns: "1fr auto", gap: 18, alignItems: "center",
              }}>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%", background: T.solarTint, color: T.solar,
                    display: "grid", placeItems: "center", border: `1px solid ${T.solarSoft}`,
                  }}>{Icons.mail({ size: 16 })}</div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 600, fontSize: 14 }}>{p.name}</span>
                      <Pill tone="solar"><span style={{ marginRight: 2, display: "inline-flex" }}>{Icons.clock({ size: 10 })}</span>Awaiting</Pill>
                      <span className="font-mono" style={{ fontSize: 11, color: T.inkMute }}>expires {p.exp}</span>
                    </div>
                    <div style={{ fontSize: 12, color: T.inkSoft, marginTop: 3 }}>
                      {p.email} · <span style={{ color: T.ink }}>{p.unit}</span> · {p.rent}/mo
                    </div>
                    <div className="font-mono" style={{
                      marginTop: 8, padding: "6px 10px", background: T.paperDeep,
                      borderRadius: 6, fontSize: 11, color: T.inkSoft,
                      display: "inline-block", border: `1px solid ${T.ruleSoft}`,
                    }}>{p.link}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <Btn kind="primary" icon={Icons.copy({ size: 14 })}>Copy link</Btn>
                  <Btn kind="ghost" icon={Icons.trash({ size: 14 })} style={{ padding: "8px 10px" }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card pad={0}>
          <div style={{ padding: "18px 24px", borderBottom: `1px solid ${T.ruleSoft}`, display: "flex", alignItems: "baseline", gap: 12 }}>
            <h2 className="font-display" style={{ fontSize: 18, margin: 0, fontWeight: 500 }}>Active tenants</h2>
            <span className="font-mono" style={{ fontSize: 11, color: T.inkMute }}>{tenants.length} people</span>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: T.paperDeep }}>
                {["Name", "Contact", "Unit", "Since", "Status"].map(h => (
                  <th key={h} className="font-mono" style={{
                    textAlign: "left", padding: "10px 24px", fontSize: 10, color: T.inkMute,
                    letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tenants.map(t => (
                <tr key={t.email} style={{ borderTop: `1px solid ${T.ruleSoft}` }}>
                  <td style={{ padding: "14px 24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: "50%", background: T.paperDeep,
                        fontSize: 11.5, fontWeight: 600, display: "grid", placeItems: "center", color: T.ink,
                      }}>{t.name.split(" ").map(s => s[0]).slice(0, 2).join("")}</div>
                      <span style={{ fontWeight: 500 }}>{t.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: "14px 24px", color: T.inkSoft, fontSize: 12 }}>
                    <div>{t.email}</div>
                    <div className="font-mono" style={{ color: T.inkMute, fontSize: 11 }}>{t.phone}</div>
                  </td>
                  <td style={{ padding: "14px 24px" }}>{t.unit}</td>
                  <td className="font-mono" style={{ padding: "14px 24px", color: T.inkSoft }}>{t.since}</td>
                  <td style={{ padding: "14px 24px" }}>
                    {t.status === "active"
                      ? <Pill tone="green">● Active</Pill>
                      : <Pill tone="warn">○ Awaiting</Pill>}
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
