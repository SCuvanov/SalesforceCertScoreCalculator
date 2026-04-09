import type { NextConfig } from "next";

const basePathEnv = process.env.NEXT_BASE_PATH?.trim();
const basePath =
  basePathEnv && basePathEnv !== "/"
    ? (basePathEnv.startsWith("/") ? basePathEnv : `/${basePathEnv}`)
    : undefined;

const nextConfig: NextConfig = {
  output: "export",
  env: {
    // Same as basePath, inlined for public asset URLs (e.g. /img/...) in static HTML.
    NEXT_PUBLIC_BASE_PATH: basePath ?? "",
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
