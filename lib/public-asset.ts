/**
 * Path to a file in `public/` when the app may be served under `basePath`
 * (e.g. GitHub Pages project sites). Mirrors `NEXT_PUBLIC_BASE_PATH` from `next.config.ts`.
 */
export function publicAsset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
