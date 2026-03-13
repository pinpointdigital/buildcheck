import { PageContainer } from "@/components/layout/PageContainer";
import { PageHero } from "@/components/page-sections/PageHero";
import { ContentSection } from "@/components/page-sections/ContentSection";
import { AuthorityCallout } from "@/components/sections/AuthorityCallout";
import { RelatedArticlesBlock } from "@/components/linking/RelatedArticlesBlock";
import { RelatedCitiesBlock } from "@/components/linking/RelatedCitiesBlock";
import { CoreServiceLinksBlock } from "@/components/linking/CoreServiceLinksBlock";
import { CTABlock } from "@/components/linking/CTABlock";
import { ROUTES } from "@/lib/constants";
import type { CityContent } from "@/content/schemas/city";

interface CityPageLayoutProps {
  city: CityContent;
  /** Optional FAQ items for this city */
  faqItems?: { question: string; answer: string }[];
}

export function CityPageLayout({ city, faqItems = [] }: CityPageLayoutProps) {
  return (
    <>
      <PageHero
        title={city.hero.title}
        subtitle={city.hero.subtitle}
        cta={{
          label: `Request an Assessment for Your ${city.name} Project`,
          href: ROUTES.requestAssessment,
        }}
        variant="light"
      />

      <ContentSection background="subtle">
        <PageContainer width="content">
          <div className="max-w-[var(--container-reading)]">
            <h2 className="font-headline text-h2 font-bold text-navy-800 mb-4">
              {city.name} context
            </h2>
            <p className="text-body text-[var(--color-text-primary)] leading-normal">
              {city.localContext}
            </p>
            {city.permitAuthority && (
              <p className="mt-4 text-body-sm">
                <span className="text-[var(--color-text-secondary)]">Permits: </span>
                {city.permitAuthority.url ? (
                  <a
                    href={city.permitAuthority.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal hover:underline"
                  >
                    {city.permitAuthority.name}
                  </a>
                ) : (
                  city.permitAuthority.name
                )}
              </p>
            )}
          </div>
        </PageContainer>
      </ContentSection>

      <ContentSection>
        <PageContainer width="content">
          <h2 className="font-headline text-h2 font-bold text-navy-800 mb-4">
            What we see in {city.name}
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-body text-[var(--color-text-secondary)]">
            <li>ADUs left partially built or improperly constructed</li>
            <li>Garage conversions that can&apos;t pass final inspection</li>
            <li>Additions where the contractor abandoned mid-project</li>
            <li>Projects where the contractor&apos;s license was suspended mid-build</li>
          </ul>
        </PageContainer>
      </ContentSection>

      <ContentSection background="subtle">
        <PageContainer width="narrow">
          <AuthorityCallout title="Taking over a project">
            Another contractor can take over your project — but not without understanding the full
            picture first. Deficiencies hidden behind drywall or in mechanical systems can turn a
            simple completion into a much larger project. That is what our assessment uncovers.
          </AuthorityCallout>
        </PageContainer>
      </ContentSection>

      <ContentSection>
        <PageContainer width="content">
          <div className="max-w-[var(--container-content)] space-y-12">
            {city.relatedArticleSlugs.length > 0 && (
              <RelatedArticlesBlock
                articleSlugs={city.relatedArticleSlugs}
                title={`Articles for ${city.name}`}
              />
            )}
            {city.relatedCitySlugs.length > 0 && (
              <RelatedCitiesBlock citySlugs={city.relatedCitySlugs} title="Nearby service areas" />
            )}
            <CoreServiceLinksBlock />
            <CTABlock
              heading={`Request an assessment for your ${city.name} project`}
              ctaLabel="Request an Assessment"
              ctaHref={ROUTES.requestAssessment}
            />
          </div>
        </PageContainer>
      </ContentSection>
    </>
  );
}
