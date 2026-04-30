import { createFileRoute } from "@tanstack/react-router";
import { Btn, Card } from "@/components/pb/atoms";
import { T } from "@/components/pb/tokens";

export const Route = createFileRoute("/invite")({
  head: () => ({
    meta: [
      { title: "You've been invited — NOI" },
      { name: "description", content: "Accept your tenant invite and access your NOI tenant portal." },
    ],
  }),
  component: InvitePage,
});

function FormField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono" style={{ fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase" }}>{label}</div>
      <div style={{
        marginTop: 6, padding: "12px 14px",
        background: T.card, border: `1px solid ${T.rule}`, borderRadius: 8, fontSize: 14,
      }}>{value}</div>
    </div>
  );
}

function InvitePage() {
  return (
    <div style={{ minHeight: "100vh", background: T.paper, padding: "60px 0", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: 540, maxWidth: "92vw" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32, justifyContent: "center" }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: T.solar, display: "grid", placeItems: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.paper} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>
            </svg>
          </div>
          <div className="font-display" style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em" }}>NOI</div>
        </div>

        <Card pad={36}>
          <div className="font-mono" style={{ fontSize: 11, color: T.solar, letterSpacing: "0.2em", textTransform: "uppercase", textAlign: "center" }}>
            You've been invited
          </div>
          <h1 className="font-display" style={{ fontSize: 32, fontWeight: 500, textAlign: "center", margin: "16px 0 8px", letterSpacing: "-0.02em" }}>
            Welcome, Iris.
          </h1>
          <p style={{ textAlign: "center", color: T.inkSoft, fontSize: 14, lineHeight: 1.5, marginBottom: 24 }}>
            <strong style={{ color: T.ink }}>Renata Maciel</strong> has invited you to your new tenant portal at Cedar Court · Apt 3A.
          </p>

          <div style={{
            background: T.paper, border: `1px solid ${T.ruleSoft}`, borderRadius: 10, padding: 20,
            marginBottom: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
          }}>
            <div>
              <div className="font-mono" style={{ fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase" }}>Property</div>
              <div style={{ fontSize: 13.5, marginTop: 4, fontWeight: 500 }}>Cedar Court · Apt 3A</div>
              <div style={{ fontSize: 12, color: T.inkSoft }}>1422 Cedar St, Oakland, CA</div>
            </div>
            <div>
              <div className="font-mono" style={{ fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase" }}>Move in</div>
              <div className="font-mono" style={{ fontSize: 13.5, marginTop: 4, fontWeight: 600 }}>May 1, 2026</div>
            </div>
            <div>
              <div className="font-mono" style={{ fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase" }}>Monthly rent</div>
              <div className="pb-num" style={{ fontSize: 18, marginTop: 4, fontWeight: 600 }}>$3,100.00</div>
            </div>
            <div>
              <div className="font-mono" style={{ fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase" }}>Deposit</div>
              <div className="pb-num" style={{ fontSize: 18, marginTop: 4, fontWeight: 600 }}>$3,100.00</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <FormField label="Email" value="iris.tanaka@hey.com"/>
            <FormField label="Create a password" value="••••••••••••"/>
          </div>

          <Btn kind="solar" style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: 14, marginTop: 20 }}>
            Accept invite & continue →
          </Btn>
          <div style={{ textAlign: "center", fontSize: 11, color: T.inkMute, marginTop: 14 }}>
            By continuing, you agree to NOI's Tenant Terms and Privacy Notice.
          </div>
        </Card>
      </div>
    </div>
  );
}
