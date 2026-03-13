import { cn } from "@/lib/utils";

interface AuthorityCalloutProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function AuthorityCallout({
  title,
  children,
  className,
}: AuthorityCalloutProps) {
  return (
    <aside
      className={cn(
        "border-l-[3px] border-accent bg-bg-callout rounded-r-sm p-8 max-w-[var(--container-narrow)]",
        className
      )}
    >
      {title && (
        <h3 className="font-headline text-h3 font-bold text-navy-800 mb-4">
          {title}
        </h3>
      )}
      <div className="text-body text-[var(--color-text-primary)] leading-normal">
        {children}
      </div>
    </aside>
  );
}
