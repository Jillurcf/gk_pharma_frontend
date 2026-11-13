import Image from "next/image";
import { ArrowRight, BadgeCheck, FlaskConical, Leaf, PackageCheck } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

const steps = [
  {
    icon: Leaf,
    title: "Raw material sourcing",
    description:
      "A structured approach to documenting botanical materials and supplier information as it becomes available.",
  },
  {
    icon: FlaskConical,
    title: "Formulation & production",
    description:
      "Traditional Unani formats prepared with attention to consistency, cleanliness and documented production steps.",
  },
  {
    icon: BadgeCheck,
    title: "Quality control",
    description:
      "Quality checkpoints are part of the manufacturing philosophy. Specific certifications will be published only after verification.",
  },
  {
    icon: PackageCheck,
    title: "Packaging & presentation",
    description:
      "Product formats and packaging are presented clearly so customers and partners know what to expect.",
  },
];

export function ManufacturingSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full border border-white/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full border border-white/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 rounded-full bg-brand/20 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image
              src="/images/company/factory.svg"
              alt="Illustration of a modern pharmaceutical manufacturing facility surrounded by greenery"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 560px, 90vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 right-4 w-[45%] overflow-hidden rounded-2xl border-4 border-navy shadow-2xl sm:right-8">
            <Image
              src="/images/company/lab.svg"
              alt="Illustration of a quality control laboratory with glassware"
              width={1200}
              height={900}
              sizes="240px"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -left-2 top-6 rounded-xl border border-white/15 bg-navy-dark/90 px-3.5 py-2 text-[11px] font-semibold text-white shadow-lg backdrop-blur">
            Factory & laboratory visuals
          </div>
        </div>

        <div>
          <p className="mb-3 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
            <span className="h-px w-6 bg-white/35" aria-hidden="true" />
            Quality & Manufacturing
          </p>
          <h2 className="text-3xl font-bold leading-[1.15] text-white sm:text-4xl">
            A manufacturing philosophy built on clarity and care
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/65">
            From raw material sourcing to packaging, our approach is presented through a
            clear process-led narrative. Factory, laboratory and production imagery on
            this website currently uses illustrated placeholders.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-white">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-[11px] font-bold tracking-widest text-white/60">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[13.5px] font-bold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-white/55">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Button href="/quality" variant="white" icon={ArrowRight}>
              Explore Quality & Manufacturing
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
