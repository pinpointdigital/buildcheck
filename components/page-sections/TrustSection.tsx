import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

export interface TrustItem {
  label: string;
  value?: string;
}

interface TrustSectionProps {
  items: TrustItem[];
  variant?: "light" | "dark";
  className?: string;
}

export function TrustSection({
  items,
  variant = "light",
  className,
}: TrustSectionProps) {
  const isDark = variant === "dark";
  return (
    <section
      className={cn(
        "py-12",
        variant === "dark" ? "bg-bg-dark text-white" : "bg-bg-subtle",
        className
      )}
    >
      <PageContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center justify-items-center text-center lg:text-left">
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "text-body-sm font-medium",
                isDark ? "text-text-inverse-muted" : "text-[var(--color-text-secondary)]"
              )}
            >
              {item.value ? (
                <>
                  <span className={isDark ? "text-white" : "text-navy-800"}>
                    {item.value}
                  </span>
                  {item.label && (
                    <span className="block mt-0.5 opacity-90">{item.label}</span>
                  )}
                </>
              ) : (
                item.label
              )}
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
