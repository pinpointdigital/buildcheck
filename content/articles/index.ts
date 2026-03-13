import type { ArticleContent } from "@/content/schemas/article";
import { contractorAbandonedAduChulaVista } from "./contractor-abandoned-adu-chula-vista";

const articles: ArticleContent[] = [contractorAbandonedAduChulaVista];

export function getAllArticles(): ArticleContent[] {
  return articles;
}

export function getArticleBySlug(slug: string): ArticleContent | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}
