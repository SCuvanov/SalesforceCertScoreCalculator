import { describe, expect, it } from "vitest";
import {
  ENCOURAGEMENT_DIFF_25_PLUS,
  ENCOURAGEMENT_DIFF_LT_10,
  ENCOURAGEMENT_DIFF_LT_15,
  ENCOURAGEMENT_DIFF_LT_20,
  ENCOURAGEMENT_DIFF_LT_25,
  ENCOURAGEMENT_DIFF_LT_5,
  ENCOURAGEMENT_PASS,
  buildMoreStatRows,
  computeWeightedScore,
  messageForScore,
  scorePasses,
  weightedRoomToImprove,
} from "./scoring";

describe("computeWeightedScore", () => {
  it("matches legacy weighted sum and rounding", () => {
    const categories = {
      A: 50,
      B: 50,
    };
    expect(
      computeWeightedScore({ A: 80, B: 60 }, categories),
    ).toBe(Math.round(80 * 0.5 + 60 * 0.5));
    expect(computeWeightedScore({ A: 73, B: 82 }, categories)).toBe(78);
  });
});

describe("scorePasses", () => {
  it("is true at or above passing score", () => {
    expect(scorePasses(65, 65)).toBe(true);
    expect(scorePasses(70, 65)).toBe(true);
  });

  it("is false below passing score", () => {
    expect(scorePasses(64, 65)).toBe(false);
  });
});

function rngPickingIndex(i: number, length: number): () => number {
  return () => (i + 0.5) / length;
}

describe("messageForScore", () => {
  it("returns pass messages from pool when at or above passing", () => {
    for (let i = 0; i < ENCOURAGEMENT_PASS.length; i++) {
      expect(
        messageForScore(65, 65, rngPickingIndex(i, ENCOURAGEMENT_PASS.length)),
      ).toBe(ENCOURAGEMENT_PASS[i]);
      expect(
        messageForScore(70, 65, rngPickingIndex(i, ENCOURAGEMENT_PASS.length)),
      ).toBe(ENCOURAGEMENT_PASS[i]);
    }
  });

  it("uses difference bands below passing (each pool reachable)", () => {
    const cases: { score: number; pool: readonly string[] }[] = [
      { score: 64, pool: ENCOURAGEMENT_DIFF_LT_5 },
      { score: 60, pool: ENCOURAGEMENT_DIFF_LT_10 },
      { score: 55, pool: ENCOURAGEMENT_DIFF_LT_15 },
      { score: 50, pool: ENCOURAGEMENT_DIFF_LT_20 },
      { score: 45, pool: ENCOURAGEMENT_DIFF_LT_25 },
      { score: 30, pool: ENCOURAGEMENT_DIFF_25_PLUS },
    ];
    for (const { score, pool } of cases) {
      for (let i = 0; i < pool.length; i++) {
        expect(
          messageForScore(score, 65, rngPickingIndex(i, pool.length)),
        ).toBe(pool[i]);
      }
    }
  });
});

describe("weightedRoomToImprove", () => {
  it("is weight times (100 minus score) percent", () => {
    expect(weightedRoomToImprove(20, 50)).toBe(10);
    expect(weightedRoomToImprove(20, 49)).toBeCloseTo(10.2);
    expect(weightedRoomToImprove(20, 51)).toBeCloseTo(9.8);
  });
});

describe("buildMoreStatRows", () => {
  it("matches legacy dot math for integer weights", () => {
    const categories = { Topic: 20 };
    const scores = { Topic: 50 };
    const [row] = buildMoreStatRows(scores, categories);
    expect(row.earnedRounded).toBe(10);
    expect(row.weightRounded).toBe(20);
    expect(row.dots).toBe(10);
    expect(row.weightedRoomToImprove).toBe(10);
  });

  it("orders by weighted room when integer dots tie", () => {
    const categories = { A: 20, B: 20 };
    const scores = { A: 49, B: 51 };
    const rows = buildMoreStatRows(scores, categories);
    const sorted = [...rows].sort(
      (a, b) =>
        b.weightedRoomToImprove - a.weightedRoomToImprove ||
        a.categoryName.localeCompare(b.categoryName),
    );
    expect(rows[0].dots).toBe(rows[1].dots);
    expect(sorted[0].categoryName).toBe("A");
    expect(sorted[1].categoryName).toBe("B");
    expect(sorted[0].weightedRoomToImprove).toBeGreaterThan(
      sorted[1].weightedRoomToImprove,
    );
  });
});
