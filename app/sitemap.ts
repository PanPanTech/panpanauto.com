import type { MetadataRoute } from "next";
import { docs } from "@/lib/docs";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/contact/", ...Object.values(docs).map((doc) => doc.path)];
  const unique = Array.from(new Set(paths));
  return unique.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "/" || path === "/contact/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/contact/" ? 0.9 : 0.6,
  }));
}
