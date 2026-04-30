import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/pb/Sidebar";
import { Btn, Card, PageHeader, Pill } from "@/components/pb/atoms";
import { Icons } from "@/components/pb/icons";
import { T } from "@/components/pb/tokens";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — NOI" },
      { name: "description", content: "Manage your NOI account, payout details, and team access." },
    ],
  }),
  component: SettingsPage,
});

function Field({ label, value, hint, w = "100%" }: { label: string; value: string; hint?: string; w?: string }) {
  return (
    <div style={{ width: w }}>
      <label className="font-mono" style={{ fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase" }}>{label}</label>
      <div style={{
        marginTop: 6, padding: "10px 12px",
        background: T.paper, border: `1px solid ${T.rule}`, borderRadius: 8,
        fontSize: 13.5,
      }}>{value}</div>
      {hint && <div style={{ fontSize: 11, color: T.inkMute, marginTop: 4 }}>{hint}</div>}
    </div>
  );
}

const tabs = [
  { k: "profile", l: "Profile" },
  { k: "payout",  l: "Payout details" },
  { k: "team",    l: "Team" },
  { k: "notif",   l: "Notifications" },
  { k: "billing", l: "Plan & billing" },
  { k: "danger",  l: "Danger zone" },
];

function SettingsPage() {
  const [tab, setTab] = React.useState("profile");
  return (
    <AppShell>
      <PageHeader eyebrow="06 — Account" title="Settings" sub="Manage your NOI account, payout details, and team access." />
      <div style={{ padding: "24px 40px 40px", display: "grid", gridTemplateColumns: "180px 1fr", gap: 32 }}>
        <nav style={{ display: "flex", flexDirection: "column", gap: 2, position: "sticky", top: 24, alignSelf: "start" }}>
          {tabs.map(t => {
            const on = tab === t.k;
            return (
              <button key={t.k} onClick={() => setTab(t.k)} style={{
                textAlign: "left", padding: "8px 12px", fontSize: 13,
                background: on ? T.ink : "transparent", color: on ? T.paper : T.ink,
                border: "none", borderRadius: 6, cursor: "pointer",
                fontWeight: on ? 500 : 400, fontFamily: "inherit",
              }}>{t.l}</button>
            );
          })}
        </nav>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Card>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
              <div>
                <h2 className="font-display" style={{ fontSize: 22, margin: 0, fontWeight: 500 }}>Profile</h2>
                <div style={{ fontSize: 12.5, color: T.inkSoft, marginTop: 4 }}>Update your contact information.</div>
              </div>
              <Btn kind="primary">Save changes</Btn>
            </div>
            <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
              <Field label="Email" value="renata@macielholdings.com" hint="Used for sign-in. Contact support to change."/>
              <div style={{ display: "flex", gap: 14, width: "100%" }}>
                <Field label="Full name" value="Renata Maciel"/>
                <Field label="Company"   value="Maciel Holdings, LLC"/>
              </div>
              <Field label="Phone" value="+1 (510) 555 0288"/>
            </div>
          </Card>

          <Card>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
              <div>
                <h2 className="font-display" style={{ fontSize: 22, margin: 0, fontWeight: 500 }}>Payout details</h2>
                <div style={{ fontSize: 12.5, color: T.inkSoft, marginTop: 4, maxWidth: 480 }}>
                  Shown on every invoice so tenants know how to pay you.
                </div>
              </div>
              <Btn kind="ghost">Save</Btn>
            </div>

            <div className="font-mono" style={{ fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>Preferred method</div>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {[
                { k: "ach",   l: "ACH transfer", on: true },
                { k: "wire",  l: "Wire" },
                { k: "zelle", l: "Zelle" },
                { k: "other", l: "Other" },
              ].map(m => (
                <span key={m.k} style={{
                  padding: "8px 16px", fontSize: 12.5, borderRadius: 8, fontWeight: 500,
                  background: m.on ? T.solar : T.paper,
                  color: m.on ? T.paper : T.ink,
                  border: `1px solid ${m.on ? T.solar : T.rule}`,
                }}>{m.l}</span>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <Field label="Account holder" value="Maciel Holdings, LLC"/>
              <Field label="Bank name"      value="Mercury Bank"/>
              <Field label="Routing number" value="••••••6789"/>
              <Field label="Account number" value="••••••4192"/>
            </div>
            <div style={{ marginTop: 14 }}>
              <Field label="Default invoice notes" value="Thank you for paying on time. Please include lease ID in the memo line of any wire."/>
            </div>
          </Card>

          <Card>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <h2 className="font-display" style={{ fontSize: 22, margin: 0, fontWeight: 500 }}>Team</h2>
                <div style={{ fontSize: 12.5, color: T.inkSoft, marginTop: 4 }}>Co-managers can view properties and create invoices but not move payouts.</div>
              </div>
              <Btn kind="primary" icon={Icons.plus({ size: 14 })}>Invite teammate</Btn>
            </div>
            <div>
              {[
                { n: "Renata Maciel", r: "Owner",      e: "renata@macielholdings.com", on: "You" },
                { n: "Theo Hartmann", r: "Manager",    e: "theo.h@macielholdings.com", on: "Active 2h ago" },
                { n: "Sofía Reyes",   r: "Bookkeeper", e: "sofia@reyesbookkeeping.co", on: "Active yesterday" },
              ].map((m, i) => (
                <div key={m.e} style={{
                  padding: "14px 0", borderTop: i ? `1px solid ${T.ruleSoft}` : "none",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%", background: T.paperDeep,
                      display: "grid", placeItems: "center", fontSize: 12, fontWeight: 600,
                    }}>{m.n.split(" ").map(s => s[0]).slice(0, 2).join("")}</div>
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 13.5 }}>{m.n}</div>
                      <div style={{ fontSize: 12, color: T.inkSoft }}>{m.e}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span className="font-mono" style={{ fontSize: 11, color: T.inkMute }}>{m.on}</span>
                    <Pill tone={m.r === "Owner" ? "ink" : "mute"}>{m.r}</Pill>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
