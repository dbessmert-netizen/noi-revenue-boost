import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground font-display text-lg leading-none">N</span>
            <span className="font-display text-xl tracking-tight text-ink">NOI</span>
          </div>
          <p className="text-muted-foreground max-w-sm font-display text-xl leading-snug">
            The NOI growth platform for landlords. Own your roof. Own the revenue.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-ink mb-4">Product</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/economics" className="hover:text-ink">Economics</Link></li>
            <li><Link to="/compare" className="hover:text-ink">Compare</Link></li>
            <li><Link to="/process" className="hover:text-ink">Process</Link></li>
            <li><Link to="/pricing" className="hover:text-ink">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-ink mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/faq" className="hover:text-ink">FAQ</Link></li>
            <li><a href="https://my.joinnoi.com" className="hover:text-ink">Sign in</a></li>
            <li><a href="mailto:hello@joinnoi.com" className="hover:text-ink">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} NOI. All rights reserved.</span>
          <span>joinnoi.com</span>
        </div>
      </div>
    </footer>
  );
}
