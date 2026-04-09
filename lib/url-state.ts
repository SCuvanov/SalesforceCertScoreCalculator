const MAX_URL_LENGTH = 1800;

export function encodeScoresPayload(scores: Record<string, number>): string {
  const json = JSON.stringify(scores);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  const base64 = btoa(binary);
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodeScoresPayload(encoded: string): Record<string, number> | null {
  try {
    let b64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    const pad = b64.length % 4;
    if (pad) b64 += "=".repeat(4 - pad);
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const json = new TextDecoder().decode(bytes);
    const parsed = JSON.parse(json) as unknown;
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
      return null;
    }
    const out: Record<string, number> = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (typeof v === "number" && !Number.isNaN(v)) out[k] = v;
    }
    return out;
  } catch {
    return null;
  }
}

export function wouldUrlBeTooLong(pathWithQuery: string): boolean {
  return pathWithQuery.length > MAX_URL_LENGTH;
}
