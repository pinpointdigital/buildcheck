import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  className?: string;
}

export function SectionHeader({ overline, title, className }: SectionHeaderProps) {
  return (
    <header className={cn("mb-8", className)}>
      {overline && (
        <p className="text-overline font-semibold tracking-wide text-teal uppercase mb-2">
          {overline}
        </p>
      )}
      <h2 className="font-headline text-h2 font-bold text-navy-800">{title}</h2>
    </header>
  );
}
