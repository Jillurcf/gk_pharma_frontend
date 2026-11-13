import { Info } from "lucide-react";
import { CATALOGUE_DEMO_NOTE } from "@/data/products";
import { cn } from "@/lib/utils";

interface DemoNoticeProps {
  className?: string;
  compact?: boolean;
}

export function DemoNotice({ className, compact = false }: DemoNoticeProps) {
  return (
    <div
      role="note"
      className={cn(
        "flex items-start gap-3 rounded-2xl border border-accent/20 bg-[#fdf5f4] px-4 py-3.5 text-left",
        className,
      )}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
      <p className={cn("text-[13px] leading-relaxed text-[#7a3a36]", compact && "text-xs")}>
        <span className="font-semibold text-[#b5161c]">Demo catalogue: </span>
        {compact
          ? "These entries are demonstration content, not official GK Pharma products."
          : CATALOGUE_DEMO_NOTE}
      </p>
    </div>
  );
}
