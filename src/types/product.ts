export interface Product {
  id: string;
  slug: string;
  name: string;
  /** Category slug, e.g. "herbal-botanical" */
  category: string;
  shortDescription: string;
  description: string;
  overview: string;
  image: string;
  gallery?: string[];
  ingredients?: string[];
  productForm?: string;
  packaging?: string[];
  usage?: string;
  storage?: string;
  featured: boolean;
  /** Marks demonstration data that must not be presented as an official product. */
  demo: boolean;
}

export type CategoryTone = "green" | "red" | "navy" | "amber" | "teal" | "plum";

export interface Category {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  icon: string;
  tone: CategoryTone;
  image: string;
  focusAreas: string[];
}
