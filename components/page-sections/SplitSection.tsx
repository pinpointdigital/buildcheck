import { ContentSection } from "./ContentSection";
import { cn } from "@/lib/utils";

interface SplitSectionProps {
  left: React.ReactNode;
  right: React.ReactNode;
  background?: "default" | "subtle";
  leftTitle?: string;
  rightTitle?: string;
  /** "positive" = teal accent for "right for you" style */
  leftAccent?: "positive" | "default";
  /** "muted" = softer styling for "not right fit" style */
  rightAccent?: "muted" | "default";
  className?: string;
}

export function SplitSection({
  left,
  right,
  background = "default",
  leftTitle,
  rightTitle,
  leftAccent = "default",
  rightAccent = "default",
  className,
}: SplitSectionProps) {
  return (
    <ContentSection background={background} className={className}>
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
        <div
          className={cn(
            leftAccent === "positive" &&
              "rounded-r-lg border-l-4 border-teal bg-teal-light/40 py-5 pl-5 pr-4 md:py-6 md:pl-6"
          )}
        >
          {leftTitle && (
            <h3
              className={cn(
                "font-headline text-h3 font-bold text-navy-800 mb-4 flex items-center gap-2",
                leftAccent === "positive" && "text-teal"
              )}
            >
              {leftAccent === "positive" && (
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-white" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
              )}
              {leftTitle}
            </h3>
          )}
          <div
            className={cn(
              "text-body leading-normal",
              leftAccent === "positive"
                ? "text-[var(--color-text-primary)] [&_ul]:list-none [&_ul]:space-y-2 [&_li]:relative [&_li]:pl-6 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.35em] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-teal [&_li]:before:content-['']"
                : "text-[var(--color-text-primary)]"
            )}
          >
            {left}
          </div>
        </div>
        <div
          className={cn(
            "md:pl-10 lg:pl-12",
            rightAccent === "muted"
              ? "md:border-l md:border-border-medium md:py-5 md:pr-4 md:pl-6 lg:pl-12"
              : "md:border-l md:border-border-light"
          )}
        >
          {rightTitle && (
            <h3
              className={cn(
                "font-headline text-h3 font-bold mb-4 flex items-center gap-2",
                rightAccent === "muted"
                  ? "text-[var(--color-text-secondary)]"
                  : "text-navy-800"
              )}
            >
              {rightAccent === "muted" && (
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-border-medium)] text-[var(--color-text-tertiary)]" aria-hidden>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </span>
              )}
              {rightTitle}
            </h3>
          )}
          <div
            className={cn(
              "text-body leading-normal",
              rightAccent === "muted"
                ? "text-[var(--color-text-secondary)] [&_ul]:list-none [&_ul]:space-y-2 [&_li]:relative [&_li]:pl-6 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.35em] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:border [&_li]:before:border-[var(--color-border-medium)] [&_li]:before:content-['']"
                : "text-[var(--color-text-primary)]"
            )}
          >
            {right}
          </div>
        </div>
      </div>
    </ContentSection>
  );
}
