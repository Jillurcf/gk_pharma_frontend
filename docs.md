# GK Pharma (Unani) Limited — Website Documentation

A premium, frontend-only corporate website and product showcase for **GK Pharma (Unani)
Limited**, Station Road, Tongi, Gazipur, Bangladesh.

- Framework: Next.js 16 (App Router, Turbopack)
- UI: React 19, TypeScript, Tailwind CSS v4, lucide-react
- Data: local TypeScript files only
- No backend, database, authentication, API, payment gateway or external CMS

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run lint       # ESLint
npm run build      # production build
npm run start      # serve production build
```

Set the public site URL for correct canonical/OG/sitemap URLs:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://www.example.com
```

The fallback is `https://gk-pharma.example.com`, a clearly non-production placeholder.

---

## Project structure

```
.specs/                     Written specifications (overview, pages, design, data, SEO, acceptance)
.skills/                    Working conventions (Next.js, UI quality, content safety, QA)
docs.md                     This document
scripts/generate-art.mjs    Regenerates local SVG product/category artwork

src/
  app/
    layout.tsx              Fonts, global metadata, navbar/footer shell
    page.tsx                Home
    about/page.tsx
    products/page.tsx       Catalogue (client filters under Suspense)
    products/[slug]/page.tsx
    categories/page.tsx
    quality/page.tsx
    contact/page.tsx
    sitemap.ts  robots.ts  opengraph-image.tsx  not-found.tsx  icon.svg
    globals.css             Tailwind v4 theme tokens and base styles
  components/
    common/                 Button, Container, SectionHeading, Breadcrumb, Badge, Logo,
                            PageHero, CategoryIcon, SocialLinks
    layout/                 Navbar, MobileMenu, Footer
    home/                   Hero, AboutSection, FeaturedProducts, CategoriesSection,
                            WhyChooseUs, ManufacturingSection, CTASection
    products/               ProductCard, ProductGrid, ProductCatalogue, ProductSearch,
                            ProductFilters, CategoryCard, ProductDetails, RelatedProducts
    contact/                ContactForm
  data/
    products.ts             71 products (single source of truth)
    product-seeds.json      Editable product seed data used by products.ts and the art script
    categories.ts           4 editable categories
    site.ts                 Navigation and contact placeholders
  lib/
    utils.ts                cn(), safeJsonLd(), helpers
    seo.ts                  Metadata, Organization/Product/Breadcrumb JSON-LD
  types/product.ts          Product and Category interfaces

public/images/
  logo/                     SVG logo files (dark and light)
  products/                 71 generated product pack SVGs
  categories/               4 generated category illustrations
  banners/                  Hero and CTA botanical artwork
  company/                  Heritage, factory, laboratory, botanicals illustrations
```

---

## Editing products

Editable product content lives in `src/data/product-seeds.json`; `src/data/products.ts`
maps those seeds into typed records and derives IDs and image paths.

1. Add a new seed object under one of the four category arrays.
2. Keep `slug` unique and URL-safe.
3. Set `form` to the product format (for example `Syrup`, `Capsule`, `Tablet`, `Powder`).
4. Add `indications` and `usage` copy for the entry.
5. Set `featured: true` to show it on the homepage (8 are currently featured).
6. Run `node scripts/generate-art.mjs` to create its pack artwork.

Add or remove a product and these update automatically:

- `/products` grid, search index, filters, counts and sort
- `/products/[slug]` static route and metadata
- `/sitemap.xml`
- related products
- category counts on `/categories` and the footer

### Adding a category

Append to `categories` in `src/data/categories.ts` with:

- unique `slug`
- `icon` key supported by `src/components/common/CategoryIcon.tsx`
  (`droplet`, `capsule`, `tablet`, `clinical`)
- `tone` (`green`, `red`, `navy`, `amber`, `teal`, `plum`)
- image path, short description, long description and focus areas

Category filtering, footer links, cards and counts update automatically.

---

## Asset replacement

### Logo

The inline wordmark is rendered by `src/components/common/Logo.tsx` so it stays crisp and
theme-aware. Static logo files also exist:

- `public/images/logo/gk-pharma-logo.svg`
- `public/images/logo/gk-pharma-logo-white.svg`
- `src/app/icon.svg` (favicon)

To use the official logo, replace the `Logo` component internals (or point it at the
official SVG) without changing navbar/footer code. Keep the official aspect ratio.

### Product visuals

Pack visuals are generated SVG artwork. To use real photography:

1. Place optimized `.webp`/`.jpg` files in `public/images/products/`.
2. Update each product `image` path in `src/data/products.ts`.
3. Keep descriptive alt text generated by the card/details components
   (`"<name> product visual"`).

### Factory / laboratory / company imagery

Replace files in `public/images/company/` with the same names or update the paths in
`src/app/about/page.tsx`, `src/app/quality/page.tsx` and
`src/components/home/ManufacturingSection.tsx`.

### Regenerating product art

```bash
node scripts/generate-art.mjs
```

This regenerates all 71 product SVGs and 4 category SVGs from the seed data. Update
`src/data/product-seeds.json` before rerunning the script when adding products.

---

## Content & compliance policy

This project intentionally does **not** invent product details.

- The product catalogue presents company product information.
- Ingredient and usage fields explicitly state that official information is pending
  verification.
- No dosages, treatment claims, benefits or certifications are invented.
- The Quality page states that certifications/approvals will be published only after
  verification and displays no approval marks.
- Phone, email, social profiles and Google Maps are placeholders.
- The only verified contact detail is the address: Station Road, Tongi, Gazipur, Bangladesh.
- The contact form validates locally and states clearly that no message was sent.

When official data is supplied, update the corresponding data fields.

---

## Contact form / backend integration

`src/components/contact/ContactForm.tsx` performs frontend-only validation and shows a
success state that says nothing was transmitted.

To connect a backend later:

1. Add an API route or external endpoint (e.g. `POST /api/enquiries`).
2. In `onSubmit`, after validation, `await fetch(...)` and handle loading/error states.
3. Update success copy to reflect real delivery.
4. Preserve the existing accessible error/label structure.

Suggested payload:

```ts
{
  name, email, phone, product, enquiryType, message
}
```

---

## SEO

- Root metadata and title template: `src/app/layout.tsx`
- Page metadata helpers: `src/lib/seo.ts` (`createPageMetadata`)
- Product metadata + JSON-LD: `src/app/products/[slug]/page.tsx`
- Organization JSON-LD: `src/app/page.tsx` (verified name and address only)
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
- OG image: `src/app/opengraph-image.tsx`
- Canonical URL base: `NEXT_PUBLIC_SITE_URL`

Set `NEXT_PUBLIC_SITE_URL` before deployment so sitemap and canonical URLs are correct.

---

## Accessibility & UX

- Skip link, semantic landmarks and one `h1` per page
- Labelled form controls with inline errors (`role="alert"`, `aria-invalid`,
  `aria-describedby`)
- Keyboard-accessible mobile drawer with Escape close and scroll lock
- Visible focus rings and reduced-motion support
- Responsive from 360 px upward; no horizontal page scroll
- Search/filter state is kept in the URL (`?category=`, `?q=`, `?sort=`)

---

## Specifications

Implementation details are recorded in:

- `.specs/00-overview.md`
- `.specs/01-pages.md`
- `.specs/02-design-system.md`
- `.specs/03-data.md`
- `.specs/04-seo-content.md`
- `.specs/05-acceptance.md`

Working conventions for future contributors:

- `.skills/nextjs-conventions.md`
- `.skills/ui-quality.md`
- `.skills/content-safety.md`
- `.skills/qa.md`
