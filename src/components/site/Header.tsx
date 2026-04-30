import { Link } from "@tanstack/react-router";

const SIGN_IN_URL = "https://my.joinnoi.com";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground font-display text-lg leading-none shadow-elegant">N</span>
          <span className="font-display text-xl tracking-tight text-ink">NOI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/economics" className="hover:text-ink transition-colors">Economics</Link>
          <Link to="/compare" className="hover:text-ink transition-colors">Compare</Link>
          <Link to="/process" className="hover:text-ink transition-colors">Process</Link>
          <Link to="/pricing" className="hover:text-ink transition-colors">Pricing</Link>
          <Link to="/faq" className="hover:text-ink transition-colors">FAQ</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a href={SIGN_IN_URL} className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-ink transition-colors">
            Sign in
          </a>
          <Link
            to="/economics"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            See your upside →
          </Link>
        </div>
      </div>
    </header>
  );
}
