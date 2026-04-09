/**
 * Optional: set CERT_DATA_URL to a raw JSON URL you control, then run:
 *   npm run sync:certs
 * Writes to data/certifications.json (same shape as repo file).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const url = process.env.CERT_DATA_URL;
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outPath = join(root, "data/certifications.json");

if (!url) {
  console.error(
    "CERT_DATA_URL is not set. Example:\n  CERT_DATA_URL=https://raw.githubusercontent.com/.../certifications.json npm run sync:certs",
  );
  process.exit(1);
}

const res = await fetch(url);
if (!res.ok) {
  console.error("Fetch failed:", res.status, res.statusText);
  process.exit(1);
}
const text = await res.text();
JSON.parse(text);
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(JSON.parse(text), null, 2), "utf8");
console.log("Wrote", outPath);
