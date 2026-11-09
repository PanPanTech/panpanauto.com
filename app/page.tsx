import type { Metadata } from "next";
import { HomeView } from "@/components/HomeView";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "ISF PPF Wholesale | Auto Film — PanPan Auto" },
  description: site.description,
  alternates: {
    canonical: "/",
    languages: { en: "/", "x-default": "/" },
  },
  keywords: [
    "paint protection film wholesale",
    "ISF PPF dealer",
    "automotive window tint distributor",
    "PPF wholesale",
  ],
};

export default function HomePage() {
  return <HomeView />;
}
