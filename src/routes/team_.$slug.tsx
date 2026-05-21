import { createFileRoute, notFound } from "@tanstack/react-router";
import { seo } from "@/lib/seo";

type Person = {
  name: string;
  title: string;
  phone: string;
  email: string;
  photo: string;
};

const PEOPLE: Record<string, Person> = {
  "daniel-bessmert": {
    name: "Daniel Bessmert",
    title: "Founder & CEO",
    phone: "(561) 800-0550",
    email: "daniel@joinnoi.com",
    photo: "https://joinnoi.com/daniel-bessmert.jpg",
  },
  "dan-katzman": {
    name: "Dan Katzman",
    title: "CEO & Founder",
    phone: "(917) 748-5280",
    email: "dan@joinnoi.com",
    photo: "https://joinnoi.com/dan-katzman.jpg",
  },
  "margo-ivanenko": {
    name: "Margo Ivanenko",
    title: "Partnerships · All States",
    phone: "(732) 558-6555",
    email: "margo@joinnoi.com",
    photo: "https://joinnoi.com/margo-ivanenko.jpg",
  },
};

export const Route = createFileRoute("/team_/$slug")({
  beforeLoad: ({ params }) => {
    if (!PEOPLE[params.slug]) throw notFound();
  },
  head: ({ params }) => {
    const p = PEOPLE[params.slug];
    if (!p) return seo({ path: `/team/${params.slug}`, title: "NOI", description: "" });
    return seo({
      path: `/team/${params.slug}`,
      title: `${p.name} — NOI Solar Income for Property Owners`,
      description: `Personal NOI rooftop solar pitch from ${p.name}. Calculate your NOI uplift and download the PDF.`,
    });
  },
  component: PersonPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <p>Team member not found.</p>
    </div>
  ),
});

function PersonPage() {
  const { slug } = Route.useParams();
  const p = PEOPLE[slug]!;
  const url = `https://joinnoi.com/team/${slug}`;
  const params = new URLSearchParams({
    name: p.name,
    title: p.title,
    phone: p.phone,
    email: p.email,
    photo: p.photo,
    qr: url,
  }).toString();

  return (
    <iframe
      src={`/sales-pitch.html?${params}`}
      title={`NOI Solar Income — ${p.name}`}
      className="h-screen w-full border-0"
    />
  );
}
