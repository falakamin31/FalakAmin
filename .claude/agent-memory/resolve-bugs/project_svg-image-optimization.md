---
name: project_svg-image-optimization
description: next/image blocks SVG optimization by default — dangerouslyAllowSVG must be set in next.config.mjs for SVG thumbnails to render at runtime
metadata:
  type: project
---

This project uses SVG files as project thumbnails (`/projects/placeholder-1.svg`, `placeholder-4.svg`, `placeholder-5.svg`, `placeholder-6.svg`). These are served via `next/image` with `fill` layout in `components/Projects.js`.

Next.js image optimization rejects SVG files at runtime (returns 400 from `/_next/image`) unless the config explicitly allows them. The build succeeds — this is a silent runtime failure.

**Fix applied (2026-06-30):** Added to `next.config.mjs`:
```js
images: {
  dangerouslyAllowSVG: true,
  contentDispositionType: "attachment",
  ...
}
```

**Why:** `contentDispositionType: "attachment"` is paired as a security measure — it prevents browsers from executing SVG scripts inline when served through the optimizer.

**How to apply:** Any time a new SVG is added as a `next/image` src, confirm these two config keys are present. If removing all SVG images, they can be dropped — but the cost of keeping them is zero.
