"use client";

import type { Category } from "@/types/product";
import { cn } from "@/lib/utils";

interface ProductFiltersProps {
  categories: Category[];
  counts: Map<string, number>;
  totalCount: number;
  activeCategory: string;
  onSelect: (category: string) => void;
}

export function ProductFilters({
  categories,
  counts,
  totalCount,
  activeCategory,
  onSelect,
}: ProductFiltersProps) {
  return (
    <div>
      <h2 className="sr-only">Filter by category</h2>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter products by category">
        <button
          type="button"
          onClick={() => onSelect("all")}
          aria-pressed={activeCategory === "all"}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[12.5px] font-semibold transition-colors",
            activeCategory === "all"
              ? "border-brand bg-brand text-white"
              : "border-line bg-white text-navy hover:border-brand/30 hover:text-brand",
          )}
        >
          All products
          <span
            className={cn(
              "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
              activeCategory === "all" ? "bg-white text-brand" : "bg-surface text-muted",
            )}
          >
            {totalCount}
          </span>
        </button>

        {categories.map((category) => {
          const active = activeCategory === category.slug;
          return (
            <button
              key={category.slug}
              type="button"
              onClick={() => onSelect(category.slug)}
              aria-pressed={active}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[12.5px] font-semibold transition-colors",
                active
                  ? "border-brand bg-brand text-white"
                  : "border-line bg-white text-navy hover:border-brand/30 hover:text-brand",
              )}
            >
              {category.shortName}
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
                  active ? "bg-white text-brand" : "bg-surface text-muted",
                )}
              >
                {counts.get(category.slug) ?? 0}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
