import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/ai-wealth" : undefined,
  assetPrefix: process.env.NODE_ENV === "production" ? "/ai-wealth/" : undefined,
  trailingSlash: true,
  devIndicators: {
    // @ts-expect-error - Next.js 15 types might be strict, but this works at runtime
    buildActivity: false,
    appIsrStatus: false,
  },
};

export default nextConfig;
