import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { DemoNotice } from "@/components/common/DemoNotice";
import { Badge } from "@/components/common/Badge";
import { ProductCatalogue } from "@/components/products/ProductCatalogue";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Product Catalogue",
  description:
    "Browse the GK Pharma (Unani) Limited demonstration product catalogue. Search, filter by category and sort sample Unani preparation entries.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product catalogue"
        title="A clear view of the GK Pharma range"
        description="Search and filter a demonstration catalogue structured for the complete GK Pharma product range. Official product information can replace each sample entry without changing the experience."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Products" },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="outline" className="bg-white">
            {products.length} demo entries
          </Badge>
          <Badge tone="outline" className="bg-white">
            {categories.length} categories
          </Badge>
          <Badge tone="demo">Not official product data</Badge>
        </div>
      </PageHero>

      <section className="bg-white py-10 sm:py-14">
        <Container>
          <DemoNotice className="mb-8" />
          <h2 className="sr-only">Browse and filter products</h2>
          <Suspense fallback={<CatalogueSkeleton />}>
            <ProductCatalogue />
          </Suspense>
        </Container>
      </section>
    </>
  );
}

function CatalogueSkeleton() {
  return (
    <div aria-hidden="true" className="animate-pulse">
      <div className="rounded-3xl border border-line bg-surface p-4 sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="h-12 flex-1 rounded-full bg-white" />
          <div className="h-12 rounded-full bg-white lg:w-56" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2 border-t border-line/80 pt-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-9 w-28 rounded-full bg-white" />
          ))}
        </div>
      </div>
      <div className="mt-7 h-4 w-40 rounded bg-surface" />
      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-3xl border border-line bg-white">
            <div className="aspect-square bg-surface" />
            <div className="space-y-3 p-5">
              <div className="h-3 w-20 rounded bg-surface" />
              <div className="h-5 w-3/4 rounded bg-surface" />
              <div className="h-3 w-full rounded bg-surface" />
              <div className="h-3 w-2/3 rounded bg-surface" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
