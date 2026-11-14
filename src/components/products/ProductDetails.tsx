import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ClipboardList,
  FlaskConical,
  Info,
  Mail,
  MapPin,
  Package,
  ShieldAlert,
} from "lucide-react";
import type { Product } from "@/types/product";
import { getCategoryName } from "@/data/categories";
import { SITE } from "@/data/site";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Container } from "@/components/common/Container";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const categoryName = getCategoryName(product.category);
  const enquiryHref = `/contact?product=${encodeURIComponent(product.name)}`;

  return (
    <>
      <section className="border-b border-line bg-surface">
        <Container className="py-7 lg:py-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Our Products", href: "/products" },
              { label: product.name },
            ]}
            className="mb-5"
          />
          <p
            lang="bn"
            className="mb-7 flex items-center gap-3 font-bengali text-base font-bold leading-snug text-brand sm:text-lg"
          >
            <span className="h-0.5 w-7 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {SITE.tagline}
          </p>

          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={`${product.name} product visual`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 560px, 92vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-4 top-4">
                  <Badge tone="outline" className="bg-white/95 backdrop-blur">
                    {categoryName}
                  </Badge>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between px-1 text-[11px] text-muted">
                <span>Official pack artwork pending</span>
                <span className="font-mono">{product.id}</span>
              </div>

              <div className="mt-6 rounded-2xl border border-line bg-white p-5">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-light text-brand">
                    <Building2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h2 className="text-sm font-bold text-navy">Manufacturer</h2>
                </div>
                <p className="mt-3 text-[13px] font-medium text-navy">{SITE.name}</p>
                <p className="mt-1 flex items-start gap-2 text-[12.5px] leading-relaxed text-muted">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                  {SITE.address.full}
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-brand hover:text-brand-dark"
                >
                  Company contact details
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="brand">{categoryName}</Badge>
                <Badge tone="neutral">{product.productForm}</Badge>
              </div>

              <h1 className="mt-4 text-3xl font-bold leading-[1.12] text-navy sm:text-4xl lg:text-[2.8rem]">
                {product.name}
              </h1>
              <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-muted">
                {product.shortDescription}
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-line bg-white p-3.5">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Category
                  </dt>
                  <dd className="mt-1.5 text-[12.5px] font-semibold leading-snug text-navy">
                    {categoryName}
                  </dd>
                </div>
                <div className="rounded-xl border border-line bg-white p-3.5">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Product form
                  </dt>
                  <dd className="mt-1.5 text-[12.5px] font-semibold leading-snug text-navy">
                    {product.productForm ?? "Pending"}
                  </dd>
                </div>
                <div className="col-span-2 rounded-xl border border-line bg-white p-3.5 sm:col-span-1">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Catalogue status
                  </dt>
                  <dd className="mt-1.5 text-[12.5px] font-semibold leading-snug text-brand">
                    Listed
                  </dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                <Button href={enquiryHref} size="lg" icon={Mail} iconPosition="left">
                  Enquire About This Product
                </Button>
                <Button href="/products" variant="outline" size="lg" icon={ArrowLeft} iconPosition="left">
                  Back to Products
                </Button>
              </div>

              <div className="mt-10 space-y-6">
                <section aria-labelledby="product-description">
                  <h2 id="product-description" className="text-xl font-bold text-navy">
                    Product description
                  </h2>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                    {product.description}
                  </p>
                  <div className="mt-4 rounded-2xl border border-line bg-white p-5">
                    <h3 className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-navy">
                      <ClipboardList className="h-4 w-4 text-brand" aria-hidden="true" />
                      Product overview
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                      {product.overview}
                    </p>
                  </div>
                </section>

                <section aria-labelledby="product-ingredients">
                  <h2 id="product-ingredients" className="text-xl font-bold text-navy">
                    Key ingredients
                  </h2>
                  <div className="mt-3 rounded-2xl border border-amber-200/70 bg-[#fffaf0] p-5">
                    <p className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#7a5a22]">
                      <FlaskConical className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      Ingredient details are shown only when they can be officially verified.
                      The list below is a clearly marked placeholder.
                    </p>
                    <ul className="mt-3 space-y-2">
                      {(product.ingredients ?? ["Ingredient information pending verification."]).map(
                        (ingredient) => (
                          <li
                            key={ingredient}
                            className="flex items-start gap-2 text-[13px] leading-relaxed text-[#7a5a22]"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b7791f]"
                              aria-hidden="true"
                            />
                            {ingredient}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </section>

                <div className="grid gap-5 sm:grid-cols-2">
                  <section aria-labelledby="product-packaging">
                    <h2 id="product-packaging" className="text-xl font-bold text-navy">
                      Form & packaging
                    </h2>
                    <div className="mt-3 rounded-2xl border border-line bg-white p-5">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
                        {product.productForm}
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {(product.packaging ?? ["Packaging information pending."]).map((pack) => (
                          <li
                            key={pack}
                            className="flex items-start gap-2 text-[13px] leading-relaxed text-muted"
                          >
                            <Package
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand"
                              aria-hidden="true"
                            />
                            {pack}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  <section aria-labelledby="product-storage">
                    <h2 id="product-storage" className="text-xl font-bold text-navy">
                      Storage instructions
                    </h2>
                    <div className="mt-3 rounded-2xl border border-line bg-white p-5">
                      <p className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted">
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                        {product.storage}
                      </p>
                    </div>
                  </section>
                </div>

                <section aria-labelledby="product-usage">
                  <h2 id="product-usage" className="text-xl font-bold text-navy">
                    Usage information
                  </h2>
                  <div className="mt-3 rounded-2xl border border-[#f1d4d2] bg-[#fdf5f4] p-5">
                    <p className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#7a3a36]">
                      <ShieldAlert
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      {product.usage}
                    </p>
                  </div>
                </section>

                <div className="rounded-2xl bg-navy p-6 text-white sm:p-7">
                  <h2 className="text-xl font-bold text-white">Have a product enquiry?</h2>
                  <p className="mt-2 max-w-lg text-[13.5px] leading-relaxed text-white/65">
                    Contact the company about this product or distribution enquiries. The
                    contact form validates on your device and does not send messages yet.
                  </p>
                  <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                    <Button href={enquiryHref} variant="white" icon={Mail} iconPosition="left">
                      Contact for Product Enquiries
                    </Button>
                    <Button
                      href="/products"
                      size="md"
                      icon={ArrowLeft}
                      iconPosition="left"
                      variant="onBrand"
                    >
                      All Products
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
