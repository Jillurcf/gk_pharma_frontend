import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { SocialLinks } from "@/components/common/SocialLinks";
import { categories } from "@/data/categories";
import { NAV_LINKS, SITE } from "@/data/site";

const COPYRIGHT_YEAR = new Date().getFullYear();

export function Footer() {
  const year = COPYRIGHT_YEAR;

  return (
    <footer className="relative mt-auto overflow-hidden bg-navy-dark text-white/65">
      <div className="h-1 w-full bg-brand" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full border border-white/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.55fr_0.9fr_1.1fr_1.25fr] lg:gap-12">
          <div>
            <Logo variant="light" size="md" />
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-white/60">
              A Unani medicine manufacturer based in Tongi, Gazipur, Bangladesh. This
              website presents our company profile and an editable demonstration product
              catalogue.
            </p>
            <SocialLinks className="mt-6" />
            <p className="mt-5 text-[11px] leading-relaxed text-white/60">
              Social links point to platform homepages until official profiles are
              confirmed.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/90">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.filter((link) => link.href !== "/categories").map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/categories"
                  className="text-[13.5px] text-white/60 transition-colors hover:text-white"
                >
                  Product Categories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/90">
              Product Categories
            </h2>
            <ul className="mt-5 space-y-3">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="text-[13.5px] text-white/60 transition-colors hover:text-white"
                  >
                    {category.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/90">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-[13.5px] leading-relaxed">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-white/70">
                  {SITE.address.street}, {SITE.address.city}, {SITE.address.region},{" "}
                  {SITE.address.country}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-white/60">
                  {SITE.contact.phonePlaceholder}
                  <span className="block text-[11px] text-white/60">
                    Placeholder — official number pending
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <a
                  href={`mailto:${SITE.contact.emailPlaceholder}`}
                  className="break-all text-white/60 transition-colors hover:text-white"
                >
                  {SITE.contact.emailPlaceholder}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-light transition-colors hover:text-white"
            >
              Contact the company
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[11.5px] leading-relaxed text-white/60">
          <span className="font-semibold text-white/70">Demo catalogue notice: </span>
          {SITE.demoNotice}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[12px] text-white/60 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>
            Station Road, Tongi, Gazipur, Bangladesh ·{" "}
            <Link href="/quality" className="transition-colors hover:text-white/70">
              Quality & Manufacturing
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
