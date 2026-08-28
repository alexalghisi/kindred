import { beforeEach, describe, expect, it, vi } from "vitest";
import { useDeckStore } from "./deckStore";
import { PROFILES } from "@/lib/profiles";

vi.mock("sonner", () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

beforeEach(() => {
  useDeckStore.setState({ screen: "deck", index: 0, matches: [] });
});

describe("decide", () => {
  it("matches Ioana who already likes you", () => {
    useDeckStore.getState().decide("like");
    expect(useDeckStore.getState().matches).toEqual([PROFILES[0]]);
    expect(useDeckStore.getState().index).toBe(1);
  });

  it("does not match Matei on a like", () => {
    useDeckStore.getState().decide("pass");
    useDeckStore.getState().decide("like");
    expect(useDeckStore.getState().matches).toEqual([]);
    expect(useDeckStore.getState().index).toBe(2);
  });
});
