import { useEffect } from "react";
import { Toaster } from "sonner";
import { AuthorCredit } from "@/components/AuthorCredit";
import { MatchList } from "@/components/Deck/MatchList";
import { SwipeDeck } from "@/components/Deck/SwipeDeck";
import { WindowToolbar } from "@/components/Deck/WindowToolbar";
import { useDeckStore } from "@/store/deckStore";

export default function App() {
  const screen = useDeckStore((state) => state.screen);
  const decide = useDeckStore((state) => state.decide);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLElement) {
        const tag = event.target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || event.target.isContentEditable) return;
      }
      if (event.key === "ArrowRight") decide("like");
      if (event.key === "ArrowLeft") decide("pass");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [decide]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-desktop p-4 md:p-10">
      <Toaster richColors position="bottom-right" />
      <div
        data-testid="finder-window"
        className="flex h-[min(780px,85vh)] w-full max-w-6xl flex-col overflow-hidden rounded-[12px] border border-black/10 bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_24px_80px_rgba(0,0,0,0.28)]"
      >
        <WindowToolbar />
        <div className="flex min-h-0 flex-1 flex-col bg-card">
          {screen === "deck" ? <SwipeDeck /> : <MatchList />}
        </div>
      </div>
      <AuthorCredit />
    </div>
  );
}
