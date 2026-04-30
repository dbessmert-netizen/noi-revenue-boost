import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { T } from "./tokens";
import { Icons, type IconKey } from "./icons";

type NavItem = { k: string; label: string; to: string; icon: IconKey };

const items: NavItem[] = [
  { k: "overview",   label: "Overview",   to: "/",           icon: "grid" },
  { k: "properties", label: "Properties", to: "/properties", icon: "building" },
  { k: "tenants",    label: "Tenants",    to: "/tenants",    icon: "users" },
  { k: "invoices",   label: "Get paid",   to: "/invoices",   icon: "invoice" },
  { k: "payouts",    label: "Payouts",    to: "/payouts",    icon: "wallet" },
  { k: "settings",   label: "Settings",   to: "/settings",   icon: "cog" },
];

export function Sidebar() {
  const { location } = useRouterState();
  const path = location.pathname;
  const isActive = (to: string) => to === "/" ? path === "/" : path.startsWith(to);

  return (
    <aside style={{
      width: 232, flexShrink: 0,
      background: T.ink, color: T.paper,
      display: "flex", flexDirection: "column",
      borderRight: `1px solid ${T.ink}`,
      minHeight: "100vh",
    }}>
      <div style={{ padding: "24px 22px 20px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 7,
          background: T.solar,
          display: "grid", placeItems: "center",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.paper} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>
          </svg>
        </div>
        <div>
          <div className="font-display" style={{ fontSize: 20, fontWeight: 600, lineHeight: 1, letterSpacing: "-0.03em" }}>NOI</div>
          <div className="font-mono" style={{ fontSize: 9.5, color: "rgba(244,239,230,0.5)", letterSpacing: "0.18em", marginTop: 3 }}>LANDLORD · v2.4</div>
        </div>
      </div>

      <div style={{ height: 1, background: "rgba(244,239,230,0.08)", margin: "0 18px" }} />

      <nav style={{ padding: "14px 12px", display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
        {items.map(it => {
          const on = isActive(it.to);
          const I = Icons[it.icon];
          return (
            <Link key={it.k} to={it.to} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "9px 12px", borderRadius: 8,
              background: on ? "rgba(232,84,28,0.14)" : "transparent",
              color: on ? T.paper : "rgba(244,239,230,0.62)",
              fontSize: 13.5, fontWeight: on ? 500 : 400,
              position: "relative",
              border: on ? "1px solid rgba(232,84,28,0.28)" : "1px solid transparent",
              textDecoration: "none",
            }}>
              <span style={{ color: on ? T.solar : "inherit", display: "inline-flex" }}>{I({ size: 16 })}</span>
              {it.label}
              {on && <span style={{ marginLeft: "auto", width: 5, height: 5, borderRadius: "50%", background: T.solar }}/>}
            </Link>
          );
        })}
      </nav>

      <div style={{ padding: 14, borderTop: "1px solid rgba(244,239,230,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            background: "linear-gradient(135deg,#E8541C,#A03012)",
            display: "grid", placeItems: "center", fontSize: 12, fontWeight: 600, color: T.paper,
          }}>RM</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12.5, fontWeight: 500 }}>Renata Maciel</div>
            <div style={{ fontSize: 10.5, color: "rgba(244,239,230,0.5)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Maciel Holdings · 6 buildings</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: T.paper }}>
      <Sidebar />
      <main style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        {children}
      </main>
    </div>
  );
}
