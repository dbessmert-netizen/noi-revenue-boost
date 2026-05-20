import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "Tr0pa0E7OCXoVp4XPqCHLXWv5Um5ImN-eDevSUlzRL0" },
      { title: "NOI — Rooftop Solar Revenue for US Landlords, Developers & HOAs" },
      {
        name: "description",
        content:
          "Turn your rental rooftop into a recurring NOI line. NOI finances solar, meters tenants, and bills on your behalf — built for US landlords, property developers, BTR operators, and HOAs. Zero capex.",
      },
      { name: "author", content: "NOI" },
      { property: "og:site_name", content: "NOI" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.joinnoi.com" },
      { property: "og:image", content: "https://www.joinnoi.com/og.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "NOI — Your roof is a revenue line. For US landlords, developers & HOAs." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@joinnoi" },
      { name: "twitter:image", content: "https://www.joinnoi.com/og.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
