import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/utils";

export const runtime = "nodejs";

type ContactPayload = {
  mode?: "contact" | "demo";
  fullName?: string;
  companyName?: string;
  companyWebsite?: string;
  workEmail?: string;
  phone?: string;
  industry?: string;
  companySize?: string;
  requirements?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function row(label: string, value?: string) {
  if (!value?.trim()) return "";
  return `<tr>
    <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;width:180px;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(value)}</td>
  </tr>`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const mode = body.mode === "demo" ? "demo" : "contact";
    const fullName = body.fullName?.trim() ?? "";
    const workEmail = body.workEmail?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const companyName = body.companyName?.trim() ?? "";
    const companyWebsite = body.companyWebsite?.trim() ?? "";
    const industry = body.industry?.trim() ?? "";
    const companySize = body.companySize?.trim() ?? "";
    const requirements = body.requirements?.trim() ?? "";

    if (!fullName || !workEmail || !phone) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!isValidEmail(workEmail)) {
      return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      return NextResponse.json({ error: "Enter a valid phone number." }, { status: 400 });
    }

    if (mode === "demo" && !companyName) {
      return NextResponse.json({ error: "Company name is required." }, { status: 400 });
    }

    if (mode === "contact" && (!industry || !companySize)) {
      return NextResponse.json(
        { error: "Industry and company size are required." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 },
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "ZcaleUp Website <onboarding@resend.dev>";
    const subject =
      mode === "demo"
        ? `New demo request from ${fullName}`
        : `New contact request from ${fullName}`;

    const html = `
      <div style="font-family:Arial,sans-serif;color:#111827;">
        <h2 style="margin:0 0 16px;">${mode === "demo" ? "Demo Request" : "Contact Request"}</h2>
        <p style="margin:0 0 16px;">A visitor submitted a form on ${escapeHtml(siteConfig.name)}.</p>
        <table style="border-collapse:collapse;width:100%;max-width:640px;">
          ${row("Full name", fullName)}
          ${row("Company name", companyName)}
          ${row("Company website", companyWebsite)}
          ${row("Work email", workEmail)}
          ${row("Phone", phone)}
          ${row("Industry", industry)}
          ${row("Company size", companySize)}
          ${row("Message", requirements)}
        </table>
      </div>
    `;

    const text = [
      mode === "demo" ? "Demo Request" : "Contact Request",
      `Full name: ${fullName}`,
      companyName && `Company name: ${companyName}`,
      companyWebsite && `Company website: ${companyWebsite}`,
      `Work email: ${workEmail}`,
      `Phone: ${phone}`,
      industry && `Industry: ${industry}`,
      companySize && `Company size: ${companySize}`,
      requirements && `Message: ${requirements}`,
    ]
      .filter(Boolean)
      .join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: workEmail,
        subject,
        html,
        text,
      }),
    });

    if (!resendResponse.ok) {
      const details = await resendResponse.text();
      console.error("Resend API error:", resendResponse.status, details);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
