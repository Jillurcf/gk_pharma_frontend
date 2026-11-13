import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/products/ProductDetails";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { getCategoryName } from "@/data/categories";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  productJsonLd,
} from "@/lib/seo";
import { safeJsonLd } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}


export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  const categoryName = getCategoryName(product.category);
  const description = `${product.shortDescription} Demonstration catalogue entry only — not an official GK Pharma product.`;
  const metadata = createPageMetadata({
    title: product.name,
    description,
    path: `/products/${product.slug}`,
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      title: `${product.name} | Demo Catalogue`,
      description,
      images: [
        {
          url: product.image,
          alt: `${product.name} demonstration pack visual`,
        },
      ],
    },
    other: {
      "product:category": categoryName,
      "product:status": "demonstration",
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);
  const categoryName = getCategoryName(product.category);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            productJsonLd({
              name: product.name,
              description: product.shortDescription,
              image: product.image,
              slug: product.slug,
              category: categoryName,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Our Products", path: "/products" },
              { name: product.name, path: `/products/${product.slug}` },
            ]),
          ),
        }}
      />
      <ProductDetails product={product} />
      <RelatedProducts products={related} categorySlug={product.category} />
    </>
  );
}
