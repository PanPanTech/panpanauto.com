export const site = {
  name: "PanPan Auto",
  operator: "PanPanTech",
  domain: "panpanauto.com",
  url: "https://panpanauto.com",
  phoneDisplay: "+86 13925118851",
  phoneTel: "+8613925118851",
  email: "panda@panpanauto.com",
  wechat: "TBD",
  address: "TBD",
  hours: "TBD",
  locale: "en",
  ogLocale: "en_US",
  description:
    "PanPan Auto is an authorized multi-brand dealer for ISF, NKODA, and NANOLINK auto film. Wholesale PPF and window tint for shops — not a factory site.",
} as const;

export const brands = ["ISF", "NKODA", "NANOLINK"] as const;

export type NavItem = { href: string; label: string };

export const primaryNav: NavItem[] = [
  { href: "/products/ppf/", label: "PPF" },
  { href: "/products/window-tint/", label: "Window tint" },
  { href: "/wholesale/", label: "Wholesale" },
  { href: "/solutions/", label: "Solutions" },
  { href: "/installations/", label: "Installations" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Guides" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Film",
    links: [
      { href: "/products/ppf/", label: "Paint protection film" },
      { href: "/products/ppf/clear/", label: "Clear gloss PPF" },
      { href: "/products/ppf/matte/", label: "Matte / satin PPF" },
      { href: "/products/ppf/color/", label: "Color PPF" },
      { href: "/products/ppf/tpu/", label: "TPU PPF" },
      { href: "/products/window-tint/", label: "Window tint" },
      { href: "/products/window-tint/nano-ceramic/", label: "Nano-ceramic tint" },
      { href: "/products/window-tint/photochromic/", label: "Photochromic tint" },
    ],
  },
  {
    title: "Trade",
    links: [
      { href: "/wholesale/", label: "Wholesale policy" },
      { href: "/dealers/apply/", label: "Dealer application" },
      { href: "/solutions/", label: "Shop programs" },
      { href: "/installations/", label: "Shop installations" },
      { href: "/contact/", label: "Wholesale inquiry" },
      { href: "/about/", label: "About the authorization" },
    ],
  },
  {
    title: "Guides",
    links: [
      { href: "/blog/", label: "Guide index" },
      { href: "/blog/what-is-tpu-ppf/", label: "What is TPU PPF" },
      { href: "/blog/ppf-vs-vinyl-wrap/", label: "Color PPF vs vinyl wrap" },
      { href: "/products/", label: "Product index" },
    ],
  },
];

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalized}`;
}
