export const roles = [
  "Shop owner",
  "Purchasing",
  "Install lead",
  "Dealer",
  "Other",
] as const;

export const interests = [
  "Clear gloss PPF",
  "Matte / satin PPF",
  "Color PPF",
  "TPU PPF",
  "Nano-ceramic window tint",
  "Photochromic window tint",
  "Wholesale partnership",
  "Samples",
  "Other",
] as const;

export type Role = (typeof roles)[number];
export type Interest = (typeof interests)[number];

export const intentPresets: Record<
  string,
  { banner: string; interests: Interest[] }
> = {
  sample: {
    banner: "This inquiry is tagged as a sample request.",
    interests: ["Samples"],
  },
  wholesale: {
    banner: "This inquiry is tagged as a wholesale partnership.",
    interests: ["Wholesale partnership"],
  },
  dealer: {
    banner:
      "This inquiry is tagged as a dealer application. You can also read the application outline before you send it.",
    interests: ["Wholesale partnership"],
  },
  starter: {
    banner: "This inquiry is tagged as a starter shop program.",
    interests: ["Clear gloss PPF", "Nano-ceramic window tint"],
  },
  "full-body": {
    banner: "This inquiry is tagged as a full-vehicle PPF project.",
    interests: ["Clear gloss PPF", "TPU PPF"],
  },
};

export type InquiryInput = {
  company?: unknown;
  contactName?: unknown;
  role?: unknown;
  country?: unknown;
  city?: unknown;
  email?: unknown;
  phone?: unknown;
  productInterest?: unknown;
  quantity?: unknown;
  message?: unknown;
  intent?: unknown;
  consent?: unknown;
  website?: unknown;
};

export type InquiryRecord = {
  company: string;
  contactName: string;
  role: Role;
  country: string;
  city: string;
  email: string;
  phone: string;
  productInterest: Interest[];
  quantity: string;
  message: string;
  intent: string;
  consent: true;
  receivedAt: string;
};

export type InquiryResult =
  | { ok: true; honeypot: true }
  | { ok: true; record: InquiryRecord }
  | { ok: false; errors: string[] };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export function parseInquiry(input: InquiryInput): InquiryResult {
  if (text(input.website, 200)) {
    return { ok: true, honeypot: true };
  }

  const errors: string[] = [];
  const company = text(input.company, 160);
  const contactName = text(input.contactName, 120);
  const role = text(input.role, 40);
  const country = text(input.country, 80);
  const city = text(input.city, 80);
  const email = text(input.email, 160);
  const phone = text(input.phone, 40);
  const quantity = text(input.quantity, 200);
  const message = text(input.message, 4000);
  const intent = text(input.intent, 40);
  const rawInterests = Array.isArray(input.productInterest)
    ? input.productInterest
    : [];
  const productInterest = rawInterests
    .map((item) => text(item, 80))
    .filter((item): item is Interest =>
      (interests as readonly string[]).includes(item),
    );

  if (!company) errors.push("Company name is required.");
  if (!contactName) errors.push("Contact name is required.");
  if (!(roles as readonly string[]).includes(role)) {
    errors.push("Select a role.");
  }
  if (!country) errors.push("Country or region is required.");
  if (!email || !emailPattern.test(email)) errors.push("A valid work email is required.");
  if (productInterest.length === 0) {
    errors.push("Select at least one product interest.");
  }
  if (input.consent !== true) {
    errors.push("Consent to be contacted is required.");
  }
  if (intent && !(intent in intentPresets)) {
    errors.push("Unknown inquiry intent.");
  }

  if (errors.length) return { ok: false, errors };

  return {
    ok: true,
    record: {
      company,
      contactName,
      role: role as Role,
      country,
      city,
      email,
      phone,
      productInterest,
      quantity,
      message,
      intent,
      consent: true,
      receivedAt: new Date().toISOString(),
    },
  };
}
