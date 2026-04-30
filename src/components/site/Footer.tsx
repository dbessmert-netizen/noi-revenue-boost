import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--paper-deep)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-2xl tracking-tight">
              NOI<span className="text-[color:var(--solar)]">.</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-[color:var(--ink-soft)]">
              The NOI growth platform for landlords. Own your roof. Own the revenue.
            </p>
          </div>
          <div>
            <div className="eyebrow">Product</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/economics" className="hover:text-foreground text-[color:var(--ink-soft)]">Economics</Link></li>
              <li><Link to="/compare" className="hover:text-foreground text-[color:var(--ink-soft)]">Compare</Link></li>
              <li><Link to="/process" className="hover:text-foreground text-[color:var(--ink-soft)]">Process</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground text-[color:var(--ink-soft)]">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">Company</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-foreground text-[color:var(--ink-soft)]">FAQ</Link></li>
              <li><a href="https://my.joinnoi.com" className="hover:text-foreground text-[color:var(--ink-soft)]">Sign in</a></li>
              <li><a href="mailto:hello@joinnoi.com" className="hover:text-foreground text-[color:var(--ink-soft)]">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-[color:var(--ink-mute)] md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} NOI. All rights reserved.</span>
          <span>joinnoi.com</span>
        </div>
      </div>
    </footer>
  );
}
