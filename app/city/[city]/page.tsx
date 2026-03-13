import { notFound } from "next/navigation";
import { getCityBySlug, getCitySlugs } from "@/content/cities";
import { CityPageLayout } from "@/components/content/CityPageLayout";
import { buildMetadata } from "@/lib/seo/metadata";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return buildMetadata({
    title: city.meta.title,
    description: city.meta.description,
    path: `city/${city.slug}`,
  });
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  return <CityPageLayout city={city} />;
}
