import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/ai-wealth" : undefined,
  assetPrefix: process.env.NODE_ENV === "production" ? "/ai-wealth/" : undefined,
  trailingSlash: true,
};

export default nextConfig;
