import type { CityContent } from "@/content/schemas/city";

export const sanDiego: CityContent = {
  slug: "san-diego",
  name: "San Diego",
  meta: {
    title: "Construction Failure Assessment in San Diego | BuildCheck",
    description:
      "Your San Diego ADU or remodel was abandoned or poorly built. BuildCheck provides a professional assessment documenting what went wrong and what it takes to finish.",
  },
  hero: {
    title: "Construction Failure Assessment in San Diego",
    subtitle:
      "Your San Diego construction project was abandoned or poorly built. BuildCheck provides a professional assessment that documents what went wrong and what it takes to finish correctly.",
  },
  localContext:
    "San Diego has seen significant ADU and residential construction activity. BuildCheck serves San Diego homeowners dealing with abandoned projects, open permits, and work that passed inspection but doesn't feel right.",
  permitAuthority: {
    name: "City of San Diego Development Services",
    url: "https://www.sandiego.gov/development-services",
  },
  relatedArticleSlugs: [],
  relatedCitySlugs: ["chula-vista", "national-city"],
};
