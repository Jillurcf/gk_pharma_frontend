import Link from "next/link";
import { SOCIAL_LINKS } from "@/data/site";
import { cn } from "@/lib/utils";

const icons: Record<string, (props: { className?: string }) => React.ReactElement> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

interface SocialLinksProps {
  className?: string;
  tone?: "light" | "dark";
}

export function SocialLinks({ className, tone = "light" }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-2.5", className)}>
      {SOCIAL_LINKS.map((social) => {
        const Icon = icons[social.icon];
        return (
          <li key={social.name}>
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.name} — official GK Pharma profile link pending`}
              title={`${social.name} (official link pending)`}
              className={cn(
                "grid h-10 w-10 place-items-center rounded-full border transition-colors",
                tone === "light"
                  ? "border-white/15 text-white/70 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  : "border-line text-muted hover:border-brand/30 hover:bg-brand-light hover:text-brand",
              )}
            >
              {Icon ? <Icon className="h-4 w-4" /> : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.2h2.5l.4-2.9h-2.9V9c0-.84.24-1.42 1.46-1.42H16.5V4.98c-.27-.04-1.18-.11-2.24-.11-2.22 0-3.74 1.35-3.74 3.83v2.14H8v2.9h2.52V21h2.98Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.5 8.4H3.6V21h2.9V8.4ZM5.05 3a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM21 13.9c0-3.5-1.87-5.13-4.37-5.13-2.02 0-2.93 1.11-3.43 1.9V8.4H10.3V21h2.9v-6.72c0-1.78.34-3.5 2.54-3.5 2.17 0 2.2 2.03 2.2 3.61V21H21v-7.1Z" />
    </svg>
  );
}
