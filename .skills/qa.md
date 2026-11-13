# Skill: QA & build

Before finishing:
1. `npx tsc --noEmit` — zero errors.
2. `npm run lint` — resolve errors (warnings acceptable only with reason).
3. `npm run build` — production build must pass; inspect route output.
4. Start `npm run start` and spot-check routes, filters, product links, 404.
5. Grep for broken placeholders: `href="#"`, `TODO`, `lorem`, empty `onClick`.
6. Verify no `console.log` and no client secrets.
7. Re-check mobile menu, form validation, empty catalogue state.
