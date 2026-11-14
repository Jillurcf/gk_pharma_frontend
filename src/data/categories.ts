import type { Category } from "@/types/product";

export const categories: Category[] = [
  {
    slug: "liquid-products",
    name: "Liquid Products",
    shortName: "Liquid Products",
    description:
      "Traditional Unani syrups and liquid preparations.",
    longDescription:
      "Syrups, liquid preparations and tonics within the GK Pharma product range, presented with clear product information.",
    icon: "droplet",
    tone: "green",
    image: "/images/categories/liquid-products.svg",
    focusAreas: ["Syrups", "Liquid preparations", "Tonics"],
  },
  {
    slug: "capsule-products",
    name: "Capsule Products",
    shortName: "Capsule Products",
    description:
      "Encapsulated Unani preparations in the capsule range.",
    longDescription:
      "Capsule formats within the GK Pharma product range, presented with clear product information.",
    icon: "capsule",
    tone: "amber",
    image: "/images/categories/capsule-products.svg",
    focusAreas: ["Capsules", "Herbal capsules", "Wellness capsules"],
  },
  {
    slug: "tablet-products",
    name: "Tablet Products",
    shortName: "Tablet Products",
    description:
      "Compressed tablet formats in the product catalogue.",
    longDescription:
      "Tablet formats within the GK Pharma product range, presented with clear product information.",
    icon: "tablet",
    tone: "navy",
    image: "/images/categories/tablet-products.svg",
    focusAreas: ["Tablets", "Herbal tablets", "Digestive tablets"],
  },
  {
    slug: "clinical-items",
    name: "Clinical Items",
    shortName: "Clinical Items",
    description:
      "Clinical-format items including capsules, powders, oils and lotions.",
    longDescription:
      "Clinical-format products within the GK Pharma range, presented with clear product information.",
    icon: "clinical",
    tone: "teal",
    image: "/images/categories/clinical-items.svg",
    focusAreas: ["Capsules", "Powders", "Oils & lotions"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryName(slug: string): string {
  return getCategoryBySlug(slug)?.name ?? "Uncategorised";
}
