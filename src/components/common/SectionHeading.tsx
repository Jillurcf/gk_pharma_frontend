import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
  tone?: "default" | "light";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
  tone = "default",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto")}>
        {eyebrow && (
          <p
            className={cn(
              "mb-3 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em]",
              centered && "justify-center",
              tone === "light" ? "text-white/70" : "text-brand",
            )}
          >
            <span
              className={cn(
                "h-px w-6",
                tone === "light" ? "bg-white/45" : "bg-accent",
              )}
              aria-hidden="true"
            />
            {eyebrow}
          </p>
        )}
        <h2
          className={cn(
            "text-3xl font-bold leading-[1.15] sm:text-4xl",
            tone === "light" ? "text-white" : "text-navy",
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-[15px] leading-relaxed sm:text-base",
              tone === "light" ? "text-white/70" : "text-muted",
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className={cn("shrink-0", centered && "mx-auto")}>{action}</div>}
    </div>
  );
}
