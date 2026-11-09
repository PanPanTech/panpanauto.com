import type { NextConfig } from "next";

// Static export for Cloudflare Pages. panpanauto.com DNS stays on Aliyun, so
// www is a CNAME to panpanauto.pages.dev. The inquiry POST handler lives in
// functions/api/inquiry.ts (Pages Functions are not part of this export).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
