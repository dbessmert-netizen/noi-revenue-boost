import { createFileRoute } from "@tanstack/react-router";
import { AuthScreen } from "./signin";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign up — NOI" },
      { name: "description", content: "Create your NOI landlord account. No credit card required." },
    ],
  }),
  component: () => <AuthScreen mode="signup" />,
});
