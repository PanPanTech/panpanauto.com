import { NextResponse } from "next/server";
import { parseInquiry, type InquiryInput } from "@/lib/inquiry";

export const runtime = "nodejs";

function webhookUrl() {
  const value = process.env.INQUIRY_WEBHOOK_URL?.trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return url;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  let body: InquiryInput;
  try {
    body = (await request.json()) as InquiryInput;
  } catch {
    return NextResponse.json({ ok: false, errors: ["Send the inquiry as JSON."] }, { status: 400 });
  }

  const parsed = parseInquiry(body);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, errors: parsed.errors }, { status: 400 });
  }
  if ("honeypot" in parsed) {
    return NextResponse.json({ ok: true });
  }

  const target = webhookUrl();
  if (!target) {
    console.info("inquiry.received", parsed.record);
    return NextResponse.json({ ok: true });
  }

  try {
    const response = await fetch(target, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(parsed.record),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      console.error("inquiry.webhook_failed", { status: response.status });
      return NextResponse.json(
        { ok: false, errors: ["The inquiry could not be delivered. Please try again or call +86 13925118851."] },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("inquiry.webhook_error", error instanceof Error ? error.message : "unknown");
    return NextResponse.json(
      { ok: false, errors: ["The inquiry could not be delivered. Please try again or call +86 13925118851."] },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
