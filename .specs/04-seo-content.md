# SEO & Content Safety

## Metadata
- Root metadata: title template `%s | GK Pharma (Unani) Limited`, description,
  Open Graph/Twitter, `metadataBase` from `NEXT_PUBLIC_SITE_URL` (placeholder fallback).
- Per-page titles/descriptions; product metadata from data.
- Canonical URLs for every page; product canonical built from slug.
- `app/sitemap.ts` includes static routes and all product slugs.
- `app/robots.ts` allows crawling and points to the sitemap.
- `app/opengraph-image.tsx` renders a branded OG image.

## Structured data
- Organization JSON-LD on the homepage: name, legal name, verified address, logo.
  No invented phone/email/social URLs.
- Product JSON-LD on product pages with product information in the description.
- Breadcrumb JSON-LD on product detail pages.

## Heading hierarchy
One `h1` per page; sections use `h2`; cards use `h3`.

## Content safety
- Do not invent medical benefits, treatment claims, dosages, ingredients or regulatory
  approvals.
- Ingredients/usage fields use explicit pending-verification placeholders.
- No certification logos or badges until verified.
- Enquiry form success message states no email was sent.
