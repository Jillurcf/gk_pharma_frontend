import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/types/product";
import { CategoryIcon } from "@/components/common/CategoryIcon";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
  count: number;
  className?: string;
  priority?: boolean;
}

export function CategoryCard({ category, count, className, priority = false }: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-card",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={category.image}
          alt={`${category.name} category illustration`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-2xl bg-white/95 p-1 shadow-soft backdrop-blur">
          <CategoryIcon
            icon={category.icon}
            tone={category.tone}
            className="h-10 w-10 rounded-xl"
            iconClassName="h-5 w-5"
          />
        </span>
        <span className="absolute right-4 top-4 rounded-full border border-line bg-white/90 px-2.5 py-1 text-[10.5px] font-semibold text-muted backdrop-blur">
          {count} {count === 1 ? "product" : "products"}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[17px] font-bold leading-snug text-navy transition-colors group-hover:text-brand">
          {category.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted">
          {category.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand">
          Explore category
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
