import { parseInquiry, type InquiryInput } from "../../lib/inquiry";
import { site } from "../../lib/site";

const deliveryError = `The inquiry could not be delivered. Please try again, email ${site.email}, or call ${site.phoneDisplay}.`;

interface InquiryEnv {
  INQUIRY_WEBHOOK_URL?: string;
}

function webhookUrl(value: string | undefined) {
  const trimmed = value?.trim();
  if (!trimmed) return null;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return url;
  } catch {
    return null;
  }
}

function json(
  body: { ok: boolean; errors?: string[] },
  status = 200,
  headers?: HeadersInit,
) {
  return Response.json(body, { status, headers });
}

// Pages maps functions/api/inquiry.ts to /api/inquiry and /api/inquiry/.
export async function onRequest(context: {
  request: Request;
  env: InquiryEnv;
}): Promise<Response> {
  if (context.request.method !== "POST") {
    return json({ ok: false, errors: ["Send the inquiry with POST."] }, 405, { allow: "POST" });
  }
  return postInquiry(context);
}

async function postInquiry(context: {
  request: Request;
  env: InquiryEnv;
}): Promise<Response> {
  let body: InquiryInput;
  try {
    body = (await context.request.json()) as InquiryInput;
  } catch {
    return json({ ok: false, errors: ["Send the inquiry as JSON."] }, 400);
  }

  const parsed = parseInquiry(body);
  if (!parsed.ok) {
    return json({ ok: false, errors: parsed.errors }, 400);
  }
  if ("honeypot" in parsed) {
    return json({ ok: true });
  }

  const target = webhookUrl(context.env.INQUIRY_WEBHOOK_URL);
  if (!target) {
    console.info("inquiry.received", parsed.record);
    return json({ ok: true });
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
      return json(
        { ok: false, errors: [deliveryError] },
        502,
      );
    }
  } catch (error) {
    console.error("inquiry.webhook_error", error instanceof Error ? error.message : "unknown");
    return json(
      { ok: false, errors: [deliveryError] },
      502,
    );
  }

  return json({ ok: true });
}
