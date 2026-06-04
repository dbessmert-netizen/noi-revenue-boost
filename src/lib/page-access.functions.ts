import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ALLOWED_PAGES = ["kipling", "duval"] as const;

const schema = z.object({
  email: z.string().trim().toLowerCase().email("Please enter a valid email").max(255),
  page: z.enum(ALLOWED_PAGES),
});

export const requestPageAccess = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { getRequestHeader, getRequestIP } = await import("@tanstack/react-start/server");

    const userAgent = getRequestHeader("user-agent") ?? null;
    let ip: string | null = null;
    try {
      ip = getRequestIP({ xForwardedFor: true }) ?? null;
    } catch {
      ip = null;
    }

    // Upsert by (email, page). If they already exist and are blocked, deny.
    const { data: existing, error: selErr } = await supabaseAdmin
      .from("page_subscribers")
      .select("id, blocked")
      .eq("email", data.email)
      .eq("page", data.page)
      .maybeSingle();

    if (selErr) {
      console.error("page_subscribers select failed", selErr);
      return { allowed: false, error: "Something went wrong. Please try again." };
    }

    if (existing) {
      if (existing.blocked) {
        return { allowed: false, error: "Access to this page is not available for your email." };
      }
      await supabaseAdmin
        .from("page_subscribers")
        .update({ last_seen_at: new Date().toISOString(), user_agent: userAgent, ip })
        .eq("id", existing.id);
      return { allowed: true };
    }

    const { error: insErr } = await supabaseAdmin.from("page_subscribers").insert({
      email: data.email,
      page: data.page,
      user_agent: userAgent,
      ip,
    });

    if (insErr) {
      console.error("page_subscribers insert failed", insErr);
      return { allowed: false, error: "Could not register your email. Please try again." };
    }

    return { allowed: true };
  });
