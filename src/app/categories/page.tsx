import type { Metadata } from "next";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { DemoNotice } from "@/components/common/DemoNotice";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { CategoryCard } from "@/components/products/CategoryCard";
import { categories } from "@/data/categories";
import { getCategoryProductCount, products } from "@/data/products";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Product Categories",
  description:
    "Browse GK Pharma (Unani) Limited demonstration product categories, from herbal and botanical preparations to general wellness and tonics.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Product categories"
        title="Find the right part of the catalogue"
        description="Explore six editable focus areas that organise the demonstration product range. Selecting a category opens the catalogue with that filter already applied."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Product Categories" },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="outline" className="bg-white">
            {categories.length} categories
          </Badge>
          <Badge tone="outline" className="bg-white">
            {products.length} demo products
          </Badge>
          <Badge tone="demo">Catalogue data pending verification</Badge>
        </div>
      </PageHero>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <DemoNotice className="mb-8" />
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-navy">All categories</h2>
              <p className="mt-1.5 text-sm text-muted">
                Product counts update automatically from the central product data file.
              </p>
            </div>
            <Button href="/products" variant="ghost" size="sm" icon={ArrowRight}>
              All products
            </Button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.slug}
                category={category}
                count={getCategoryProductCount(category.slug)}
                priority={index < 3}
              />
            ))}
          </div>

          <div className="mt-12 grid gap-6 rounded-3xl border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="text-xl font-bold text-navy sm:text-2xl">
                Not sure which category you need?
              </h2>
              <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-muted">
                The catalogue search covers product names, forms and categories. You can also
                contact the company for help with a specific product enquiry.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row lg:justify-end">
              <Button href="/products" icon={ArrowRight}>
                Search Catalogue
              </Button>
              <Button href="/contact" variant="outline" icon={Mail} iconPosition="left">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
