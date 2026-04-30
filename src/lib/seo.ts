// Centralized SEO helper for all NOI marketing pages.
// Audience: USA landlords, property developers, HOAs, BTR operators, REITs.

const SITE = "https://www.joinnoi.com";
const OG_IMAGE = `${SITE}/og.png`;

const BASE_KEYWORDS = [
  "NOI",
  "rooftop solar for landlords",
  "solar for rental properties",
  "tenant solar billing",
  "increase NOI multifamily",
  "solar revenue platform",
  "property developer solar",
  "HOA community solar",
  "build to rent solar",
  "REIT solar revenue",
  "submetered solar",
  "virtual net metering VNEM",
  "PPA financing landlords",
  "Stripe Connect tenant billing",
  "USA landlord software",
];

type SeoInput = {
  title: string;
  description: string;
  path: string;          // e.g. "/economics" or "/" — leading slash
  keywords?: string[];
  ogImage?: string;
  jsonLd?: object | object[];
};

export function seo({ title, description, path, keywords = [], ogImage, jsonLd }: SeoInput) {
  const url = `${SITE}${path === "/" ? "" : path}`;
  const image = ogImage ?? OG_IMAGE;
  const allKeywords = Array.from(new Set([...BASE_KEYWORDS, ...keywords])).join(", ");

  const meta = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: allKeywords },
    { name: "author", content: "NOI" },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },

    // Geo / language targeting (USA)
    { name: "geo.region", content: "US" },
    { name: "geo.placename", content: "United States" },
    { name: "language", content: "en-US" },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "NOI" },
    { property: "og:locale", content: "en_US" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@joinnoi" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

  const links = [
    { rel: "canonical", href: url },
  ];

  const scripts = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((obj) => ({
        type: "application/ld+json",
        children: JSON.stringify(obj),
      }))
    : undefined;

  return { meta, links, scripts };
}

// Reusable JSON-LD blocks
export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NOI",
  legalName: "Great Week LLC",
  url: SITE,
  logo: `${SITE}/favicon.png`,
  description:
    "NOI is the revenue platform for US landlords, property developers, and HOAs. We finance rooftop solar, meter tenant consumption, and bill on your behalf — adding a recurring NOI line to your portfolio.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2055 Limestone Rd, Ste 200-C",
    addressLocality: "Wilmington",
    addressRegion: "DE",
    postalCode: "19808",
    addressCountry: "US",
  },
  areaServed: { "@type": "Country", name: "United States" },
  sameAs: ["https://my.joinnoi.com"],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NOI",
  url: SITE,
  inLanguage: "en-US",
};

export const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "NOI Revenue Platform",
  description:
    "Full-stack rooftop solar revenue platform for US landlords, property developers, and HOAs. Zero capex, tenant billing via Stripe Connect, monthly payouts.",
  brand: { "@type": "Brand", name: "NOI" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Landlords, property developers, HOAs, REITs, BTR operators",
  },
  areaServed: { "@type": "Country", name: "United States" },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
