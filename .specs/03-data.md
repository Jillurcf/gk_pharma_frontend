# Product Data Architecture

## Source of truth
- `src/types/product.ts` — `Product`, `Category` types.
- `src/data/product-seeds.json` — 71 editable product seeds across 4 categories.
- `src/data/products.ts` — maps seeds into typed product records and helpers.
- `src/data/categories.ts` — 4 categories (liquid, capsule, tablet, clinical) with icon key,
  tone, copy and counts derived at runtime.
- `src/data/site.ts` — navigation, contact and social placeholders.

## Product fields
`id`, `slug`, `name`, `category` (category slug), `shortDescription`, `description`,
`overview`, `image`, `gallery?`, `ingredients?`, `productForm?`, `packaging?`, `usage?`,
`storage?`, `featured`.

## Rules
1. Add a product by adding one seed object under a category array; routes, sitemap, counts
   and related products update automatically.
2. `slug` must be unique and URL-safe.
3. `category` must match a category `slug`; keep category data editable, not hardcoded in UI.
4. Product information must be accurate and consistent across the catalogue.
5. Ingredients and approvals remain placeholder-only until verified.
6. Images: local paths under `/images/products/`; regenerate with
   `node scripts/generate-art.mjs` and keep descriptive alt text.

## Adding a category
Append to `categories` with a unique slug, an icon key supported by
`components/common/CategoryIcon.tsx`, a tone (green/red/navy/amber/teal/plum) and copy.
