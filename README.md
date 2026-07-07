# Klam — marketing landing page

Next.js 14 (App Router) + Tailwind v3 design system that mirrors the **Klam**
React Native app. The system lives in [`tailwind.config.ts`](./tailwind.config.ts);
fonts load via `next/font` in [`app/fonts.ts`](./app/fonts.ts).

```bash
npm install
npm run dev      # http://localhost:3000
```

## Design rules (non-negotiable)

- **Cream is the canvas.** Page background is always `cream-100` (`#F5F1E8`) —
  **never pure white**. Cards sit on `cream-50`.
- **Sage is the only saturated hero color.** Primary CTAs = `sage-500`, pressed = `sage-600`.
- **Honey + terracotta are rare accents** (XP/reward and warmth). A little goes far.
- **No blue / purple / violet, no gradients, no neon.** The single exception is the
  functional `info` semantic (`#5B7DB1`) for state messaging — never decoration.
- **Shadows are soft and ink-tinted** (`rgba(43,43,43,·)`), never black, never harsh.

## Tokens

### Color

| Scale        | Key steps |
|--------------|-----------|
| `sage`       | 50–900 · **500** primary/CTA, **600** pressed |
| `cream`      | 50 surfaces · **100 page bg** · 200 dividers · 300–500 |
| `honey`      | 500 `#E8A92B` — reward / XP |
| `terracotta` | 500 `#D97852` — warmth |
| `ink`        | 300–900 · **800** primary text (400–700 interpolated) |
| semantic     | `success` `warning` `error` `info` |
| aliases      | `canvas`=cream-100 · `surface`=cream-50 · `divider`=cream-200 |

### Type scale (`text-*`)

`hero` 96/104 · `display` 72/80 · `headline` 32/40 · `title` 24/32 ·
`subtitle` 20/28 · `body` 16/24 · `small` 14/20 · `caption` 13/18.

Fonts: `font-display` = **Fraunces** (500) for headlines; `font-sans` = **Inter**
(400/500/600) for body + UI (the default).

### Spacing — 8-point grid

`4 8 12 16 24 32 48 64 96` (Tailwind `1 2 3 4 6 8 12 16 24`). Stay on these steps.

### Radius (`rounded-*`)

`sm` 8 chips · `md` 12 inputs · `lg` 16 cards *(default `rounded`)* ·
`xl` 20 modals · `2xl` 28 hero cards · `full` buttons/pills.

### Shadow (`shadow-*`)

`card`/`sm` resting `0 1px 3px @4%` · `md` raised `0 4px 12px @6%` ·
`lg`/`hero`/`elevated` `0 8px 24px @8%`.

## Usage examples

```tsx
// Primary CTA
<button className="rounded-full bg-sage-500 px-8 py-4 text-body font-semibold
                   text-cream-50 shadow-lg hover:bg-sage-600">Start</button>

// Card on the cream canvas
<article className="rounded-lg bg-cream-50 p-6 shadow-card">…</article>

// Hero headline
<h1 className="font-display text-hero text-ink-900">Practice speaking, calmly.</h1>
```

See [`app/page.tsx`](./app/page.tsx) for a full reference page exercising every token group.
