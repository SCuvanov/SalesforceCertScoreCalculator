import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const textPath = join(root, "data", "certifications.txt");
const jsonPath = join(root, "data", "certifications.json");

function toSalesforceRole(role) {
  if (!role) return "Salesforce Professional";
  if (/^salesforce\s+/i.test(role)) return role.trim();
  return `Salesforce ${role.trim()}`;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeName(examTitle) {
  return examTitle.replace(/^Salesforce Certified\s+/i, "").trim();
}

function parseCertificationsTxt(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const entries = [];
  let currentRole = null;

  for (const line of lines) {
    if (line.startsWith("- ")) {
      const url = line.slice(2).trim();
      if (!currentRole || !url) continue;
      entries.push({
        role: toSalesforceRole(currentRole),
        url,
      });
      continue;
    }

    currentRole = line;
  }

  return entries;
}

function extractExamData(pageText) {
  const text = pageText.replace(/\u00a0/g, " ");

  const aboutMatch =
    text.match(/About the ([^\n]+?) Exam/i) ||
    text.match(/([^\n]+?) Exam Guide/i);
  const fullExamName = aboutMatch?.[1]?.replace(/^the\s+/i, "").trim() ?? null;

  const questionCount = Number(
    (text.match(/Content:\s*(\d+)\s+multiple[- ]choice/i) ?? [])[1] ?? 60,
  );

  const passingScoreMatch = text.match(
    /Passing\s*score\s*:\s*(?:English version\s*)?(\d{1,3})%/i,
  );
  const passingScore = passingScoreMatch ? Number(passingScoreMatch[1]) : null;

  const categories = extractCategories(text);

  if (!fullExamName) return null;

  return {
    fullExamName,
    normalizedName: normalizeName(fullExamName),
    id: slugify(normalizeName(fullExamName)),
    questionCount,
    passingScore,
    categories,
  };
}

function extractCategories(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const categories = {};
  for (const line of lines) {
    if (/^Passing\s*score/i.test(line)) continue;
    if (/^Version\s+\d+/i.test(line)) continue;
    if (!/%/.test(line)) continue;

    // Exam outline rows consistently use this format.
    const match = line.match(/^(.+?):\s*(\d{1,3})%\s*$/);
    if (!match) continue;

    const category = match[1].trim();
    const weight = Number(match[2]);
    if (!category) continue;
    categories[category] = weight;
  }

  return categories;
}

function categoriesSum(categories) {
  return Object.values(categories).reduce((sum, value) => sum + value, 0);
}

async function scrapeEntries(entries) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const results = [];

  for (const entry of entries) {
    await page.goto(entry.url, {
      waitUntil: "domcontentloaded",
      timeout: 120000,
    });
    await page.waitForTimeout(7000);
    const text = await page.evaluate(() => document.body.innerText);
    const extracted = extractExamData(text);
    if (!extracted) continue;
    results.push({
      ...entry,
      ...extracted,
    });
  }

  await browser.close();
  return results;
}

function mergeIntoJson(scraped) {
  const today = new Date().toISOString().slice(0, 10);
  const byId = new Map();

  for (const row of scraped) {
    const rowCategorySum = categoriesSum(row.categories);
    const rowCategoriesAreValid =
      Object.keys(row.categories).length > 0 && rowCategorySum === 100;

    const current = byId.get(row.id);
    if (!current) {
      if (!rowCategoriesAreValid) {
        // Avoid introducing invalid data that would fail Zod validation.
        // Existing rows are preserved; new problematic rows are skipped.
        // eslint-disable-next-line no-console
        console.warn(
          `Skipping ${row.id}: category sum is ${rowCategorySum} (expected 100).`,
        );
        continue;
      }
      byId.set(row.id, {
        id: row.id,
        name: row.normalizedName,
        questionCount: row.questionCount,
        passingScore: row.passingScore ?? 65,
        roles: [row.role],
        categories: row.categories,
        officialExamGuideUrl: row.url,
        dataVerifiedDate: today,
        examGuideVersion: "Scraped from Salesforce Help exam guides",
      });
      continue;
    }

    current.roles = Array.from(new Set([...(current.roles ?? []), row.role]));
  }

  return [...byId.values()].sort((a, b) => a.id.localeCompare(b.id));
}

async function main() {
  const textData = readFileSync(textPath, "utf8");
  const entries = parseCertificationsTxt(textData);

  const scraped = await scrapeEntries(entries);
  const merged = mergeIntoJson(scraped);

  writeFileSync(jsonPath, JSON.stringify(merged, null, 2) + "\n", "utf8");
  console.log(`Refreshed ${scraped.length} exam guides.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
