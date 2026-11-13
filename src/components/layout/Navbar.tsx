"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, MapPin, Menu, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/common/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy text-white/80 md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-6 px-5 text-[11.5px] sm:px-6 lg:px-8">
          <p className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-white/50" aria-hidden="true" />
            {SITE.address.full}
          </p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-white/50" aria-hidden="true" />
              {SITE.contact.phonePlaceholder}
              <span className="text-white/65">(placeholder)</span>
            </span>
            <a
              href={`mailto:${SITE.contact.emailPlaceholder}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-white/50" aria-hidden="true" />
              {SITE.contact.emailPlaceholder}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-line/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
          <Logo size="md" className="shrink-0" />

          <nav aria-label="Main navigation" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "relative rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors",
                      isActive(link.href)
                        ? "text-brand"
                        : "text-navy/75 hover:bg-surface hover:text-navy",
                    )}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href="/products"
              size="sm"
              icon={ArrowRight}
              className="max-sm:hidden"
            >
              Product Catalogue
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-line text-navy transition-colors hover:bg-surface xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu">
        <MobileMenu open={open} onClose={() => setOpen(false)} pathname={pathname} />
      </div>
    </header>
  );
}
