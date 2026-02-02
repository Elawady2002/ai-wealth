import type { NextConfig } from "next";

// Use basePath only for GitHub Pages, not for Vercel
const isGitHubPages = process.env.NODE_ENV === "production" && !process.env.VERCEL;

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/ai-wealth" : undefined,
  assetPrefix: isGitHubPages ? "/ai-wealth/" : undefined,
  trailingSlash: true,
  devIndicators: {
    // @ts-expect-error - Next.js 15 types might be strict, but this works at runtime
    buildActivity: false,
    appIsrStatus: false,
  },
};

export default nextConfig;
