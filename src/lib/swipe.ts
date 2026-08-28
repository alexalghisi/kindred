export type Decision = "like" | "pass";

/** Pixels of horizontal drag before the card commits. Large on purpose — desktop, not a phone. */
export const SWIPE_COMMIT_PX = 96;

export function isMatch(likesYou: boolean, decision: Decision): boolean {
  return decision === "like" && likesYou;
}

export function decisionFromDelta(dx: number): Decision | null {
  if (dx >= SWIPE_COMMIT_PX) return "like";
  if (dx <= -SWIPE_COMMIT_PX) return "pass";
  return null;
}
