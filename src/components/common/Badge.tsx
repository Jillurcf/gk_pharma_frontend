import { cn } from "@/lib/utils";

type BadgeTone = "brand" | "navy" | "red" | "neutral" | "outline";

const tones: Record<BadgeTone, string> = {
  brand: "bg-brand-light text-brand-dark",
  navy: "bg-[#ecedf8] text-navy",
  red: "bg-accent-light text-[#b5161c]",
  neutral: "bg-surface text-muted",
  outline: "border border-line bg-white text-muted",
};

interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
  dot?: boolean;
}

export function Badge({ children, tone = "brand", className, dot = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold leading-none tracking-wide",
        tones[tone],
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />}
      {children}
    </span>
  );
}
