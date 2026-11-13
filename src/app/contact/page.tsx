import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { Badge } from "@/components/common/Badge";
import { SocialLinks } from "@/components/common/SocialLinks";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact GK Pharma (Unani) Limited at Station Road, Tongi, Gazipur, Bangladesh. Phone and email are placeholders pending official confirmation. Enquiry form is a frontend demo.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Start a conversation with GK Pharma"
        description="For product enquiries, distribution conversations or general company questions, use the details below. Official phone and email channels are placeholders until confirmed."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="outline" className="bg-white">
            Tongi, Gazipur
          </Badge>
          <Badge tone="outline" className="bg-white">
            Product enquiries
          </Badge>
          <Badge tone="demo">Phone & email placeholders</Badge>
        </div>
      </PageHero>

      <section className="bg-white py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div>
            <Suspense fallback={<FormSkeleton />}>
              <ContactForm />
            </Suspense>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-line bg-surface p-5 sm:p-6">
              <h2 className="text-lg font-bold text-navy">Company contact details</h2>
              <ul className="mt-5 space-y-5">
                <li className="flex items-start gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand shadow-sm">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Address
                    </p>
                    <p className="mt-1 text-[13.5px] font-medium leading-relaxed text-navy">
                      {SITE.name}
                      <br />
                      {SITE.address.street}
                      <br />
                      {SITE.address.city}, {SITE.address.region}, {SITE.address.country}
                    </p>
                    <span className="mt-1.5 inline-block text-[10.5px] font-medium text-brand">
                      Verified location
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand shadow-sm">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Phone
                    </p>
                    <p className="mt-1 text-[13.5px] font-medium text-navy">
                      {SITE.contact.phonePlaceholder}
                    </p>
                    <p className="mt-1 text-[11px] text-muted">
                      Placeholder — official number pending confirmation.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand shadow-sm">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE.contact.emailPlaceholder}`}
                      className="mt-1 block break-all text-[13.5px] font-medium text-navy hover:text-brand"
                    >
                      {SITE.contact.emailPlaceholder}
                    </a>
                    <p className="mt-1 text-[11px] text-muted">
                      Placeholder address — official inbox pending confirmation.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand shadow-sm">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Enquiries
                    </p>
                    <p className="mt-1 text-[13.5px] font-medium text-navy">
                      Product & distribution enquiries
                    </p>
                    <p className="mt-1 text-[11px] text-muted">
                      Business hours will be published once confirmed.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-line bg-[#e8f1eb]">
              <div className="relative flex min-h-[240px] items-center justify-center">
                <div
                  className="absolute inset-0 bg-grid-soft opacity-70"
                  aria-hidden="true"
                />
                <div
                  className="absolute left-10 top-0 h-full w-6 -rotate-12 bg-white/40"
                  aria-hidden="true"
                />
                <div
                  className="absolute left-0 top-1/2 h-6 w-full rotate-3 bg-white/40"
                  aria-hidden="true"
                />
                <div className="relative px-6 py-10 text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-brand shadow-soft">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-3 text-sm font-bold text-navy">Map location placeholder</p>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-muted">
                    Google Maps embed will be added at Station Road, Tongi, Gazipur.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-white p-5 sm:p-6">
              <h2 className="text-sm font-bold text-navy">Follow GK Pharma</h2>
              <p className="mt-1.5 text-[12px] leading-relaxed text-muted">
                Social links currently point to platform homepages until official profiles are
                confirmed.
              </p>
              <SocialLinks tone="dark" className="mt-4" />
            </div>

            <div className="rounded-2xl border border-accent/20 bg-[#fdf5f4] p-4">
              <p className="text-[11.5px] leading-relaxed text-[#7a3a36]">
                <span className="font-semibold text-[#b5161c]">Demo note: </span>
                The enquiry form validates on your device only. It does not send an email, store
                data or contact GK Pharma.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function FormSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-line bg-white p-5 sm:p-8" aria-hidden="true">
      <div className="h-6 w-48 rounded bg-surface" />
      <div className="mt-3 h-3 w-3/4 rounded bg-surface" />
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <div className="h-3 w-20 rounded bg-surface" />
            <div className="mt-2 h-11 rounded-xl bg-surface" />
          </div>
        ))}
        <div className="sm:col-span-2">
          <div className="h-3 w-20 rounded bg-surface" />
          <div className="mt-2 h-32 rounded-xl bg-surface" />
        </div>
      </div>
      <div className="mt-6 h-12 w-40 rounded-full bg-surface" />
    </div>
  );
}
