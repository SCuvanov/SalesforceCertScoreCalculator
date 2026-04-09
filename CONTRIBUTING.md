# Contributing

## Certification data

Topic weights, passing scores, and question counts must match Salesforce’s **official exam guides**, linked from the [Trailhead credentials overview](https://trailhead.salesforce.com/en/credentials/overview/).

1. Update [`data/certifications.txt`](data/certifications.txt) with role sections and Salesforce Help exam-guide URLs.
2. Run:

```bash
npm run refresh:certs
```

3. Review [`data/certifications.json`](data/certifications.json). Each entry must satisfy the Zod schema in [`lib/cert-schema.ts`](lib/cert-schema.ts):
   - `categories` values should sum to **100**.
   - `officialExamGuideUrl` should be the specific exam guide URL.
   - Optional: `dataVerifiedDate`, `examGuideVersion`, `retired`, `replacedBy`.
4. Add a short note to [`data/CHANGELOG.md`](data/CHANGELOG.md) describing what changed and which guide list you used.

There is **no official Salesforce API** for this data. Do not scrape Trailhead or PDFs in automated builds without human review.

## Internationalization

Additional locales are **not** in scope for the initial app; see the project plan if that becomes a priority.
