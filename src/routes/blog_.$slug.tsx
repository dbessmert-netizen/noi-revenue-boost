import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SiteLayout } from "@/components/site/Layout";
import { seo, breadcrumbJsonLd } from "@/lib/seo";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog_/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    if (!post) {
      return seo({
        path: `/blog/${params.slug}`,
        title: "Article not found | NOI",
        description: "This article doesn't exist.",
      });
    }
    return seo({
      path: `/blog/${post.slug}`,
      title: `${post.title} | NOI`,
      description: post.description,
      keywords: post.keywords,
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@type": "Organization", name: "NOI" },
          publisher: {
            "@type": "Organization",
            name: "NOI",
            logo: { "@type": "ImageObject", url: "https://www.joinnoi.com/favicon.png" },
          },
          mainEntityOfPage: `https://www.joinnoi.com/blog/${post.slug}`,
          articleSection: post.category,
          keywords: post.keywords.join(", "),
        },
      ],
    });
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <SiteLayout>
      <section className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl tracking-tight">Article not found</h1>
        <p className="mt-4 text-[color:var(--ink-soft)]">
          That article doesn't exist or has moved.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex rounded-full bg-foreground px-5 py-2 text-sm font-medium text-[color:var(--paper)]"
        >
          Back to blog
        </Link>
      </section>
    </SiteLayout>
  ),
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const fallback = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const recs = related.length >= 2 ? related : fallback;

  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 pt-16 pb-24">
        <Link
          to="/blog"
          className="text-sm text-[color:var(--ink-mute)] hover:text-foreground"
        >
          ← All articles
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-[color:var(--ink-mute)]">
          <span className="rounded-full bg-[color:var(--solar)]/10 px-3 py-1 font-medium text-[color:var(--solar)]">
            {post.category}
          </span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readMinutes} min read</span>
        </div>

        <h1 className="font-display mt-5 text-4xl leading-[1.1] tracking-tight md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg text-[color:var(--ink-soft)]">{post.excerpt}</p>

        <div className="prose prose-noi mt-12 max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-border bg-[color:var(--paper-deep)] p-8 md:p-10">
          <div className="eyebrow">Next step</div>
          <h2 className="font-display mt-3 text-2xl tracking-tight">
            See what your roof could earn.
          </h2>
          <p className="mt-3 max-w-xl text-[color:var(--ink-soft)]">
            Get a free site-level estimate of solar NOI for your property. No sales call required — we send a written model.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/economics"
              className="inline-flex items-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-[color:var(--paper)] hover:opacity-90"
            >
              Estimate NOI lift
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-border px-5 py-2 text-sm font-medium hover:border-foreground"
            >
              Talk to our team
            </Link>
          </div>
        </div>

        {/* Related */}
        {recs.length > 0 && (
          <div className="mt-20">
            <div className="eyebrow">Keep reading</div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {recs.map((r) => (
                <Link
                  key={r.slug}
                  to="/blog/$slug"
                  params={{ slug: r.slug }}
                  className="group rounded-xl border border-border p-5 transition hover:border-[color:var(--solar)]"
                >
                  <div className="text-[11px] uppercase tracking-wider text-[color:var(--solar)]">
                    {r.category}
                  </div>
                  <div className="font-display mt-2 text-base leading-snug tracking-tight group-hover:text-[color:var(--solar)]">
                    {r.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </SiteLayout>
  );
}
