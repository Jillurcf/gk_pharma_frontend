import Image from "next/image";
import { ArrowRight, Eye, Target } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";

const commitments = [
  "Respect for Unani tradition",
  "Clear product presentation",
  "Quality-focused thinking",
];

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div
            className="absolute -left-3 -top-3 h-full w-full rounded-[2.25rem] border border-brand/20"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2rem] bg-surface shadow-soft">
            <Image
              src="/images/company/heritage.svg"
              alt="Illustration of traditional Unani preparation vessels, botanicals and a mortar and pestle"
              width={1000}
              height={1200}
              sizes="(min-width: 1024px) 520px, 90vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-line bg-white/95 px-5 py-4 shadow-card backdrop-blur sm:left-auto sm:right-6 sm:w-[300px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
              Our foundation
            </p>
            <p className="mt-1.5 text-sm font-semibold leading-snug text-navy">
              Unani tradition, organised for a modern corporate presence.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About the company"
            title="A Unani medicine manufacturer rooted in Gazipur, Bangladesh"
            description="GK Pharma (Unani) Limited operates from Station Road, Tongi, Gazipur. This website introduces the company, its manufacturing philosophy and a demonstration product catalogue designed to make product information easy to navigate."
          />

          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            We believe Unani medicine deserves a clear, professional and trustworthy
            digital presence. This site is structured so official company history,
            verified formulations and approved product information can be added without
            rebuilding the experience.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface p-5">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-light text-brand">
                  <Target className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="text-sm font-bold text-navy">Our mission</h3>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                To present Unani medicine with clarity, consistency and care — from
                manufacturing philosophy to the information shared with visitors.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#ecedf8] text-navy">
                  <Eye className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="text-sm font-bold text-navy">Our vision</h3>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                To build a dependable digital home for GK Pharma where verified product
                information is accessible to healthcare professionals and the public.
              </p>
            </div>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2.5">
            {commitments.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[12px] font-medium text-muted"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href="/about" variant="outline" icon={ArrowRight}>
              Read More About Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
