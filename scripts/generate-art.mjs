import fs from "node:fs";
import path from "node:path";

const seedPath = path.join("src", "data", "product-seeds.json");
const seedMap = JSON.parse(fs.readFileSync(seedPath, "utf8"));

const palette = {
  "liquid-products": { accent: "#008348", dark: "#005c33", bg: "#e8f5ed" },
  "capsule-products": { accent: "#b7791f", dark: "#875717", bg: "#fbf3e2" },
  "tablet-products": { accent: "#171b68", dark: "#10133f", bg: "#ebedf9" },
  "clinical-items": { accent: "#0f766e", dark: "#0b5650", bg: "#e6f5f2" },
};

const categories = [
  ["liquid-products", "Liquid Products"],
  ["capsule-products", "Capsule Products"],
  ["tablet-products", "Tablet Products"],
  ["clinical-items", "Clinical Items"],
];

const categoryLabels = Object.fromEntries(categories);

function packFor(categorySlug, form) {
  if (categorySlug === "liquid-products") return "bottle";
  const normalized = form.toLowerCase();
  if (normalized.includes("powder")) return "pouch";
  if (normalized.includes("oil") || normalized.includes("lotion")) return "dropper";
  return "box";
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrap(text, maxChars) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    if (!current) {
      current = word;
    } else if (`${current} ${word}`.length <= maxChars) {
      current += ` ${word}`;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

const leaf = (x, y, scale, color, opacity) => `
  <g transform="translate(${x} ${y}) scale(${scale})" fill="none" stroke="${color}" stroke-width="2.4" stroke-linecap="round" opacity="${opacity}">
    <path d="M0 0C40 -52 96 -58 130 -30C102 12 58 32 0 0Z"/>
    <path d="M4 2C44 -2 82 -14 118 -32" />
    <path d="M38 -10C46 -25 54 -37 66 -46" />
    <path d="M66 -4C72 -16 80 -26 92 -34" />
  </g>`;

function labelBlock({ name, category, form, accent, dark, x, y, width, height, scale = 1 }) {
  const lines = wrap(name, 15);
  const fontSize = lines.length > 2 ? 25 : 30;
  const lineHeight = fontSize + 6;
  const total = lines.length * lineHeight;
  const startY = y + 76 + (height - 76 - 84 - total) / 2;
  const nameLines = lines
    .map(
      (line, index) =>
        `<text x="${x + width / 2}" y="${startY + index * lineHeight}" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="${fontSize * scale}" font-weight="700" fill="#171B68">${escapeXml(line)}</text>`,
    )
    .join("");

  return `
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="16" fill="#fffdf7" stroke="${accent}" stroke-opacity="0.25"/>
    <text x="${x + width / 2}" y="${y + 32}" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="3" fill="${dark}">GK PHARMA</text>
    <line x1="${x + width / 2 - 26}" y1="${y + 44}" x2="${x + width / 2 + 26}" y2="${y + 44}" stroke="${accent}" stroke-width="1.6" opacity="0.55"/>
    ${nameLines}
    <text x="${x + width / 2}" y="${y + height - 54}" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="11" font-weight="600" letter-spacing="1.6" fill="${accent}">${escapeXml(form.toUpperCase())}</text>
    <text x="${x + width / 2}" y="${y + height - 33}" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="8.5" letter-spacing="1.2" fill="#7b8781">${escapeXml(category.toUpperCase())}</text>`;
}

function bottle(p, accent, dark) {
  return `
    <ellipse cx="500" cy="842" rx="200" ry="30" fill="#171b68" opacity="0.10"/>
    <rect x="422" y="182" width="156" height="76" rx="16" fill="${dark}"/>
    <rect x="438" y="200" width="124" height="10" rx="5" fill="#ffffff" opacity="0.14"/>
    <rect x="447" y="256" width="106" height="58" fill="${dark}" opacity="0.92"/>
    <path d="M340 386C340 348 362 326 400 314H600C638 326 660 348 660 386V744C660 792 622 830 574 830H426C378 830 340 792 340 744Z" fill="url(#body)"/>
    <path d="M388 340C372 354 366 368 366 390V734C366 774 394 802 430 806" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round" opacity="0.16"/>
    ${labelBlock({ name: p.name, category: p.category, form: p.form, accent, dark, x: 372, y: 408, width: 256, height: 300, scale: 0.92 })}
    <rect x="404" y="746" width="192" height="34" rx="8" fill="#ffffff" opacity="0.12"/>
    <text x="500" y="768" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="10" letter-spacing="2" fill="#ffffff" opacity="0.85">UNANI RANGE</text>`;
}

function dropper(p, accent, dark) {
  return `
    <ellipse cx="500" cy="842" rx="180" ry="28" fill="#171b68" opacity="0.10"/>
    <rect x="458" y="160" width="84" height="34" rx="10" fill="${dark}"/>
    <rect x="446" y="120" width="108" height="46" rx="12" fill="${dark}"/>
    <rect x="468" y="192" width="64" height="44" fill="${dark}" opacity="0.9"/>
    <path d="M360 340C360 300 384 278 424 268H576C616 278 640 300 640 340V760C640 810 600 846 552 846H448C400 846 360 810 360 760Z" fill="url(#body)"/>
    <path d="M402 306C386 318 380 332 380 348V748C380 786 404 812 440 818" fill="none" stroke="#ffffff" stroke-width="11" stroke-linecap="round" opacity="0.16"/>
    ${labelBlock({ name: p.name, category: p.category, form: p.form, accent, dark, x: 386, y: 380, width: 228, height: 360, scale: 0.86 })}
    <rect x="470" y="138" width="60" height="8" rx="4" fill="#ffffff" opacity="0.2"/>`;
}

function jar(p, accent, dark) {
  return `
    <ellipse cx="500" cy="832" rx="210" ry="30" fill="#171b68" opacity="0.10"/>
    <rect x="372" y="286" width="256" height="74" rx="22" fill="${dark}"/>
    <rect x="388" y="300" width="224" height="12" rx="6" fill="#ffffff" opacity="0.15"/>
    <rect x="348" y="352" width="304" height="452" rx="46" fill="url(#body)"/>
    <rect x="386" y="390" width="228" height="360" rx="26" fill="#ffffff" opacity="0.08"/>
    ${labelBlock({ name: p.name, category: p.category, form: p.form, accent, dark, x: 378, y: 400, width: 244, height: 330, scale: 0.9 })}
    <rect x="396" y="750" width="208" height="30" rx="8" fill="#ffffff" opacity="0.12"/>`;
}

function pouch(p, accent, dark) {
  return `
    <ellipse cx="500" cy="842" rx="205" ry="28" fill="#171b68" opacity="0.10"/>
    <path d="M360 250C360 232 374 218 392 218H608C626 218 640 232 640 250V742C640 796 596 832 542 832H458C404 832 360 796 360 742Z" fill="url(#body)"/>
    <rect x="376" y="232" width="248" height="24" rx="10" fill="#ffffff" opacity="0.18"/>
    <path d="M376 300H624" stroke="#ffffff" stroke-width="2" opacity="0.18" stroke-dasharray="8 8"/>
    ${labelBlock({ name: p.name, category: p.category, form: p.form, accent, dark, x: 386, y: 336, width: 228, height: 400, scale: 0.86 })}
    <path d="M384 650C430 674 470 686 500 686C530 686 570 674 616 650" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.16"/>`;
}

function box(p, accent, dark) {
  return `
    <ellipse cx="500" cy="832" rx="210" ry="30" fill="#171b68" opacity="0.10"/>
    <path d="M332 330L500 262L668 330V742L500 806L332 742Z" fill="url(#body)"/>
    <path d="M500 262L668 330V404L500 336Z" fill="#ffffff" opacity="0.10"/>
    <path d="M332 330L500 398V336Z" fill="#ffffff" opacity="0.06"/>
    <path d="M500 336V806" stroke="#ffffff" stroke-width="2" opacity="0.12"/>
    ${labelBlock({ name: p.name, category: p.category, form: p.form, accent, dark, x: 360, y: 392, width: 280, height: 300, scale: 0.88 })}
    <rect x="396" y="722" width="208" height="30" rx="8" fill="#ffffff" opacity="0.1"/>`;
}

let generated = 0;

for (const [categorySlug, seeds] of Object.entries(seedMap)) {
  const { accent, dark, bg } = palette[categorySlug];
  const category = categoryLabels[categorySlug];

  for (const seed of seeds) {
    const pack = packFor(categorySlug, seed.form);
    const body =
      pack === "bottle"
        ? bottle({ name: seed.name, category, form: seed.form }, accent, dark)
        : pack === "dropper"
          ? dropper({ name: seed.name, category, form: seed.form }, accent, dark)
          : pack === "jar"
            ? jar({ name: seed.name, category, form: seed.form }, accent, dark)
            : pack === "pouch"
              ? pouch({ name: seed.name, category, form: seed.form }, accent, dark)
              : box({ name: seed.name, category, form: seed.form }, accent, dark);

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000" role="img" aria-label="${escapeXml(seed.name)} product visual">
  <defs>
    <linearGradient id="body" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${accent}"/>
      <stop offset="55%" stop-color="${dark}"/>
      <stop offset="100%" stop-color="${accent}"/>
    </linearGradient>
    <radialGradient id="halo" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="${bg}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1000" height="1000" fill="${bg}"/>
  <circle cx="500" cy="470" r="360" fill="url(#halo)"/>
  <circle cx="500" cy="470" r="300" fill="none" stroke="${accent}" stroke-width="1.5" opacity="0.18"/>
  <circle cx="500" cy="470" r="338" fill="none" stroke="${accent}" stroke-width="1" opacity="0.1" stroke-dasharray="3 12"/>
  ${leaf(110, 250, 1.15, accent, 0.22)}
  ${leaf(760, 600, -1.05, accent, 0.16)}
  ${leaf(150, 700, 0.72, accent, 0.12)}
  <g fill="${accent}" opacity="0.18">
    <circle cx="200" cy="180" r="5"/><circle cx="238" cy="180" r="5"/><circle cx="276" cy="180" r="5"/>
    <circle cx="788" cy="250" r="4"/><circle cx="818" cy="250" r="4"/><circle cx="848" cy="250" r="4"/>
  </g>
  ${body}
  <text x="60" y="950" font-family="'Segoe UI', Arial, sans-serif" font-size="15" font-weight="600" letter-spacing="3" fill="${dark}" opacity="0.5">GK PHARMA (UNANI) LIMITED</text>
</svg>`;

    fs.writeFileSync(path.join("public", "images", "products", `${seed.slug}.svg`), svg);
    generated += 1;
  }
}

for (const [slug, label] of categories) {
  const { accent, dark, bg } = palette[slug];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 560" width="900" height="560" role="img" aria-label="${escapeXml(label)} category illustration">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="${bg}" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
  <rect width="900" height="560" fill="${bg}"/>
  <rect width="900" height="560" fill="url(#fade)"/>
  <circle cx="700" cy="140" r="180" fill="${accent}" opacity="0.08"/>
  <circle cx="700" cy="140" r="126" fill="none" stroke="${accent}" stroke-width="1.5" opacity="0.15"/>
  <circle cx="160" cy="470" r="150" fill="${accent}" opacity="0.05"/>
  ${leaf(540, 300, 1.6, accent, 0.26)}
  ${leaf(690, 250, 1.1, accent, 0.2)}
  ${leaf(430, 430, 0.9, accent, 0.18)}
  <g fill="${accent}" opacity="0.2">
    <circle cx="760" cy="400" r="5"/><circle cx="792" cy="400" r="5"/><circle cx="824" cy="400" r="5"/>
    <circle cx="110" cy="120" r="4"/><circle cx="138" cy="120" r="4"/><circle cx="166" cy="120" r="4"/>
  </g>
  <text x="70" y="470" font-family="'Segoe UI', Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="3.5" fill="${dark}" opacity="0.55">GK PHARMA</text>
  <text x="70" y="508" font-family="'Segoe UI', Arial, sans-serif" font-size="13" letter-spacing="2" fill="${dark}" opacity="0.4">UNANI RANGE</text>
</svg>`;
  fs.writeFileSync(path.join("public", "images", "categories", `${slug}.svg`), svg);
  generated += 1;
}

console.log(`Generated ${generated} SVG assets.`);
