import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContentSection } from "@/components/page-sections/ContentSection";
import { Card } from "@/components/ui/Card";

export interface QualificationItem {
  title: string;
  description: string;
}

interface QualificationCardsProps {
  overline?: string;
  title: string;
  forItems: QualificationItem[];
  notForTitle?: string;
  notForItems?: QualificationItem[];
  className?: string;
}

export function QualificationCards({
  overline,
  title,
  forItems,
  notForTitle = "When BuildCheck™ Is Not the Right Fit",
  notForItems = [],
  className,
}: QualificationCardsProps) {
  return (
    <ContentSection className={className}>
      <SectionHeader overline={overline} title={title} />
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="text-h4 font-semibold text-navy-800 mb-4">
            BuildCheck™ Is Built for You If…
          </h3>
          <div className="space-y-4">
            {forItems.map((item, i) => (
              <Card key={i} className="border-teal/30">
                <h4 className="font-semibold text-navy-800">{item.title}</h4>
                <p className="mt-2 text-body-sm text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-h4 font-semibold text-[var(--color-text-tertiary)] mb-4">
            {notForTitle}
          </h3>
          <div className="space-y-4">
            {notForItems.map((item, i) => (
              <Card key={i} className="opacity-90 border-border-light">
                <h4 className="font-medium text-[var(--color-text-secondary)]">
                  {item.title}
                </h4>
                <p className="mt-2 text-body-sm text-[var(--color-text-tertiary)]">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </ContentSection>
  );
}
