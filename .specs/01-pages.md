# Pages & Sections

## `/` Home
Navbar, hero, company intro (mission/vision), 8 featured products, 4 categories,
"Why choose GK Pharma" (no unsupported claims), quality/manufacturing overview,
CTA, footer. Organization JSON-LD.

## `/about`
Hero, overview, history placeholder (clearly marked), mission/vision, values,
Unani commitment, quality philosophy, location card with placeholder map.

## `/products`
Server page with heading + intro and a suspended client catalogue.
- Search by name/description.
- Filter by category via `?category=`.
- Sort: featured, name A–Z, name Z–A, category.
- Load more (9 per batch), result count, clear filters, empty state.
- URL state kept in sync for category, q and sort.

## `/products/[slug]`
Static params for all products. Two-column desktop, single-column mobile.
Breadcrumb, image, name, category, description, overview, ingredients placeholder, form,
packaging, usage placeholder, storage, manufacturer, enquiry CTA, related products, back
link. Product JSON-LD + metadata.

## `/categories`
Four editable categories with icon art, description, live product count and
"Explore category" links into the filtered catalogue.

## `/quality`
Manufacturing philosophy, sourcing, production, QC steps, factory/lab illustrations,
"certifications pending verification" notice, CTA.

## `/contact`
Verified address, placeholder phone/email, map placeholder, social placeholders,
accessible validated form. Success state explicitly says no email is sent.
Supports `?product=` prefill from product pages.

## Global
Responsive navbar + mobile menu, footer, skip link, 404 page, sitemap, robots,
Open Graph image and metadata.
