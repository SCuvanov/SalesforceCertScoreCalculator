import raw from "@/data/certifications.json";
import {
  certificationsArraySchema,
  type Certification,
} from "@/lib/cert-schema";

const parsed = certificationsArraySchema.parse(raw);

export function getCertifications(): Certification[] {
  return parsed;
}

export function getActiveCertifications(): Certification[] {
  return parsed.filter((c) => !c.retired);
}

export function getCertificationById(id: string): Certification | undefined {
  return parsed.find((c) => c.id === id);
}

const DEFAULT_CERTIFICATION_CANDIDATES = [
  "salesforce-associate",
  "platform-administrator",
  "platform-developer",
] as const;

export const DEFAULT_CERTIFICATION_ID =
  DEFAULT_CERTIFICATION_CANDIDATES.find((id) =>
    parsed.some((c) => c.id === id),
  ) ??
  parsed[0]?.id ??
  "";

export function buildRoleMap(
  certs: Certification[],
): Map<string, Certification[]> {
  const m = new Map<string, Certification[]>();
  for (const cert of certs) {
    if (cert.retired) continue;
    for (const role of cert.roles) {
      const list = m.get(role) ?? [];
      list.push(cert);
      m.set(role, list);
    }
  }
  for (const [, list] of m) {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }
  return new Map([...m.entries()].sort((a, b) => a[0].localeCompare(b[0])));
}

export function sortCertifications(certs: Certification[]): Certification[] {
  return [...certs].sort((a, b) => a.name.localeCompare(b.name));
}
