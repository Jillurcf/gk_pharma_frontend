import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const routes = ["/", "/about", "/products", "/products/gulnar-herbal-syrup", "/categories", "/quality", "/contact"];
for (const viewport of [
  { width: 320, height: 700 },
  { width: 1920, height: 1080 },
]) {
  const page = await browser.newPage({ viewport });
  for (const route of routes) {
    await page.goto(`http://localhost:3100${route}`, { waitUntil: "networkidle" });
    const report = await page.evaluate(() => {
      const vw = window.innerWidth;
      const clippedText = [];
      document.querySelectorAll("h1,h2,h3,h4,p,a,button,span,li").forEach((el) => {
        const cs = getComputedStyle(el);
        if (cs.overflow === "hidden" && el.scrollWidth > el.clientWidth + 2 && el.textContent?.trim()) {
          clippedText.push({
            tag: el.tagName,
            text: el.textContent.trim().slice(0, 40),
            scrollWidth: el.scrollWidth,
            clientWidth: el.clientWidth,
          });
        }
      });
      return {
        scrollWidth: document.documentElement.scrollWidth,
        vw,
        clippedText: clippedText.slice(0, 6),
      };
    });
    if (report.scrollWidth > report.vw + 1 || report.clippedText.length > 0) {
      console.log(JSON.stringify({ viewport: viewport.width, route, ...report }, null, 2));
    }
  }
  await page.close();
}
await browser.close();
console.log("done");
