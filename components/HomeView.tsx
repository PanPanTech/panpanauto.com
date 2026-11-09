import Link from "next/link";
import { FaqList, faqJsonLd } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { VehicleFigure } from "@/components/VehicleFigure";
import { featuredSeries, ppfSeries, tintSeries } from "@/lib/catalog";
import { homeFaqs } from "@/lib/faq";
import { absoluteUrl, site } from "@/lib/site";
import { shots } from "@/lib/vehicles";

const pillars = [
  {
    title: "Paint protection film (PPF)",
    body: "Clear, matte, color, and TPU lines for full-vehicle or partial protection. Open the series map, the selection notes, and the wholesale entrance.",
    href: "/products/ppf/",
    cta: "Open the PPF pillar",
    shot: "su7Coast" as const,
    links: ppfSeries.map((item) => ({ href: item.href, label: item.name.replace(" PPF", "").replace(" paint protection film", "") })),
  },
  {
    title: "Automotive window tint",
    body: "Nano-ceramic and photochromic window film, matched to the VLT and heat rejection a shop actually stocks.",
    href: "/products/window-tint/",
    cta: "Open the tint pillar",
    shot: "cabinDay" as const,
    links: [
      { href: "/products/window-tint/nano-ceramic/", label: "Nano-ceramic" },
      { href: "/products/window-tint/photochromic/", label: "Photochromic" },
    ],
  },
  {
    title: "Wholesale and dealer partnership",
    body: "MOQ, samples, lead time, and the dealer application are explained in one place. Numbers stay TBD until the authorization pack replaces them.",
    href: "/wholesale/",
    cta: "Read the wholesale policy",
    shot: "n70" as const,
    links: [
      { href: "/dealers/apply/", label: "Dealer application" },
      { href: "/contact/", label: "Inquire now" },
    ],
  },
];

const trust = [
  {
    title: "Multi-brand authorized assortment",
    body: "PanPan Auto represents film brands including ISF, NKODA, and NANOLINK. Territory and scope follow written confirmation and are otherwise TBD.",
  },
  {
    title: "ISF as the PPF trust line",
    body: "A premium paint-protection channel, so a shop can talk about PPF with a named brand rather than an anonymous roll.",
  },
  {
    title: "Wholesale first",
    body: "Built for shops and distributors. There is no retail cart in this phase.",
  },
  {
    title: "A readable catalog",
    body: "PPF, window tint, and wholesale policy are separate pillars instead of one crowded page.",
  },
  {
    title: "Inquiries a person can follow",
    body: `Company details plus the series you want, so a quote has somewhere to start. Phone ${site.phoneDisplay}. Response time: TBD.`,
  },
  {
    title: "A sample path",
    body: "Samples can be requested for evaluation. Fees, freight, and credit rules are TBD. Training and cut-film support follow the authorization policy.",
  },
];

export function HomeView() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PanPan Auto film pillars",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Paint protection film", url: absoluteUrl("/products/ppf/") },
      { "@type": "ListItem", position: 2, name: "Window tint", url: absoluteUrl("/products/window-tint/") },
      { "@type": "ListItem", position: 3, name: "Wholesale", url: absoluteUrl("/wholesale/") },
    ],
  };

  return (
    <>
      <JsonLd data={itemList} />
      <JsonLd data={{ "@context": "https://schema.org", ...faqJsonLd(homeFaqs) }} />

      <section className="relative isolate min-h-[78vh] bg-navy-950 text-paper">
        <img
          src={shots.su7Coast.src}
          alt={shots.su7Coast.alt}
          width={shots.su7Coast.width}
          height={shots.su7Coast.height}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/20" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-page flex-col justify-end px-4 py-16 sm:px-6 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-bright">
            ISF · NKODA · NANOLINK
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            PanPan Auto — wholesale ISF paint protection film and auto film
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-paper/90">
            For tint shops, restyling studios, and regional distributors. <strong>PanPan Auto</strong> is a
            multi-brand authorized dealer. The assortment includes <strong>ISF paint protection film</strong> and{" "}
            <strong>NKODA / NANOLINK</strong> film, so window tint, install supplies, and selected parts can fill one
            purchase list. Quotes, samples, and dealer talks start at the same door.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-paper/75">
            This B2B wholesale site is operated by PanPan Auto / PanPanTech (panpanauto.com). We are an authorized
            dealer and distributor channel for brands including ISF, NKODA, and NANOLINK. We are not the ISF or
            NANOLINK factory website. Ask us for specifications, lead times, and wholesale tiers. Anything not yet
            confirmed is marked TBD and should be checked on the official brand page.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact/" className="rounded-full bg-brass-bright px-5 py-3 text-sm font-semibold text-navy-950">
              Get a wholesale quote
            </Link>
            <Link href="/products/ppf/" className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold">
              Browse PPF
            </Link>
            <Link href="/dealers/apply/" className="px-2 py-3 text-sm font-semibold underline decoration-brass-bright underline-offset-4">
              Apply for a dealership
            </Link>
          </div>
          <p className="mt-8 max-w-xl text-xs leading-5 text-paper/70">
            Xiaomi EV reference photo from xiaomiev.com — not a PanPan installation.{" "}
            <Link className="underline" href="/products/window-tint/">Window tint</Link>
            {" · "}
            <Link className="underline" href="/wholesale/">Wholesale</Link>
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-white" aria-labelledby="trust-heading">
        <div className="mx-auto max-w-page px-4 py-14 sm:px-6">
          <h2 id="trust-heading" className="text-2xl font-semibold tracking-tight text-navy-950 md:text-3xl">
            Why shops use this channel
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trust.map((item) => (
              <li key={item.title} className="rounded-2xl border border-line bg-paper p-5">
                <h3 className="font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/75">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            <Link href="/about/" className="font-semibold text-navy-900 underline decoration-brass underline-offset-4">
              Read the authorization and partnership outline
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 py-16 sm:px-6" aria-labelledby="pillars-heading">
        <h2 id="pillars-heading" className="text-3xl font-semibold tracking-tight text-navy-950">
          Three assortment pillars
        </h2>
        <p className="prose-measure mt-3 text-base leading-7 text-ink/75">
          Phase 1 focuses on film and wholesale conversion. Enter a pillar, choose a series, then send an inquiry.
          That path is easier to buy from, and easier to index, than one page piled with every category.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.href} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
              <VehicleFigure id={pillar.shot} caption={false} className="aspect-[16/10] bg-navy-900" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold text-navy-950">{pillar.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-ink/75">{pillar.body}</p>
                <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                  {pillar.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="underline decoration-line underline-offset-4 hover:decoration-brass">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={pillar.href} className="mt-4 text-sm font-semibold text-navy-900">
                  {pillar.cta} →
                </Link>
                <p className="mt-3 text-xs text-navy-800/70">Xiaomi EV reference photo — not a PanPan installation.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand/70" aria-labelledby="series-heading">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6">
          <h2 id="series-heading" className="text-3xl font-semibold tracking-tight text-navy-950">
            Flagship series at a glance
          </h2>
          <p className="prose-measure mt-3 leading-7 text-ink/75">
            These are the Phase 1 landing series. Full specifications, comparison tables, and FAQs belong on each
            product page. This row only routes you there.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSeries.map((series) => (
              <li key={series.href} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <VehicleFigure id={series.shot} caption={false} className="aspect-[16/9]" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    <Link href={series.href}>{series.name}</Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/75">{series.blurb}</p>
                  <p className="mt-2 text-xs text-navy-800/70">Xiaomi EV reference photo — not a PanPan installation.</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/products/" className="underline decoration-brass underline-offset-4">
              Full product index
            </Link>
            <Link href="/contact/" className="underline decoration-brass underline-offset-4">
              Inquire about these series
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-page items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2" aria-labelledby="why-heading">
        <div>
          <h2 id="why-heading" className="text-3xl font-semibold tracking-tight text-navy-950">
            Why PanPan Auto
          </h2>
          <p className="mt-4 leading-8 text-ink/80">
            A tint shop or restyling studio buys for a steady supply, specifications that can be explained, and a
            person who answers when something is wrong. <strong>PanPan Auto</strong> puts the{" "}
            <strong>multi-brand authorized dealer role</strong> in the open — featuring <strong>ISF</strong> paint
            protection film, with <strong>NKODA / NANOLINK</strong> film in the same assortment — next to a{" "}
            <strong>wholesale inquiry path</strong>. You can see who you are talking to, which authorization chain the
            goods follow, and how to ask for a sample and a quote.
          </p>
          <h3 className="mt-6 text-lg font-semibold">The boundary we will actually keep</h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-ink/80">
            <li>We are a multi-brand authorized dealer and distributor of auto film and parts (ISF, NKODA, NANOLINK, and related lines). Territory and product coverage follow written authorization and are otherwise TBD.</li>
            <li>We handle wholesale quotes, samples, and partnership talks for shops and distributors. Public phone: {site.phoneDisplay}.</li>
            <li>We are not the ISF or NANOLINK factory website, and we are not a single-brand factory site. We do not impersonate a source factory or claim an exclusivity we have not been given.</li>
            <li>We do not publish national sales rankings or invented warranty, MOQ, or lead-time figures. Unconfirmed items stay TBD and follow the official brand page.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/about/" className="rounded-full bg-navy-900 px-4 py-2 text-white">Read about us</Link>
            <Link href="/wholesale/" className="rounded-full border border-navy-900 px-4 py-2">Wholesale partnership</Link>
          </div>
        </div>
        <VehicleFigure id="yu7Showroom" className="overflow-hidden rounded-3xl" />
      </section>

      <section className="bg-navy-950 text-paper" aria-labelledby="solutions-heading">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6">
          <h2 id="solutions-heading" className="text-3xl font-semibold tracking-tight">
            Supply programs for tint and restyling shops
          </h2>
          <p className="mt-3 max-w-2xl text-paper/75">
            Group the assortment by the job, so a buyer is not stuck with a single SKU and an empty shelf. Starter
            SKUs and labor references are TBD and will be written on the solutions page once they are confirmed.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Starter set</h3>
              <p className="mt-2 text-sm leading-6 text-paper/75">
                A base PPF roll, a core window-tint specification, and the direction of common install supplies. The list is TBD. It suits a new shop checking the brand and the process.
              </p>
              <p className="mt-4 text-sm">
                <Link className="underline" href="/solutions/">Program page</Link>
                {" · "}
                <Link className="underline" href="/contact/?intent=starter">Inquire</Link>
              </p>
            </article>
            <article className="rounded-2xl bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Full-vehicle PPF project</h3>
              <p className="mt-2 text-sm leading-6 text-paper/75">
                Material and series choices for a full body, a front clip, or high-wear panels. Usage estimates are TBD.
              </p>
              <p className="mt-4 text-sm">
                <Link className="underline" href="/contact/?intent=full-body">Ask about a full vehicle</Link>
                {" · "}
                <Link className="underline" href="/products/ppf/">PPF series</Link>
              </p>
            </article>
            <article className="rounded-2xl bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Tint and PPF together</h3>
              <p className="mt-2 text-sm leading-6 text-paper/75">
                Appearance protection and heat rejection across the same customer relationship, so the shop can raise the ticket without inventing a bundle price.
              </p>
              <p className="mt-4 text-sm">
                <Link className="underline" href="/products/window-tint/">Window tint</Link>
                {" · "}
                <Link className="underline" href="/wholesale/">Wholesale policy</Link>
              </p>
            </article>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <VehicleFigure id="n90" className="max-h-[420px]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 py-16 sm:px-6" aria-labelledby="proof-heading">
        <h2 id="proof-heading" className="text-3xl font-semibold tracking-tight text-navy-950">
          Shop stories and delivery notes
        </h2>
        <p className="prose-measure mt-3 leading-7 text-ink/75">
          Real installations, authorization scans, a warranty flow, and reorder feedback will be published when the
          files exist. Until then, discuss the assortment and the lead time on an inquiry. The photos below are
          Xiaomi EV references, not PanPan work.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { shot: "yu7Showroom" as const, title: "Authorization proof", note: "Image / PDF: TBD" },
            { shot: "yu7Mountain" as const, title: "Install / delivery story", note: "Before-and-after vehicle, city, model, and series: TBD" },
            { shot: "n70" as const, title: "Service measures", note: "Response time, reorder rate, and shop coverage: TBD. Not invented." },
          ].map((card) => (
            <article key={card.title} className="overflow-hidden rounded-2xl border border-line bg-white">
              <VehicleFigure id={card.shot} caption={false} className="aspect-[16/10]" />
              <div className="p-4">
                <h3 className="font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{card.note}</p>
                <p className="mt-2 text-xs text-navy-800/70">Xiaomi EV reference photo — not a PanPan installation.</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm font-semibold">
          <Link href="/contact/" className="underline decoration-brass underline-offset-4">Start with an inquiry</Link>
          {" · "}
          <Link href="/about/" className="underline decoration-brass underline-offset-4">About us</Link>
        </p>
      </section>

      <section className="border-y border-line bg-white" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6">
          <h2 id="blog-heading" className="text-3xl font-semibold tracking-tight text-navy-950">
            Selection and installation notes
          </h2>
          <p className="mt-3 max-w-2xl text-ink/75">
            Definitions and comparisons a shop can cite when explaining a proposal — and that a search or answer engine can quote without a fabricated spec.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-line p-5">
              <h3 className="text-xl font-semibold">
                <Link href="/blog/what-is-tpu-ppf/">What is TPU paint protection film?</Link>
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/75">
                A definition of TPU PPF, and the boundary with PVC and TPH.
              </p>
            </article>
            <article className="rounded-2xl border border-line p-5">
              <h3 className="text-xl font-semibold">
                <Link href="/blog/ppf-vs-vinyl-wrap/">Color PPF vs vinyl wrap</Link>
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/75">
                How to choose between a protective color film and a traditional color-change wrap.
              </p>
            </article>
          </div>
          <Link href="/blog/" className="mt-6 inline-block text-sm font-semibold underline decoration-brass underline-offset-4">
            Open the guide index
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-page gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]" aria-labelledby="geo-heading">
        <div>
          <h2 id="geo-heading" className="text-3xl font-semibold tracking-tight text-navy-950">
            What is paint protection film (PPF)?
          </h2>
          <p className="mt-4 rounded-2xl bg-sand p-5 text-base leading-8">
            Paint protection film (PPF) is a clear or colored film applied to automotive paint to reduce the effect of
            stone chips, scratches, and daily wear on the factory finish. PanPan Auto, a multi-brand authorized dealer,
            wholesales ISF paint protection film and related NKODA / NANOLINK film to tint shops and distributors. It
            is not a ceramic coating, and it does not replace proper driving or maintenance.
          </p>
          <p className="mt-4 text-sm">
            <Link className="underline" href="/products/ppf/">Full pillar</Link>
            {" · "}
            <Link className="underline" href="/products/ppf/tpu/">TPU material notes</Link>
            {" · "}
            <Link className="underline" href="/blog/what-is-tpu-ppf/">Guide</Link>
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-navy-950">Common questions</h2>
          <div className="mt-4">
            <FaqList items={homeFaqs} />
          </div>
          <Link href="/contact/" className="mt-4 inline-block text-sm font-semibold underline decoration-brass underline-offset-4">
            Still a question? Send an inquiry
          </Link>
        </div>
      </section>

      <section className="bg-brass text-navy-950" aria-labelledby="final-cta">
        <div className="mx-auto flex max-w-page flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="final-cta" className="text-3xl font-semibold tracking-tight">
              Ready to stock, or to talk about a territory?
            </h2>
            <p className="mt-3 max-w-2xl leading-7">
              Tell us the shop type, the region, and the series. PanPan Auto replies with the sample and wholesale
              next step. The promised response time is TBD and will be written here and on the inquiry page before it
              is treated as a commitment. You can also call <a className="font-semibold underline" href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact/" className="rounded-full bg-navy-950 px-5 py-3 text-sm font-semibold text-white">
              Submit an inquiry
            </Link>
            <Link href="/wholesale/" className="rounded-full border border-navy-950 px-5 py-3 text-sm font-semibold">
              Wholesale and dealers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
