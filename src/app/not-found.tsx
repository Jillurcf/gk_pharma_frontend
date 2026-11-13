import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export default function NotFound() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden bg-surface py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-soft opacity-60 mask-fade-b"
        aria-hidden="true"
      />
      <Container className="relative text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-light text-brand">
          <Leaf className="h-7 w-7" aria-hidden="true" />
        </span>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-brand">
          Error 404
        </p>
        <h1 className="mx-auto mt-3 max-w-xl text-3xl font-bold text-navy sm:text-4xl">
          This page could not be found
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
          The page may have moved, or the product link may be incomplete. Return to the
          homepage or browse the demonstration catalogue.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" icon={ArrowRight}>
            Back to Home
          </Button>
          <Button href="/products" variant="outline">
            Browse Products
          </Button>
        </div>
        <p className="mt-6 text-xs text-muted">
          Looking for something specific?{" "}
          <Link href="/contact" className="font-semibold text-brand hover:text-brand-dark">
            Contact the company
          </Link>
        </p>
      </Container>
    </section>
  );
}
