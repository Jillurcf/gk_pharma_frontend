# Skill: Next.js 16 conventions (this repo)

- App Router with `src/app`; server components by default.
- Read the bundled docs in `node_modules/next/dist/docs/` before using unfamiliar APIs.
- `params` and `searchParams` are Promises. Prefer generated `PageProps<'/route'>` and
  `LayoutProps<'/'>` helpers (no import required).
- `generateStaticParams` for product slugs; `generateMetadata` for per-page metadata.
- Use `next/link` for navigation and `next/image` for raster/SVG images.
- Tailwind v4: theme tokens in `globals.css` via `@theme`; no `tailwind.config`.
- Client components need `"use client"`; keep them leaf-level (catalogue, menu, form).
- `next lint` was removed — use `npm run lint` (eslint) and `npm run typecheck`.
- Build with `npm run build`; verify no hydration or metadata warnings.
