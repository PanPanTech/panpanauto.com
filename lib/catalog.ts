import type { ShotId } from "@/lib/vehicles";

export type SeriesCard = {
  href: string;
  name: string;
  blurb: string;
  shot: ShotId;
};

export const ppfSeries: SeriesCard[] = [
  {
    href: "/products/ppf/clear/",
    name: "Clear gloss PPF",
    blurb: "Clear gloss paint protection — the usual first line for a shop’s base stock.",
    shot: "su7Coast",
  },
  {
    href: "/products/ppf/matte/",
    name: "Matte / satin PPF",
    blurb: "Matte protection for shops that also need a quieter surface finish.",
    shot: "yu7Silhouette",
  },
  {
    href: "/products/ppf/color/",
    name: "Color PPF",
    blurb: "Colored TPU protection film. Real-paint and diamond lines depend on the authorized assortment.",
    shot: "yu7Showroom",
  },
  {
    href: "/products/ppf/tpu/",
    name: "TPU PPF",
    blurb: "The material story: how to choose a TPU paint protection film without inventing a spec sheet.",
    shot: "yu7Aurora",
  },
];

export const tintSeries: SeriesCard[] = [
  {
    href: "/products/window-tint/nano-ceramic/",
    name: "Nano-ceramic window tint",
    blurb: "Ceramic heat-rejection tint — a core candidate for a shop’s window-film shelf.",
    shot: "cabinDay",
  },
  {
    href: "/products/window-tint/photochromic/",
    name: "Photochromic window tint",
    blurb: "Photochromic film for special applications. Service life and other parameters are TBD.",
    shot: "yu7Dusk",
  },
];

export const featuredSeries: SeriesCard[] = [...ppfSeries, ...tintSeries];
