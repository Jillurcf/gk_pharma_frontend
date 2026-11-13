# Design System

## Direction
Premium, calm, trustworthy pharmaceutical corporate. Generous whitespace, rounded
cards (16–24 px), subtle borders and shadows, restrained motion (150–300 ms),
no decorative gradients except very soft brand-tinted backgrounds.

## Type
- Display/headings: Plus Jakarta Sans (700/600), tight tracking.
- Body/UI: Inter (400/500/600), 16–18 px base on desktop.
- Scale: hero `text-4xl → lg:text-6xl`, section `text-3xl → lg:text-4xl`.

## Color usage
- Green: primary actions, links, eyebrow accents, active states.
- Navy: footer, utility bar, premium feature panel, headings on light panels.
- Red: small accents only (notification dot, demo badge border, category tone).
- Light background `#F7FAF8` for alternating sections.
- Borders: `#E3EBE6`; muted text: `#5B6B62`.

## Components
`Container`, `Button` (primary/secondary/outline/ghost, sm/md/lg), `SectionHeading`,
`Breadcrumb`, `Badge`, `Logo`, `PageHero`, product cards, category cards, form fields.
Tokens live in `globals.css` via Tailwind v4 `@theme`.

## Accessibility
- Semantic landmarks, one `h1` per page, labelled controls.
- Visible `focus-visible` ring (green, 2 px offset).
- Minimum 44 px touch targets for nav and primary actions.
- `prefers-reduced-motion` respected.
