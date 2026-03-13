import { PageHero } from "@/components/page-sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTASection } from "@/components/page-sections/CTASection";
import { ROUTES } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "How It Works | BuildCheck Assessment Process | San Diego",
  description:
    "From screening call to written report in 2–3 weeks. See exactly how the BuildCheck assessment process works and what your report includes.",
  path: "how-it-works",
});

const steps = [
  {
    title: "Screening Call",
    description:
      "15–20 minutes. No cost. We ask about your project type, what happened with the previous contractor, permit status, and your goals. If an assessment is the right fit, we confirm scope and fee. If it isn't, we'll tell you directly.",
  },
  {
    title: "Document Collection",
    description:
      "You provide: original contract and change orders, payment records, photos, written communications with the previous contractor. We pull permit and inspection history from the relevant jurisdiction.",
    detail: "1–3 business days.",
  },
  {
    title: "On-Site Inspection",
    description:
      "A licensed contractor evaluates the project: structural elements, framing, roofing, siding, weatherproofing; electrical, plumbing, HVAC where visible; finish quality; code compliance; photographic documentation throughout; flagging of likely concealed issues.",
    detail: "2–4 hours depending on project scale.",
  },
  {
    title: "Written Report",
    description:
      "Professional PDF, typically 8–15 pages. Delivered within 7–10 business days. Covers deficiencies, risks, corrective scope, cost estimates, completion strategy, and recovery guidance. The report is yours to share with contractors, attorneys, the CSLB, your lender.",
  },
  {
    title: "Strategy Consultation",
    description:
      "30–45 minutes. Included. We walk through the findings and discuss your options: project recoverable and fits our team (assessment fee credited 100% toward construction); recoverable but not our fit (we tell you; the report gives the next contractor a clear starting point); not worth completing (we tell you; the report documents everything for complaints, claims, or legal action).",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="How It Works"
        subtitle="From first call to professional report  -  here is exactly what to expect."
        cta={{ label: "Request Your Project Assessment", href: ROUTES.requestAssessment }}
        variant="light"
      />

      <ProcessSteps
        title="The Process"
        steps={steps}
      />

      <CTASection
        heading="Ready to get started?"
        primaryCta={{ label: "Request Your Project Assessment", href: ROUTES.requestAssessment }}
        background="subtle"
      />
    </>
  );
}
