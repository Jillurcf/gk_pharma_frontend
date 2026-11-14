"use client";

import { useMemo, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowDownWideNarrow, Loader2, SearchX } from "lucide-react";
import type { Product } from "@/types/product";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { getCategoryName } from "@/data/categories";
import { ProductSearch } from "@/components/products/ProductSearch";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured first" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
  { value: "category", label: "Category" },
] as const;

type SortKey = (typeof SORT_OPTIONS)[number]["value"];

const PAGE_SIZE = 9;

const validCategorySlugs = new Set(categories.map((category) => category.slug));

export function ProductCatalogue() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const query = searchParams.get("q") ?? "";
  const rawCategory = searchParams.get("category") ?? "all";
  const activeCategory =
    rawCategory === "all" || validCategorySlugs.has(rawCategory) ? rawCategory : "all";
  const rawSort = (searchParams.get("sort") ?? "featured") as SortKey;
  const sort = SORT_OPTIONS.some((option) => option.value === rawSort) ? rawSort : "featured";

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const product of products) {
      counts.set(product.category, (counts.get(product.category) ?? 0) + 1);
    }
    return counts;
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      if (!matchesCategory) return false;
      if (!needle) return true;

      const haystack = [
        product.name,
        product.shortDescription,
        product.productForm ?? "",
        getCategoryName(product.category),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(needle);
    });

    return sortProducts(result, sort);
  }, [activeCategory, query, sort]);

  const updateQuery = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    for (const [key, value] of Object.entries(updates)) {
      const shouldRemove =
        !value ||
        value === "all" ||
        (key === "sort" && value === "featured") ||
        (key === "q" && !value.trim());

      if (shouldRemove) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    }

    const queryString = params.toString();
    startTransition(() => {
      router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
        scroll: false,
      });
    });
  };

  const clearFilters = () => {
    startTransition(() => {
      router.replace(pathname, { scroll: false });
    });
  };

  const hasFilters = Boolean(query || activeCategory !== "all" || sort !== "featured");

  return (
    <div>
      <div className="rounded-3xl border border-line bg-surface p-4 sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="flex-1">
            <ProductSearch value={query} onChange={(value) => updateQuery({ q: value })} />
          </div>
          <div className="relative shrink-0 lg:w-56">
            <label htmlFor="product-sort" className="sr-only">
              Sort products
            </label>
            <ArrowDownWideNarrow
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted/70"
              aria-hidden="true"
            />
            <select
              id="product-sort"
              value={sort}
              onChange={(event) => updateQuery({ sort: event.target.value })}
              className="h-12 w-full appearance-none rounded-full border border-line bg-white pl-10 pr-9 text-[13px] font-medium text-navy transition-colors focus:border-brand/40 focus:outline-none focus:ring-2 focus:ring-brand/20"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <svg
              viewBox="0 0 20 20"
              className="pointer-events-none absolute right-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="mt-4 border-t border-line/80 pt-4">
          <ProductFilters
            categories={categories}
            counts={categoryCounts}
            totalCount={products.length}
            activeCategory={activeCategory}
            onSelect={(category) => updateQuery({ category })}
          />
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
        <p
          className="flex items-center gap-2 text-[13px] text-muted"
          aria-live="polite"
          aria-atomic="true"
        >
          {isPending && <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />}
          Showing <span className="font-semibold text-navy">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "product" : "products"}
          {activeCategory !== "all" && (
            <span className="hidden sm:inline">in {getCategoryName(activeCategory)}</span>
          )}
          {query && (
            <span className="hidden sm:inline">
              for &ldquo;<span className="font-medium text-navy">{query}</span>&rdquo;
            </span>
          )}
        </p>

        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-[12.5px] font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            Clear all filters
          </button>
        )}
      </div>

      <div aria-busy={isPending} className={cn("transition-opacity", isPending && "opacity-60")}>
        <CatalogueResults
          key={`${query}|${activeCategory}|${sort}`}
          products={filtered}
          onClear={clearFilters}
        />
      </div>
    </div>
  );
}

function CatalogueResults({
  products: filteredProducts,
  onClear,
}: {
  products: Product[];
  onClear: () => void;
}) {
  const [visible, setVisible] = useState(PAGE_SIZE);

  if (filteredProducts.length === 0) {
    return (
      <div className="mt-6 flex flex-col items-center rounded-3xl border border-line bg-white px-6 py-16 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-surface text-muted">
          <SearchX className="h-7 w-7" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-xl font-bold text-navy">No products found</h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          We could not find a product matching your search or category.
          Try a different term or reset the filters.
        </p>
        <Button onClick={onClear} className="mt-6" variant="primary">
          Clear all filters
        </Button>
      </div>
    );
  }

  const shown = filteredProducts.slice(0, visible);
  const remaining = filteredProducts.length - shown.length;

  return (
    <div className="mt-6">
      <ProductGrid products={shown} />
      <div className="mt-10 flex flex-col items-center gap-3">
        <p className="text-[12px] text-muted" aria-live="polite">
          Showing {shown.length} of {filteredProducts.length} products
        </p>
        {remaining > 0 && (
          <Button
            variant="outline"
            onClick={() => setVisible((count) => count + PAGE_SIZE)}
            className="group"
          >
            Load More ({remaining} remaining)
          </Button>
        )}
      </div>
    </div>
  );
}

function sortProducts(items: Product[], sort: SortKey): Product[] {
  const result = [...items];

  switch (sort) {
    case "name-asc":
      return result.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return result.sort((a, b) => b.name.localeCompare(a.name));
    case "category":
      return result.sort((a, b) => {
        const categoryCompare = getCategoryName(a.category).localeCompare(
          getCategoryName(b.category),
        );
        return categoryCompare !== 0 ? categoryCompare : a.name.localeCompare(b.name);
      });
    default:
      return result.sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        return a.name.localeCompare(b.name);
      });
  }
}
