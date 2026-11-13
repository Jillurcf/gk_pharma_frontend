import {
  Bone,
  Flower2,
  HeartPulse,
  Sparkles,
  Sprout,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { CategoryTone } from "@/types/product";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  sprout: Sprout,
  "heart-pulse": HeartPulse,
  wind: Wind,
  bone: Bone,
  flower: Flower2,
  sparkles: Sparkles,
};

const tones: Record<CategoryTone, string> = {
  green: "bg-brand-light text-brand",
  red: "bg-[#fdeceb] text-[#c41d23]",
  navy: "bg-[#ecedf8] text-navy",
  amber: "bg-[#fdf3e2] text-[#a06312]",
  teal: "bg-[#e5f5f3] text-[#0f766e]",
  plum: "bg-[#f6edf5] text-[#8b3a7d]",
};

interface CategoryIconProps {
  icon: string;
  tone?: CategoryTone;
  className?: string;
  iconClassName?: string;
}

export function CategoryIcon({
  icon,
  tone = "green",
  className,
  iconClassName,
}: CategoryIconProps) {
  const Icon = icons[icon] ?? Sprout;

  return (
    <span
      className={cn(
        "grid h-12 w-12 place-items-center rounded-2xl",
        tones[tone],
        className,
      )}
      aria-hidden="true"
    >
      <Icon className={cn("h-6 w-6", iconClassName)} strokeWidth={1.75} />
    </span>
  );
}
