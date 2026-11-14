import type { Product } from "@/types/product";
import { getCategoryBySlug, getCategoryName } from "@/data/categories";
import productSeeds from "@/data/product-seeds.json";

const INGREDIENTS_PLACEHOLDER =
  "Official ingredient information is pending verification.";

const STORAGE_PLACEHOLDER =
  "Store in a cool, dry place away from direct sunlight. Final storage instructions will follow the approved product label.";

interface ProductSeed {
  slug: string;
  name: string;
  form: string;
  indications: string;
  usage: string;
  featured?: boolean;
}

type ProductSeedMap = Record<string, ProductSeed[]>;

const seedMap = productSeeds as unknown as ProductSeedMap;

const CATEGORY_PREFIX: Record<string, string> = {
  "liquid-products": "LIQ",
  "capsule-products": "CAP",
  "tablet-products": "TAB",
  "clinical-items": "CLI",
};

function buildProducts(): Product[] {
  const result: Product[] = [];

  for (const [categorySlug, seeds] of Object.entries(seedMap)) {
    const prefix = CATEGORY_PREFIX[categorySlug] ?? "GEN";
    const categoryName = getCategoryName(categorySlug);

    seeds.forEach((seed, index) => {
      result.push({
        id: `GK-${prefix}-${String(index + 1).padStart(3, "0")}`,
        slug: seed.slug,
        name: seed.name,
        category: categorySlug,
        shortDescription: seed.indications,
        description: seed.indications,
        overview: `A traditional Unani ${seed.form.toLowerCase()} in the ${categoryName} range. Official formulation, approval and label details are pending verification.`,
        image: `/images/products/${seed.slug}.svg`,
        ingredients: [INGREDIENTS_PLACEHOLDER],
        productForm: seed.form,
        packaging: [`Standard ${seed.form.toLowerCase()} pack`],
        usage: seed.usage,
        storage: STORAGE_PLACEHOLDER,
        featured: seed.featured ?? false,
      });
    });
  }

  return result;
}

export const products: Product[] = buildProducts();

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
