import type { Product } from "@/types/product";
import { getCategoryBySlug } from "@/data/categories";

const INGREDIENTS_PLACEHOLDER =
  "Official ingredient information is pending verification. This demonstration entry intentionally lists no ingredients.";

const USAGE_PLACEHOLDER =
  "Usage information will be published only after approved label copy is available. This demonstration entry provides no dosage or treatment guidance.";

const STORAGE_PLACEHOLDER =
  "Store in a cool, dry place away from direct sunlight. Final storage instructions will follow the approved product label. (Demo placeholder)";

export const CATALOGUE_DEMO_NOTE =
  "All products shown are demonstration catalogue entries created for layout and UX purposes. They are not official GK Pharma (Unani) Limited products and contain no verified product claims.";

export const products: Product[] = [
  {
    id: "GK-DEMO-001",
    slug: "gulnar-herbal-syrup",
    name: "Gulnar Herbal Syrup",
    category: "herbal-botanical",
    shortDescription:
      "A demonstration botanical syrup presented in an amber-glass pack format.",
    description:
      "Gulnar Herbal Syrup is an illustrative catalogue entry created to show how a botanical syrup might be presented. It is not an official product record, and no ingredients, benefits or usage instructions are stated.",
    overview:
      "This entry demonstrates the product detail layout for a herbal syrup, including packaging, storage and manufacturer information. Official descriptions, approved indications and formulation details will be published after verification.",
    image: "/images/products/gulnar-herbal-syrup.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Syrup",
    packaging: ["60 ml amber glass bottle (demo pack)", "120 ml amber glass bottle (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: true,
    demo: true,
  },
  {
    id: "GK-DEMO-002",
    slug: "neem-tulsi-herbal-extract",
    name: "Neem & Tulsi Herbal Extract",
    category: "herbal-botanical",
    shortDescription:
      "An illustrative liquid botanical extract entry with dropper-bottle packaging.",
    description:
      "Neem & Tulsi Herbal Extract is demonstration content only. The name references traditional botanicals but the entry does not assert an official formulation, ingredient ratio or approved use.",
    overview:
      "Created to illustrate how liquid extracts will be documented, this entry remains incomplete pending verified formulation and regulatory data. Packaging and storage details are placeholders.",
    image: "/images/products/neem-tulsi-herbal-extract.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Liquid extract",
    packaging: ["30 ml dropper bottle (demo pack)", "50 ml dropper bottle (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: true,
    demo: true,
  },
  {
    id: "GK-DEMO-003",
    slug: "sabza-botanical-powder",
    name: "Sabza Botanical Powder",
    category: "herbal-botanical",
    shortDescription:
      "A demonstration botanical powder in a resealable pouch presentation.",
    description:
      "Sabza Botanical Powder is a demonstration catalogue item. No ingredient list, health benefit, dosage or regulatory approval is claimed or implied.",
    overview:
      "This demo entry shows the powder product layout with batch, packaging and storage placeholders. It will be replaced with verified information when official records are supplied.",
    image: "/images/products/sabza-botanical-powder.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Powder",
    packaging: ["100 g resealable pouch (demo pack)", "200 g resealable pouch (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: false,
    demo: true,
  },
  {
    id: "GK-DEMO-004",
    slug: "hazm-care-digestive-syrup",
    name: "Hazm Care Digestive Syrup",
    category: "digestive-care",
    shortDescription:
      "A demo digestive syrup entry showing the catalogue's syrup presentation.",
    description:
      "Hazm Care Digestive Syrup is a demonstration record only. The product name and category are illustrative and must not be read as a treatment claim or verified offering.",
    overview:
      "Included to demonstrate filter, detail and related-product behaviour for digestive formats. Verified formulation, label and compliance details are pending.",
    image: "/images/products/hazm-care-digestive-syrup.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Syrup",
    packaging: ["100 ml bottle (demo pack)", "200 ml bottle (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: true,
    demo: true,
  },
  {
    id: "GK-DEMO-005",
    slug: "sounf-digestive-drops",
    name: "Sounf Digestive Drops",
    category: "digestive-care",
    shortDescription:
      "An illustrative drops format with a compact glass bottle presentation.",
    description:
      "Sounf Digestive Drops is demonstration content. The entry makes no medical claims and does not provide ingredients, dosage or approved usage.",
    overview:
      "This demo record illustrates the detail layout for concentrated drops. Official information will be added once GK Pharma supplies verified product documentation.",
    image: "/images/products/sounf-digestive-drops.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Drops",
    packaging: ["15 ml dropper bottle (demo pack)", "30 ml dropper bottle (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: false,
    demo: true,
  },
  {
    id: "GK-DEMO-006",
    slug: "ispaghula-husk-blend",
    name: "Ispaghula Husk Blend",
    category: "digestive-care",
    shortDescription:
      "A demonstration fibre-format powder entry in a resealable pouch.",
    description:
      "Ispaghula Husk Blend is an illustrative catalogue entry. No ingredient composition, approved use, benefit or dosage is represented as official information.",
    overview:
      "The entry demonstrates how a husk powder record can be structured while official details remain unverified. All descriptive fields are placeholders.",
    image: "/images/products/ispaghula-husk-blend.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Powder",
    packaging: ["100 g pouch (demo pack)", "250 g pouch (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: false,
    demo: true,
  },
  {
    id: "GK-DEMO-007",
    slug: "shifa-respiratory-syrup",
    name: "Shifa Respiratory Syrup",
    category: "respiratory-wellness",
    shortDescription:
      "A demonstration syrup entry grouped under respiratory wellness formats.",
    description:
      "Shifa Respiratory Syrup is a demonstration record. It does not claim to treat, cure or prevent any condition, and no official formulation is presented.",
    overview:
      "This entry exists to demonstrate the catalogue experience for respiratory-related formats. Verified indications, ingredients and label copy are pending.",
    image: "/images/products/shifa-respiratory-syrup.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Syrup",
    packaging: ["100 ml bottle (demo pack)", "200 ml bottle (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: true,
    demo: true,
  },
  {
    id: "GK-DEMO-008",
    slug: "mint-eucalyptus-inhalant",
    name: "Mint & Eucalyptus Inhalant",
    category: "respiratory-wellness",
    shortDescription:
      "An illustrative inhalant format presented in a small tin.",
    description:
      "Mint & Eucalyptus Inhalant is demonstration content only. The name is illustrative and makes no claim about official ingredients, effects or approvals.",
    overview:
      "Included to show how an inhalant entry would be structured. Official composition, directions and safety information must be verified before publication.",
    image: "/images/products/mint-eucalyptus-inhalant.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Inhalant",
    packaging: ["10 g tin (demo pack)", "20 g tin (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: false,
    demo: true,
  },
  {
    id: "GK-DEMO-009",
    slug: "adrak-respiratory-tonic",
    name: "Adrak Respiratory Tonic",
    category: "respiratory-wellness",
    shortDescription:
      "A demonstration tonic format with a warm, heritage-inspired label.",
    description:
      "Adrak Respiratory Tonic is an illustrative catalogue entry. It presents no verified ingredients, benefits, usage instructions or regulatory status.",
    overview:
      "This demo entry shows the tonic presentation and related-product grouping. It will be updated when official product data is available.",
    image: "/images/products/adrak-respiratory-tonic.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Tonic",
    packaging: ["100 ml bottle (demo pack)", "200 ml bottle (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: false,
    demo: true,
  },
  {
    id: "GK-DEMO-010",
    slug: "moringa-joint-oil",
    name: "Moringa Joint Oil",
    category: "joint-musculoskeletal",
    shortDescription:
      "A demonstration external-use oil with a dropper-less bottle presentation.",
    description:
      "Moringa Joint Oil is demonstration content. It makes no treatment claim and does not present an official formulation, ingredient list or approved use.",
    overview:
      "This entry demonstrates the detail template for an oil format. Batch, composition and safety information remain pending verification.",
    image: "/images/products/moringa-joint-oil.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Oil",
    packaging: ["50 ml bottle (demo pack)", "100 ml bottle (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: true,
    demo: true,
  },
  {
    id: "GK-DEMO-011",
    slug: "harjor-musculoskeletal-liniment",
    name: "Harjor Musculoskeletal Liniment",
    category: "joint-musculoskeletal",
    shortDescription:
      "An illustrative liniment format for the external-use category.",
    description:
      "Harjor Musculoskeletal Liniment is a demonstration catalogue entry only. No official ingredient, benefit, dosage or approval information is represented.",
    overview:
      "Created to exercise the layout for liniments and external preparations. All descriptive information is placeholder content pending verification.",
    image: "/images/products/harjor-musculoskeletal-liniment.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Liniment",
    packaging: ["60 ml bottle (demo pack)", "120 ml bottle (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: false,
    demo: true,
  },
  {
    id: "GK-DEMO-012",
    slug: "kalonji-joint-balm",
    name: "Kalonji Joint Balm",
    category: "joint-musculoskeletal",
    shortDescription:
      "A demonstration balm in a wide-mouth jar presentation.",
    description:
      "Kalonji Joint Balm is illustrative content. The entry does not claim an official formulation, therapeutic effect or regulatory approval.",
    overview:
      "This record demonstrates a balm detail page with packaging and storage placeholders. Official documentation is required before publication.",
    image: "/images/products/kalonji-joint-balm.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Balm",
    packaging: ["30 g jar (demo pack)", "60 g jar (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: true,
    demo: true,
  },
  {
    id: "GK-DEMO-013",
    slug: "shatavari-womens-tonic",
    name: "Shatavari Women's Tonic",
    category: "womens-wellness",
    shortDescription:
      "An illustrative women's wellness tonic presented in a tall bottle.",
    description:
      "Shatavari Women's Tonic is demonstration content only. It makes no health claims and does not represent verified ingredients, usage or approvals.",
    overview:
      "This entry demonstrates the women's wellness category presentation. Verified product information will replace all placeholder copy.",
    image: "/images/products/shatavari-womens-tonic.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Tonic",
    packaging: ["200 ml bottle (demo pack)", "400 ml bottle (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: true,
    demo: true,
  },
  {
    id: "GK-DEMO-014",
    slug: "ashoka-herbal-syrup",
    name: "Ashoka Herbal Syrup",
    category: "womens-wellness",
    shortDescription:
      "A demonstration syrup entry within the women's wellness category.",
    description:
      "Ashoka Herbal Syrup is illustrative catalogue content. No official formulation, approved use, dosage or medical benefit is stated.",
    overview:
      "Included to show how a second product within a category appears and how related products are grouped. Placeholder fields remain.",
    image: "/images/products/ashoka-herbal-syrup.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Syrup",
    packaging: ["100 ml bottle (demo pack)", "200 ml bottle (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: false,
    demo: true,
  },
  {
    id: "GK-DEMO-015",
    slug: "fenugreek-wellness-capsules",
    name: "Fenugreek Wellness Capsules",
    category: "womens-wellness",
    shortDescription:
      "An illustrative capsule format with a blister-and-carton presentation.",
    description:
      "Fenugreek Wellness Capsules is demonstration content only. It does not present verified ingredients, benefits, dosage or regulatory approval.",
    overview:
      "This entry demonstrates how capsule products will appear once official records exist. Composition and label details are explicitly pending.",
    image: "/images/products/fenugreek-wellness-capsules.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Capsules",
    packaging: ["30 capsules (demo pack)", "60 capsules (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: false,
    demo: true,
  },
  {
    id: "GK-DEMO-016",
    slug: "triphala-wellness-powder",
    name: "Triphala Wellness Powder",
    category: "general-wellness",
    shortDescription:
      "A demonstration general wellness powder with a classic pouch pack.",
    description:
      "Triphala Wellness Powder is an illustrative catalogue entry. No official composition, benefit, usage or approval is represented.",
    overview:
      "Created for the general wellness category demonstration. Official product documentation is required before any content is published.",
    image: "/images/products/triphala-wellness-powder.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Powder",
    packaging: ["100 g pouch (demo pack)", "250 g pouch (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: true,
    demo: true,
  },
  {
    id: "GK-DEMO-017",
    slug: "amla-vitamin-tonic",
    name: "Amla Vitamin Tonic",
    category: "general-wellness",
    shortDescription:
      "An illustrative tonic entry with a heritage-inspired label design.",
    description:
      "Amla Vitamin Tonic is demonstration content. The name is illustrative, and no vitamin content, health claim or approved use is asserted.",
    overview:
      "The entry demonstrates the tonic detail layout and related-product section. All unverified fields remain clearly marked placeholders.",
    image: "/images/products/amla-vitamin-tonic.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Tonic",
    packaging: ["200 ml bottle (demo pack)", "400 ml bottle (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: false,
    demo: true,
  },
  {
    id: "GK-DEMO-018",
    slug: "honey-herbal-electuary",
    name: "Honey Herbal Electuary",
    category: "general-wellness",
    shortDescription:
      "A demonstration electuary format in a wide-mouth glass jar.",
    description:
      "Honey Herbal Electuary is demonstration content only. It makes no claim about official ingredients, therapeutic effects, dosage or approvals.",
    overview:
      "This record shows how a traditional electuary format can be presented. Verified formulation and label information are pending.",
    image: "/images/products/honey-herbal-electuary.svg",
    ingredients: [INGREDIENTS_PLACEHOLDER],
    productForm: "Electuary",
    packaging: ["100 g jar (demo pack)", "200 g jar (demo pack)"],
    usage: USAGE_PLACEHOLDER,
    storage: STORAGE_PLACEHOLDER,
    featured: false,
    demo: true,
  },
];

export const featuredProducts: Product[] = products.filter((product) => product.featured);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.category === categorySlug);
}

export function getCategoryProductCount(categorySlug: string): number {
  return getProductsByCategory(categorySlug).length;
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const sameCategory = products.filter(
    (item) => item.category === product.category && item.slug !== product.slug,
  );

  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const fallback = products.filter(
    (item) => item.category !== product.category && item.slug !== product.slug,
  );

  return [...sameCategory, ...fallback].slice(0, limit);
}

export function getCategorySummary() {
  const counts = new Map<string, number>();
  for (const product of products) {
    counts.set(product.category, (counts.get(product.category) ?? 0) + 1);
  }
  return counts;
}

export function isValidCategorySlug(slug: string): boolean {
  return Boolean(getCategoryBySlug(slug));
}
