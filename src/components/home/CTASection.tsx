import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export function CTASection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <Image
            src="/images/banners/cta-botanical.svg"
            alt=""
            width={720}
            height={720}
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-[440px] w-[440px] opacity-70"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_55%)]"
            aria-hidden="true"
          />
          <div className="relative max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
              Product catalogue
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-[1.15] text-white sm:text-4xl">
              Ready to explore the GK Pharma range?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/80">
              Browse the product catalogue by category, or contact the company for product
              enquiries and company information.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/products" variant="white" size="lg" icon={ArrowRight}>
                Browse Product Catalogue
              </Button>
              <Button
                href="/contact"
                size="lg"
                icon={Mail}
                iconPosition="left"
                variant="onBrand"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
