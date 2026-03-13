import { PageHero } from "@/components/page-sections/PageHero";
import { ContentSection } from "@/components/page-sections/ContentSection";
import { AuthorityCallout } from "@/components/sections/AuthorityCallout";
import { CTASection } from "@/components/page-sections/CTASection";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Construction Failure Assessment | Professional Report | San Diego",
  description:
    "Paid professional evaluation of your failed construction project. Documented deficiencies, cost estimates, completion plan. Licensed Class B contractor. San Diego County.",
  path: "construction-failure-assessment",
});

export default function ConstructionFailureAssessmentPage() {
  return (
    <>
      <PageHero
        title="Construction Failure Assessment"
        subtitle="A professional, documented evaluation of your stalled, abandoned, or poorly built construction project — by a licensed California general contractor."
        cta={{ label: "Request an Assessment", href: ROUTES.requestAssessment }}
        variant="light"
      />

      <ContentSection>
        <PageContainer width="content">
          <SectionHeader overline="THE SERVICE" title="What This Is" />
          <div className="max-w-[var(--container-reading)] space-y-4 text-body text-[var(--color-text-primary)]">
            <p>
              You need answers before you spend another dollar. That is what this assessment
              provides.
            </p>
            <p>
              We review your permits, inspection history, contract, and payments. We conduct a
              thorough on-site evaluation. We document every deficiency. And we deliver a written
              report that gives you the clarity to make an informed decision.
            </p>
            <p>
              This is the step that should happen before hiring another contractor, filing a
              complaint, or making any other move.
            </p>
            <Button href={ROUTES.requestAssessment} variant="primary">
              Request an Assessment →
            </Button>
          </div>
        </PageContainer>
      </ContentSection>

      <ContentSection background="subtle">
        <PageContainer width="content">
          <SectionHeader title="What's in the Report" />
          <ul className="max-w-[var(--container-reading)] list-disc pl-6 space-y-2 text-body text-[var(--color-text-primary)]">
            <li>
              <strong>Project history review</strong> — contract, permits, payment records, inspection
              timeline
            </li>
            <li>
              <strong>On-site inspection</strong> — structural, mechanical, finish quality, code
              compliance, photographed throughout
            </li>
            <li>
              <strong>Deficiency identification</strong> — visible problems and flagged areas where
              hidden issues are likely
            </li>
            <li>
              <strong>Inspection risk analysis</strong> — whether the work can realistically pass
              remaining inspections
            </li>
            <li>
              <strong>Corrective scope and cost estimates</strong> — what needs to be fixed and what
              it will realistically cost
            </li>
            <li>
              <strong>Completion strategy</strong> — practical paths forward, including phased
              approaches
            </li>
            <li>
              <strong>Recovery guidance</strong> — whether a CSLB complaint, bond claim, or attorney
              consultation is worth pursuing
            </li>
          </ul>
        </PageContainer>
      </ContentSection>

      <ContentSection>
        <PageContainer width="content">
          <SectionHeader title="What's Not Included" />
          <ul className="max-w-[var(--container-reading)] list-disc pl-6 space-y-2 text-body text-[var(--color-text-primary)]">
            <li>Legal opinions or expert witness testimony</li>
            <li>
              Structural engineering analysis (we refer to licensed engineers when needed)
            </li>
            <li>
              A binding construction bid (cost ranges support decision-making; a formal bid comes
              later)
            </li>
          </ul>
        </PageContainer>
      </ContentSection>

      <ContentSection background="subtle">
        <PageContainer width="narrow">
          <SectionHeader title="Pricing" />
          <p className="text-body text-[var(--color-text-primary)] mb-6">
            $1,500–$3,500 depending on project type, permit complexity, and site conditions.
            Confirmed after the screening call.
          </p>
          <AuthorityCallout>
            If you hire BuildCheck to complete the project within 90 days, 100% of the assessment
            fee is credited toward the construction contract. The fee is non-refundable. It covers
            real professional time, site evaluation, research, and a written deliverable. This is
            the product — not a sales tool.
          </AuthorityCallout>
        </PageContainer>
      </ContentSection>

      <ContentSection>
        <PageContainer width="content">
          <SectionHeader title="Why the Report Matters" />
          <div className="max-w-[var(--container-reading)] space-y-4 text-body text-[var(--color-text-primary)]">
            <p>
              Without it, you are making decisions on assumptions and incomplete information. With
              it, you have:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A documented record of what was built, what was missed, and what&apos;s at risk</li>
              <li>Realistic cost information to evaluate financial viability</li>
              <li>
                Documentation that strengthens any complaint, claim, or legal consultation
              </li>
              <li>
                Protection from the most common mistake: hiring the next contractor without
                understanding the full scope of what went wrong
              </li>
            </ul>
          </div>
        </PageContainer>
      </ContentSection>

      <CTASection
        heading="Request a Construction Failure Assessment"
        primaryCta={{ label: "Request an Assessment", href: ROUTES.requestAssessment }}
        background="default"
      />
    </>
  );
}
