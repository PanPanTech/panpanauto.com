import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ISF PPF Wholesale | Auto Film — PanPan Auto",
    template: "%s | PanPan Auto",
  },
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: site.ogLocale,
    url: "/",
    siteName: site.name,
    title: "ISF PPF Wholesale | Auto Film — PanPan Auto",
    description: site.description,
    images: [
      {
        url: "/og/home.webp",
        width: 1200,
        height: 630,
        alt: "Xiaomi SU7 coastal reference photo used on PanPan Auto. Not a PanPan installation.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISF PPF Wholesale | Auto Film — PanPan Auto",
    description: site.description,
    images: ["/og/home.webp"],
  },
  robots: { index: true, follow: true },
};

const organizationId = `${site.url}/#organization`;

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "PanPan Auto",
      alternateName: ["PanPanTech", "panpanauto.com"],
      url: site.url,
      description:
        "PanPan Auto is a multi-brand authorized dealer and distributor of auto film and parts (ISF, NKODA, NANOLINK). It is not a factory website. ISF is the featured paint-protection brand.",
      brand: { "@type": "Brand", name: "PanPan Auto" },
      telephone: site.phoneDisplay,
      email: site.email,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phoneDisplay,
        email: site.email,
        contactType: "sales",
        availableLanguage: ["en", "zh-Hans"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "PanPan Auto",
      inLanguage: "en",
      publisher: { "@id": organizationId },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="min-h-screen font-sans">
        <JsonLd data={graph} />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
