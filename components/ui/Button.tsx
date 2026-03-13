import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  /** For accessibility */
  "aria-label"?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  type?: never;
  disabled?: never;
  onClick?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white font-semibold hover:bg-accent-hover transition-all duration-[var(--duration-fast)] hover:-translate-y-px",
  secondary:
    "bg-transparent border-[1.5px] border-navy-800 text-navy-800 font-semibold hover:bg-navy-800 hover:text-white transition-all duration-[var(--duration-fast)]",
};

export function Button({
  variant = "primary",
  children,
  className,
  href,
  type = "button",
  disabled,
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-sm px-7 py-3.5 text-[15px] tracking-ui";

  if (href) {
    return (
      <Link
        href={href}
        className={cn(base, variantStyles[variant], className)}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(base, variantStyles[variant], className)}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
