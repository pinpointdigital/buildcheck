import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  availability?: string;
  variant?: "light" | "dark";
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  cta,
  availability,
  variant = "light",
  className,
}: PageHeroProps) {
  const isDark = variant === "dark";
  return (
    <section
      className={cn(
        "py-16 md:py-20",
        isDark ? "bg-bg-dark text-white" : "bg-bg-default",
        className
      )}
    >
      <PageContainer width="content">
        <div className={cn("max-w-[var(--container-reading)]", isDark && "text-white")}>
          <h1 className="font-headline text-hero font-bold tracking-tight text-inherit">
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                "mt-6 text-body leading-normal max-w-[var(--container-reading)]",
                isDark ? "text-text-inverse-muted" : "text-[var(--color-text-secondary)]"
              )}
            >
              {subtitle}
            </p>
          )}
          {cta && (
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href={cta.href}
                variant="primary"
                className={isDark ? "bg-accent hover:bg-accent-hover text-white" : ""}
              >
                {cta.label}
              </Button>
            </div>
          )}
          {availability && (
            <p
              className={cn(
                "mt-4 text-caption italic",
                isDark ? "text-text-inverse-muted" : "text-[var(--color-text-tertiary)]"
              )}
            >
              {availability}
            </p>
          )}
        </div>
      </PageContainer>
    </section>
  );
}
