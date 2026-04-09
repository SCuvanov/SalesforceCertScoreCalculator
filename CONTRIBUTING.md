# Contributing

## Certification data

Topic weights, passing scores, and question counts must match Salesforce’s **official exam guides**, linked from the [Trailhead credentials overview](https://trailhead.salesforce.com/en/credentials/overview/).

1. Open the official guide for the credential you are adding or updating.
2. Edit [`data/certifications.json`](data/certifications.json). Each entry must satisfy the Zod schema in [`lib/cert-schema.ts`](lib/cert-schema.ts):
   - `categories` values must sum to **100**.
   - Set `officialExamGuideUrl` to the specific exam guide URL when you have it (the overview link is a fallback).
   - Optional: `dataVerifiedDate`, `examGuideVersion`, `retired`, `replacedBy`.
3. Add a short note to [`data/CHANGELOG.md`](data/CHANGELOG.md) describing what changed and which guide you used.

There is **no official Salesforce API** for this data. Do not scrape Trailhead or PDFs in automated builds without human review.

## Optional JSON sync

To overwrite `data/certifications.json` from a URL you control (for example a raw GitHub file):

```bash
CERT_DATA_URL=https://example.com/certifications.json npm run sync:certs
```

Validate the result (build and tests) before committing.

## Regenerating JSON from the legacy script

If the old `legacy/resources/js/index.js` format is still the source of truth:

```bash
npm run extract:certs
```

This overwrites `data/certifications.json` with overview URLs and migration notes; adjust per-cert guide URLs afterward.

## Internationalization

Additional locales are **not** in scope for the initial app; see the project plan if that becomes a priority.
