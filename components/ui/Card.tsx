import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function Card({ children, className, href }: CardProps) {
  const base =
    "block rounded-md border border-border-light bg-bg-default p-6 transition-all duration-200 ease-out hover:bg-bg-subtle hover:-translate-y-0.5";

  if (href) {
    return (
      <Link href={href} className={cn(base, className)}>
        {children}
      </Link>
    );
  }
  return <div className={cn(base, className)}>{children}</div>;
}
