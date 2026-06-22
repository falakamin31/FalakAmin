# Falak Amin — Portfolio

A lean, professional portfolio built with **Next.js (App Router)**, **JavaScript**, **Tailwind CSS v4**, **Framer Motion**, and **next-themes** (dark/light, toggle lives in the top navbar).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Edit your content

Almost everything lives in **`lib/data.js`** — profile, stats, services, projects,
skills, experience, testimonials, and nav links. Edit text and links there; no
need to touch the components.

- **Projects** → `lib/data.js` `projects[]`. Swap `live` / `repo` `#` links and
  replace `image` paths. Drop real screenshots in `public/projects/` (replace the
  `placeholder-*.svg` files; keep a ~16:10 ratio).
- **Contact form** → in `components/Contact.js`, replace the Formspree `action`
  URL (`https://formspree.io/f/your-form-id`) with your own form ID, or switch to
  Resend later.
- **Social links / email / phone** → `lib/data.js` `profile`.

## Change the color theme

All colors are CSS variables at the top of **`app/globals.css`** (`:root` for
light, `.dark` for dark). Change `--accent` / `--accent-2` and the neutrals to
re-theme the whole site instantly. Current theme: **Slate + Indigo**.

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com) — zero config.
After deploying, update the domain in `app/sitemap.js`.

## Sections

Hero → Trust bar → Services → Work → Skills → Experience → Testimonials →
About → Contact → Footer.
