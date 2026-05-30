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
              NOI (Net Operating Income) Growth Platform for landlords. Own your roof. Own the revenue.
            </p>
            <address className="mt-6 not-italic text-xs leading-relaxed text-[color:var(--ink-mute)]">
              <div className="font-medium text-[color:var(--ink-soft)]">Great Week LLC</div>
              <div>2055 Limestone Rd, Ste 200-C</div>
              <div>Wilmington, DE 19808</div>
            </address>
          </div>
          <div>
            <div className="eyebrow">Product</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/economics" className="hover:text-foreground text-[color:var(--ink-soft)]">Economics</Link></li>
              
              <li><Link to="/process" className="hover:text-foreground text-[color:var(--ink-soft)]">Process</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground text-[color:var(--ink-soft)]">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">Company</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/team" className="hover:text-foreground text-[color:var(--ink-soft)]">Team</Link></li>
              <li><Link to="/blog" className="hover:text-foreground text-[color:var(--ink-soft)]">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-foreground text-[color:var(--ink-soft)]">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-foreground text-[color:var(--ink-soft)]">Contact us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-[color:var(--ink-mute)] md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} NOI. All rights reserved.</span>
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            <Link to="/" className="hover:text-foreground">joinnoi.com</Link>
            <a href="mailto:hello@joinnoi.com" className="hover:text-foreground">hello@joinnoi.com</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
