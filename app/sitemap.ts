import type { MetadataRoute } from "next";
import { docs } from "@/lib/docs";
import { installationsPath } from "@/lib/installations";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/contact/", installationsPath, ...Object.values(docs).map((doc) => doc.path)];
  const unique = Array.from(new Set(paths));
  return unique.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "/" || path === "/contact/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/contact/" ? 0.9 : path === installationsPath ? 0.7 : 0.6,
  }));
}
