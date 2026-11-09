import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;
