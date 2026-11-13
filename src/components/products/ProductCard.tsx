import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/product";
import { getCategoryName } from "@/data/categories";
import { Badge } from "@/components/common/Badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const categoryName = getCategoryName(product.category);

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-card",
        className,
      )}
    >
      <div className="relative">
        <Link
          href={`/products/${product.slug}`}
          className="relative block aspect-square overflow-hidden bg-surface"
        >
          <Image
            src={product.image}
            alt={`${product.name} demonstration pack visual`}
            fill
            sizes="(min-width: 1280px) 300px, (min-width: 768px) 33vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute left-3.5 top-3.5">
            <Badge tone="outline" className="bg-white/90 backdrop-blur">
              {categoryName}
            </Badge>
          </span>
          <span className="absolute right-3.5 top-3.5">
            <Badge tone="demo">Demo</Badge>
          </span>
        </Link>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
          {product.productForm ?? "Unani preparation"}
        </p>
        <h3 className="mt-2 text-lg font-bold leading-snug text-navy">
          <Link
            href={`/products/${product.slug}`}
            className="transition-colors hover:text-brand"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-muted">
          {product.shortDescription}
        </p>
        <div className="mt-auto pt-5">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            View Details
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
