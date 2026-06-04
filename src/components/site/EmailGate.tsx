import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { requestPageAccess } from "@/lib/page-access.functions";

type Page = "kipling" | "duval";

const storageKey = (page: Page) => `noi.page-access.${page}`;

export function EmailGate({
  page,
  title,
  children,
}: {
  page: Page;
  title: string;
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submit = useServerFn(requestPageAccess);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && localStorage.getItem(storageKey(page))) {
        setUnlocked(true);
      }
    } catch {
      /* ignore */
    }
    setChecked(true);
  }, [page]);

  if (!checked) {
    return <div className="min-h-screen bg-background" />;
  }

  if (unlocked) {
    return <>{children}</>;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await submit({ data: { email, page } });
      if (res.allowed) {
        try {
          localStorage.setItem(storageKey(page), email.trim().toLowerCase());
        } catch {
          /* ignore */
        }
        setUnlocked(true);
      } else {
        setError(res.error ?? "Access denied.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Private preview
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-foreground">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Enter your work email to view this proposal. We'll remember you on this device.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
          <label className="block text-sm font-medium text-foreground" htmlFor="gate-email">
            Work email
          </label>
          <input
            id="gate-email"
            type="email"
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary"
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
          >
            {submitting ? "Checking…" : "View proposal"}
          </button>
          <p className="pt-2 text-xs text-muted-foreground">
            By continuing you agree to be contacted about this proposal. No account required.
          </p>
        </form>
      </div>
    </div>
  );
}
