"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/common/Button";
import { SocialLinks } from "@/components/common/SocialLinks";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const getFocusable = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((element) => element.offsetParent !== null);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] xl:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
      <button
        type="button"
        className="absolute inset-0 bg-navy-dark/45 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close menu"
        tabIndex={-1}
      />
      <div
        ref={panelRef}
        className="absolute inset-y-0 right-0 flex w-[min(88vw,380px)] flex-col overflow-y-auto bg-white shadow-2xl animate-fade-in"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Logo size="sm" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-navy transition-colors hover:bg-surface"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="flex-1 px-4 py-5">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-colors",
                      active
                        ? "bg-brand-light text-brand-dark"
                        : "text-navy hover:bg-surface",
                    )}
                  >
                    {link.label}
                    <ArrowRight
                      className={cn("h-4 w-4", active ? "text-brand" : "text-muted/60")}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6">
            <Button href="/products" size="md" className="w-full">
              Product Catalogue
            </Button>
          </div>

          <div className="mt-8 space-y-3 border-t border-line pt-6 text-sm text-muted">
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {SITE.address.full}
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>
                {SITE.contact.phonePlaceholder}
                <span className="ml-1 text-xs text-muted">(placeholder)</span>
              </span>
            </p>
            <p className="flex items-center gap-2.5 break-all">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a
                href={`mailto:${SITE.contact.emailPlaceholder}`}
                className="hover:text-brand"
              >
                {SITE.contact.emailPlaceholder}
              </a>
            </p>
          </div>

          <SocialLinks tone="dark" className="mt-6" />
        </nav>
      </div>
    </div>
  );
}
