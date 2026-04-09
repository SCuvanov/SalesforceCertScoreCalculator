# Deployment

This project uses **static HTML export** (`output: "export"` in [`next.config.ts`](next.config.ts)). There is **no server runtime** and **no analytics** by default.

## Build

```bash
npm ci
npm run test
npm run build
```

The static site is emitted to the **`out/`** directory.

## Vercel / Netlify

Connect the repository and use the default Next.js preset. If you rely on static export only, set the publish directory to **`out`** when the host asks for it, or use a provider that runs `next build` and serves the export.

## GitHub Pages (project site)

If the site is served from a subpath (for example `https://username.github.io/SalesforceCertScoreCalculator/`), set **`basePath`** in `next.config.ts` to match the repository name and rebuild:

```ts
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/SalesforceCertScoreCalculator",
  assetPrefix: "/SalesforceCertScoreCalculator",
  images: { unoptimized: true },
};
```

Use **Actions** or **npm run build** locally, then publish the contents of **`out/`** to the `gh-pages` branch or Pages artifact.

## Canonical URL for Open Graph

Set **`NEXT_PUBLIC_SITE_URL`** to your production origin before build so metadata and social cards use the correct absolute URLs:

```bash
NEXT_PUBLIC_SITE_URL=https://your.domain npm run build
```

If unset, [`app/layout.tsx`](app/layout.tsx) falls back to `https://scuvanov.com`; change that default if your canonical host differs.

## Privacy

The app does not load third-party analytics. If you add measurement later, document it in this file and in the user-facing privacy stance.
