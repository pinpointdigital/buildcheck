import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  heading: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  note?: string;
  background?: "default" | "subtle" | "dark";
  className?: string;
}

const bgMap = {
  default: "bg-bg-default",
  subtle: "bg-bg-subtle",
  dark: "bg-bg-dark text-white",
};

export function CTASection({
  heading,
  primaryCta,
  secondaryCta,
  note,
  background = "default",
  className,
}: CTASectionProps) {
  const isDark = background === "dark";
  return (
    <section
      className={cn(
        "py-[var(--section-padding-y)]",
        bgMap[background],
        className
      )}
    >
      <PageContainer width="narrow">
        <div className="text-center">
          <h2 className="font-headline text-h2 font-bold text-navy-800 max-w-[var(--container-reading)] mx-auto">
            {heading}
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            )}
          </div>
          {note && (
            <p
              className={cn(
                "mt-4 text-caption",
                isDark ? "text-text-inverse-muted" : "text-[var(--color-text-tertiary)]"
              )}
            >
              {note}
            </p>
          )}
        </div>
      </PageContainer>
    </section>
  );
}
