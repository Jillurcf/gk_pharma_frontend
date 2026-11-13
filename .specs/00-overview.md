# GK Pharma Website — Specification Overview

## Goal
A premium, frontend-only corporate website for GK Pharma (Unani) Limited that presents the
company and an editable demo product catalogue professionally.

## Scope
- Next.js App Router + TypeScript + Tailwind CSS v4 + lucide-react.
- Static/mock data in `src/data`. No backend, database, auth, API or payments.
- Pages: Home, About, Products, Product details, Categories, Quality, Contact.
- Working search, category filter, sort, load more, dynamic routes.
- Frontend-only enquiry form with honest "not sent" demo messaging.
- Local SVG logo, product visuals and illustrations. Official assets can be swapped in
  `public/images/` without touching page code.

## Non-goals
- Medical claims, invented ingredients, dosages, approvals or certifications.
- Real form submission, analytics, CMS, e-commerce.

## Brand
| Token | Value |
| --- | --- |
| Primary green | `#008348` |
| Secondary red | `#E31E24` |
| Navy | `#171B68` |
| White | `#FFFFFF` |
| Dark text | `#202124` |
| Light background | `#F7FAF8` |

## Content policy
Every unverifiable product field is marked as demo/placeholder in the UI and data. The demo
catalogue is labelled wherever products appear. Company address is the only contact detail
treated as verified. Phone, email, map, social links and history are placeholders.

## Definition of done
- `npx tsc --noEmit` passes.
- `npm run build` passes.
- All navigation, filters, sort, search, load more and product links work.
- No horizontal scrolling at 360 px; keyboard focus is visible; images have alt text.
