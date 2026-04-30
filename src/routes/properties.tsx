import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/pb/Sidebar";
import { Btn, Card, PageHeader, Pill } from "@/components/pb/atoms";
import { Icons } from "@/components/pb/icons";
import { T } from "@/components/pb/tokens";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties — NOI" },
      { name: "description", content: "Track occupancy, rent status, and solar generation per unit." },
    ],
  }),
  component: PropertiesPage,
});

type Unit = {
  l: string; bd: number; ba: number; rent: string; t: string | null;
  occ: "occ" | "vac" | "up";
  lease?: string;
  rentS?: "paid" | "sent" | "over" | "out";
  solarS?: "paid" | "sent" | "over" | "out";
  solar?: { p: number; c: number; b: string };
};

const filters = [
  { k: "all",  l: "All units",       n: 17, on: true },
  { k: "occ",  l: "Occupied",        n: 13 },
  { k: "vac",  l: "Unoccupied",      n: 2 },
  { k: "up",   l: "Upcoming",        n: 2 },
  { k: "prev", l: "Previously occ.", n: 8 },
];

const props: { name: string; type: string; addr: string; units: Unit[] }[] = [
  {
    name: "Cedar Court", type: "Multi-family", addr: "1422 Cedar St, Oakland, CA",
    units: [
      { l: "Apt 1A", bd: 1, ba: 1, rent: "$2,400", t: "Lina Okafor",     occ: "occ",  lease: "May 2024 — open",   rentS: "paid", solarS: "paid", solar: { p: 132.4, c: 188.7, b: "$26.42" } },
      { l: "Apt 2A", bd: 2, ba: 1, rent: "$2,680", t: "Marcus Lindgren", occ: "occ",  lease: "Aug 2024 — Aug 25", rentS: "paid", solarS: "out",  solar: { p: 142.1, c: 201.3, b: "$28.18" } },
      { l: "Apt 2B", bd: 2, ba: 1, rent: "$2,750", t: null,              occ: "vac" },
      { l: "Apt 3A", bd: 2, ba: 2, rent: "$3,100", t: "Iris Tanaka",     occ: "up",   lease: "Moves in May 1" },
      { l: "Apt 3B", bd: 2, ba: 2, rent: "$2,840", t: "Lina Okafor",     occ: "occ",  lease: "Jan 2024 — open",   rentS: "sent", solarS: "paid", solar: { p: 118.7, c: 162.4, b: "$22.74" } },
    ],
  },
  {
    name: "14 Pine Hollow", type: "Single-family", addr: "14 Pine Hollow Rd, Berkeley, CA",
    units: [
      { l: "Main residence", bd: 4, ba: 3, rent: "$4,100", t: "David Voss", occ: "occ", lease: "Mar 2023 — Feb 26", rentS: "over", solarS: "over", solar: { p: 287.4, c: 344.1, b: "$48.17" } },
    ],
  },
];

const occBadge = (s: Unit["occ"]) =>
  s === "occ" ? <Pill tone="green">Occupied</Pill> :
  s === "up"  ? <Pill tone="solar">Upcoming</Pill> :
                <Pill tone="mute">Vacant</Pill>;

const billBadge = (s?: Unit["rentS"]) => {
  if (!s) return null;
  if (s === "paid") return <Pill tone="green" style={{ fontSize: 9.5 }}>Paid</Pill>;
  if (s === "sent") return <Pill tone="warn"  style={{ fontSize: 9.5 }}>Outstanding</Pill>;
  if (s === "over") return <Pill tone="red"   style={{ fontSize: 9.5 }}>Overdue</Pill>;
  return <Pill tone="mute" style={{ fontSize: 9.5 }}>Not invoiced</Pill>;
};

function PropertiesPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="02 — Portfolio"
        title="Properties"
        sub="Six buildings, seventeen units. Track occupancy, rent status, and solar generation per unit."
        right={<>
          <Btn kind="ghost" icon={Icons.filter({ size: 14 })}>Filter</Btn>
          <Btn kind="primary" icon={Icons.plus({ size: 14 })}>Add property</Btn>
        </>}
      />
      <div style={{ padding: "24px 40px 40px", display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {filters.map(f => (
            <span key={f.k} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "7px 14px", fontSize: 12, fontWeight: 500, borderRadius: 999,
              background: f.on ? T.ink : T.card,
              color: f.on ? T.paper : T.ink,
              border: `1px solid ${f.on ? T.ink : T.rule}`,
            }}>
              {f.l}
              <span className="font-mono" style={{
                background: f.on ? "rgba(244,239,230,0.16)" : T.paperDeep,
                color: f.on ? T.paper : T.inkMute,
                padding: "1px 7px", borderRadius: 999, fontSize: 10,
              }}>{f.n}</span>
            </span>
          ))}
        </div>

        {props.map(p => (
          <div key={p.name} style={{ background: T.card, border: `1px solid ${T.rule}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{
              padding: "20px 24px", display: "flex", justifyContent: "space-between",
              alignItems: "flex-start", borderBottom: `1px solid ${T.ruleSoft}`, background: T.paper,
            }}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 8,
                  background: T.paperDeep, border: `1px solid ${T.rule}`,
                  display: "grid", placeItems: "center", color: T.solar,
                  position: "relative", overflow: "hidden",
                }}>
                  <svg width="56" height="56" viewBox="0 0 56 56" style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
                    {Array.from({ length: 8 }).map((_, i) =>
                      <line key={i} x1="-10" y1={i * 9} x2="66" y2={i * 9 - 30} stroke={T.rule} strokeWidth="1"/>
                    )}
                  </svg>
                  <span style={{ position: "relative", zIndex: 1 }}>{Icons.building({ size: 22 })}</span>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <h2 className="font-display" style={{ fontSize: 24, margin: 0, fontWeight: 500 }}>{p.name}</h2>
                    <Pill tone="mute">{p.type}</Pill>
                  </div>
                  <div style={{ marginTop: 4, fontSize: 12.5, color: T.inkSoft }}>{p.addr}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <Btn kind="ghost" icon={Icons.pencil({ size: 14 })} style={{ padding: "6px 10px" }} />
                <Btn kind="ghost" icon={Icons.plus({ size: 14 })}>Add unit</Btn>
              </div>
            </div>

            <div style={{ padding: 24, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 14 }}>
              {p.units.map(u => (
                <div key={u.l} style={{
                  background: T.paper, border: `1px solid ${T.ruleSoft}`, borderRadius: 10,
                  padding: 16, display: "flex", flexDirection: "column", gap: 12,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ color: T.inkMute }}>{Icons.home({ size: 14 })}</span>
                        <span style={{ fontWeight: 600, fontSize: 14 }}>{u.l}</span>
                      </div>
                      <div className="font-mono" style={{ fontSize: 11, color: T.inkSoft, marginTop: 4 }}>
                        {u.bd}bd · {u.ba}ba · <span style={{ color: T.ink, fontWeight: 600 }}>{u.rent}</span>/mo
                      </div>
                    </div>
                    {occBadge(u.occ)}
                  </div>

                  <div style={{ borderTop: `1px solid ${T.ruleSoft}`, paddingTop: 12 }}>
                    {u.t ? (
                      <>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 500 }}>{u.t}</div>
                            <div style={{ fontSize: 11, color: T.inkSoft, marginTop: 2 }}>{u.lease}</div>
                          </div>
                          {u.occ === "occ" && <Btn kind="ghost" style={{ padding: "4px 10px", fontSize: 11 }}>End lease</Btn>}
                        </div>
                        {u.rentS && (
                          <div style={{
                            marginTop: 10, padding: 10, background: T.paperDeep, borderRadius: 6,
                            display: "flex", flexDirection: "column", gap: 6,
                          }}>
                            <div className="font-mono" style={{ fontSize: 9.5, color: T.inkMute, letterSpacing: "0.14em", textTransform: "uppercase" }}>April 2026 status</div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11.5 }}>
                              <span>Rent</span>{billBadge(u.rentS)}
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11.5 }}>
                              <span>Solar</span>{billBadge(u.solarS)}
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <Btn kind="solar" style={{ width: "100%", justifyContent: "center" }} icon={Icons.users({ size: 14 })}>Assign tenant</Btn>
                    )}
                  </div>

                  {u.solar ? (
                    <div style={{ borderTop: `1px solid ${T.ruleSoft}`, paddingTop: 12 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11.5, fontWeight: 600 }}>
                          <span style={{ color: T.solar }}>{Icons.sun({ size: 14 })}</span>
                          Solar · Enphase
                        </div>
                        <span style={{ color: T.inkMute }}>{Icons.refresh({ size: 12 })}</span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                        {[
                          { l: "Produced", v: `${u.solar.p} kWh` },
                          { l: "Consumed", v: `${u.solar.c} kWh` },
                          { l: "Billable", v: u.solar.b, accent: T.solar },
                        ].map(s => (
                          <div key={s.l}>
                            <div className="font-mono" style={{ fontSize: 9, color: T.inkMute, letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.l}</div>
                            <div className="pb-num" style={{ fontSize: 12.5, fontWeight: 600, color: s.accent || T.ink, marginTop: 2 }}>{s.v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : u.occ === "vac" ? null : (
                    <div style={{ borderTop: `1px solid ${T.ruleSoft}`, paddingTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11.5, color: T.inkMute }}>
                        <span>{Icons.sun({ size: 14 })}</span> Solar not configured
                      </div>
                      <span style={{ fontSize: 11, color: T.solar, fontWeight: 600 }}>Set up →</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
