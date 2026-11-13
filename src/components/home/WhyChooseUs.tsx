import Link from "next/link";
import {
  BookOpen,
  ClipboardCheck,
  HandHeart,
  Leaf,
  PackageCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Quality-focused approach",
    description:
      "Product presentation and manufacturing content are organised around documented quality thinking, not unverified claims.",
  },
  {
    icon: ClipboardCheck,
    title: "Documented processes",
    description:
      "The site provides a clear structure for publishing sourcing, production and quality control information once verified.",
  },
  {
    icon: BookOpen,
    title: "Traditional Unani knowledge",
    description:
      "Unani tradition sits at the centre of the company's identity, presented respectfully and without exaggeration.",
  },
  {
    icon: Leaf,
    title: "Botanical foundations",
    description:
      "Herbal and botanical formats are featured throughout the demonstration catalogue, reflecting the Unani approach.",
  },
  {
    icon: PackageCheck,
    title: "Clear product information",
    description:
      "Each product page has a consistent layout for form, packaging, ingredients, usage and storage — with placeholders clearly marked.",
  },
  {
    icon: HandHeart,
    title: "Customer commitment",
    description:
      "A straightforward contact experience and product enquiry path for distributors, retailers and healthcare professionals.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-brand-50 py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-48 left-1/4 h-80 w-80 rounded-full bg-navy/5 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Why GK Pharma"
            title="A considered approach to a traditional discipline"
            description="This website is built to reflect a professional pharmaceutical company: clear information architecture, a calm visual language and honest content boundaries."
          />
          <p className="mt-5 text-[14.5px] leading-relaxed text-muted">
            Official certifications, regulatory approvals and verified product claims
            will be published only when supporting documentation is available. Until
            then, demonstration content remains clearly identified.
          </p>
          <Link
            href="/quality"
            className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            Read our quality approach
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group rounded-3xl border border-line/90 bg-white/90 p-5 shadow-[0_8px_24px_-22px_rgba(23,27,104,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-card sm:p-6"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-brand/10 bg-brand-light text-brand transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[15px] font-bold text-navy transition-colors group-hover:text-brand">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-muted">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
