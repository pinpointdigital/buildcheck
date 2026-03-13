import { notFound } from "next/navigation";
import { getArticleBySlug, getArticleSlugs } from "@/content/articles";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.meta.title,
    description: article.meta.description,
    path: `articles/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://buildchecksd.com";
  const articleUrl = `${baseUrl}/articles/${article.slug}`;

  return (
    <>
      <JsonLd
        type="article"
        headline={article.title}
        description={article.meta.description}
        url={articleUrl}
        datePublished={article.date}
      />
      <ArticleLayout article={article} />
    </>
  );
}
