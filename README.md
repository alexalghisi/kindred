# Kindred

An inspectable matching deck: profiles, the like/pass gesture, and the match
predicate are source code, not a remote graph. No account, no ranking feed, MIT
license.

**Download:** [latest release](https://github.com/alexalghisi/kindred/releases/latest)

![kindred running](docs/preview.png)

Built for desktop on purpose — large cards, round actions, keyboard — because
the interesting question is the rule, not a phone skin.

**React 19 · TypeScript (strict) · Vite 8 · Tailwind CSS 4 · Zustand · Vitest ·
Playwright**

---

## Model

Closed dating products own the graph. Kindred inverts that: profiles live in
[`src/lib/profiles.ts`](src/lib/profiles.ts), the match rule is one boolean in
[`src/lib/swipe.ts`](src/lib/swipe.ts), and the chrome matches the rest of this
portfolio.

Ioana likes you back. Matei does not. That is the product, fully specified.

---

## Author

### Alessandro Alghisi

Senior Software Engineer · Cluj-Napoca, Romania

**Twice a Google Software Engineering Intern** — Chrome (Kitchener / Waterloo)
and Logs (Mountain View).

|          |                                                                    |
| -------- | ------------------------------------------------------------------ |
| GitHub   | [github.com/alexalghisi](https://github.com/alexalghisi)           |
| LinkedIn | [linkedin.com/in/alghisi](https://www.linkedin.com/in/alghisi)     |
| Email    | [alexalghisi@gmail.com](mailto:alexalghisi@gmail.com)              |
| Location | Cluj-Napoca, Romania · open to remote / EU / US-friendly timezones |

**Hiring?** Open an issue, message me on LinkedIn, or email
[alexalghisi@gmail.com](mailto:alexalghisi@gmail.com).

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
