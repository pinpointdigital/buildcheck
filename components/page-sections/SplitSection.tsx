import { ContentSection } from "./ContentSection";

interface SplitSectionProps {
  left: React.ReactNode;
  right: React.ReactNode;
  background?: "default" | "subtle";
  leftTitle?: string;
  rightTitle?: string;
  className?: string;
}

export function SplitSection({
  left,
  right,
  background = "default",
  leftTitle,
  rightTitle,
  className,
}: SplitSectionProps) {
  return (
    <ContentSection background={background} className={className}>
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
        <div>
          {leftTitle && (
            <h3 className="font-headline text-h3 font-bold text-navy-800 mb-4">
              {leftTitle}
            </h3>
          )}
          <div className="text-body text-[var(--color-text-primary)] leading-normal">
            {left}
          </div>
        </div>
        <div className="md:border-l md:border-border-light md:pl-10 lg:pl-12">
          {rightTitle && (
            <h3 className="font-headline text-h3 font-bold text-navy-800 mb-4">
              {rightTitle}
            </h3>
          )}
          <div className="text-body text-[var(--color-text-primary)] leading-normal">
            {right}
          </div>
        </div>
      </div>
    </ContentSection>
  );
}
