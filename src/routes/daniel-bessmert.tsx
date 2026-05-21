import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";

const PARAMS = new URLSearchParams({
  name: "Daniel Bessmert",
  title: "Founder & CEO",
  phone: "(561) 800-0550",
  email: "daniel@joinnoi.com",
  photo: "https://joinnoi.com/daniel-bessmert.jpg",
  qr: "https://joinnoi.com/daniel-bessmert",
}).toString();

export const Route = createFileRoute("/daniel-bessmert")({
  head: () =>
    seo({
      path: "/daniel-bessmert",
      title: "Daniel Bessmert — NOI Solar Income for Property Owners",
      description:
        "Personal NOI rooftop solar pitch from Daniel Bessmert. Calculate your NOI uplift and download the PDF.",
    }),
  component: DanielPage,
});

function DanielPage() {
  return (
    <iframe
      src={`/sales-pitch.html?${PARAMS}`}
      title="NOI Solar Income — Daniel Bessmert"
      className="h-screen w-full border-0"
    />
  );
}
