import type { Certification } from "@/lib/cert-schema";

export function computeWeightedScore(
  scores: Record<string, number>,
  categories: Certification["categories"],
): number {
  let total = 0;
  for (const [name, weight] of Object.entries(categories)) {
    const v = scores[name];
    if (v === undefined || Number.isNaN(v)) continue;
    total += v * weight * 0.01;
  }
  return Math.round(total);
}

export function scorePasses(
  finalScore: number,
  passingScore: number,
): boolean {
  return finalScore >= passingScore;
}

/** Pools used by `messageForScore` (exported for tests). */
export const ENCOURAGEMENT_PASS = [
  "Woohoo! You passed.",
  "Nice work — you cleared the bar.",
  "That's a pass on this estimate. Celebrate a little!",
  "You did it! This estimate puts you over the line.",
  "Passing territory. Well earned!",
  "Yes! Above the passing score in this estimate.",
  "Outstanding — you're in passing range here.",
  "That'll do nicely. Pass secured (by this estimate).",
  "You made it across. Take the win!",
  "Certified energy — you're above passing here.",
  "On the right side of the line. Keep it up!",
  "Blueprint met — at least in this estimate. Nice!",
] as const;

export const ENCOURAGEMENT_DIFF_LT_5 = [
  "Almost! Keep trying.",
  "So close — one more focused study push could do it.",
  "You're knocking on the door. Don't walk away now!",
  "Inches away. You've almost got this.",
  "Tiny gap — another pass through weak spots may flip it.",
  "Nearly there! Momentum is on your side.",
  "Just shy — the hardest climb is often the last few points.",
  "Almost passing — polish the rough edges and retry.",
  "You're in striking distance. Stay consistent.",
  "This close hurts — channel it into one more round of prep.",
  "The finish line moved a little; you're still right there.",
  "A little more depth where it counts — that's the lever.",
] as const;

export const ENCOURAGEMENT_DIFF_LT_10 = [
  "Keep studying! You'll get it next time.",
  "Still in the fight — keep the momentum.",
  "Solid base; now sharpen where the blueprint is heaviest.",
  "Next attempt can be the one — stay steady.",
  "Progress counts. Double down on the biggest weights.",
  "Closer than it feels on a bad day. Stay the course.",
  "Another focused block of study and you're in business.",
  "Keep going — exams reward persistence.",
  "Turn those mid-tier topics into strengths.",
  "Review beats regret — schedule the time.",
  "You've closed gaps before. This one's next.",
  "Mock + guides + sleep — boring and effective.",
] as const;

export const ENCOURAGEMENT_DIFF_LT_15 = [
  "Time to bust out the study guides.",
  "Back to the blueprint — aim at the heavy sections first.",
  "Plan study blocks; you've got ground to make up.",
  "Go deeper where the score dipped — that's your ROI.",
  "Official materials + practice questions = a clearer path.",
  "Strategic review beats panic cramming every time.",
  "Weak domains are just to-do items with names.",
  "Let the exam outline be your syllabus.",
  "Slow, steady passes through the content add up.",
  "You're not starting over — you're retargeting.",
  "Notes, flashcards, trails — pick your weapon.",
  "One section at a time. The list gets shorter.",
] as const;

export const ENCOURAGEMENT_DIFF_LT_20 = [
  "Oof — rough estimate, but you still got this next time.",
  "Bigger gap, but nothing focused study can't shrink.",
  "Treat this as a map: start with the biggest opportunities.",
  "Reset the plan and attack the highest-weight topics.",
  "Every expert was once a student — keep building.",
  "Use the breakdown: top of the list eats first.",
  "You've solved harder problems than a study schedule.",
  "Come back with a plan — the exam isn't going anywhere.",
  "Intensity in short bursts beats burnout marathons.",
  "Label the hard parts, then defeat them one by one.",
  "This number is today's weather, not your forecast.",
  "Courage is showing up again after a miss. You've got that.",
] as const;

export const ENCOURAGEMENT_DIFF_LT_25 = [
  "No big deal — practice makes perfect.",
  "This score is feedback, not a verdict on you.",
  "Breathe, plan, execute — you can close this gap.",
  "Small study wins daily beat one heroic all-nighter.",
  "Stack sessions like compound interest.",
  "You're allowed a reset. What matters is the next rep.",
  "Mocks, notes, repeat — boring is underrated.",
  "Every attempt teaches something — pocket the lesson.",
  "Progress loves a calendar entry. Make one.",
  "The trail is longer; it's still the same trail everyone walks.",
  "Be kind to yourself and strict about the next study hour.",
  "Humility + hustle is a strong combo. Deploy both.",
] as const;

export const ENCOURAGEMENT_DIFF_25_PLUS = [
  "Whatever you do, don't give up. You got this.",
  "The climb is longer, but it's still one step at a time.",
  "Big gap today — a different story after focused weeks.",
  "Master one topic, then the next. Momentum follows.",
  "You know more than a single number suggests.",
  "Study buddies, schedules, and breaks all count — use them.",
  "This estimate isn't the ceiling on what you can do.",
  "Future you cheers when present you doesn't quit.",
  "Slice the blueprint thin; eat it in order.",
  "Consistency beats drama — show up again tomorrow.",
  "Tough screen, soft landing: rest, then return with a plan.",
  "You're building a skill stack. This is one noisy data point.",
  "Replace 'I can't' with 'not yet' — then book the time.",
  "Water the roots (fundamentals); the score follows.",
  "Every pass story has a rough draft. Keep writing yours.",
] as const;

function pickEncouragement(
  messages: readonly string[],
  random: () => number,
): string {
  const i = Math.floor(random() * messages.length);
  return messages[Math.min(i, messages.length - 1)]!;
}

/**
 * Random encouragement for the score band. Uses `random` (default `Math.random`)
 * so callers/tests can inject a deterministic RNG.
 */
export function messageForScore(
  finalScore: number,
  passingScore: number,
  random: () => number = Math.random,
): string {
  if (finalScore >= passingScore) {
    return pickEncouragement(ENCOURAGEMENT_PASS, random);
  }
  const diff = Math.abs(finalScore - passingScore);
  if (diff < 5) return pickEncouragement(ENCOURAGEMENT_DIFF_LT_5, random);
  if (diff < 10) return pickEncouragement(ENCOURAGEMENT_DIFF_LT_10, random);
  if (diff < 15) return pickEncouragement(ENCOURAGEMENT_DIFF_LT_15, random);
  if (diff < 20) return pickEncouragement(ENCOURAGEMENT_DIFF_LT_20, random);
  if (diff < 25) return pickEncouragement(ENCOURAGEMENT_DIFF_LT_25, random);
  return pickEncouragement(ENCOURAGEMENT_DIFF_25_PLUS, random);
}

export type MoreStatRow = {
  categoryName: string;
  earnedRounded: number;
  weightRounded: number;
  dots: number;
  /** Exact points still available toward the final score if this section reached 100% (weight × (100 − score%) / 100). */
  weightedRoomToImprove: number;
};

/** Clamp section percentage for weighted room math (0–100). */
function clampSectionPercent(score: number): number {
  if (!Number.isFinite(score)) return 0;
  return Math.min(100, Math.max(0, score));
}

/**
 * Points left on the table for the weighted final score if this topic were maxed (100%),
 * using exam weight. Matches score × weight formula at any precision.
 */
export function weightedRoomToImprove(
  examWeightPercent: number,
  sectionScorePercent: number,
): number {
  const w = examWeightPercent;
  const s = clampSectionPercent(sectionScorePercent);
  return (w * (100 - s)) / 100;
}

export function buildMoreStatRows(
  scores: Record<string, number>,
  categories: Certification["categories"],
): MoreStatRow[] {
  const rows: MoreStatRow[] = [];
  for (const name of Object.keys(categories)) {
    const weight = categories[name];
    const score = scores[name] ?? 0;
    const earnedRounded = Math.round(score * weight * 0.01);
    const weightRounded = Math.round(weight);
    const dots = Math.max(0, weightRounded - earnedRounded);
    const room = weightedRoomToImprove(weight, score);
    rows.push({
      categoryName: name,
      earnedRounded,
      weightRounded,
      dots,
      weightedRoomToImprove: room,
    });
  }
  return rows;
}

export const MORE_STATS_EXPLANATION =
  "Each row shows your section % and that topic's exam weight; the bar reflects how much of the weight you're capturing. Topics are ordered by weighted room to improve: exam weight × (100% − your section %), i.e. exact points you could still gain toward the estimated final score by maxing that section.";
