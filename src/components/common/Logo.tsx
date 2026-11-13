import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "light";
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
  className?: string;
}

const sizes = {
  sm: { icon: "h-9 w-9 rounded-[10px]", title: "text-[15px]", tagline: "text-[8px]" },
  md: { icon: "h-11 w-11 rounded-xl", title: "text-lg", tagline: "text-[9px]" },
  lg: { icon: "h-14 w-14 rounded-2xl", title: "text-2xl", tagline: "text-[10px]" },
};

export function Logo({
  variant = "default",
  size = "md",
  withTagline = true,
  className,
}: LogoProps) {
  const s = sizes[size];
  const light = variant === "light";

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "relative grid shrink-0 place-items-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-0.5",
          s.icon,
          light && "bg-white p-0.5 ring-1 ring-white/60",
        )}
        aria-hidden="true"
      >
        <img
          src="/images/logo/gk-pharma-logo.png"
          alt="GK Pharma Logo"
          className="h-full w-full object-cover"
        />
      </span>
     
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-display font-bold tracking-tight",
            light ? "text-white" : "text-navy",
            s.title,
          )}
        >
          GK Pharma
        </span>
        {withTagline && (
          <span
            className={cn(
              "mt-1 font-semibold uppercase tracking-[0.24em]",
              light ? "text-white/75" : "text-muted",
              s.tagline,
            )}
          >
            Unani Limited
          </span>
        )}
      </span>
    </Link>
  );
}
