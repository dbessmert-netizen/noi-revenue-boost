import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/kipling-meadows")({
  head: () =>
    seo({
      path: "/kipling-meadows",
      title: "NOI × Center Creek Capital — Kipling Meadows Solar Offer",
      description:
        "Custom rooftop solar revenue offer for Kipling Meadows, prepared by NOI for Center Creek Capital.",
    }),
  component: KiplingMeadowsPage,
});

function KiplingMeadowsPage() {
  return (
    <iframe
      src="/kipling-meadows.html"
      title="NOI × Center Creek Capital — Kipling Meadows Solar Offer"
      className="h-screen w-full border-0"
    />
  );
}
