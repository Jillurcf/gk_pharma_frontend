import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";

const assurances = [
  { label: "Traditional Unani knowledge" },
  { label: "Quality-focused processes" },
  { label: "Based in Gazipur, Bangladesh" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-soft opacity-50 mask-fade-b"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-navy/5 blur-3xl"
        aria-hidden="true"
      />
      <Image
        src="/images/banners/hero-botanical.svg"
        alt=""
        width={720}
        height={720}
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 hidden h-[560px] w-[560px] opacity-60 lg:block"
      />

      <Container className="relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-20">
        <div className="animate-fade-up">
          <Badge tone="outline" className="gap-2 bg-white px-3 py-1.5" dot>
            Unani medicine · Tongi, Gazipur
          </Badge>
          <h1 className="mt-6 max-w-xl text-4xl font-bold leading-[1.06] tracking-[-0.03em] text-navy sm:text-5xl lg:text-[3.65rem]">
            Unani medicine,
            <span className="block text-brand">presented with care.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-muted sm:text-[17px]">
            GK Pharma (Unani) Limited is a Unani medicine manufacturer based in
            Bangladesh. Explore our company, our approach to quality, and a
            demonstration catalogue built to present product information clearly.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/products" size="lg" icon={ArrowRight}>
              Explore Our Products
            </Button>
            <Button href="/about" size="lg" variant="outline">
              Learn More About Us
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6">
            {assurances.map((item) => (
              <span
                key={item.label}
                className="flex items-center gap-2 text-[12.5px] font-medium text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto aspect-square w-full max-w-[540px]">
            <div
              className="absolute inset-4 rounded-[2.75rem] border border-white/70 bg-white/70 shadow-soft backdrop-blur-sm"
              aria-hidden="true"
            />
            <div
              className="absolute inset-10 rounded-full bg-brand/10"
              aria-hidden="true"
            />
            <div className="absolute left-1/2 top-1/2 aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white bg-white shadow-card">
              <Image
                src="/images/products/gulnar-herbal-syrup.svg"
                alt="Gulnar Herbal Syrup demonstration pack visual"
                fill
                priority
                sizes="(min-width: 1024px) 320px, 60vw"
                className="object-cover"
              />
            </div>

            <div className="absolute left-0 top-8 hidden w-[31%] overflow-hidden rounded-2xl border border-white bg-white shadow-card sm:block animate-float [animation-delay:1s]">
              <div className="relative aspect-square">
                <Image
                  src="/images/products/shifa-respiratory-syrup.svg"
                  alt="Shifa Respiratory Syrup demonstration pack visual"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-6 right-0 hidden w-[34%] overflow-hidden rounded-2xl border border-white bg-white shadow-card sm:block animate-float">
              <div className="relative aspect-square">
                <Image
                  src="/images/products/moringa-joint-oil.svg"
                  alt="Moringa Joint Oil demonstration pack visual"
                  fill
                  sizes="190px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -right-1 top-6 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-soft backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                Catalogue
              </p>
              <p className="mt-1 text-sm font-bold text-navy">18 demo products</p>
            </div>

            <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-full border border-line bg-white/95 px-3.5 py-2 text-[11px] font-semibold text-navy shadow-soft backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              Made in Bangladesh
            </div>
          </div>

          <p className="mt-4 text-center text-[11px] text-muted">
            Product visuals are demonstration artwork.{" "}
            <Link href="/products" className="underline decoration-line underline-offset-4 hover:text-brand">
              View catalogue
            </Link>
            <ArrowUpRight className="ml-0.5 inline h-3 w-3" aria-hidden="true" />
          </p>
        </div>
      </Container>
    </section>
  );
}
