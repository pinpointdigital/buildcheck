import type { MetaFields } from "./meta";

export interface CityContent {
  slug: string;
  name: string;
  meta: MetaFields;
  hero: {
    title: string;
    subtitle: string;
  };
  /** Unique local context (permit authority, local ADU activity, etc.) */
  localContext: string;
  /** Building dept name + optional URL */
  permitAuthority?: { name: string; url?: string };
  /** Slugs of related articles */
  relatedArticleSlugs: string[];
  /** Slugs of related cities (e.g. adjacent) */
  relatedCitySlugs: string[];
}
