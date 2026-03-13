import type { CityContent } from "@/content/schemas/city";

export const chulaVista: CityContent = {
  slug: "chula-vista",
  name: "Chula Vista",
  meta: {
    title: "Construction Failure Assessment in Chula Vista | BuildCheck",
    description:
      "Your Chula Vista ADU or remodel was abandoned or poorly built. BuildCheck provides a professional assessment documenting what went wrong and what it takes to finish.",
  },
  hero: {
    title: "Construction Failure Assessment in Chula Vista",
    subtitle:
      "Your Chula Vista construction project was abandoned or poorly built. BuildCheck provides a professional assessment that documents what went wrong and what it takes to finish correctly.",
  },
  localContext:
    "Chula Vista has seen significant ADU activity in recent years — and with it, a rise in contractor failures. BuildCheck serves Chula Vista homeowners dealing with abandoned projects, open permits, and work that passed inspection but doesn't feel right. The City of Chula Vista Development Services Department oversees building permits and inspections.",
  permitAuthority: {
    name: "City of Chula Vista Development Services",
    url: "https://www.chulavistaca.gov/departments/development-services",
  },
  relatedArticleSlugs: ["contractor-abandoned-adu-chula-vista"],
  relatedCitySlugs: ["san-diego", "national-city"],
};
