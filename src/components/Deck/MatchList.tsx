import { PROFILES } from "@/lib/profiles";
import { useDeckStore } from "@/store/deckStore";

export function MatchList() {
  const matches = useDeckStore((state) => state.matches);

  if (matches.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="text-[15px] font-medium">No matches yet</p>
        <p className="text-[13px] text-muted-foreground">
          Like someone who already likes you. Ioana is first in the deck.
        </p>
      </div>
    );
  }

  return (
    <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-4 py-4">
      {matches.map((profile) => (
        <li
          key={profile.id}
          data-testid={`match-${profile.id}`}
          className="flex items-center gap-3 rounded-xl border border-black/5 bg-white/80 px-3 py-2"
        >
          <span
            className="h-11 w-11 shrink-0 rounded-full"
            style={{ background: `hsl(${String(profile.hue)} 70% 55%)` }}
          />
          <div className="min-w-0">
            <p className="truncate text-[14px] font-medium">
              {profile.name}
              <span className="ml-1 font-normal text-muted-foreground">{String(profile.age)}</span>
            </p>
            <p className="truncate text-[12px] text-muted-foreground">{profile.city}</p>
          </div>
        </li>
      ))}
      <li className="px-1 pt-2 text-[11px] text-muted-foreground">
        {String(matches.length)} of {String(PROFILES.filter((profile) => profile.likesYou).length)}{" "}
        people who liked you
      </li>
    </ul>
  );
}
