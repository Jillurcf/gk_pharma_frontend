import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CategoryCard } from "@/components/products/CategoryCard";
import { categories } from "@/data/categories";
import { getCategoryProductCount } from "@/data/products";

export function CategoriesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Product categories"
          title="Explore the catalogue by focus area"
          description="Categories are part of a single editable data file, so the catalogue, counts and filters stay in sync as official products are added."
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              category={category}
              count={getCategoryProductCount(category.slug)}
            />
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy transition-colors hover:text-brand"
          >
            View all categories
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
