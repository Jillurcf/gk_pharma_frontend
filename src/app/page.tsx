import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ManufacturingSection } from "@/components/home/ManufacturingSection";
import { CTASection } from "@/components/home/CTASection";
import { organizationJsonLd } from "@/lib/seo";
import { safeJsonLd } from "@/lib/utils";

export const metadata: Metadata = {
  title: "GK Pharma (Unani) Limited | Unani Medicine Manufacturer in Bangladesh",
  description:
    "GK Pharma (Unani) Limited is a Unani medicine manufacturer based at Station Road, Tongi, Gazipur, Bangladesh. Explore the company profile, quality approach and product catalogue.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationJsonLd()) }}
      />
      <Hero />
      <AboutSection />
      <FeaturedProducts />
      <CategoriesSection />
      <WhyChooseUs />
      <ManufacturingSection />
      <CTASection />
    </>
  );
}
