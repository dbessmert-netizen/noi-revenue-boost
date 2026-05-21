import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";

const PARAMS = new URLSearchParams({
  name: "Dan Katzman",
  title: "CEO & Founder",
  phone: "(917) 748-5280",
  email: "dan@joinnoi.com",
  photo: "https://joinnoi.com/dan-katzman.jpg",
  qr: "https://joinnoi.com/dan-katzman",
}).toString();

export const Route = createFileRoute("/dan-katzman")({
  head: () =>
    seo({
      path: "/dan-katzman",
      title: "Dan Katzman — NOI Solar Income for Property Owners",
      description:
        "Personal NOI rooftop solar pitch from Dan Katzman. Calculate your NOI uplift and download the PDF.",
    }),
  component: DanPage,
});

function DanPage() {
  return (
    <iframe
      src={`/sales-pitch.html?${PARAMS}`}
      title="NOI Solar Income — Dan Katzman"
      className="h-screen w-full border-0"
    />
  );
}
