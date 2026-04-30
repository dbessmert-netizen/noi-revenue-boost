import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { sendLovableEmail } from "@lovable.dev/email-js";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  role: z.string().trim().max(80).optional().or(z.literal("")),
  units: z.coerce.number().int().min(0).max(1_000_000).optional().nullable(),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  source: z.string().trim().max(100).optional().or(z.literal("")),
});

const NOTIFY_TO = "dbessmert@gmail.com";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const supabaseUrl = process.env.VITE_SUPABASE_URL!;
    const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const insert = {
      name: data.name,
      email: data.email,
      company: data.company || null,
      role: data.role || null,
      units: data.units ?? null,
      message: data.message || null,
      source: data.source || null,
    };

    const { error } = await supabase.from("contact_submissions").insert(insert);
    if (error) {
      console.error("contact_submissions insert failed", error);
      return { success: false, error: "Could not save your message. Please try again." };
    }

    // Fire-and-log email notification — never block the user response on email failure
    try {
      const apiKey = process.env.LOVABLE_API_KEY;
      if (apiKey) {
        const rows = [
          ["Name", data.name],
          ["Email", data.email],
          ["Company", data.company || "—"],
          ["Role", data.role || "—"],
          ["Units", data.units != null ? String(data.units) : "—"],
          ["Source", data.source || "—"],
          ["Message", data.message || "—"],
        ];
        const html = `
          <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111">
            <h2 style="margin:0 0 16px">New NOI lead</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              ${rows
                .map(
                  ([k, v]) =>
                    `<tr><td style="padding:6px 8px;border-bottom:1px solid #eee;color:#666;width:120px">${k}</td><td style="padding:6px 8px;border-bottom:1px solid #eee">${String(
                      v,
                    )
                      .replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/>/g, "&gt;")}</td></tr>`,
                )
                .join("")}
            </table>
          </div>`;
        const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
        await sendLovableEmail(
          {
            to: NOTIFY_TO,
            from: "NOI Leads <leads@joinnoi.com>",
            subject: `New NOI lead: ${data.name}${data.company ? " — " + data.company : ""}`,
            html,
            text,
            reply_to: data.email,
            purpose: "transactional",
          },
          { apiKey },
        );
      } else {
        console.warn("LOVABLE_API_KEY missing; skipping notification email");
      }
    } catch (e) {
      console.error("Notification email failed (lead saved):", e);
    }

    return { success: true };
  });
