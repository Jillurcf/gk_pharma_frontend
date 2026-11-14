# Acceptance Checklist

## Routing
- [x] `/`, `/about`, `/products`, `/categories`, `/quality`, `/contact` resolve.
- [x] `/products/[slug]` resolves for all 18 products; unknown slug → 404.
- [x] Every nav, footer, category and related-product link resolves.
- [x] Logo links home; CTA links to catalogue/contact.

## Catalogue
- [x] Search, category filter, URL query sync, A–Z sort, load more and clear filters work.
- [x] Empty state for no matches.
- [x] Category deep links open the catalogue pre-filtered.

## Contact
- [x] Required-field and email validation; accessible errors.
- [x] Success message explicitly says no email was sent.
- [x] Product enquiry prefill works from `?product=`.

## Quality
- [x] Responsive 360/768/1024/1440, no horizontal scroll.
- [x] Semantic headings, alt text, labelled inputs, visible focus, skip link.
- [x] No fake claims or certifications.
- [x] `tsc --noEmit` and `npm run build` pass.
