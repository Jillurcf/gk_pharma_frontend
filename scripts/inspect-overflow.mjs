import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});

for (const [viewport, route] of [
  [{ width: 390, height: 844 }, "/"],
  [{ width: 390, height: 844 }, "/products"],
  [{ width: 768, height: 1024 }, "/quality"],
]) {
  const page = await browser.newPage({ viewport });
  await page.goto(`http://localhost:3100${route}`, { waitUntil: "networkidle" });
  const info = await page.evaluate(() => {
    const vw = window.innerWidth;
    const bad = [];
    document.querySelectorAll("body *").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && (r.right > vw + 1 || r.left < -1)) {
        bad.push({
          tag: el.tagName.toLowerCase(),
          cls:
            el.className && typeof el.className === "string"
              ? el.className.slice(0, 160)
              : "",
          left: Math.round(r.left),
          right: Math.round(r.right),
          width: Math.round(r.width),
          text: (el.textContent || "").trim().slice(0, 50),
        });
      }
    });
    return {
      vw,
      scrollWidth: document.documentElement.scrollWidth,
      bodyScroll: document.body.scrollWidth,
      bad: bad.slice(0, 30),
    };
  });
  console.log(JSON.stringify({ route, viewport, ...info }, null, 2));
  await page.close();
}

await browser.close();
