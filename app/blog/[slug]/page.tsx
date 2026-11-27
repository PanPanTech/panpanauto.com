import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { getPost, getPosts, type Inline } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: { absolute: post.title },
    description: post.description,
    alternates: { canonical: post.path },
    openGraph: { type: "article", title: post.title, description: post.description, url: post.path, publishedTime: post.published },
  };
}

function Text({ inlines }: { inlines: Inline[] }) {
  return (
    <>
      {inlines.map((item, index) => {
        if (item.bold) return <strong key={index}>{item.text}</strong>;
        if (!item.href) return <span key={index}>{item.text}</span>;
        if (item.href.startsWith("/") && !/\.(mp4|pdf)$/.test(item.href)) {
          return (
            <Link key={index} href={item.href} className="font-medium text-navy-900 underline decoration-brass underline-offset-4">
              {item.text}
            </Link>
          );
        }
        return (
          <a key={index} href={item.href} className="text-navy-900 underline decoration-line underline-offset-4" {...(item.href.startsWith("http") ? { rel: "noopener", target: "_blank" } : {})}>
            {item.text}
          </a>
        );
      })}
    </>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const crumbs = [{ href: "/", label: "Home" }, { href: "/blog/", label: "Guides" }, { label: post.title }];
  const graph: Record<string, unknown>[] = [
    breadcrumbJsonLd(crumbs),
    {
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.published,
      dateModified: post.published,
      mainEntityOfPage: absoluteUrl(post.path),
      author: { "@id": `${site.url}/#organization` },
      publisher: { "@id": `${site.url}/#organization` },
    },
  ];
  if (post.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />
      <article className="mx-auto max-w-page px-4 py-10 sm:px-6 md:py-14">
        <Breadcrumbs items={crumbs} />
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brass">Guide · {post.published}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-navy-950 md:text-5xl">{post.title}</h1>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-ink/85">
          {post.blocks.map((block, index) => {
            switch (block.type) {
              case "h2":
                return (
                  <h2 key={index} id={block.id} className="scroll-mt-24 pt-6 text-2xl font-semibold tracking-tight text-navy-950">
                    {block.text}
                  </h2>
                );
              case "h3":
                return (
                  <h3 key={index} id={block.id} className="scroll-mt-24 pt-2 text-lg font-semibold text-navy-950">
                    {block.text}
                  </h3>
                );
              case "p":
                return (
                  <p key={index} className={index === 0 ? "text-lg leading-8 text-ink" : undefined}>
                    <Text inlines={block.inlines} />
                  </p>
                );
              case "ul":
                return (
                  <ul key={index} className="list-disc space-y-2 pl-6">
                    {block.items.map((item, i) => (
                      <li key={i}>
                        <Text inlines={item} />
                      </li>
                    ))}
                  </ul>
                );
              case "table":
                return (
                  <div key={index} className="overflow-x-auto">
                    <table className="w-full min-w-[32rem] border-collapse text-sm leading-6">
                      <thead>
                        <tr className="border-b border-line text-left">
                          {block.head.map((cell, i) => (
                            <th key={i} className="py-2 pr-4 font-semibold align-bottom">
                              <Text inlines={cell} />
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, r) => (
                          <tr key={r} className="border-b border-line align-top">
                            {row.map((cell, i) => (
                              <td key={i} className="py-2 pr-4">
                                <Text inlines={cell} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
            }
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl bg-navy-900 px-5 py-6 text-paper">
          <div>
            <h2 className="text-xl font-semibold">Ask PanPan Auto for a wholesale quote</h2>
            <p className="mt-1 text-sm text-paper/75">
              Quotes, samples, and dealer talks use the same form. Call {site.phoneDisplay}.
            </p>
          </div>
          <Link href="/contact/?intent=wholesale" className="rounded-full bg-brass-bright px-4 py-2 text-sm font-semibold text-navy-950">
            Request a quote
          </Link>
        </div>
      </article>
    </>
  );
}
