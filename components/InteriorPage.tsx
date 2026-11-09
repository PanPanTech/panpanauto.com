import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, breadcrumbJsonLd, type Crumb } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { VehicleFigure } from "@/components/VehicleFigure";
import type { SeriesCard } from "@/lib/catalog";
import { site } from "@/lib/site";
import type { ShotId } from "@/lib/vehicles";

export type Doc = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  lede: string;
  shot: ShotId;
  crumbs: readonly Crumb[];
  paragraphs: readonly string[];
  series?: readonly SeriesCard[];
  links?: readonly { href: string; label: string }[];
  showSpecs?: boolean;
};

const specRows = [
  ["Thickness", "TBD"],
  ["Warranty", "TBD"],
  ["MOQ", "TBD"],
  ["Lead time", "TBD"],
  ["Incoterms", "TBD"],
];

export function docMetadata(page: Doc): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      images: [{ url: "/og/home.webp", width: 1200, height: 630, alt: "Xiaomi SU7 reference photo used by PanPan Auto" }],
    },
  };
}

export function InteriorPage({ page }: { page: Doc }) {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbJsonLd(page.crumbs) }} />
      <article className="mx-auto max-w-page px-4 py-10 sm:px-6 md:py-14">
        <Breadcrumbs items={page.crumbs} />
        <div className="mt-6 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">{page.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy-950 md:text-5xl">{page.title}</h1>
            <p className="prose-measure mt-4 text-lg leading-8 text-ink/80">{page.lede}</p>
          </div>
          <VehicleFigure id={page.shot} className="overflow-hidden rounded-2xl bg-navy-900" />
        </div>

        <div className="mt-10 max-w-3xl space-y-4 text-base leading-8 text-ink/85">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {page.showSpecs ? (
          <div className="mt-8 max-w-3xl">
            <h2 className="text-xl font-semibold text-navy-950">Specification status</h2>
            <p className="mt-2 text-sm text-ink/70">
              Unconfirmed figures stay TBD. Official brand pages and written authorization take priority over this site.
            </p>
            <table className="mt-4 w-full border-collapse text-sm">
              <caption className="sr-only">Unconfirmed product figures</caption>
              <thead>
                <tr className="border-b border-line text-left">
                  <th className="py-2 font-semibold">Item</th>
                  <th className="py-2 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {specRows.map(([item, status]) => (
                  <tr key={item} className="border-b border-line">
                    <td className="py-2">{item}</td>
                    <td className="py-2 font-medium">{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        {page.series?.length ? (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-navy-950">Series in this pillar</h2>
            <ul className="mt-5 grid gap-4 md:grid-cols-2">
              {page.series.map((series) => (
                <li key={series.href} className="overflow-hidden rounded-2xl border border-line bg-white">
                  <VehicleFigure id={series.shot} caption={false} className="aspect-[16/9] bg-navy-900" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">
                      <Link href={series.href} className="hover:text-brass">
                        {series.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink/75">{series.blurb}</p>
                    <p className="mt-2 text-xs text-navy-800/70">Xiaomi EV reference photo — not a PanPan installation.</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {page.links?.length ? (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-navy-950">Related pages</h2>
            <ul className="mt-3 flex flex-wrap gap-3 text-sm">
              {page.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="rounded-full border border-line bg-white px-3 py-2 hover:border-brass">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl bg-navy-900 px-5 py-6 text-paper">
          <div>
            <h2 className="text-xl font-semibold">Ask for this assortment</h2>
            <p className="mt-1 text-sm text-paper/75">
              Quotes, samples, and dealer talks use the same form. Call {site.phoneDisplay}.
            </p>
          </div>
          <Link href="/contact/" className="rounded-full bg-brass-bright px-4 py-2 text-sm font-semibold text-navy-950">
            Submit an inquiry
          </Link>
        </div>
      </article>
    </>
  );
}
