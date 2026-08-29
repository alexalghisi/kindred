# Kindred

Open-source swipe matching. Tinder-shaped, MIT-licensed, no account, no feed
algorithm — a local deck you can read and fork.

Built as a **desktop** app on purpose: large cards, round like / pass buttons,
arrow keys. Not a phone game.

**React 19 · TypeScript (strict) · Vite 8 · Tailwind CSS 4 · Zustand · Vitest ·
Playwright**

---

## Why this exists

Closed dating apps own the graph. Kindred is the opposite: the profiles are in
[`src/lib/profiles.ts`](src/lib/profiles.ts), the match rule is one boolean in
[`src/lib/swipe.ts`](src/lib/swipe.ts), and the UI is the same Mac window as the
rest of this portfolio.

Drag a card, hit the round buttons, or use ← / →.

Ioana likes you back. Matei does not. That is the whole product.

---

## Author

### Alessandro Alghisi

Senior Software Engineer · Cluj-Napoca, Romania

**Twice a Google Software Engineering Intern** — Chrome (Kitchener / Waterloo)
and Logs (Mountain View).

|          |                                                                                         |
| -------- | --------------------------------------------------------------------------------------- |
| GitHub   | [github.com/alexalghisi](https://github.com/alexalghisi)                                |
| LinkedIn | [linkedin.com/in/alghisi](https://www.linkedin.com/in/alghisi)                          |
| Email    | [alessandro@onlineparentingprograms.com](mailto:alessandro@onlineparentingprograms.com) |
| Location | Cluj-Napoca, Romania · open to remote / EU / US-friendly timezones                      |

**Hiring?** Open an issue, message me on LinkedIn, or email
[alessandro@onlineparentingprograms.com](mailto:alessandro@onlineparentingprograms.com).

---

## Getting started

Requires Node 22 or newer.

```bash
npm install
npm run dev          # http://localhost:5175
```

Like **Ioana**, then open **Matches**. Contact sits under the window.

```bash
npm run typecheck
npm run lint
npm run format:check
npm run test
npm run e2e
npm run build
```

## License

MIT · © Alessandro Alghisi
