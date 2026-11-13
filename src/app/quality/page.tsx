import type { Metadata } from "next";
import Image from "next/image";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Factory,
  FileSearch,
  FlaskConical,
  Leaf,
  Mail,
  Microscope,
  PackageCheck,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Quality & Manufacturing",
  description:
    "Explore GK Pharma (Unani) Limited's manufacturing philosophy, sourcing approach, production process and quality control framework. Certifications are published only when verified.",
  path: "/quality",
});

const principles = [
  {
    title: "Consistency",
    description:
      "A consistent process is the foundation of a dependable product. The website is structured to document production stages in a repeatable way.",
  },
  {
    title: "Traceability",
    description:
      "Sourcing and batch documentation are presented as connected records, supporting a clear chain from raw material to finished pack.",
  },
  {
    title: "Accountability",
    description:
      "Quality checkpoints are treated as responsibilities, not decorations. Specific procedures and results will be published once verified.",
  },
];

const productionSteps = [
  {
    icon: Leaf,
    step: "01",
    title: "Raw material sourcing",
    description:
      "Botanical materials and supplier information are documented before production begins.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Incoming inspection",
    description:
      "Materials are reviewed against documented specifications as part of the quality framework.",
  },
  {
    icon: FlaskConical,
    step: "03",
    title: "Formulation & production",
    description:
      "Traditional Unani formats are prepared through controlled, documented production stages.",
  },
  {
    icon: PackageCheck,
    step: "04",
    title: "Packaging & release",
    description:
      "Packaging, labelling and final checks complete the batch before storage and dispatch.",
  },
];

const controlAreas = [
  {
    icon: Microscope,
    title: "Raw material verification",
    description:
      "Incoming materials are considered against identity and quality criteria before use.",
  },
  {
    icon: ClipboardCheck,
    title: "In-process checks",
    description:
      "Production stages include checkpoints to support consistency and early issue detection.",
  },
  {
    icon: FlaskConical,
    title: "Finished product review",
    description:
      "Final products are reviewed before release according to the documented quality framework.",
  },
  {
    icon: Boxes,
    title: "Packaging & labelling review",
    description:
      "Pack and label details are checked for consistency with approved product information.",
  },
  {
    icon: FileSearch,
    title: "Batch documentation",
    description:
      "Batch records support traceability and provide a reference for quality review.",
  },
  {
    icon: Warehouse,
    title: "Storage & dispatch",
    description:
      "Storage and dispatch steps are documented to maintain product condition before delivery.",
  },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Manufacturing"
        title="A process-led approach to Unani manufacturing"
        description="This page presents GK Pharma's manufacturing philosophy and quality framework. Specific procedures, audit results and certifications will be published only after official verification."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Quality & Manufacturing" },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="outline" className="bg-white">
            Sourcing
          </Badge>
          <Badge tone="outline" className="bg-white">
            Production
          </Badge>
          <Badge tone="outline" className="bg-white">
            Quality control
          </Badge>
          <Badge tone="demo">Certifications pending verification</Badge>
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-line shadow-soft">
              <Image
                src="/images/company/factory.svg"
                alt="Illustration of a modern pharmaceutical manufacturing facility surrounded by greenery"
                width={1200}
                height={900}
                priority
                sizes="(min-width: 1024px) 560px, 92vw"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 right-5 hidden rounded-2xl border border-line bg-white/95 px-5 py-4 shadow-card backdrop-blur sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                Facility visual
              </p>
              <p className="mt-1 text-[13px] font-semibold text-navy">
                Illustrated placeholder pending photography
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Manufacturing philosophy"
              title="Quality is a discipline, not a label"
              description="Our manufacturing philosophy is built around three ideas: consistency, traceability and accountability. The website documents these as a connected framework rather than a set of isolated claims."
            />
            <div className="mt-7 space-y-3">
              {principles.map((principle) => (
                <div key={principle.title} className="rounded-2xl border border-line bg-surface p-4">
                  <h3 className="text-[14px] font-bold text-navy">{principle.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Raw material sourcing"
            title="Starting with what goes in"
            description="Sourcing is the first quality decision. This section describes the intended sourcing framework; supplier names, certificates of analysis and specific origin details are not yet published."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft">
              <Image
                src="/images/company/botanicals.svg"
                alt="Illustration of botanical herb cultivation rows under a soft sun"
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 480px, 92vw"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Leaf,
                  title: "Botanical materials",
                  text: "Plant-based materials are at the centre of the Unani range and are the first focus of the sourcing narrative.",
                },
                {
                  icon: Truck,
                  title: "Supplier documentation",
                  text: "Supplier information and material records are presented as part of the traceability chain.",
                },
                {
                  icon: Warehouse,
                  title: "Storage & handling",
                  text: "Materials are described as managed through documented storage and handling stages.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Incoming review",
                  text: "Materials are considered against specifications before entering production.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-line bg-white p-4">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-light text-brand">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-3 text-[13.5px] font-bold text-navy">{item.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Production process"
            title="A connected, documented sequence"
            description="Production is presented as four linked stages. Detailed SOPs, equipment lists and validated process parameters are not yet published."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productionSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-light text-brand">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-2xl font-bold text-brand/80">{step.step}</span>
                  </div>
                  <h3 className="mt-4 text-[14.5px] font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
        <div
          className="pointer-events-none absolute -right-28 -top-24 h-80 w-80 rounded-full border border-white/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10"
          aria-hidden="true"
        />
        <Container className="relative">
          <SectionHeading
            eyebrow="Quality control"
            tone="light"
            title="Checkpoints that follow the product"
            description="The quality framework covers six visible areas. These descriptions outline the intended control structure and do not represent published regulatory approvals."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {controlAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-[13.5px] font-bold text-white">{area.title}</h3>
                  </div>
                  <p className="mt-3 text-[12.5px] leading-relaxed text-white/55">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Facility & laboratory"
            title="Visual placeholders for future official photography"
            description="Illustrations are used until official facility and laboratory photography is supplied. No certification marks or approval logos are displayed."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/images/company/factory.svg",
                alt: "Illustration of a pharmaceutical manufacturing facility",
                label: "Manufacturing facility",
              },
              {
                src: "/images/company/lab.svg",
                alt: "Illustration of a quality control laboratory with glassware",
                label: "Quality control laboratory",
              },
              {
                src: "/images/company/botanicals.svg",
                alt: "Illustration of botanical herb cultivation rows",
                label: "Botanical sourcing",
              },
            ].map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-2xl border border-line bg-surface"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-2 px-4 py-3 text-[12px] font-semibold text-navy">
                  {image.label}
                  <Badge tone="neutral">Illustration</Badge>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-dashed border-[#d8c9a8] bg-[#fffaf0] p-6 sm:flex-row sm:items-start sm:p-8">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-[#a06312]">
              <AlertTriangle className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-bold text-navy">
                  Certifications & regulatory approvals
                </h2>
                <Badge tone="demo">Not yet published</Badge>
              </div>
              <p className="mt-2 max-w-3xl text-[13.5px] leading-relaxed text-muted">
                No certifications, licences or regulatory approval marks are displayed on this
                website at this stage. Any such information will be added only after official
                documentation has been supplied and verified. Nothing on this page should be
                interpreted as a certification claim.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="text-xl font-bold text-navy">Questions about our process?</h2>
              <p className="mt-1.5 text-[13.5px] text-muted">
                Contact the company for manufacturing, distribution or product enquiries.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <Button href="/contact" icon={Mail} iconPosition="left">
                Contact Us
              </Button>
              <Button href="/products" variant="outline" icon={ArrowRight}>
                Product Catalogue
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-12">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] text-muted">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" aria-hidden="true" />
              Quality-focused framework
            </span>
            <span className="inline-flex items-center gap-2">
              <Factory className="h-4 w-4 text-brand" aria-hidden="true" />
              Manufacturing presentation
            </span>
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-brand" aria-hidden="true" />
              Verification-first content policy
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}
