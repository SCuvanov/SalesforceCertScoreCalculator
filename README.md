# Salesforce Certification Score Checker

Next.js app that estimates a Salesforce certification score from **section percentages** you enter and **topic weights** stored in [`data/certifications.json`](data/certifications.json). This is **not** an official Salesforce tool.

## Scripts

| Command | Description |
| --------|-------------|
| `npm run dev` | Local development server |
| `npm run build` | Production build (static export to `out/`) |
| `npm run test` | Unit tests (Vitest) |
| `npm run lint` | ESLint |
| `npm run refresh:certs` | Scrape Salesforce Help exam guides from `data/certifications.txt` and update `data/certifications.json` |

See [DEPLOY.md](DEPLOY.md) for hosting and [CONTRIBUTING.md](CONTRIBUTING.md) for updating exam data.

## Refreshing certification data

1. Update [`data/certifications.txt`](data/certifications.txt) with role headers and Salesforce Help exam-guide URLs.
2. Run:

```bash
npm run refresh:certs
```

The refresh script:
- extracts certification name, passing score, and exam-outline category percentages,
- updates existing certifications by ID,
- adds missing certifications,
- sets `officialExamGuideUrl`, `dataVerifiedDate`, and `examGuideVersion`.
