import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

type Background = "default" | "subtle" | "dark" | "callout";

interface ContentSectionProps {
  children: React.ReactNode;
  background?: Background;
  containerWidth?: "content" | "narrow" | "reading" | "full";
  className?: string;
}

const bgMap: Record<Background, string> = {
  default: "bg-bg-default",
  subtle: "bg-bg-subtle",
  dark: "bg-bg-dark text-white",
  callout: "bg-bg-callout",
};

export function ContentSection({
  children,
  background = "default",
  containerWidth = "content",
  className,
}: ContentSectionProps) {
  return (
    <section
      className={cn(
        "py-[var(--section-padding-y)]",
        bgMap[background],
        className
      )}
    >
      <PageContainer width={containerWidth}>{children}</PageContainer>
    </section>
  );
}
