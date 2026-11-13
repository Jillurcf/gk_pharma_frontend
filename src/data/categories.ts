import type { Category } from "@/types/product";

export const categories: Category[] = [
  {
    slug: "herbal-botanical",
    name: "Herbal & Botanical Preparations",
    shortName: "Herbal & Botanical",
    description:
      "Plant-based preparations presented in traditional formats such as syrups, extracts and powders.",
    longDescription:
      "A demonstration category for herbal and botanical formats. Official product classifications, ingredient lists and approved label copy will be published after verification.",
    icon: "sprout",
    tone: "green",
    image: "/images/categories/herbal-botanical.svg",
    focusAreas: ["Herbal syrups", "Liquid extracts", "Botanical powders"],
  },
  {
    slug: "digestive-care",
    name: "Digestive Care",
    shortName: "Digestive Care",
    description:
      "Traditional Unani-inspired formats for everyday digestive routines, including syrups, drops and powders.",
    longDescription:
      "A demonstration category covering digestive preparation formats. Nothing on this page should be read as a treatment claim or usage instruction.",
    icon: "heart-pulse",
    tone: "amber",
    image: "/images/categories/digestive-care.svg",
    focusAreas: ["Digestive syrups", "Drops", "Husk powders"],
  },
  {
    slug: "respiratory-wellness",
    name: "Respiratory Wellness",
    shortName: "Respiratory",
    description:
      "A demonstration range of syrups, tonics and inhalant formats inspired by Unani traditions.",
    longDescription:
      "This category illustrates how respiratory-related formats may be presented once official product records are available. No medical claims are made here.",
    icon: "wind",
    tone: "teal",
    image: "/images/categories/respiratory-wellness.svg",
    focusAreas: ["Syrups", "Tonics", "Inhalants"],
  },
  {
    slug: "joint-musculoskeletal",
    name: "Joint & Musculoskeletal Support",
    shortName: "Joint & Musculoskeletal",
    description:
      "Oil, balm and liniment formats that demonstrate traditional external-use presentations.",
    longDescription:
      "A demonstration category for externally applied formats. Packaging and usage details remain pending official verification.",
    icon: "bone",
    tone: "navy",
    image: "/images/categories/joint-musculoskeletal.svg",
    focusAreas: ["Oils", "Balms", "Liniments"],
  },
  {
    slug: "womens-wellness",
    name: "Women's Wellness",
    shortName: "Women's Wellness",
    description:
      "Tonic, syrup and capsule formats grouped as a demonstration women's wellness category.",
    longDescription:
      "This category is illustrative only. Official formulations, approved claims and pack details will be added after regulatory verification.",
    icon: "flower",
    tone: "plum",
    image: "/images/categories/womens-wellness.svg",
    focusAreas: ["Tonics", "Syrups", "Capsules"],
  },
  {
    slug: "general-wellness",
    name: "General Wellness & Tonics",
    shortName: "General Wellness",
    description:
      "Everyday tonic, powder and electuary formats presented as part of the demonstration catalogue.",
    longDescription:
      "A demonstration category for general wellness formats. No product on this website is represented as an official GK Pharma product.",
    icon: "sparkles",
    tone: "red",
    image: "/images/categories/general-wellness.svg",
    focusAreas: ["Tonics", "Powders", "Electuaries"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryName(slug: string): string {
  return getCategoryBySlug(slug)?.name ?? "Uncategorised";
}
