export const SITE = {
  name: "GK Pharma (Unani) Limited",
  shortName: "GK Pharma",
  tagline: "প্রকৃতির মাঝে প্রকৃত চিকিৎসা",
  description:
    "GK Pharma (Unani) Limited is a Unani medicine manufacturer based in Tongi, Gazipur, Bangladesh. Explore our company profile and product catalogue.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gk-pharma.example.com",
  locale: "en_BD",
  address: {
    street: "Station Road, Tongi",
    city: "Gazipur",
    region: "Dhaka",
    country: "Bangladesh",
    full: "Station Road, Tongi, Gazipur, Bangladesh",
  },
  contact: {
    phonePlaceholder: "+880 1XXX-XXXXXX",
    emailPlaceholder: "info@gk-pharma.example",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Our Products" },
  { href: "/categories", label: "Product Categories" },
  { href: "/quality", label: "Quality & Manufacturing" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
  { name: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
] as const;
