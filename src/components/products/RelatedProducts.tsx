import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types/product";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { getCategoryName } from "@/data/categories";

interface RelatedProductsProps {
  products: Product[];
  categorySlug: string;
}

export function RelatedProducts({ products, categorySlug }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="border-t border-line bg-white py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Related products"
          title="More from the demonstration catalogue"
          description="Continue exploring sample entries grouped by category. All items remain clearly marked demonstration content."
          action={
            <Link
              href={`/products?category=${categorySlug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2.5 text-[12.5px] font-semibold text-navy transition-colors hover:border-brand/30 hover:text-brand"
            >
              View {getCategoryName(categorySlug)}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          }
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
