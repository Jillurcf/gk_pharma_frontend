import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { DemoNotice } from "@/components/common/DemoNotice";
import { ProductGrid } from "@/components/products/ProductGrid";
import { featuredProducts } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section className="relative border-y border-line bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Featured products"
          title="A preview of the demonstration catalogue"
          description="Explore eight sample entries that show how GK Pharma product information will be presented. Every item is clearly labelled as demonstration data."
          action={
            <Button href="/products" variant="outline" icon={ArrowRight} className="group">
              View Full Catalogue
            </Button>
          }
        />
        <DemoNotice compact className="mt-8" />
        <ProductGrid products={featuredProducts} className="mt-8" />
        <div className="mt-8 flex justify-center">
          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-5 py-2.5 text-[13px] font-semibold text-navy transition-colors hover:border-brand/30 hover:text-brand"
          >
            Browse by category
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
