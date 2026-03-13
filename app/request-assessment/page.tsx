import { PageHero } from "@/components/page-sections/PageHero";
import { ContentSection } from "@/components/page-sections/ContentSection";
import { AuthorityCallout } from "@/components/sections/AuthorityCallout";
import { PageContainer } from "@/components/layout/PageContainer";
import { MultiStepAssessmentForm } from "@/components/form/MultiStepAssessmentForm";
import { COMPANY } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Request Your Project Assessment | BuildCheck | San Diego",
  description:
    "Request a professional assessment of your stalled or abandoned construction project. Paid service. Licensed CA contractor. Limited availability.",
  path: "request-assessment",
});

export default function RequestAssessmentPage() {
  return (
    <>
      <PageHero
        title="Request Your Project Assessment"
        subtitle="If your construction project has been abandoned, stalled, or left in questionable condition, tell us about it. We'll follow up within 1–2 business days."
        variant="light"
      />

      <ContentSection>
        <PageContainer width="content">
          <AuthorityCallout title="What happens next">
            <ol className="list-decimal list-inside space-y-2">
              <li>We review your submission within 1–2 business days.</li>
              <li>If your project fits, we schedule a 15–20 minute screening call (no cost).</li>
              <li>We confirm whether an assessment is the right step and discuss the fee ($2,500 to $3,500).</li>
            </ol>
            <p className="mt-4">This is a paid professional service.</p>
          </AuthorityCallout>
        </PageContainer>
      </ContentSection>

      <ContentSection background="subtle">
        <PageContainer width="content">
          <h2 className="font-headline text-h2 font-bold text-navy-800 mb-6">
            Tell Us About Your Project
          </h2>
          <MultiStepAssessmentForm />
        </PageContainer>
      </ContentSection>

      <ContentSection>
        <PageContainer width="narrow">
          <p className="text-body text-[var(--color-text-secondary)] text-center">
            We understand that reaching out after a bad experience takes trust. Your information is
            confidential. If your situation is not a fit, we&apos;ll tell you directly and point you in
            a better direction when we can.
          </p>
          <p className="mt-4 text-body-sm text-center text-[var(--color-text-tertiary)]">
            Prefer to call?{" "}
            <a href={`tel:${COMPANY.phone.replace(/\D/g, "")}`} className="text-teal hover:underline">
              {COMPANY.phone}
            </a>
            . {COMPANY.hours}.
          </p>
        </PageContainer>
      </ContentSection>
    </>
  );
}
