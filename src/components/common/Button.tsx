import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white" | "onBrand";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_10px_24px_-12px_rgba(0,131,72,0.65)] hover:bg-brand-dark hover:shadow-[0_14px_30px_-12px_rgba(0,131,72,0.7)]",
  secondary:
    "bg-navy text-white shadow-[0_10px_24px_-14px_rgba(23,27,104,0.7)] hover:bg-navy-dark",
  outline:
    "border border-line bg-white text-navy hover:border-brand/40 hover:text-brand hover:shadow-soft",
  ghost: "text-brand hover:bg-brand-light",
  white: "bg-white text-navy shadow-soft hover:bg-brand-50",
  onBrand:
    "border border-white/25 bg-transparent text-white hover:border-white/45 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px] sm:h-13 sm:px-7",
};

interface BaseProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

interface ButtonAsButton extends BaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  "aria-label"?: string;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
  "aria-label"?: string;
  target?: string;
  rel?: string;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    icon: Icon,
    iconPosition = "right",
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, target, rel, "aria-label": ariaLabel } = props;
    const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");

    if (external) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
          className={cn(classes, "group")}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} aria-label={ariaLabel} className={cn(classes, "group")}>
        {content}
      </Link>
    );
  }

  const { type = "button", onClick, disabled, "aria-label": ariaLabel } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(classes, "group")}
    >
      {content}
    </button>
  );
}
