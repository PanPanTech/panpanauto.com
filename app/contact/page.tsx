import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { FaqList, faqJsonLd } from "@/components/FaqList";
import { InquiryForm } from "@/components/InquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { VehicleFigure } from "@/components/VehicleFigure";
import { contactFaqs } from "@/lib/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wholesale Film Inquiry",
  description:
    "Send PanPan Auto, an authorized dealer for ISF, NKODA, and NANOLINK, a wholesale inquiry for PPF and window tint. Company, region, interest, and volume.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Wholesale Film Inquiry | PanPan Auto",
    description:
      "Send PanPan Auto a wholesale inquiry for PPF, window tint, and film. Company, region, interest, and volume for a quote and sample notes.",
    url: "/contact/",
    images: [{ url: "/og/home.webp", width: 1200, height: 630, alt: "Xiaomi EV reference photo" }],
  },
};

const crumbs = [
  { href: "/", label: "Home" },
  { label: "Contact and inquiry" },
];

const steps = [
  "Receipt — the inquiry is logged. Automatic reply copy is TBD.",
  "Clarification — we check the company, the series, and the volume, and we may ask for a vehicle or a color card.",
  "Quote or sample path — wholesale tier, whether a sample is available, and the fee rules (TBD).",
  "Optional next step — if a dealership fits, we point you to the application outline or a written policy (TBD).",
];

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd(crumbs),
      faqJsonLd(contactFaqs),
      {
        "@type": "ContactPage",
        name: "Wholesale inquiry",
        url: "https://panpanauto.com/contact/",
        isPartOf: { "@type": "WebSite", url: "https://panpanauto.com/" },
        about: { "@id": "https://panpanauto.com/#organization" },
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <div className="mx-auto max-w-page px-4 py-10 sm:px-6 md:py-14">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy-950 md:text-5xl">
              Wholesale inquiry and contact
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/80">
              Tint shops, restyling studios, regional distributors — tell us the series and a rough volume.{" "}
              <strong>PanPan Auto</strong>, a <strong>multi-brand authorized dealer</strong> for auto film and parts
              (assortment includes <strong>ISF, NKODA, and NANOLINK</strong>, with ISF as the PPF trust line), replies
              with the quote path, the sample policy, and the partnership next step. Not a factory site.
            </p>
            <p className="mt-3 text-sm text-ink/70">
              This page is for B2B inquiries. It is not a retail cart.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
              <a href="#inquiry-form" className="rounded-full bg-navy-900 px-4 py-2 text-white">
                Fill in the inquiry form
              </a>
              <Link href="/wholesale/" className="underline decoration-brass underline-offset-4">
                Read the wholesale notes first
              </Link>
              <Link href="/products/ppf/" className="underline decoration-brass underline-offset-4">
                PPF pillar
              </Link>
            </div>
          </div>
          <VehicleFigure id="yu7Showroom" className="overflow-hidden rounded-3xl" priority />
        </div>

        <section className="mt-14" aria-labelledby="who-heading">
          <h2 id="who-heading" className="text-2xl font-semibold text-navy-950">
            These roles should write in directly
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/75">
            If you are one of the following, use the form. We reply at company level. We do not negotiate retail one-off pricing.
          </p>
          <ol className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              ["Tint shop / color-change shop", "Needs a steady PPF and window-tint supply, plus a way to evaluate samples."],
              ["Restyling or detailing studio", "Needs a PPF plus tint combination, or a project quantity."],
              ["Regional distributor / trader", "Needs the assortment, MOQ, training, and the dealer application path."],
              ["Multi-shop or group buying", "Needs one series story and one delivery conversation. Policy: TBD."],
            ].map(([title, body]) => (
              <li key={title} className="rounded-2xl border border-line bg-white p-4">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/75">{body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm leading-6 text-ink/70">
            A poor fit for this form: single-panel retail jobs, requests to impersonate the brand, and empty inquiries with no company. Add the company first. If you already know the series, open{" "}
            <Link className="underline" href="/products/ppf/">PPF</Link> or{" "}
            <Link className="underline" href="/products/window-tint/">window tint</Link> and come back.
          </p>
        </section>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <InquiryForm />
          <div className="min-w-0 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-navy-950">What happens next</h2>
              <ol className="mt-4 space-y-3 text-sm leading-6">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-semibold text-brass">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-sm text-ink/70">
                Target first response: <strong>TBD</strong>. The live commitment will replace this placeholder and match the footer.
              </p>
              <Link href="/wholesale/" className="mt-3 inline-block text-sm font-semibold underline">
                Read the policy first
              </Link>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-navy-950">Other ways to reach us</h2>
              <p className="mt-2 text-sm text-ink/70">The form is preferred. Channels that are not configured yet stay TBD.</p>
              <table className="mt-4 w-full text-sm">
                <caption className="sr-only">Contact channels</caption>
                <tbody>
                  {[
                    ["Sales email", "TBD", "Put the company name and the series in the subject once an address is published."],
                    ["Phone / WhatsApp", site.phoneDisplay, "Public business number, with country code."],
                    ["WeChat", "TBD", "Optional for shops in China."],
                    ["Office address", "TBD", "Published only if we show a public office."],
                    ["Hours", "TBD", "Timezone will be stated with the hours."],
                  ].map(([channel, value, note]) => (
                    <tr key={channel} className="border-t border-line align-top">
                      <th className="py-3 pr-3 text-left font-semibold">{channel}</th>
                      <td className="py-3">
                        {channel.startsWith("Phone") ? (
                          <a className="font-semibold" href={`tel:${site.phoneTel}`}>{value}</a>
                        ) : (
                          <span className="font-semibold">{value}</span>
                        )}
                        <span className="mt-1 block text-xs text-ink/65">{note}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-navy-950">Before you inquire</h2>
          <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-6 text-ink/80">
            <li>PanPan Auto is a multi-brand authorized dealer and distributor of auto film and parts (ISF, NKODA, NANOLINK). It is not a factory website.</li>
            <li>Price, MOQ, warranty years, lead time, and Incoterms follow the official brand page and written confirmation. Placeholders on this site are TBD. They are not estimates.</li>
            <li>We do not ask you to pay an unclear fee before samples and terms are confirmed. The receiving account is stated in writing and is TBD.</li>
            <li>Territory exclusivity, training, and cut-film software depend on the brand authorization and the cooperation level (TBD).</li>
            <li>Public phone: {site.phoneDisplay}.</li>
          </ul>
          <p className="mt-3 text-sm">
            <Link className="underline" href="/about/">About</Link>
            {" · "}
            <Link className="underline" href="/wholesale/">Wholesale</Link>
            {" · "}
            <Link className="underline" href="/products/ppf/">PPF</Link>
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-navy-950">Wholesale questions</h2>
          <div className="mt-4 max-w-3xl">
            <FaqList items={contactFaqs} />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-navy-950">Related pages</h2>
          <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            {[
              ["/products/ppf/", "PPF pillar"],
              ["/products/window-tint/", "Window tint pillar"],
              ["/wholesale/", "Wholesale and dealers"],
              ["/dealers/apply/", "Dealer application"],
              ["/solutions/", "Shop programs"],
              ["/about/", "About us"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="underline decoration-line underline-offset-4 hover:decoration-brass">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
