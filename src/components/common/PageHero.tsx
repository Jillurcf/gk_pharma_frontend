import { Container } from "@/components/common/Container";
import { Breadcrumb, type BreadcrumbItem } from "@/components/common/Breadcrumb";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: BreadcrumbItem[];
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line bg-surface",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-soft opacity-60 mask-fade-b"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-navy/5 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        <Breadcrumb items={breadcrumb} className="mb-8" />
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] text-navy sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
