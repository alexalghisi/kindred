import { Button } from "@/components/ui/button";
import { useDeckStore } from "@/store/deckStore";

export function WindowToolbar() {
  const screen = useDeckStore((state) => state.screen);
  const setScreen = useDeckStore((state) => state.setScreen);
  const reset = useDeckStore((state) => state.reset);
  const matchCount = useDeckStore((state) => state.matches.length);

  return (
    <header className="flex shrink-0 items-center gap-3 border-b border-black/5 bg-titlebar px-3 py-2">
      <div className="flex items-center gap-1.5" aria-hidden>
        <span className="h-3 w-3 rounded-full bg-[#FF5F57] ring-1 ring-black/10" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E] ring-1 ring-black/10" />
        <span className="h-3 w-3 rounded-full bg-[#28C840] ring-1 ring-black/10" />
      </div>
      <h1 className="flex-1 text-center text-[13px] font-semibold tracking-tight text-foreground/80">
        Kindred
      </h1>
      <div className="flex items-center gap-1">
        <Button
          variant={screen === "deck" ? "default" : "outline"}
          size="sm"
          className="h-7 rounded-md px-2 text-[12px]"
          onClick={() => setScreen("deck")}
          data-testid="nav-deck"
        >
          Deck
        </Button>
        <Button
          variant={screen === "matches" ? "default" : "outline"}
          size="sm"
          className="h-7 rounded-md px-2 text-[12px]"
          onClick={() => setScreen("matches")}
          data-testid="nav-matches"
        >
          Matches{matchCount > 0 ? ` ${String(matchCount)}` : ""}
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-7 rounded-md px-2 text-[12px]"
          onClick={reset}
          data-testid="button-redeal"
        >
          Redeal
        </Button>
      </div>
    </header>
  );
}
