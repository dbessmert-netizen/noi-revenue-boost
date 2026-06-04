import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { EmailGate } from "@/components/site/EmailGate";

export const Route = createFileRoute("/duval")({
  head: () =>
    seo({
      path: "/duval",
      title: "NOI × Duval Station — Solar Energy Proposal",
      description:
        "Custom rooftop solar revenue offer for Duval Station, prepared by NOI.",
    }),
  component: DuvalPage,
});

function DuvalPage() {
  return (
    <EmailGate page="duval" title="NOI × Duval Station — Solar Energy Proposal">
      <h1 className="sr-only">NOI × Duval Station — Solar Energy Proposal</h1>
      <iframe
        src="/duval.html"
        title="NOI × Duval Station — Solar Energy Proposal"
        className="h-screen w-full border-0"
      />
    </EmailGate>
  );
}
