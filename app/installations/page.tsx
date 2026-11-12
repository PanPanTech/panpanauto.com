import type { Metadata } from "next";
import Link from "next/link";
import { BayVideos } from "@/components/BayVideos";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { InstallationPhoto } from "@/components/InstallationPhoto";
import { JsonLd } from "@/components/JsonLd";
import {
  bayVideos,
  heroInstallation,
  installationCases,
  installationSrc,
  installationsPath,
} from "@/lib/installations";
import { absoluteUrl, site } from "@/lib/site";

const title = "Shop installations";
const description =
  "Finished vehicles and short process clips from a partner installation shop. PanPan Auto is the wholesale channel, not the retail shop. Film series is not labeled.";

const crumbs = [
  { href: "/", label: "Home" },
  { label: "Shop installations" },
];

const hero = heroInstallation.photo;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: installationsPath },
  openGraph: {
    title: `${title} | PanPan Auto`,
    description,
    url: installationsPath,
    images: [
      {
        url: installationSrc(hero),
        width: hero.width,
        height: hero.height,
        alt: hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | PanPan Auto`,
    description,
    images: [installationSrc(hero)],
  },
};

export default function InstallationsPage() {
  const images = installationCases.flatMap((item) => item.photos);
  const videos = bayVideos.map((video) => ({
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: absoluteUrl(video.poster),
    contentUrl: absoluteUrl(video.src),
    width: video.width,
    height: video.height,
    encodingFormat: "video/mp4",
  }));
  const gallery = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: title,
    description,
    url: absoluteUrl(installationsPath),
    inLanguage: "en",
    isPartOf: { "@id": `${site.url}/#website` },
    publisher: { "@id": `${site.url}/#organization` },
    image: images.map((item) => ({
      "@type": "ImageObject",
      contentUrl: absoluteUrl(installationSrc(item)),
      width: item.width,
      height: item.height,
      caption: `${item.vehicle}. ${item.caption}`,
      description: item.alt,
    })),
    video: videos,
  };

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbJsonLd(crumbs) }} />
      <JsonLd data={gallery} />
      <article className="mx-auto max-w-page px-4 py-10 sm:px-6 md:py-14">
        <Breadcrumbs items={crumbs} />
        <header className="mt-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">Partner shop</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy-950 md:text-5xl">{title}</h1>
          <p className="prose-measure mt-4 text-lg leading-8 text-ink/80">
            These photographs were taken at a partner installation shop. They show finished vehicles in the bay.
            PanPan Auto is the wholesale dealer and distributor, not the retail shop in these frames, and not the
            factory.
          </p>
          <p className="prose-measure mt-4 leading-7 text-ink/80">
            No film brand, series, or SKU is named on a car here. The stills record the vehicle and the setting.
          </p>
        </header>

        <InstallationPhoto
          photo={hero}
          priority
          className="mt-8 overflow-hidden rounded-2xl bg-white"
          sizes="(min-width: 1152px) 1152px, 100vw"
        />

        <div className="mt-14 space-y-14">
          {installationCases.map((item) => {
            const singlePortrait = item.photos.length === 1 && item.photos[0].height > item.photos[0].width;
            return (
              <section key={item.id} id={item.id} aria-labelledby={`${item.id}-heading`} className="scroll-mt-24">
                <h2 id={`${item.id}-heading`} className="text-2xl font-semibold tracking-tight text-navy-950">
                  {item.title}
                </h2>
                <p className="prose-measure mt-3 leading-7 text-ink/80">{item.summary}</p>
                <ul className={singlePortrait ? "mt-6 max-w-xl" : "mt-6 grid gap-6 md:grid-cols-2"}>
                  {item.photos.map((itemPhoto) => (
                    <li key={itemPhoto.file} className="overflow-hidden rounded-2xl border border-line bg-white p-3">
                      <InstallationPhoto
                        photo={itemPhoto}
                        sizes={
                          singlePortrait
                            ? "(min-width: 768px) 576px, 100vw"
                            : "(min-width: 768px) 540px, 100vw"
                        }
                      />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <BayVideos />

        <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl bg-navy-900 px-5 py-6 text-paper">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold">Ask about the wholesale assortment</h2>
            <p className="mt-1 text-sm leading-6 text-paper/75">
              Quotes, samples, and dealer talks use the existing inquiry paths. Email {site.email}. Call{" "}
              {site.phoneDisplay}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact/" className="rounded-full bg-brass-bright px-4 py-2 text-sm font-semibold text-navy-950">
              Submit an inquiry
            </Link>
            <Link href="/wholesale/" className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold">
              Wholesale policy
            </Link>
            <Link href="/dealers/apply/" className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold">
              Dealer application
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
