import { getArticleBySlug } from "@/content/articles";
import { ROUTES } from "@/lib/constants";
import { InternalLinkCards } from "./InternalLinkCards";

interface RelatedArticlesBlockProps {
  articleSlugs: string[];
  title?: string;
}

export function RelatedArticlesBlock({
  articleSlugs,
  title = "Related Articles",
}: RelatedArticlesBlockProps) {
  const items = articleSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean)
    .map((a) => ({
      href: ROUTES.article(a!.slug),
      title: a!.title,
      description: a!.excerpt,
    }));

  if (items.length === 0) return null;

  return <InternalLinkCards items={items} title={title} />;
}
