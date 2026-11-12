import type { FaqItem } from "@/components/FaqList";
import { site } from "@/lib/site";

export const homeFaqs: FaqItem[] = [
  {
    question: "What does PanPan Auto sell, and is it the official factory?",
    answer:
      "PanPan Auto (panpanauto.com) is a multi-brand authorized dealer and distributor of auto film and parts. The assortment includes ISF, NKODA, and NANOLINK (authorized dealer / distributor). The featured paint-protection brand is ISF, alongside window tint and related wholesale talks. We are not the ISF or NANOLINK factory website, and we are not a single-brand factory site. Factory capacity, patents, and global policy belong to the brand owners. Specifications, MOQ, lead time, and warranty stay TBD wherever they are not confirmed.",
  },
  {
    question: "How do I get a wholesale price or a sample?",
    answer:
      "Use the contact form and include your company name, role, country or region, the series you want, and an estimated volume. Quotes and sample policy are discussed from that inquiry. Sample fees and whether a sample can be credited against a later order are TBD. The wholesale page is the place to read the policy outline first.",
  },
  {
    question: "What should a shop or dealer do next?",
    answer:
      "Review the PPF and window-tint series, then leave an inquiry. If you want a regional dealership, also read the dealer application outline. Review timing and territory policy are TBD.",
  },
];

export const contactFaqs: FaqItem[] = [
  {
    question: "What is the MOQ?",
    answer:
      "Minimums can differ by series — clear PPF, color film, window tint, and the rest. The number is TBD. Put your first order or monthly volume in the form and we will reply with the MOQ and tier that apply to that category. The wholesale page is the policy outline.",
  },
  {
    question: "Can I request a sample first, and what does it cost?",
    answer:
      "Yes. Select Samples on the form, or open the contact page with the sample intent. Whether a sample is charged, who pays freight, and whether a later order can credit it are TBD and confirmed in the reply.",
  },
  {
    question: "How do you ship, and how long does it take?",
    answer:
      "Supported logistics, destination limits, and a typical lead time are TBD. Name the destination country or city and the timing you need in the message. We will describe the options we can actually offer for that lane.",
  },
  {
    question: "How soon will someone reply?",
    answer:
      `The target first response time is TBD. If you do not hear back, call ${site.phoneDisplay} or email ${site.email} and include your company name.`,
  },
];
