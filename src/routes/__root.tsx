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
      { title: "NOI — Increase your NOI with solar" },
      { name: "description", content: "The NOI growth platform for landlords. Turn your rooftop into a recurring income stream — zero upfront." },
      { name: "author", content: "NOI" },
      { property: "og:title", content: "NOI — Increase your NOI with solar" },
      { property: "og:description", content: "The NOI growth platform for landlords. Turn your rooftop into a recurring income stream — zero upfront." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.joinnoi.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@joinnoi" },
      { name: "twitter:title", content: "NOI — Increase your NOI with solar" },
      { name: "twitter:description", content: "The NOI growth platform for landlords. Turn your rooftop into a recurring income stream — zero upfront." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d9ca27af-8936-4aef-bc20-de5cedd63ed3/id-preview-9b2c42df--624b08fa-0a2a-4b33-b301-3703899aa314.lovable.app-1777580673654.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d9ca27af-8936-4aef-bc20-de5cedd63ed3/id-preview-9b2c42df--624b08fa-0a2a-4b33-b301-3703899aa314.lovable.app-1777580673654.png" },
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
