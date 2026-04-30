import { createFileRoute, Link } from "@tanstack/react-router";
import { Btn } from "@/components/pb/atoms";
import { T } from "@/components/pb/tokens";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in — NOI" },
      { name: "description", content: "Sign in to your NOI landlord workspace." },
    ],
  }),
  component: () => <AuthScreen mode="login" />,
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

export function AuthScreen({ mode }: { mode: "login" | "signup" }) {
  const isLogin = mode === "login";
  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1.05fr", background: T.paper }}>
      <div style={{
        background: T.ink, color: T.paper, padding: "48px 56px",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        position: "relative", overflow: "hidden",
      }}>
        <svg style={{ position: "absolute", right: -120, bottom: -180, width: 540, height: 540, opacity: 0.18 }} viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="98" fill="none" stroke={T.solar} strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="70" fill="none" stroke={T.solar} strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="44" fill="none" stroke={T.solar} strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="22" fill={T.solar}/>
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2;
            return <line key={i}
                          x1={100 + Math.cos(a) * 30} y1={100 + Math.sin(a) * 30}
                          x2={100 + Math.cos(a) * 95} y2={100 + Math.sin(a) * 95}
                          stroke={T.solar} strokeWidth="0.4"/>;
          })}
        </svg>

        <div style={{ display: "flex", alignItems: "center", gap: 12, position: "relative" }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: T.solar, display: "grid", placeItems: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.paper} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>
            </svg>
          </div>
          <div className="font-display" style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>NOI</div>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="font-mono" style={{ fontSize: 10, color: T.solarSoft, letterSpacing: "0.22em" }}>SOFTWARE FOR LANDLORDS</div>
          <h1 className="font-display" style={{ fontSize: 58, fontWeight: 400, margin: "20px 0", lineHeight: 0.95, letterSpacing: "-0.03em" }}>
            Get paid<br/>
            <span style={{ fontStyle: "italic", color: T.solar }}>by the kilowatt.</span>
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(244,239,230,0.72)", maxWidth: 420 }}>
            Bill rent and metered solar production in one invoice. Sync directly from Enphase, SolarEdge, or enter readings by hand.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 40, maxWidth: 460 }}>
            {[
              { v: "14,400", l: "kWh billed", s: "this month" },
              { v: "$2.4M",  l: "tenant rent", s: "collected ’25" },
              { v: "6 min",  l: "avg setup",  s: "to first invoice" },
            ].map(s => (
              <div key={s.l}>
                <div className="font-display pb-num" style={{ fontSize: 26, fontWeight: 500, color: T.paper }}>{s.v}</div>
                <div style={{ fontSize: 11, color: T.solar, fontWeight: 500 }}>{s.l}</div>
                <div style={{ fontSize: 10.5, color: "rgba(244,239,230,0.5)" }}>{s.s}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="font-mono" style={{ fontSize: 11, color: "rgba(244,239,230,0.4)", letterSpacing: "0.16em", position: "relative" }}>
          v 2.4 · OAKLAND, CA · {isLogin ? "SIGN IN" : "CREATE ACCOUNT"}
        </div>
      </div>

      <div style={{ padding: "64px 80px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ maxWidth: 420 }}>
          <div className="font-mono" style={{ fontSize: 11, color: T.inkMute, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            {isLogin ? "Welcome back" : "Get started"}
          </div>
          <h2 className="font-display" style={{ fontSize: 40, margin: "12px 0 8px", fontWeight: 500, letterSpacing: "-0.02em" }}>
            {isLogin ? "Sign in." : "Create your account."}
          </h2>
          <p style={{ fontSize: 13.5, color: T.inkSoft, marginBottom: 32 }}>
            {isLogin
              ? "Enter your email and password to access your landlord workspace."
              : "Start earning solar revenue from your portfolio. No credit card required."}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {!isLogin && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <FormField label="Full name" value="Renata Maciel"/>
                <FormField label="Company" value="Maciel Holdings"/>
              </div>
            )}
            <FormField label="Email" value="renata@macielholdings.com"/>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div className="font-mono" style={{ fontSize: 10, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase" }}>Password</div>
                {isLogin && <span style={{ fontSize: 11, color: T.solar, fontWeight: 500 }}>Forgot password?</span>}
              </div>
              <div style={{
                marginTop: 6, padding: "12px 14px",
                background: T.card, border: `1px solid ${T.rule}`, borderRadius: 8,
                fontSize: 14, letterSpacing: "0.3em",
              }}>••••••••••••</div>
              {!isLogin && <div style={{ fontSize: 11, color: T.inkMute, marginTop: 6 }}>At least 8 characters.</div>}
            </div>

            <Btn kind="solar" style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: 14, marginTop: 8 }}>
              {isLogin ? "Sign in" : "Create account"} →
            </Btn>

            <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "4px 0" }}>
              <div style={{ flex: 1, height: 1, background: T.ruleSoft }}/>
              <span className="font-mono" style={{ fontSize: 10, color: T.inkMute, letterSpacing: "0.16em" }}>OR</span>
              <div style={{ flex: 1, height: 1, background: T.ruleSoft }}/>
            </div>

            <Btn kind="ghost" style={{ width: "100%", justifyContent: "center", padding: "12px 14px" }}>
              Continue with Google
            </Btn>

            <div style={{ textAlign: "center", fontSize: 12.5, color: T.inkSoft, marginTop: 12 }}>
              {isLogin
                ? <>New to NOI? <Link to="/signup" style={{ color: T.solar, fontWeight: 600, textDecoration: "none" }}>Create an account</Link></>
                : <>Already have an account? <Link to="/signin" style={{ color: T.solar, fontWeight: 600, textDecoration: "none" }}>Sign in</Link></>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
