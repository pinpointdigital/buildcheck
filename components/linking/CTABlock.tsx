import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CTABlockProps {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  note?: string;
  className?: string;
}

export function CTABlock({
  heading,
  ctaLabel,
  ctaHref,
  note,
  className,
}: CTABlockProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-border-light bg-bg-subtle p-8 text-center",
        className
      )}
    >
      <h3 className="font-headline text-h3 font-bold text-navy-800">{heading}</h3>
      <div className="mt-6">
        <Button href={ctaHref} variant="primary">
          {ctaLabel}
        </Button>
      </div>
      {note && (
        <p className="mt-4 text-caption text-[var(--color-text-tertiary)]">
          {note}
        </p>
      )}
    </div>
  );
}
