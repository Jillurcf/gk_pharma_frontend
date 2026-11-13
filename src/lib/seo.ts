import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { safeJsonLd } from "@/lib/utils";

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      title,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${SITE.name} — Unani medicine manufacturer in Bangladesh`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: absoluteUrl("/images/logo/gk-pharma-logo.png"),
    image: absoluteUrl("/images/logo/gk-pharma-logo.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: "BD",
    },
    knowsAbout: ["Unani medicine", "Herbal medicine", "Pharmaceutical manufacturing"],
  };
}

export function productJsonLd({
  name,
  description,
  image,
  slug,
  category,
}: {
  name: string;
  description: string;
  image: string;
  slug: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description: `${description} Demonstration catalogue entry only — not an official GK Pharma product.`,
    image: absoluteUrl(image),
    category,
    url: absoluteUrl(`/products/${slug}`),
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: SITE.name,
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function jsonLdScript(data: unknown) {
  return safeJsonLd(data);
}
