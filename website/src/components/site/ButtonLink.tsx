import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "light" | "outlineLight" | "gold";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 py-3 text-[15px] font-semibold tracking-wide transition-all duration-300 ease-out-soft hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-700 text-white shadow-[0_10px_30px_-14px_rgba(39,69,41,0.7)] hover:bg-forest-800 hover:shadow-[0_16px_34px_-14px_rgba(39,69,41,0.8)]",
  secondary:
    "border border-forest-700/25 bg-white/70 text-forest-800 backdrop-blur hover:border-forest-700 hover:bg-white",
  light: "bg-cream text-forest-900 hover:bg-gold-100",
  outlineLight: "border border-white/35 text-white hover:border-white hover:bg-white/10",
  gold: "bg-gold-500 text-forest-950 hover:bg-gold-300",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function ButtonLink({ href, children, variant = "primary", arrow = true, className, onClick }: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          size={17}
          aria-hidden="true"
          className="transition-transform duration-300 ease-out-soft group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (/^(https?:|mailto:|tel:)/.test(href)) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}

export function TextLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 font-semibold text-forest-700 transition-colors hover:text-forest-900",
        className,
      )}
    >
      <span className="link-underline pb-0.5">{children}</span>
      <ArrowRight
        size={16}
        aria-hidden="true"
        className="transition-transform duration-300 ease-out-soft group-hover:translate-x-1"
      />
    </Link>
  );
}
