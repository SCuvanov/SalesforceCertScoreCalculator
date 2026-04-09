import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const certCode = readFileSync(join(root, "legacy/resources/js/certification.js"), "utf8");
const indexFull = readFileSync(join(root, "legacy/resources/js/index.js"), "utf8");

const cutoff = indexFull.indexOf("// Sort all the Certifications");
let indexCode = indexFull.slice(0, cutoff);
indexCode = indexCode.replace("let certificationMap", "var certificationMap");

const TRAILHEAD_OVERVIEW =
  "https://trailhead.salesforce.com/en/credentials/overview/";

const sandbox = {
  Map,
  console,
  Certification: null,
};
vm.createContext(sandbox);
vm.runInContext(certCode, sandbox);
vm.runInContext(indexCode, sandbox);

const certificationMap = sandbox.certificationMap;
if (!certificationMap) {
  throw new Error("certificationMap not defined");
}

const sorted = [...certificationMap.entries()].sort((a, b) =>
  a[0].localeCompare(b[0]),
);

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const out = sorted.map(([key, cert]) => {
  const categories = {};
  for (const [k, v] of cert.categories) {
    categories[k] = v;
  }
  return {
    id: slugify(key),
    name: cert.name,
    questionCount: cert.questionCount,
    passingScore: cert.passingScore,
    roles: cert.roles,
    categories,
    officialExamGuideUrl: TRAILHEAD_OVERVIEW,
    dataVerifiedDate: "2026-04-08",
    examGuideVersion: "Migrated from legacy app; update per-cert URLs in data/certifications.json",
  };
});

mkdirSync(join(root, "data"), { recursive: true });
writeFileSync(
  join(root, "data/certifications.json"),
  JSON.stringify(out, null, 2),
  "utf8",
);
console.log("Wrote", out.length, "certifications");
