import { create } from "zustand";
import { toast } from "sonner";
import { PROFILES, type Profile } from "@/lib/profiles";
import { isMatch, type Decision } from "@/lib/swipe";

export type DeckScreen = "deck" | "matches";

interface DeckState {
  screen: DeckScreen;
  index: number;
  matches: Profile[];
  setScreen: (screen: DeckScreen) => void;
  decide: (decision: Decision) => void;
  reset: () => void;
}

export const useDeckStore = create<DeckState>((set, get) => ({
  screen: "deck",
  index: 0,
  matches: [],

  setScreen: (screen) => set({ screen }),

  decide: (decision) => {
    const { index, matches } = get();
    const profile = PROFILES[index];
    if (profile === undefined) return;

    if (isMatch(profile.likesYou, decision)) {
      set({ matches: [...matches, profile], index: index + 1 });
      toast.success(`It's a match · ${profile.name}`);
      return;
    }

    set({ index: index + 1 });
    toast.success(decision === "like" ? "Liked" : "Passed");
  },

  reset: () => set({ index: 0, matches: [], screen: "deck" }),
}));
