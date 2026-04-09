import type { NextConfig } from "next";

const basePathEnv = process.env.NEXT_BASE_PATH?.trim();
const basePath =
  basePathEnv && basePathEnv !== "/"
    ? (basePathEnv.startsWith("/") ? basePathEnv : `/${basePathEnv}`)
    : undefined;

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
