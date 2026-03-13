import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContentSection } from "@/components/page-sections/ContentSection";
import { cn } from "@/lib/utils";

export interface ProcessStep {
  title: string;
  description: string;
  detail?: string;
}

interface ProcessStepsProps {
  overline?: string;
  title: string;
  steps: ProcessStep[];
  className?: string;
}

export function ProcessSteps({
  overline,
  title,
  steps,
  className,
}: ProcessStepsProps) {
  return (
    <ContentSection className={className}>
      <SectionHeader overline={overline} title={title} />
      <div className="relative max-w-[var(--container-narrow)]">
        {steps.map((step, i) => (
          <div
            key={i}
            className={cn(
              "relative flex gap-6 pb-10 last:pb-0",
              i < steps.length - 1 &&
                "before:absolute before:left-[11px] before:top-10 before:bottom-0 before:w-px before:bg-border-light"
            )}
          >
            <div className="shrink-0 w-8 h-8 rounded-full border-2 border-teal flex items-center justify-center text-body font-semibold text-teal bg-white">
              {i + 1}
            </div>
            <div>
              <h3 className="text-h4 font-semibold text-navy-800">{step.title}</h3>
              <p className="mt-2 text-body text-[var(--color-text-secondary)] leading-normal">
                {step.description}
              </p>
              {step.detail && (
                <p className="mt-2 text-body-sm text-[var(--color-text-tertiary)]">
                  {step.detail}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </ContentSection>
  );
}
