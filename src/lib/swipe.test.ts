import { describe, expect, it } from "vitest";
import { decisionFromDelta, isMatch, SWIPE_COMMIT_PX } from "./swipe";

describe("isMatch", () => {
  it("is only a match when both sides like", () => {
    expect(isMatch(true, "like")).toBe(true);
    expect(isMatch(true, "pass")).toBe(false);
    expect(isMatch(false, "like")).toBe(false);
  });
});

describe("decisionFromDelta", () => {
  it("commits at the desktop threshold", () => {
    expect(decisionFromDelta(SWIPE_COMMIT_PX)).toBe("like");
    expect(decisionFromDelta(-SWIPE_COMMIT_PX)).toBe("pass");
    expect(decisionFromDelta(0)).toBeNull();
  });
});
