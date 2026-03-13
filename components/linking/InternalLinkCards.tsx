import Link from "next/link";
import { cn } from "@/lib/utils";

export interface InternalLinkItem {
  href: string;
  title: string;
  description?: string;
}

interface InternalLinkCardsProps {
  items: InternalLinkItem[];
  title?: string;
  className?: string;
}

export function InternalLinkCards({
  items,
  title = "Related",
  className,
}: InternalLinkCardsProps) {
  return (
    <div className={cn("", className)}>
      {title && (
        <h3 className="text-h4 font-semibold text-navy-800 mb-4">{title}</h3>
      )}
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-md border border-border-light bg-bg-default p-5 transition-all duration-200 ease-out hover:bg-bg-subtle hover:-translate-y-0.5 border-l-4 border-l-accent"
            >
              <span className="font-semibold text-navy-800">{item.title}</span>
              {item.description && (
                <p className="mt-1 text-body-sm text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
