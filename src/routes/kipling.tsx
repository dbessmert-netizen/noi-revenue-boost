import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { EmailGate } from "@/components/site/EmailGate";

export const Route = createFileRoute("/kipling")({
  head: () =>
    seo({
      path: "/kipling",
      title: "NOI × Center Creek Capital — Kipling Solar Offer",
      description:
        "Custom rooftop solar revenue offer for Kipling, prepared by NOI for Center Creek Capital.",
    }),
  component: KiplingPage,
});

function KiplingPage() {
  return (
    <EmailGate page="kipling" title="NOI × Center Creek — Kipling Solar Offer">
      <h1 className="sr-only">
        NOI × Center Creek Capital — Kipling Solar Program
      </h1>
      <iframe
        src="/kipling.html"
        title="NOI × Center Creek Capital — Kipling Solar Offer"
        className="h-screen w-full border-0"
      />
    </EmailGate>
  );
}
