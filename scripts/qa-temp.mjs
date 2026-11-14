import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { chromium } from "playwright-core";

const require = createRequire(import.meta.url);
const axeSource = readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");

const BASE = "http://localhost:3100";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const results = { failures: [], notes: [], consoleErrors: [] };

function check(condition, message) {
  if (!condition) results.failures.push(message);
}

const browser = await chromium.launch({ executablePath: CHROME, headless: true });

async function newPage(viewport) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  page.on("pageerror", (error) => results.consoleErrors.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") results.consoleErrors.push(`console: ${message.text()}`);
  });
  return { context, page };
}

const routes = [
  "/",
  "/about",
  "/products",
  "/products/gulnar-herbal-syrup",
  "/categories",
  "/quality",
  "/contact",
];

for (const viewport of [
  { width: 390, height: 844, name: "mobile" },
  { width: 768, height: 1024, name: "tablet" },
  { width: 1440, height: 1000, name: "desktop" },
]) {
  const { context, page } = await newPage({ width: viewport.width, height: viewport.height });

  for (const route of routes) {
    const response = await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
    check(response?.status() === 200, `${viewport.name} ${route} status ${response?.status()}`);

    const audit = await page.evaluate(() => {
      const jsonLdErrors = [];
      document.querySelectorAll('script[type="application/ld+json"]').forEach((script) => {
        try {
          JSON.parse(script.textContent ?? "");
        } catch {
          jsonLdErrors.push((script.textContent ?? "").slice(0, 80));
        }
      });
      return {
      title: document.title,
      description:
        document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "",
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? "",
      ogImage:
        document.querySelector('meta[property="og:image"]')?.getAttribute("content") ?? "",
      lang: document.documentElement.lang,
      jsonLdErrors,
      h1: document.querySelectorAll("h1").length,
      overflow: document.documentElement.scrollWidth - window.innerWidth,
      missingAlt: Array.from(document.images)
        .filter((image) => !image.hasAttribute("alt"))
        .map((image) => image.src),
      unloadedImages: Array.from(document.images)
        .filter((image) => image.complete && image.naturalWidth === 0)
        .map((image) => image.currentSrc || image.src),
      emptyLinks: Array.from(document.querySelectorAll("a")).filter(
        (anchor) => !anchor.getAttribute("href") || anchor.getAttribute("href") === "#",
      ).length,
      internalLinks: Array.from(
        new Set(
          Array.from(document.querySelectorAll('a[href^="/"]'))
            .map((anchor) => anchor.getAttribute("href"))
            .filter(Boolean),
        ),
      ),
      };
    });

    check(audit.h1 === 1, `${viewport.name} ${route} has ${audit.h1} h1 elements`);
    check(audit.lang === "en", `${viewport.name} ${route} html lang is "${audit.lang}"`);
    check(audit.title.includes("GK Pharma"), `${viewport.name} ${route} title is "${audit.title}"`);
    check(audit.description.length >= 50, `${viewport.name} ${route} meta description is missing`);
    check(
      new URL(audit.canonical).pathname === route,
      `${viewport.name} ${route} canonical is "${audit.canonical}"`,
    );
    check(Boolean(audit.ogImage), `${viewport.name} ${route} og:image is missing`);
    check(
      audit.jsonLdErrors.length === 0,
      `${viewport.name} ${route} has invalid JSON-LD: ${audit.jsonLdErrors.join(", ")}`,
    );
    check(audit.overflow <= 1, `${viewport.name} ${route} horizontal overflow ${audit.overflow}px`);
    check(audit.missingAlt.length === 0, `${viewport.name} ${route} images missing alt`);
    check(
      audit.unloadedImages.length === 0,
      `${viewport.name} ${route} images failed to load: ${audit.unloadedImages.join(", ")}`,
    );
    check(audit.emptyLinks === 0, `${viewport.name} ${route} has empty/# links`);

    for (const href of audit.internalLinks) {
      if (!href || href.startsWith("/_next")) continue;
      const linkResponse = await page.request.get(`${BASE}${href}`);
      if (!linkResponse.ok()) {
        results.failures.push(
          `${viewport.name} ${route} broken link ${href} -> ${linkResponse.status()}`,
        );
      }
    }
  }

  await context.close();
}

for (const auditViewport of [
  { width: 1440, height: 1000, name: "desktop" },
  { width: 390, height: 844, name: "mobile" },
]) {
  const { context, page } = await newPage({
    width: auditViewport.width,
    height: auditViewport.height,
  });
  for (const route of routes) {
    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
    await page.addScriptTag({ content: axeSource });
    const violations = await page.evaluate(async () => {
      const results = await window.axe.run(document, {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"],
        },
      });
      return results.violations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        help: violation.help,
        targets: violation.nodes.slice(0, 4).map((node) => node.target.join(" ")),
      }));
    });
    for (const violation of violations) {
      if (violation.impact === "serious" || violation.impact === "critical") {
        results.failures.push(
          `axe ${auditViewport.name} ${route} [${violation.impact}] ${violation.id}: ${violation.help} -> ${violation.targets.join(" | ")}`,
        );
      } else {
        results.notes.push(
          `axe ${auditViewport.name} ${route} [${violation.impact}] ${violation.id}: ${violation.help}`,
        );
      }
    }
  }
  await context.close();
}

{
  const { context, page } = await newPage({ width: 1440, height: 1000 });
  await page.goto(`${BASE}/products`, { waitUntil: "networkidle" });
  await page.waitForSelector("#product-search");

  check((await page.locator("article").count()) === 9, "catalogue initial count is not 9");

  await page.fill("#product-search", "lokenji");
  await page.waitForFunction(() => document.querySelectorAll("article").length === 1);
  check(page.url().includes("q=lokenji"), "search did not sync to URL");

  await page.getByRole("button", { name: "Clear search" }).click();
  await page.waitForFunction(() => document.querySelectorAll("article").length === 9);

  await page.getByRole("button", { name: /Liquid Products/ }).click();
  await page.waitForFunction(() => document.querySelectorAll("article").length === 9);
  check(page.url().includes("category=liquid-products"), "category filter not in URL");
  check(
    (await page.getByText("No products found").count()) === 0,
    "unexpected empty state after category filter",
  );

  await page.getByRole("button", { name: "Clear all filters" }).click();
  await page.waitForFunction(() => document.querySelectorAll("article").length === 9);

  await page.selectOption("#product-sort", "name-desc");
  await page.waitForTimeout(400);
  const firstName = await page.locator("article h3").first().innerText();
  check(firstName.startsWith("Vasicova"), `name-desc first card was ${firstName}`);

  await page.getByRole("button", { name: /Load More/ }).click();
  await page.waitForFunction(() => document.querySelectorAll("article").length === 18);
  check(
    (await page.getByText(/Showing 18 of \d+ products/).count()) === 1,
    "load more count text missing",
  );

  await page.fill("#product-search", "zzzzzz");
  await page.getByRole("heading", { name: "No products found" }).waitFor();
  await page.getByRole("button", { name: "Clear all filters" }).first().click();
  await page.waitForFunction(() => document.querySelectorAll("article").length === 9);

  const firstProductHref = await page
    .getByRole("link", { name: "View Details" })
    .first()
    .getAttribute("href");
  await page.getByRole("link", { name: "View Details" }).first().click();
  await page.waitForURL(`**${firstProductHref}`);
  check(
    page.url().endsWith(firstProductHref ?? ""),
    "View Details did not navigate to a product page",
  );

  await context.close();
}

{
  const { context, page } = await newPage({ width: 390, height: 844 });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  check((await page.locator("article").count()) === 8, "homepage featured product count is not 8");

  await page.keyboard.press("Tab");
  const skipLinkFocused = await page.evaluate(
    () => document.activeElement?.getAttribute("href") === "#main-content",
  );
  check(skipLinkFocused, "skip link is not the first focusable element");
  await page.keyboard.press("Enter");
  check(page.url().endsWith("#main-content"), "skip link did not move focus to main content");

  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("dialog").waitFor();
  check(
    await page.evaluate(
      () =>
        document.activeElement?.getAttribute("aria-label") === "Close menu" &&
        Boolean(document.activeElement?.closest('[role="dialog"]')),
    ),
    "mobile menu did not move focus inside the dialog",
  );
  await page.keyboard.press("Shift+Tab");
  check(
    await page.evaluate(() =>
      Boolean(document.activeElement?.closest('[role="dialog"]')),
    ),
    "Shift+Tab escaped the mobile menu focus trap",
  );
  await page.keyboard.press("Tab");
  check(
    await page.evaluate(() =>
      Boolean(document.activeElement?.closest('[role="dialog"]')),
    ),
    "Tab escaped the mobile menu focus trap",
  );
  await page.keyboard.press("Escape");
  await page.getByRole("dialog").waitFor({ state: "detached" });
  check(
    await page.evaluate(
      () => document.activeElement?.getAttribute("aria-label") === "Open menu",
    ),
    "focus was not restored to the menu trigger after closing",
  );

  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("dialog").getByRole("link", { name: "About Us" }).click();
  await page.waitForURL("**/about");
  check(page.url().endsWith("/about"), "mobile menu navigation failed");
  await context.close();
}

{
  const { context, page } = await newPage({ width: 1440, height: 1000 });
  await page.goto(`${BASE}/contact`, { waitUntil: "networkidle" });
  await page.waitForSelector("#contact-name");
  await page.getByRole("button", { name: /Submit Enquiry/ }).click();
  await page.getByText("Please enter your full name").waitFor();
  check(
    (await page.getByText("Please enter a valid email address.").count()) === 1,
    "email validation message missing",
  );
  check(
    (await page.getByText("Please include a message of at least 10 characters.").count()) === 1,
    "message validation missing",
  );

  await page.fill("#contact-name", "Test Visitor");
  await page.fill("#contact-email", "visitor@example.com");
  await page.fill("#contact-message", "I would like to discuss the product catalogue.");
  await page.getByRole("button", { name: /Submit Enquiry/ }).click();
  await page.getByRole("heading", { name: "Your details were validated" }).waitFor();
  check(
    (await page.getByText(/No message has been sent/).count()) >= 1,
    "success state does not state that no message was sent",
  );

  await page.goto(`${BASE}/contact?product=Lokenji%20Syrup`, {
    waitUntil: "networkidle",
  });
  await page.waitForSelector("#contact-product");
  const productValue = await page.inputValue("#contact-product");
  check(
    productValue === "Lokenji Syrup",
    `contact product prefill was "${productValue}"`,
  );
  await context.close();
}

{
  const { context, page } = await newPage({ width: 1440, height: 1000 });
  await page.goto(`${BASE}/products/lokenji-syrup`, { waitUntil: "networkidle" });
  const related = await page.locator("article").count();
  check(related === 3, `related product count was ${related}`);
  const metaDescription = await page
    .locator('meta[name="description"]')
    .getAttribute("content");
  check(Boolean(metaDescription), "product meta description missing");

  const missingResponse = await page.goto(
    `${BASE}/products/definitely-missing-product-${Date.now()}`,
    { waitUntil: "networkidle" },
  );
  check(
    missingResponse?.status() === 404 || missingResponse?.status() === 200,
    `unknown product status ${missingResponse?.status()}`,
  );
  check(
    (await page.getByRole("heading", { name: /could not be found/i }).count()) === 1,
    "unknown product did not render the not-found page",
  );
  const robots = await page
    .locator('meta[name="robots"]')
    .evaluateAll((nodes) => nodes.map((node) => node.getAttribute("content")));
  check(
    robots.some((value) => value?.includes("noindex")),
    "unknown product page is not marked noindex",
  );
  await context.close();
}

await browser.close();

console.log(JSON.stringify(results, null, 2));
if (results.failures.length > 0) process.exit(1);
