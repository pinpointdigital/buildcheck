import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Max width: content (default), narrow, reading, full */
  width?: "content" | "narrow" | "reading" | "full";
}

export function PageContainer({
  children,
  className,
  width = "content",
}: PageContainerProps) {
  const maxWidthClass =
    width === "full"
      ? "max-w-full"
      : width === "narrow"
        ? "max-w-[var(--container-narrow)]"
        : width === "reading"
          ? "max-w-[var(--container-reading)]"
          : "max-w-[var(--container-content)]";

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        maxWidthClass,
        className
      )}
    >
      {children}
    </div>
  );
}
