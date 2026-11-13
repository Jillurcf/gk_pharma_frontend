import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 768, height: 1024 } });
await page.goto("http://localhost:3100/quality", { waitUntil: "networkidle" });
const info = await page.evaluate(() => {
  const link = Array.from(document.querySelectorAll("a")).find(
    (a) => a.textContent.trim() === "Product Catalogue" && a.closest(".rounded-3xl"),
  );
  const chain = [];
  let el = link;
  while (el && el.tagName !== "HTML") {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    chain.push({
      tag: el.tagName.toLowerCase(),
      cls: typeof el.className === "string" ? el.className.slice(0, 140) : "",
      display: cs.display,
      flexDirection: cs.flexDirection,
      flexWrap: cs.flexWrap,
      gap: cs.gap,
      justify: cs.justifyContent,
      left: Math.round(r.left * 100) / 100,
      right: Math.round(r.right * 100) / 100,
      width: Math.round(r.width * 100) / 100,
      minWidth: cs.minWidth,
      flexShrink: cs.flexShrink,
      whiteSpace: cs.whiteSpace,
    });
    el = el.parentElement;
  }
  return chain;
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
