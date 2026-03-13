import { getCityBySlug } from "@/content/cities";
import { ROUTES } from "@/lib/constants";
import Link from "next/link";

interface RelatedCitiesBlockProps {
  citySlugs: string[];
  title?: string;
}

export function RelatedCitiesBlock({
  citySlugs,
  title = "Service Areas",
}: RelatedCitiesBlockProps) {
  const cities = citySlugs
    .map((slug) => getCityBySlug(slug))
    .filter(Boolean);

  if (cities.length === 0) return null;

  return (
    <div>
      {title && (
        <h3 className="text-h4 font-semibold text-navy-800 mb-4">{title}</h3>
      )}
      <ul className="flex flex-wrap gap-4">
        {cities.map((c) => (
          <li key={c!.slug}>
            <Link
              href={ROUTES.city(c!.slug)}
              className="text-body font-medium text-teal hover:underline"
            >
              {c!.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
