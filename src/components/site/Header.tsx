import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/economics", label: "Economics" },
  { to: "/compare", label: "Compare" },
  { to: "/process", label: "Process" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-[color:var(--paper)]/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="font-display text-2xl tracking-tight text-foreground">
          NOI<span className="text-[color:var(--solar)]">.</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-[color:var(--ink-soft)] transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-[color:var(--paper)] transition hover:opacity-90"
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
}
