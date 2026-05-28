import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { seo, breadcrumbJsonLd } from "@/lib/seo";
import { blogPosts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog")({
  head: () =>
    seo({
      path: "/blog",
      title: "Blog — Rooftop Solar & NOI Insights for Landlords | NOI",
      description:
        "Strategy, financing, regulation, and operations articles for US landlords, BTR developers, and HOAs adding rooftop solar revenue to their portfolios.",
      keywords: [
        "rental property solar blog",
        "landlord solar guide",
        "multifamily solar NOI",
        "BTR solar strategy",
      ],
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "NOI Blog",
          url: "https://www.joinnoi.com/blog",
          description:
            "Insights on rooftop solar revenue for US rental property owners.",
        },
      ],
    }),
  component: BlogIndex,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogIndex() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="eyebrow">Insights</div>
        <h1 className="font-display mt-4 text-5xl tracking-tight md:text-6xl">
          The NOI <span className="italic text-[color:var(--solar)]">growth</span> blog.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[color:var(--ink-soft)]">
          Strategy, financing, regulation, and operations articles for US landlords, BTR developers, and HOAs turning rooftop solar into recurring NOI.
        </p>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="group block rounded-2xl border border-border bg-[color:var(--paper-deep)] p-8 transition hover:border-[color:var(--solar)] md:p-12"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[color:var(--ink-mute)]">
            <span className="rounded-full bg-[color:var(--solar)]/10 px-3 py-1 font-medium text-[color:var(--solar)]">
              {featured.category}
            </span>
            <span>{formatDate(featured.date)}</span>
            <span>·</span>
            <span>{featured.readMinutes} min read</span>
          </div>
          <h2 className="font-display mt-5 text-3xl tracking-tight md:text-4xl">
            {featured.title}
          </h2>
          <p className="mt-4 max-w-3xl text-[color:var(--ink-soft)]">{featured.excerpt}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-[color:var(--solar)]">
            Read article <span aria-hidden>→</span>
          </div>
        </Link>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col rounded-xl border border-border bg-[color:var(--paper)] p-6 transition hover:border-[color:var(--solar)]"
            >
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[color:var(--ink-mute)]">
                <span className="font-medium text-[color:var(--solar)]">{p.category}</span>
                <span>·</span>
                <span>{p.readMinutes} min</span>
              </div>
              <h3 className="font-display mt-3 text-xl leading-snug tracking-tight transition group-hover:text-[color:var(--solar)]">
                {p.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm text-[color:var(--ink-soft)]">
                {p.excerpt}
              </p>
              <div className="mt-auto pt-5 text-xs text-[color:var(--ink-mute)]">
                {formatDate(p.date)}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
