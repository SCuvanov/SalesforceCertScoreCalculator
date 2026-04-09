import { describe, expect, it } from "vitest";
import { decodeScoresPayload, encodeScoresPayload } from "./url-state";

describe("url-state", () => {
  it("round-trips score payload", () => {
    const scores = {
      "Configuration and Setup": 72,
      "Object Manager and Lightning App Builder": 65,
    };
    const enc = encodeScoresPayload(scores);
    expect(decodeScoresPayload(enc)).toEqual(scores);
  });
});
