# GK Pharma (Unani) Limited — Corporate Website

A premium, frontend-only corporate website and demonstration product catalogue for
**GK Pharma (Unani) Limited**, based at Station Road, Tongi, Gazipur, Bangladesh.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 and lucide-react.

## Quick start

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run typecheck   # TypeScript checks
npm run lint        # ESLint
npm run build       # production build
npm run start       # serve the production build
```

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` for production canonical, Open Graph and sitemap
URLs.

## Pages

- `/` — corporate homepage with featured products and categories
- `/about` — company profile, mission, values and location
- `/products` — searchable, filterable demonstration catalogue
- `/products/[slug]` — product detail with related products
- `/categories` — category browsing with live counts
- `/quality` — manufacturing philosophy and quality framework
- `/contact` — contact details and validated demo enquiry form

## Important

The product catalogue is **demonstration content** and is labelled as such throughout the
site. It does not represent official GK Pharma products, ingredients, dosages, claims or
certifications. The contact form validates locally only and does not send email. Phone, email,
map and social links are placeholders pending official confirmation.

See [`docs.md`](./docs.md) for the full documentation, asset replacement guide, product data
instructions and backend integration notes.
