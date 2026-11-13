import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Compass,
  Eye,
  Factory,
  HandHeart,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { SITE } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about GK Pharma (Unani) Limited: our Unani medicine focus, mission and vision, values, quality philosophy and location in Tongi, Gazipur, Bangladesh.",
  path: "/about",
});

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We keep content boundaries clear: demo data is labelled, unverified claims stay unpublished and placeholders are visible.",
  },
  {
    icon: Eye,
    title: "Clarity",
    description:
      "Product information is organised consistently so visitors can find what they need without confusion.",
  },
  {
    icon: Sparkles,
    title: "Quality thinking",
    description:
      "Quality considerations shape how we describe sourcing, production and control processes across the website.",
  },
  {
    icon: Leaf,
    title: "Respect for tradition",
    description:
      "Unani medicine is a traditional discipline, and we present it with care rather than exaggeration.",
  },
];

const glance = [
  { label: "Company", value: "GK Pharma (Unani) Limited" },
  { label: "Location", value: "Tongi, Gazipur, Bangladesh" },
  { label: "Focus", value: "Unani medicine manufacturing" },
  { label: "Catalogue", value: "Demonstration product data" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the company"
        title="A Unani medicine manufacturer with a clear corporate purpose"
        description="GK Pharma (Unani) Limited is based in Tongi, Gazipur. This page introduces the company's identity, direction and approach to presenting Unani medicine professionally."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="outline" className="bg-white">
            Unani medicine
          </Badge>
          <Badge tone="outline" className="bg-white">
            Tongi, Gazipur
          </Badge>
          <Badge tone="outline" className="bg-white">
            Bangladesh
          </Badge>
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Company overview"
              title="Clear information, presented with corporate care"
              description="This website is designed as a long-term digital home for GK Pharma. It introduces the company, documents its manufacturing philosophy and provides a scalable product catalogue structure."
            />
            <div className="mt-6 space-y-4 text-[14.5px] leading-relaxed text-muted">
              <p>
                The company&apos;s address at Station Road, Tongi, Gazipur is the verified
                location used throughout this website. Other contact channels are clearly
                marked as placeholders until official details are supplied.
              </p>
              <p>
                Product content is currently demonstration data. This allows the product
                catalogue, category filters, search and product detail experience to be
                reviewed before official formulations, approved labels and regulatory
                information are published.
              </p>
            </div>

            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {glance.map((item) => (
                <div key={item.label} className="rounded-2xl border border-line bg-surface p-4">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-[13px] font-semibold leading-snug text-navy">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div
              className="absolute -right-3 -top-3 h-full w-full rounded-[2.25rem] border border-brand/20"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface shadow-soft">
              <Image
                src="/images/company/heritage.svg"
                alt="Illustration of traditional Unani preparation vessels, botanicals and a mortar and pestle"
                width={1000}
                height={1200}
                priority
                sizes="(min-width: 1024px) 540px, 92vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-line bg-white/95 px-5 py-4 shadow-card backdrop-blur">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                Our perspective
              </p>
              <p className="mt-1.5 text-sm font-semibold leading-snug text-navy">
                Traditional knowledge deserves a professional, honest presentation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-light text-brand">
                <Target className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-navy">Our mission</h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                To present Unani medicine with clarity, consistency and care. That means
                building a reliable structure for product information, maintaining a calm and
                professional digital presence, and publishing claims only when they can be
                properly verified.
              </p>
            </div>
            <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#ecedf8] text-navy">
                <Eye className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-navy">Our vision</h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                To become a dependable online reference for GK Pharma products — a place where
                distributors, retailers, healthcare professionals and the public can find
                verified information in a format that is easy to understand and navigate.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-dashed border-line bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface text-muted">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-bold text-navy">Company history</h2>
                  <Badge tone="neutral">Placeholder</Badge>
                </div>
                <p className="mt-2 max-w-3xl text-[13.5px] leading-relaxed text-muted">
                  Founding date, company milestones and leadership information have not been
                  officially supplied. This section is intentionally left as a placeholder and
                  will be replaced with verified company history. It does not currently contain
                  any invented dates or events.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our values"
            title="Principles that guide the presentation of the company"
            description="These values describe how this website and its content are approached. They are not regulatory or certification claims."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-soft"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-light text-brand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-bold text-navy">{value.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-line shadow-soft">
            <Image
              src="/images/company/botanicals.svg"
              alt="Illustration of botanical herb cultivation rows under a soft sun"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 540px, 92vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Commitment to Unani medicine"
              title="Traditional discipline, modern communication"
              description="Unani medicine is central to the company's identity. The website treats that tradition with restraint: it explains the company's focus without making unsupported therapeutic claims."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Unani-inspired product formats are organised into clear categories.",
                "Product records reserve space for verified ingredients, packaging and approved usage.",
                "Quality and manufacturing content is presented as a documented process, not a marketing slogan.",
                "Demonstration content is consistently labelled so it is never mistaken for official data.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-muted">
                  <Compass className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Manufacturing & quality"
              title="A philosophy built around process and accountability"
              description="Sourcing, production, quality control and packaging are presented as connected steps. Official certifications and approvals will only be displayed once verified."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="outline">Sourcing</Badge>
              <Badge tone="outline">Production</Badge>
              <Badge tone="outline">Quality control</Badge>
              <Badge tone="outline">Packaging</Badge>
            </div>
            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <Button href="/quality" icon={ArrowRight}>
                Our Quality Approach
              </Button>
              <Button href="/contact" variant="outline">
                Contact the Company
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/company/factory.svg"
                alt="Illustration of a pharmaceutical manufacturing facility"
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 260px, 44vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/company/lab.svg"
                alt="Illustration of a quality control laboratory"
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 260px, 44vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Company location"
            title="Based in Tongi, Gazipur"
            description="The verified company address is shown below. The map is a placeholder until an official Google Maps embed is supplied."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-line bg-[#e8f1eb]">
              <div
                className="absolute inset-0 bg-grid-soft opacity-70"
                aria-hidden="true"
              />
              <div
                className="absolute left-1/4 top-0 h-full w-8 -rotate-12 bg-white/50"
                aria-hidden="true"
              />
              <div
                className="absolute left-0 top-1/3 h-8 w-full rotate-6 bg-white/50"
                aria-hidden="true"
              />
              <div className="relative flex h-full min-h-[280px] flex-col items-center justify-center p-6 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-brand shadow-soft">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-4 text-sm font-bold text-navy">Google Maps embed placeholder</p>
                <p className="mt-1 max-w-xs text-[12px] leading-relaxed text-muted">
                  An interactive map will be added once the official location embed is
                  confirmed.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl border border-line bg-white p-6">
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-light text-brand">
                  <Factory className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">Company address</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  {SITE.name}
                  <br />
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.region}
                  <br />
                  {SITE.address.country}
                </p>
                <p className="mt-4 text-[12px] leading-relaxed text-muted">
                  Phone and email details are placeholders until officially confirmed.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <Button href="/contact" size="sm" icon={ArrowRight}>
                  Contact Details
                </Button>
                <Link
                  href="/quality"
                  className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-line px-4 text-[12.5px] font-semibold text-navy transition-colors hover:border-brand/30 hover:text-brand"
                >
                  Manufacturing
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14">
        <Container>
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="text-xl font-bold text-navy">Explore the demonstration catalogue</h2>
              <p className="mt-1.5 text-[13.5px] text-muted">
                See how the complete product range will be presented for GK Pharma.
              </p>
            </div>
            <Button href="/products" icon={ArrowRight}>
              Product Catalogue
            </Button>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-center text-[11px] text-muted">
            <HandHeart className="h-3.5 w-3.5" aria-hidden="true" />
            This website contains demonstration product data, not official product records.
          </p>
        </Container>
      </section>
    </>
  );
}
