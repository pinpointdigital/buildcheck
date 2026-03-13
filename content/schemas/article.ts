import type { MetaFields } from "./meta";

export interface ArticleContent {
  slug: string;
  title: string;
  meta: MetaFields;
  category?: string;
  date: string; // ISO date
  excerpt: string;
  /** Body as HTML string (or React node if using MDX). Rendered in ArticleLayout. */
  body: string;
  relatedArticleSlugs: string[];
  relatedCitySlugs: string[];
}
