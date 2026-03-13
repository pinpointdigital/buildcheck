import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ContentSection } from "./ContentSection";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  overline?: string;
  items: FAQItem[];
  background?: "default" | "subtle";
  className?: string;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  overline,
  items,
  background = "subtle",
  className,
}: FAQSectionProps) {
  return (
    <ContentSection background={background} className={className}>
      <SectionHeader overline={overline} title={title} />
      <FAQAccordion items={items} />
    </ContentSection>
  );
}
