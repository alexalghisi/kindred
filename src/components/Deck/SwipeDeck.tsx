import { useState, type PointerEvent } from "react";
import { Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILES } from "@/lib/profiles";
import { decisionFromDelta } from "@/lib/swipe";
import { useDeckStore } from "@/store/deckStore";

export function SwipeDeck() {
  const index = useDeckStore((state) => state.index);
  const decide = useDeckStore((state) => state.decide);
  const profile = PROFILES[index];
  const [dragX, setDragX] = useState(0);
  const [originX, setOriginX] = useState(0);
  const [pointerId, setPointerId] = useState<number | null>(null);

  if (profile === undefined) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
        <p className="text-[15px] font-medium">The deck is empty</p>
        <p className="text-[13px] text-muted-foreground">
          Open Matches, or deal again from the title bar.
        </p>
      </div>
    );
  }

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setPointerId(event.pointerId);
    setOriginX(event.clientX);
    setDragX(0);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerId !== event.pointerId) return;
    setDragX(event.clientX - originX);
  };

  const finish = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerId !== event.pointerId) return;
    const decision = decisionFromDelta(dragX);
    setPointerId(null);
    setDragX(0);
    if (decision !== null) decide(decision);
  };

  const rotate = dragX / 28;
  const stamp = decisionFromDelta(dragX);

  return (
    <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-5 px-6 py-4">
      <div
        role="group"
        data-testid={`card-${profile.id}`}
        className="relative h-[min(520px,58vh)] w-full max-w-md cursor-grab touch-none select-none rounded-2xl border border-black/10 bg-card shadow-[0_18px_50px_rgba(0,0,0,0.18)] active:cursor-grabbing"
        style={{ transform: `translateX(${String(dragX)}px) rotate(${String(rotate)}deg)` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finish}
        onPointerCancel={finish}
      >
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(165deg, hsl(${String(profile.hue)} 70% 62%), hsl(${String(profile.hue)} 55% 38%))`,
          }}
        />
        {stamp !== null && (
          <span
            data-testid="swipe-stamp"
            className={`absolute top-6 left-6 rounded-md border-2 px-3 py-1 text-[18px] font-bold tracking-wide ${
              stamp === "like"
                ? "border-emerald-200 text-emerald-50"
                : "border-rose-200 text-rose-50"
            }`}
          >
            {stamp === "like" ? "LIKE" : "PASS"}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-16 text-white">
          <p className="text-[22px] font-semibold tracking-tight">
            {profile.name}
            <span className="ml-2 font-normal text-white/80">{String(profile.age)}</span>
          </p>
          <p className="text-[13px] text-white/80">{profile.city}</p>
          <p className="mt-2 text-[14px] leading-snug text-white/95">{profile.bio}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="lg"
          className="h-14 w-14 rounded-full"
          aria-label="Pass"
          data-testid="button-pass"
          onClick={() => decide("pass")}
        >
          <X className="h-6 w-6 text-rose-600" />
        </Button>
        <Button
          size="lg"
          className="h-14 w-14 rounded-full"
          aria-label="Like"
          data-testid="button-like"
          onClick={() => decide("like")}
        >
          <Heart className="h-6 w-6" />
        </Button>
      </div>
      <p className="text-[12px] text-muted-foreground">
        Drag the card, or use the buttons. Arrow keys work too.
      </p>
    </div>
  );
}
