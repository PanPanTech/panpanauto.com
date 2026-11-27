import fs from "node:fs";
import path from "node:path";

// Long-form guides live as Markdown in content/blog/<slug>.md and are rendered at
// build time (static export). Supported syntax: front matter, #/##/### headings,
// paragraphs, pipe tables, "- " lists, [links](url) and **bold**.

export type Inline = { text: string; href?: string; bold?: boolean };
export type Block =
  | { type: "h2" | "h3"; text: string; id: string }
  | { type: "p"; inlines: Inline[] }
  | { type: "ul"; items: Inline[][] }
  | { type: "table"; head: Inline[][]; rows: Inline[][][] };

export type Post = {
  slug: string;
  path: string;
  title: string;
  description: string;
  published: string;
  summary: string;
  blocks: Block[];
  faqs: { question: string; answer: string }[];
};

const dir = path.join(process.cwd(), "content", "blog");
const SITE_ORIGIN = /^https?:\/\/(www\.)?panpanauto\.com/;

// Publish order follows the 8-week schedule (PanPan Auto 网站优化与博客排期.xlsx).
const order = [
  "wholesale-ppf-quote-checklist",
  "clear-gloss-vs-matte-ppf",
  "window-tint-vlt-tser-irr",
  "ppf-sample-evaluation",
  "ppf-wholesale-landed-cost",
  "partner-shop-ppf-installation-case",
];
const PUBLISHED = "2026-11-24";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function parseInline(source: string): Inline[] {
  const out: Inline[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  for (let m = re.exec(source); m; m = re.exec(source)) {
    if (m.index > last) out.push({ text: source.slice(last, m.index) });
    if (m[1] !== undefined) out.push({ text: m[1], href: m[2].replace(SITE_ORIGIN, "") || "/" });
    else out.push({ text: m[3], bold: true });
    last = m.index + m[0].length;
  }
  if (last < source.length) out.push({ text: source.slice(last) });
  return out;
}

function plain(inlines: Inline[]) {
  return inlines.map((i) => i.text).join("");
}

function cells(line: string) {
  return line.trim().replace(/^\||\|$/g, "").split("|").map((c) => parseInline(c.trim()));
}

function parse(slug: string, raw: string): Post {
  const text = raw.replace(/\r\n/g, "\n");
  const fm = /^---\n([\s\S]*?)\n---\n/.exec(text);
  const meta: Record<string, string> = {};
  for (const line of fm?.[1].split("\n") ?? []) {
    const m = /^(\w+):\s*"?(.*?)"?\s*$/.exec(line);
    if (m) meta[m[1]] = m[2];
  }
  const lines = text.slice(fm ? fm[0].length : 0).split("\n");
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.startsWith("# ")) {
      i++;
      continue;
    }
    const h = /^(##|###)\s+(.*)$/.exec(line);
    if (h) {
      blocks.push({ type: h[1] === "##" ? "h2" : "h3", text: h[2].trim(), id: slugify(h[2]) });
      i++;
      continue;
    }
    if (line.trim().startsWith("|")) {
      const rows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) rows.push(lines[i++]);
      const body = rows.slice(2).map(cells);
      blocks.push({ type: "table", head: cells(rows[0]), rows: body });
      continue;
    }
    if (/^[-*] /.test(line)) {
      const items: Inline[][] = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) items.push(parseInline(lines[i++].slice(2).trim()));
      blocks.push({ type: "ul", items });
      continue;
    }
    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#|\||[-*] )/.test(lines[i])) para.push(lines[i++].trim());
    blocks.push({ type: "p", inlines: parseInline(para.join(" ")) });
  }

  // FAQ: ### questions under "## Frequently asked questions", answer = following paragraphs.
  const faqs: Post["faqs"] = [];
  const start = blocks.findIndex((b) => b.type === "h2" && /frequently asked/i.test(b.text));
  if (start >= 0) {
    for (let j = start + 1; j < blocks.length; j++) {
      const b = blocks[j];
      if (b.type === "h2") break;
      if (b.type === "h3") faqs.push({ question: b.text, answer: "" });
      else if (b.type === "p" && faqs.length) {
        const last = faqs[faqs.length - 1];
        last.answer = [last.answer, plain(b.inlines)].filter(Boolean).join(" ");
      }
    }
  }

  const first = blocks.find((b): b is Extract<Block, { type: "p" }> => b.type === "p");
  return {
    slug,
    path: `/blog/${slug}/`,
    title: meta.title ?? slug,
    description: meta.description ?? "",
    published: PUBLISHED,
    summary: first ? plain(first.inlines) : "",
    blocks,
    faqs,
  };
}

let cache: Post[] | null = null;

export function getPosts(): Post[] {
  if (cache) return cache;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const posts = files.map((f) => parse(f.replace(/\.md$/, ""), fs.readFileSync(path.join(dir, f), "utf8")));
  posts.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
  cache = posts;
  return posts;
}

export function getPost(slug: string) {
  return getPosts().find((p) => p.slug === slug);
}
