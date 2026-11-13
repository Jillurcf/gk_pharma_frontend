# Skill: Premium UI review

When editing UI, check:
1. Spacing rhythm (4/8 px scale), alignment and consistent section padding.
2. Follow the GK Pharma logo palette and the matching `src/app/globals.css` theme
   tokens: green `#008348` (`brand`) for primary actions and botanical highlights;
   navy `#171B68` (`navy`) for headings and strong anchors; red `#E31E24` (`accent`)
   only for small emphasis; and gray-green `#56665D` (`muted`) for secondary text.
   Use pale botanical neutrals (`surface`, `line`, `brand-light`) for backgrounds,
   borders, and soft fills. Prefer these theme tokens over one-off color values, and
   do not introduce additional competing brand colors.
3. Card treatment: consistent radius (`rounded-2xl`/`rounded-3xl`), border + soft shadow,
   hover lift only where interactive.
4. Typography: one h1, balanced line length (max ~70ch), muted body text, no orphans in CTAs.
5. Motion: 150–300 ms, transform/opacity only, respect `prefers-reduced-motion`.
6. Responsive: 360/768/1024/1440; no horizontal scroll; touch targets ≥ 44 px.
7. Accessibility: focus-visible rings, labels, alt text, aria attributes, semantic landmarks.
8. Copy: confident, concise, no medical claims or fake certifications/statistics.
