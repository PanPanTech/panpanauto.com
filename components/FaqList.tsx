export type FaqItem = { question: string; answer: string };

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-4">
          <summary className="cursor-pointer list-none text-base font-semibold text-navy-950 marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              {item.question}
              <span aria-hidden className="mt-1 text-brass group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="prose-measure mt-3 text-sm leading-7 text-ink/80">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
