# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # next lint
```

There is no test suite. This is a single-page Next.js App Router site (JavaScript, not TypeScript) deployed on Vercel with zero config.

## Architecture

**Content is fully decoupled from presentation.** Nearly all copy — profile, stats, services, projects, skills, experience, testimonials, nav links — lives in `lib/data.js` as named exports. Section components import these arrays and render them. To change site text or links, edit `lib/data.js`, not the components. The one exception is the contact form's Formspree `action` URL, which is hardcoded in `components/Contact.js`.

`app/page.js` composes the whole page by stacking section components in fixed order: Hero → TrustBar → Services → Projects → Skills → Experience → Testimonials → About → Contact → Footer, wrapped by Navbar/Footer.

### Theming — two independent axes

1. **Light/dark mode** via `next-themes` (`components/ThemeProvider.js`, toggle in `components/ThemeToggle.js`). Defaults to dark, system detection disabled. `attribute="class"` toggles `.dark` on `<html>`.

2. **Color palette** (10 schemes) via a `data-palette` attribute on `<html>`, managed by `components/PaletteSwitcher.js`. The selection persists in `localStorage` under the key `palette`. Palette metadata (key, display name, swatch colors) lives in `lib/palettes.js`; `defaultPalette` there sets the initial scheme.

These two axes combine: `app/globals.css` defines CSS custom properties for every `[data-palette="..."]` and `.dark[data-palette="..."]` pairing. **Adding or editing a palette requires changes in both files** — the entry in `lib/palettes.js` AND the corresponding CSS variable blocks in `app/globals.css`.

### Color system

All colors flow through CSS variables (`--background`, `--surface`, `--surface-2`, `--foreground`, `--muted`, `--border`, `--accent`, `--accent-2`, `--accent-contrast`). The `@theme inline` block at the bottom of `globals.css` maps these to Tailwind v4 utility classes (`bg-background`, `text-muted`, `border-border`, `text-accent`, etc.). **Always use these semantic utilities, never hardcoded Tailwind colors** like `bg-slate-900` — that's what makes runtime palette switching and dark mode work everywhere.

Fonts: `--font-sans` (Inter) and `--font-display` (Space Grotesk), loaded in `app/layout.js` via `next/font` and exposed as `font-sans` / `font-display`.

### Shared building blocks

- `components/Section.js` — section shell (max-width, padding, scroll-margin, optional eyebrow/title/subtitle). Use for new sections so spacing and anchor offsets stay consistent.
- `components/Reveal.js` — Framer Motion fade-up-on-scroll wrapper used throughout for entrance animations.
- `components/SmoothScroll.js` — wraps the app with Lenis smooth scrolling. It also intercepts `a[href^="#"]` clicks to scroll to anchors with a -72px offset (for the fixed navbar). Respects `prefers-reduced-motion`. Section `id`s must match `navLinks` hrefs in `lib/data.js`.

Components using hooks, animation, or browser APIs are marked `"use client"`. Use the `@/` import alias for absolute imports from the project root (configured in `jsconfig.json`).

## Deployment note

After deploying, update the base URL in `app/sitemap.js` (currently the placeholder `https://your-domain.com`).
