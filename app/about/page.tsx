import { PageHero } from "@/components/page-sections/PageHero";
import { ContentSection } from "@/components/page-sections/ContentSection";
import { CTASection } from "@/components/page-sections/CTASection";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/constants";
import { COMPANY } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "About BuildCheck | A Service by ZOOM ADU | San Diego County",
  description:
    "Professional construction failure assessment for homeowners stuck with abandoned or poorly built projects. Licensed, veteran-owned. Carlsbad, CA.",
  path: "about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About BuildCheck"
        subtitle="Why this service exists and who stands behind it."
        variant="light"
      />

      <ContentSection>
        <PageContainer width="content">
          <SectionHeader overline="WHY WE EXIST" title="Why This Service Exists" />
          <div className="max-w-[var(--container-reading)] space-y-4 text-body text-[var(--color-text-primary)]">
            <p>
              The ADU and residential construction market in San Diego County has seen a wave of
              contractor failures. Contractors who took on more than they could handle. Contractors
              who underbid knowing they&apos;d run out of money. Contractors who collected large
              payments and disappeared.
            </p>
            <p>
              The homeowners left behind are stuck with half-built projects, open permits, loan
              payments on work that was never completed, and no clear answer on what to do next.
            </p>
            <p>We looked for a service that helped these homeowners. We didn&apos;t find one.</p>
          </div>
        </PageContainer>
      </ContentSection>

      <ContentSection background="subtle">
        <PageContainer width="content">
          <SectionHeader title="The Gap" />
          <ul className="max-w-[var(--container-reading)] list-disc pl-6 space-y-2 text-body text-[var(--color-text-primary)]">
            <li>The CSLB investigates but takes 6–12 months and can&apos;t recover money directly.</li>
            <li>Attorneys pursue legal remedies but don&apos;t evaluate construction quality.</li>
            <li>Home inspectors assess properties for sale, not failed construction projects.</li>
            <li>
              Other contractors avoid taking over unfinished, potentially defective work. That last
              point is the most important: the reason contractors avoid these projects is the same
              reason you need an assessment  -  nobody wants to inherit problems they can&apos;t see.
              The assessment makes the invisible visible.
            </li>
          </ul>
        </PageContainer>
      </ContentSection>

      <ContentSection>
        <PageContainer width="content">
          <SectionHeader title="Why a Licensed Builder's Perspective Matters" />
          <div className="max-w-[var(--container-reading)] space-y-4 text-body text-[var(--color-text-primary)]">
            <p>
              We know what good construction looks like because we do it every day. We know where
              contractors hide shortcuts. We can estimate correction costs from experience, not
              reference tables. And we can tell you whether a project is practically recoverable  - 
              not just theoretically.
            </p>
          </div>
        </PageContainer>
      </ContentSection>

      <ContentSection background="subtle">
        <PageContainer width="content">
          <SectionHeader title="About ZOOM ADU" />
          <div className="max-w-[var(--container-reading)] space-y-4 text-body text-[var(--color-text-primary)]">
            <p>BuildCheck is a specialized service of ZOOM ADU, Inc.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>California. Licensed Class B General Contractor  -  {COMPANY.cslbDisplay}.</li>
              <li>Veteran-owned. Based in Carlsbad, CA.</li>
              <li>Active in residential construction throughout San Diego County.</li>
            </ul>
            <p>
              The assessment is independent  -  you&apos;re paying for an honest evaluation, not a sales
              pitch. If it leads to a construction project that fits both parties, ZOOM ADU handles
              the execution. If it doesn&apos;t, the assessment stands on its own.
            </p>
            <Button href={ROUTES.requestAssessment} variant="primary">
              Request Your Project Assessment →
            </Button>
          </div>
        </PageContainer>
      </ContentSection>

      <CTASection
heading="Request Your Project Assessment"
  primaryCta={{ label: "Request Your Project Assessment", href: ROUTES.requestAssessment }}
        background="default"
      />
    </>
  );
}
