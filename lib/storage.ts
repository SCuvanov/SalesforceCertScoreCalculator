import type { Certification } from "@/lib/cert-schema";

export const STORAGE_KEY = "salesforce-cert-calculator-v1";

export type PersistedCalculatorState = {
  certId: string;
  roleFilter: string;
  scores: Record<string, number>;
};

export function loadPersistedState(): Partial<PersistedCalculatorState> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as PersistedCalculatorState;
    if (typeof data.certId !== "string") return null;
    return data;
  } catch {
    return null;
  }
}

export function savePersistedState(state: PersistedCalculatorState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* quota or private mode */
  }
}

export function clearPersistedState(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function emptyScoresForCert(cert: Certification): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const k of Object.keys(cert.categories)) {
    scores[k] = 0;
  }
  return scores;
}
