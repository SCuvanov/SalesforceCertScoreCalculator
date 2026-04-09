# Salesforce Certification Score Checker

Next.js app that estimates a Salesforce certification score from **section percentages** you enter and **topic weights** stored in [`data/certifications.json`](data/certifications.json). This is **not** an official Salesforce tool.

## Scripts

| Command | Description |
| --------|-------------|
| `npm run dev` | Local development server |
| `npm run build` | Production build (static export to `out/`) |
| `npm run test` | Unit tests (Vitest) |
| `npm run lint` | ESLint |
| `npm run extract:certs` | Regenerate JSON from `legacy/resources/js` (see CONTRIBUTING) |
| `npm run sync:certs` | Optional: set `CERT_DATA_URL` to fetch JSON you host |

See [DEPLOY.md](DEPLOY.md) for hosting and [CONTRIBUTING.md](CONTRIBUTING.md) for updating exam data.

The previous static site (HTML, Sass, vanilla JS) is preserved under [`legacy/`](legacy/).
