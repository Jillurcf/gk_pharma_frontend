export const SITE = {
  name: "GK Pharma (Unani) Limited",
  shortName: "GK Pharma",
  tagline: "Unani medicine, thoughtfully presented.",
  description:
    "GK Pharma (Unani) Limited is a Unani medicine manufacturer based in Tongi, Gazipur, Bangladesh. Explore our company profile and demonstration product catalogue.",
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
  demoNotice:
    "The product catalogue on this website is demonstration content. It does not represent official GK Pharma product information until verified data is published.",
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
