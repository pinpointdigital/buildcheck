import { PageContainer } from "@/components/layout/PageContainer";
import { ContentSection } from "@/components/page-sections/ContentSection";
import { RelatedArticlesBlock } from "@/components/linking/RelatedArticlesBlock";
import { RelatedCitiesBlock } from "@/components/linking/RelatedCitiesBlock";
import { CoreServiceLinksBlock } from "@/components/linking/CoreServiceLinksBlock";
import { CTABlock } from "@/components/linking/CTABlock";
import { ROUTES } from "@/lib/constants";
import type { ArticleContent } from "@/content/schemas/article";

interface ArticleLayoutProps {
  article: ArticleContent;
}

/** Prose styles for article body HTML */
const articleBodyClass =
  "article-body text-body leading-[var(--leading-relaxed)] max-w-[var(--container-reading)] " +
  "[&_h2]:font-headline [&_h2]:text-h3 [&_h2]:font-bold [&_h2]:text-navy-800 [&_h2]:mt-10 [&_h2]:mb-4 " +
  "[&_h3]:font-headline [&_h3]:text-h4 [&_h3]:font-bold [&_h3]:text-navy-800 [&_h3]:mt-8 [&_h3]:mb-3 " +
  "[&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-1";

export function ArticleLayout({ article }: ArticleLayoutProps) {
  return (
    <article>
      <ContentSection>
        <PageContainer width="content">
          <header className="max-w-[var(--container-reading)]">
            {article.category && (
              <p className="text-overline font-semibold tracking-wide text-teal uppercase mb-2">
                {article.category}
              </p>
            )}
            <h1 className="font-headline text-h1 font-bold text-navy-800 tracking-tight">
              {article.title}
            </h1>
            <p className="mt-2 text-caption text-[var(--color-text-tertiary)]">
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </header>
          <div
            className={articleBodyClass + " mt-8"}
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
        </PageContainer>
      </ContentSection>

      <ContentSection background="subtle">
        <PageContainer width="content">
          <div className="max-w-[var(--container-content)] space-y-12">
            {article.relatedArticleSlugs.length > 0 && (
              <RelatedArticlesBlock articleSlugs={article.relatedArticleSlugs} />
            )}
            {article.relatedCitySlugs.length > 0 && (
              <RelatedCitiesBlock citySlugs={article.relatedCitySlugs} title="Service areas" />
            )}
            <CoreServiceLinksBlock />
            <CTABlock
              heading="Get a professional assessment"
              ctaLabel="Request an Assessment"
              ctaHref={ROUTES.requestAssessment}
              note="Limited availability. We accept 4–6 assessments per month."
            />
          </div>
        </PageContainer>
      </ContentSection>
    </article>
  );
}
