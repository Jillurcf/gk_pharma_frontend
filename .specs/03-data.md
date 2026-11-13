# Product Data Architecture

## Source of truth
- `src/types/product.ts` — `Product`, `Category` types.
- `src/data/products.ts` — 18 demo products, 6 categories × 3.
- `src/data/categories.ts` — 6 categories with icon key, tone, copy and counts derived at runtime.
- `src/data/site.ts` — navigation, contact and social placeholders, demo notice.

## Product fields
`id`, `slug`, `name`, `category` (category slug), `shortDescription`, `description`,
`overview`, `image`, `gallery?`, `ingredients?`, `productForm?`, `packaging?`, `usage?`,
`storage?`, `featured`, `demo`.

## Rules
1. Add a product by adding one object to `products`; routes, sitemap, counts and related
   products update automatically.
2. `slug` must be unique and URL-safe.
3. `category` must match a category `slug`; keep category data editable, not hardcoded in UI.
4. Demo products must never be presented as official GK Pharma products.
5. Never add claims, dosages, ingredients or approvals. Use the shared placeholder copy
   or clearly marked demo text.
6. Images: local paths under `/images/products/`; provide descriptive alt text.

## Adding a category
Append to `categories` with a unique slug, an icon key supported by
`components/common/CategoryIcon.tsx`, a tone (green/red/navy/amber/teal/plum) and copy.
