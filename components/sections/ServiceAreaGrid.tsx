import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContentSection } from "@/components/page-sections/ContentSection";
import { ROUTES } from "@/lib/constants";

export interface ServiceAreaCity {
  slug: string;
  name: string;
}

interface ServiceAreaGridProps {
  overline?: string;
  title: string;
  cities: ServiceAreaCity[];
  className?: string;
}

export function ServiceAreaGrid({
  overline,
  title,
  cities,
  className,
}: ServiceAreaGridProps) {
  return (
    <ContentSection className={className}>
      <SectionHeader overline={overline} title={title} />
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
        {cities.map((city) => (
          <li key={city.slug}>
            <Link
              href={ROUTES.city(city.slug)}
              className="text-body font-medium text-teal hover:underline"
            >
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </ContentSection>
  );
}
