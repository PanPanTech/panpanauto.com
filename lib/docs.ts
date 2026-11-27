import { ppfSeries, tintSeries, featuredSeries } from "@/lib/catalog";
import type { Doc } from "@/components/InteriorPage";
import { site } from "@/lib/site";

const home = { href: "/", label: "Home" };

export const docs = {
  products: {
    path: "/products/",
    eyebrow: "Index",
    title: "Film series index",
    description:
      "Phase 1 film index for PanPan Auto: ISF-led PPF series and window tint, sold wholesale to shops and dealers.",
    lede: "Phase 1 is a film catalog with a wholesale path. Open a series for the outline, then send an inquiry. Full comparison tables are not published until the figures are confirmed.",
    shot: "yu7Mountain",
    crumbs: [home, { label: "Film series index" }],
    paragraphs: [
      "PanPan Auto distributes paint protection film and window tint as an authorized multi-brand dealer. ISF is the featured PPF brand. NKODA and NANOLINK sit in the same portfolio. This index only routes you. It does not replace a written quote.",
    ],
    series: featuredSeries,
    links: [
      { href: "/products/ppf/", label: "PPF pillar" },
      { href: "/products/window-tint/", label: "Window tint pillar" },
      { href: "/contact/", label: "Inquiry" },
    ],
  },
  ppf: {
    path: "/products/ppf/",
    eyebrow: "PPF",
    title: "Paint protection film (PPF)",
    description:
      "Wholesale paint protection film from PanPan Auto: clear, matte, color, and TPU series for shops. Authorized dealer, not the factory.",
    lede: "Clear, matte, color, and TPU lines for full-vehicle or partial protection. Use this pillar to pick a series, then ask for a wholesale quote.",
    shot: "su7Coast",
    crumbs: [home, { href: "/products/", label: "Film" }, { label: "Paint protection film" }],
    paragraphs: [
      "Paint protection film (PPF, sometimes called invisible paint film) is a clear or colored film applied to automotive paint to reduce the effect of stone chips, scratches, and daily wear. It is not a ceramic coating, and it does not replace careful driving or maintenance.",
      "PanPan Auto supplies ISF and related NKODA / NANOLINK film as an authorized dealer and distributor. Thickness, warranty years, and self-healing claims are TBD until they are taken from the official brand page or a written confirmation. We do not publish unverified numbers here.",
    ],
    series: ppfSeries,
    links: [
      { href: "/blog/what-is-tpu-ppf/", label: "What is TPU PPF" },
      { href: "/wholesale/", label: "Wholesale policy" },
      { href: "/contact/", label: "Request a quote" },
    ],
  },
  clear: {
    path: "/products/ppf/clear/",
    eyebrow: "Clear gloss PPF",
    title: "Clear gloss PPF",
    description: "Clear gloss paint protection film for shop base stock. Wholesale inquiry via PanPan Auto. Specs TBD.",
    lede: "Clear gloss paint protection is the usual first roll on a shop shelf: protection without a color change.",
    shot: "su7Coast",
    crumbs: [home, { href: "/products/ppf/", label: "PPF" }, { label: "Clear gloss" }],
    paragraphs: [
      "This series is positioned as the base clear-gloss line. Finish name, roll sizes, and which ISF (or related) SKUs are in the current PanPan assortment are confirmed on inquiry. Nothing below is a published specification.",
    ],
    showSpecs: true,
    links: [
      { href: "/products/ppf/tpu/", label: "TPU material notes" },
      { href: "/products/ppf/matte/", label: "Matte / satin" },
      { href: "/contact/?intent=sample", label: "Ask for a sample" },
    ],
  },
  matte: {
    path: "/products/ppf/matte/",
    eyebrow: "Matte / satin PPF",
    title: "Matte / satin PPF",
    description: "Matte and satin paint protection film for shops that need a quieter finish. Wholesale via PanPan Auto. Specs TBD.",
    lede: "Matte and satin PPF cover protection jobs where the shop also wants a lower-gloss appearance.",
    shot: "yu7Silhouette",
    crumbs: [home, { href: "/products/ppf/", label: "PPF" }, { label: "Matte / satin" }],
    paragraphs: [
      "Treat matte film as its own series, not as clear gloss with a different photo. Care requirements and which authorized SKUs are stocked are TBD. The studio image is a Xiaomi EV reference for finish discussion, not a PanPan install.",
    ],
    showSpecs: true,
    links: [
      { href: "/products/ppf/clear/", label: "Clear gloss" },
      { href: "/products/ppf/color/", label: "Color PPF" },
      { href: "/contact/", label: "Inquiry" },
    ],
  },
  color: {
    path: "/products/ppf/color/",
    eyebrow: "Color PPF",
    title: "Color PPF",
    description: "Colored TPU protection film for wholesale shops. Real-paint and diamond lines depend on authorization. Specs TBD.",
    lede: "Color PPF is colored protection film. Real-paint, diamond, and other lines are only listed once the authorized assortment is confirmed.",
    shot: "yu7Showroom",
    crumbs: [home, { href: "/products/ppf/", label: "PPF" }, { label: "Color PPF" }],
    paragraphs: [
      "Do not quote a color line to a vehicle owner until the SKU, color code, and warranty are in writing. Those items are TBD on this page. For the difference between color PPF and a vinyl wrap, read the guide.",
    ],
    showSpecs: true,
    links: [
      { href: "/blog/ppf-vs-vinyl-wrap/", label: "Color PPF vs vinyl wrap" },
      { href: "/products/ppf/tpu/", label: "TPU PPF" },
      { href: "/contact/?intent=sample", label: "Sample request" },
    ],
  },
  tpu: {
    path: "/products/ppf/tpu/",
    eyebrow: "TPU PPF",
    title: "TPU paint protection film",
    description: "TPU paint protection film selection notes for wholesale shops. PanPan Auto is an authorized dealer. Material specs TBD.",
    lede: "TPU is the material family behind most premium paint protection film. This page explains the selection conversation, not a lab report.",
    shot: "yu7Aurora",
    crumbs: [home, { href: "/products/ppf/", label: "PPF" }, { label: "TPU PPF" }],
    paragraphs: [
      "Thermoplastic polyurethane film is distinct from PVC and TPH. Shops should confirm the material line on the authorized assortment before they promise a result. Thickness, top-coat behavior, and warranty years are TBD.",
      "PanPan Auto can introduce the ISF-led TPU lines it is authorized to sell. We do not speak as the factory.",
    ],
    showSpecs: true,
    links: [
      { href: "/blog/what-is-tpu-ppf/", label: "What is TPU PPF" },
      { href: "/products/ppf/clear/", label: "Clear gloss" },
      { href: "/contact/", label: "Inquiry" },
    ],
  },
  tint: {
    path: "/products/window-tint/",
    eyebrow: "Window tint",
    title: "Automotive window tint",
    description:
      "Wholesale automotive window tint from PanPan Auto: nano-ceramic and photochromic series for shops. VLT and heat-rejection figures TBD.",
    lede: "Nano-ceramic and photochromic window films, matched to a shop’s VLT and heat-rejection needs. Published optical numbers are TBD.",
    shot: "cabinYu7",
    crumbs: [home, { href: "/products/", label: "Film" }, { label: "Window tint" }],
    paragraphs: [
      "Window tint on this site means automotive glass film for heat and light control, supplied wholesale to installers. It is a separate pillar from paint protection film, and the two are often reordered together.",
      "VLT, infrared rejection, and warranty are TBD until taken from the brand’s current sheet. Do not reuse a competitor’s percentage on a quote.",
    ],
    series: tintSeries,
    links: [
      { href: "/products/ppf/", label: "PPF pillar" },
      { href: "/solutions/", label: "Shop programs" },
      { href: "/contact/", label: "Inquiry" },
    ],
  },
  nano: {
    path: "/products/window-tint/nano-ceramic/",
    eyebrow: "Nano-ceramic",
    title: "Nano-ceramic window tint",
    description: "Nano-ceramic automotive window tint for wholesale shop inventory. Optical specs TBD. PanPan Auto authorized dealer.",
    lede: "Ceramic window film is the main tint candidate for a shop that wants heat rejection without guessing a VLT from a photo.",
    shot: "cabinDay",
    crumbs: [home, { href: "/products/window-tint/", label: "Window tint" }, { label: "Nano-ceramic" }],
    paragraphs: [
      "Ask for the VLT steps you actually stock, the roll width, and the warranty that the brand will stand behind. All of those are TBD here. The cabin photo is a Xiaomi EV reference for glass discussion, not an installed PanPan film.",
    ],
    showSpecs: true,
    links: [
      { href: "/products/window-tint/photochromic/", label: "Photochromic" },
      { href: "/contact/?intent=sample", label: "Sample request" },
    ],
  },
  photochromic: {
    path: "/products/window-tint/photochromic/",
    eyebrow: "Photochromic",
    title: "Photochromic window tint",
    description: "Photochromic automotive window tint for special applications. Service life and specs TBD. Wholesale via PanPan Auto.",
    lede: "Photochromic film is a special-application series. Service life and the conditions that change its shade are TBD.",
    shot: "yu7Dusk",
    crumbs: [home, { href: "/products/window-tint/", label: "Window tint" }, { label: "Photochromic" }],
    paragraphs: [
      "Use an inquiry to confirm whether this series is in the current authorized assortment, which glass positions it suits, and how samples are handled. Do not infer performance from the dusk reference photo.",
    ],
    showSpecs: true,
    links: [
      { href: "/products/window-tint/nano-ceramic/", label: "Nano-ceramic" },
      { href: "/contact/?intent=sample", label: "Sample request" },
    ],
  },
  wholesale: {
    path: "/wholesale/",
    eyebrow: "Wholesale",
    title: "Wholesale and dealer partnership",
    description:
      "Wholesale policy outline for PanPan Auto: MOQ, samples, lead time, and dealer applications. Figures are TBD until authorization documents are published.",
    lede: "MOQ, samples, lead time, and the dealer application live in one place. Specific numbers are replaced with TBD until the authorization pack is ready.",
    shot: "n70",
    crumbs: [home, { label: "Wholesale" }],
    paragraphs: [
      "PanPan Auto sells to tint shops, restyling studios, and regional distributors. This is not a retail checkout. A quote follows an inquiry that names the company, the series, and a volume.",
      "Sample cost, whether a sample credits a later order, Incoterms, and territory exclusivity are TBD. Training and cut-software support depend on the brand authorization and the cooperation level, which are also TBD.",
      "If the conversation is a regional dealership rather than a repeat shop order, continue to the dealer application outline and keep the same company details on the inquiry form.",
    ],
    showSpecs: true,
    links: [
      { href: "/dealers/apply/", label: "Dealer application" },
      { href: "/contact/?intent=wholesale", label: "Wholesale inquiry" },
      { href: "/about/", label: "Authorization identity" },
    ],
  },
  about: {
    path: "/about/",
    eyebrow: "About",
    title: "About PanPan Auto",
    description:
      "PanPan Auto is a multi-brand authorized dealer and distributor for ISF, NKODA, and NANOLINK auto film. Not the factory.",
    lede: "PanPan Auto (panpanauto.com) is the B2B site operated by PanPanTech for authorized distribution of auto film and selected parts.",
    shot: "n90",
    crumbs: [home, { label: "About" }],
    paragraphs: [
      "We are a multi-brand authorized dealer and distributor. The portfolio includes ISF, NKODA, and NANOLINK. ISF is the featured paint-protection brand. Territory and product-line coverage follow written authorization and are TBD on this page until that document is published.",
      `We are the contact for wholesale quotes, samples, and partnership talks. The public phone is ${site.phoneDisplay}. Email is ${site.email}. WeChat, address, and hours are TBD.`,
      "We are not the ISF or NANOLINK factory website. We do not claim to be the source factory, and we do not publish unverified sales rankings, warranty years, MOQ, or lead times.",
    ],
    links: [
      { href: "/wholesale/", label: "Wholesale policy" },
      { href: "/contact/", label: "Contact" },
      { href: "/products/ppf/", label: "PPF pillar" },
      { href: "/brands/nanolink/", label: "NANOLINK dealer" },
    ],
  },
  dealers: {
    path: "/dealers/apply/",
    eyebrow: "Dealers",
    title: "Dealer application",
    description:
      "Outline for a PanPan Auto regional dealer application. Review timing and territory policy are TBD. Start with a company inquiry.",
    lede: "Regional distributors use this outline, then leave company details on the inquiry form. Review timing is TBD.",
    shot: "yu7Street",
    crumbs: [home, { href: "/wholesale/", label: "Wholesale" }, { label: "Dealer application" }],
    paragraphs: [
      "A useful application names the legal company, the territory you already serve, the film categories you want, and how you support installers. Empty requests and requests that ask us to impersonate the factory are not a fit.",
      "Exclusivity, training, and cut-film software depend on the brand’s authorization and the cooperation level. Those terms are TBD. We will not ask you to pay an unexplained fee before samples and terms are confirmed. Payment accounts are confirmed in writing and are TBD.",
    ],
    links: [
      { href: "/contact/?intent=dealer", label: "Start a dealer inquiry" },
      { href: "/wholesale/", label: "Wholesale policy" },
      { href: "/about/", label: "Who we are" },
    ],
  },
  solutions: {
    path: "/solutions/",
    eyebrow: "Solutions",
    title: "Supply programs for tint and restyling shops",
    description:
      "Starter, full-vehicle PPF, and tint-plus-PPF supply programs for shops. SKU lists and labor references are TBD.",
    lede: "Programs group the assortment by job so a shop is not buying one roll with no plan for the rest of the shelf. Starter SKUs and labor references are TBD.",
    shot: "n90",
    crumbs: [home, { label: "Shop programs" }],
    paragraphs: [
      "Starter: a base PPF roll, a core window-tint specification, and the direction of common install supplies. The exact list is TBD. It suits a new shop checking the brand and the process.",
      "Full-vehicle PPF: material for a full body, a front clip, or high-wear panels. Usage estimates are TBD and are discussed per project.",
      "Tint plus PPF: appearance protection and heat rejection across the same customer’s life with the shop, so a second visit is a planned reorder rather than a guess.",
    ],
    links: [
      { href: "/contact/?intent=starter", label: "Starter inquiry" },
      { href: "/contact/?intent=full-body", label: "Full-vehicle inquiry" },
      { href: "/products/ppf/", label: "PPF series" },
      { href: "/products/window-tint/", label: "Window tint" },
    ],
  },
  blog: {
    path: "/blog/",
    eyebrow: "Guides",
    title: "Selection and installation notes",
    description:
      "PanPan Auto buyer guides for PPF and window tint: wholesale quotes, landed cost, sample tests, VLT/TSER/IRR, and TPU PPF basics.",
    lede: "Practical guides for installation shops and distributors buying paint protection film and window tint wholesale.",
    shot: "yu7Mountain",
    crumbs: [home, { label: "Guides" }],
    paragraphs: [
      "Buyer guides for shops and distributors: how to request and compare wholesale PPF quotes, how to test a sample, how to read window tint specs, and what TPU PPF is. They avoid unpublished warranty years and thickness numbers.",
    ],
    links: [
      { href: "/blog/what-is-tpu-ppf/", label: "What is TPU PPF" },
      { href: "/blog/ppf-vs-vinyl-wrap/", label: "Color PPF vs vinyl wrap" },
      { href: "/products/ppf/", label: "PPF pillar" },
    ],
  },
  tpuGuide: {
    path: "/blog/what-is-tpu-ppf/",
    eyebrow: "Guide",
    title: "What is TPU PPF? Paint protection film explained",
    description:
      "TPU PPF is paint protection film made of thermoplastic polyurethane. How it differs from PVC, TPH, and ceramic coating, and what shops should check.",
    lede: "TPU PPF is paint protection film made from thermoplastic polyurethane: an elastic, clear or colored layer bonded over car paint to absorb stone chips, light scratches, and road abrasion. TPU stretches around curves and recovers its shape, which is why current premium PPF lines use it instead of PVC.",
    shot: "su7Coast",
    crumbs: [home, { href: "/blog/", label: "Guides" }, { label: "What is TPU PPF" }],
    paragraphs: [
      "Quick answer for shops: TPU is the film material, not a brand or a coating. A TPU PPF roll is usually a TPU base layer with an adhesive underneath and a top coat on the surface. The top coat decides gloss or matte finish, stain resistance, and whether light swirl marks fade with heat (often sold as self-healing). Whether a given SKU has a self-healing top coat is confirmed on its data sheet, not assumed.",
      "TPU vs PVC: PVC film costs less but is stiffer, harder to stretch around complex panels, and tends to yellow and harden sooner outdoors. TPU vs TPH: TPH is a PVC-based hybrid sold as a cheaper middle option; it does not have the same elasticity or recovery as TPU. TPU vs ceramic coating: a ceramic coating is a thin liquid-applied layer for gloss and easier washing. It does not stop stone chips. Many shops install PPF on high-impact panels and coat the rest.",
      "What to ask a supplier before stocking TPU PPF: the base material stated in writing (TPU, not TPH), total thickness and test method, top-coat type, finish, roll width and length, the written warranty terms for that SKU, and installation guidance. Thickness, self-healing behavior, and warranty years for the ISF, NKODA, and NANOLINK lines PanPan Auto supplies are TBD on this site and are confirmed per quote.",
      "PanPan Auto wholesales TPU paint protection film to installation shops and distributors as an authorized multi-brand dealer, not as the factory. Send the finish, roll size, quantity, and delivery city to get a quote.",
    ],
    links: [
      { href: "/products/ppf/tpu/", label: "TPU series" },
      { href: "/blog/clear-gloss-vs-matte-ppf/", label: "Clear gloss vs matte PPF" },
      { href: "/blog/wholesale-ppf-quote-checklist/", label: "Wholesale quote checklist" },
      { href: "/contact/?intent=wholesale", label: "Request a quote" },
    ],
  },
  vinylGuide: {
    path: "/blog/ppf-vs-vinyl-wrap/",
    eyebrow: "Guide",
    title: "Color PPF vs vinyl wrap",
    description:
      "How shops should separate colored paint protection film from a traditional vinyl color-change wrap. Warranty figures TBD.",
    lede: "Color PPF is a protection film that also carries color. A vinyl wrap is primarily a color-change film. They are not interchangeable quotes.",
    shot: "yu7Street",
    crumbs: [home, { href: "/blog/", label: "Guides" }, { label: "Color PPF vs vinyl wrap" }],
    paragraphs: [
      "Choose color PPF when the job needs paint protection and a color. Choose vinyl when the brief is an appearance change and a PPF specification was not requested. Real-paint and diamond PPF lines are only offered if they are on the authorized PanPan assortment, which is confirmed per inquiry.",
      "Do not borrow a warranty year from either category. Both are TBD here. This note is a Phase 1 draft; the last-reviewed date is TBD.",
    ],
    links: [
      { href: "/products/ppf/color/", label: "Color PPF" },
      { href: "/blog/what-is-tpu-ppf/", label: "What is TPU PPF" },
      { href: "/contact/", label: "Inquiry" },
    ],
  },
  nanolink: {
    path: "/brands/nanolink/",
    eyebrow: "NANOLINK",
    title: "NANOLINK PPF dealer for shops and distributors",
    description:
      "PanPan Auto is an authorized NANOLINK dealer and distributor. Wholesale NANOLINK paint protection film for installers and regional dealers.",
    lede: "PanPan Auto is an authorized dealer and distributor of NANOLINK auto film. Installation shops and regional distributors can buy NANOLINK paint protection film wholesale from us, request samples, and ask about becoming a NANOLINK installer in their area.",
    shot: "yu7Street",
    crumbs: [home, { href: "/products/", label: "Film" }, { label: "NANOLINK" }],
    paragraphs: [
      "Who this page is for: tint and detailing shops looking for a NANOLINK PPF supplier, distributors comparing NANOLINK dealers, and buyers searching for where NANOLINK film is sold outside China. PanPan Auto sells to businesses. We do not install film for vehicle owners and we are not the NANOLINK factory.",
      "Looking for a NANOLINK installer near you? PanPan Auto does not run retail bays. Send your city in an inquiry and we will tell you whether a partner shop we supply is in that area. Shops that want to offer NANOLINK film can apply as a trade buyer through the same form.",
      "What we supply: NANOLINK paint protection film within the series our written authorization covers, alongside ISF and NKODA film. The exact NANOLINK series, finishes, roll sizes, thickness, and warranty terms are TBD on this page and are confirmed per quote from the brand's current documents.",
      "How to order: send your company name, country, the NANOLINK series or finish you want, roll size, quantity, and delivery city. Samples, MOQ, lead time, and Incoterms are confirmed in the reply.",
    ],
    links: [
      { href: "/contact/?intent=wholesale", label: "Request a NANOLINK quote" },
      { href: "/dealers/apply/", label: "Dealer application" },
      { href: "/products/ppf/", label: "PPF series" },
      { href: "/about/", label: "About the authorization" },
    ],
  },
} as const satisfies Record<string, Doc>;

export type DocKey = keyof typeof docs;
