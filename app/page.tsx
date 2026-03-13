import { PageHero } from "@/components/page-sections/PageHero";
import { TrustSection } from "@/components/page-sections/TrustSection";
import { ContentSection } from "@/components/page-sections/ContentSection";
import { SplitSection } from "@/components/page-sections/SplitSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { AuthorityCallout } from "@/components/sections/AuthorityCallout";
import { FAQSection } from "@/components/page-sections/FAQSection";
import { CTASection } from "@/components/page-sections/CTASection";
import { SectionReveal } from "@/components/motion/SectionReveal";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/constants";
import { ASSESSMENT_AVAILABILITY } from "@/lib/constants";
import { COMPANY } from "@/lib/constants";
import { getCitySlugs } from "@/content/cities";

const trustItems = [
  { label: "Licensed California Class B General Contractor", value: COMPANY.cslbDisplay, icon: "license" as const },
  { label: "Veteran-owned. California. Based in Carlsbad, CA.", icon: "veteran" as const },
  { label: "Real experience assessing and completing projects abandoned by other contractors.", icon: "experience" as const },
  { label: "A specialized service by ZOOM ADU, Inc.", icon: "zoom" as const },
];

const processSteps = [
  {
    title: "Screening Call (free)",
    description: "15–20 minutes. We determine if an assessment is the right next step.",
  },
  {
    title: "Document Collection",
    description: "You provide contract, payments, permit info. We pull inspection history.",
    detail: "1–3 business days.",
  },
  {
    title: "On-Site Inspection",
    description: "A licensed contractor evaluates the work, photographs deficiencies, assesses code compliance.",
    detail: "2–4 hours depending on project scale.",
  },
  {
    title: "Written Report",
    description: "Professional report delivered within 7–10 business days. Typically 8–15 pages.",
  },
  {
    title: "Strategy Consultation",
    description: "We walk through the findings. If completion makes sense, we discuss it. If it doesn't, we say so.",
  },
];

const faqItems = [
  {
    question: "How much does the assessment cost?",
    answer:
      "$2,500–$3,500 depending on project scale and complexity. Confirmed after the screening call. If you hire us to complete the construction, 100% of the fee is credited toward the project.",
  },
  {
    question: "What if I just want the report?",
    answer:
      "That's fine. The report is the core product. Use it as a roadmap to evaluate options, file a CSLB complaint, or consult an attorney  -  without hiring us for construction.",
  },
  {
    question: "Is this a home inspection?",
    answer:
      "No. We assess failed or incomplete construction against building codes and professional standards. This is not a pre-sale property condition report.",
  },
  {
    question: "Can the report help with a CSLB complaint or bond claim?",
    answer:
      "Yes. The report documents specific deficiencies and code issues  -  substantially more useful than a verbal description. It is not a legal document or expert witness opinion.",
  },
  {
    question: "What project types do you assess?",
    answer:
      "ADUs, garage conversions, additions, and major remodels with $50,000+ in remaining scope.",
  },
  {
    question: "Do you take over projects from other contractors?",
    answer:
      "When the assessment shows the project is recoverable and fits our capabilities, yes. We never bid blind. The assessment determines whether a project is something we can stand behind.",
  },
];

const serviceAreaCities = [
  { slug: "san-diego", name: "San Diego" },
  { slug: "chula-vista", name: "Chula Vista" },
  { slug: "carlsbad", name: "Carlsbad" },
  { slug: "oceanside", name: "Oceanside" },
  { slug: "escondido", name: "Escondido" },
  { slug: "san-marcos", name: "San Marcos" },
  { slug: "vista", name: "Vista" },
  { slug: "el-cajon", name: "El Cajon" },
  { slug: "national-city", name: "National City" },
].filter((c) => getCitySlugs().includes(c.slug)); // Only show cities we have content for

export default function HomePage() {
  return (
    <>
      <PageHero
        title={
          <>
            <span className="block leading-[1.2]">You Trusted a Contractor.</span>
            <span className="block leading-[1.2]">They Didn&apos;t Finish.</span>
            <span className="block leading-[1.2]">Now You&apos;re Stuck.</span>
          </>
        }
        threeLineHeadline
        subtitle="BuildCheck is an independent construction failure assessment for San Diego homeowners whose ADU, addition, garage conversion, or major remodel was abandoned, stalled, or poorly built. We document what went wrong, what it will cost to fix, and whether the project is worth completing."
        cta={{ label: "Request Your Project Assessment →", href: ROUTES.requestAssessment }}
        availability={`Limited availability. We accept ${ASSESSMENT_AVAILABILITY}.`}
        variant="light"
      />

      <SectionReveal>
        <TrustSection items={trustItems} variant="light" />
      </SectionReveal>

      <SectionReveal>
      <ContentSection>
        <PageContainer width="content">
          <SectionHeader
            overline="THE SERVICE"
            title="What Is a Construction Failure Assessment?"
          />
          <div className="max-w-[var(--container-reading)] space-y-4 text-body text-[var(--color-text-primary)] leading-normal">
            <p>
              A thorough, documented evaluation of a residential construction project that has gone
              wrong  -  performed by a licensed California general contractor.
            </p>
            <p>Not a free estimate. Not a home inspection. Not a legal opinion.</p>
            <p>You receive a written professional report that tells you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>What was built correctly and what was not</li>
              <li>Whether the work can pass remaining inspections</li>
              <li>What deficiencies exist  -  including problems that may not be visible</li>
              <li>What it will realistically cost to correct and complete</li>
              <li>Whether the project is worth finishing</li>
            </ul>
          </div>
        </PageContainer>
      </ContentSection>
      </SectionReveal>

      <SectionReveal>
      <SplitSection
        background="subtle"
        leftTitle="Is BuildCheck™ Right for You?"
        leftAccent="positive"
        rightAccent="muted"
        left={
          <>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your contractor abandoned your project mid-build.</li>
              <li>The work was &quot;finished&quot; but you don&apos;t trust it.</li>
              <li>You have open or expired permits with no path to closing them.</li>
              <li>You passed inspections but something still feels wrong.</li>
              <li>You need a professional answer before spending another dollar.</li>
            </ul>
          </>
        }
        rightTitle="When BuildCheck™ Is Not the Right Fit"
        right={
          <>
            <ul className="list-disc pl-6 space-y-2">
              <li>You want a free estimate. This is a paid professional service.</li>
              <li>Your only goal is litigation support. We&apos;re contractors, not attorneys.</li>
              <li>Your project is unpermitted and you want it to stay that way.</li>
              <li>The remaining work is under $50,000 in scope.</li>
              <li>
                You&apos;re looking for the cheapest contractor. If a low price created the problem, a
                lower price won&apos;t fix it.
              </li>
            </ul>
          </>
        }
      />
      </SectionReveal>

      <SectionReveal>
      <ContentSection>
        <PageContainer width="content">
          <SectionHeader
            overline="THE INSPECTION PROBLEM"
            title="The Inspection Problem Nobody Talks About"
          />
          <div className="max-w-[var(--container-reading)] space-y-4 text-body text-[var(--color-text-primary)]">
            <p>
              Most homeowners assume a passed inspection means the work is solid. That assumption is
              wrong more often than people realize.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Inspectors are overloaded. A typical site visit: 15–20 minutes.</li>
              <li>
                Inspections check minimum code compliance at a specific stage  -  not overall quality,
                durability, or workmanship.
              </li>
              <li>What passes at framing tells you nothing about what happened after the walls closed.</li>
            </ul>
            <AuthorityCallout>
              If your contractor cut corners in one area you can see, there is a strong probability
              they cut corners in areas you cannot see. A passed inspection does not change that
              math. Our assessment evaluates the actual construction  -  not just the inspection record.
            </AuthorityCallout>
          </div>
        </PageContainer>
      </ContentSection>
      </SectionReveal>

      <SectionReveal>
      <ContentSection background="subtle">
        <PageContainer width="content">
          <ProcessSteps
            overline="THE PROCESS"
            title="How It Works"
            steps={processSteps}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={ROUTES.howItWorks} variant="secondary">
              See the Full Process →
            </Button>
            <Button href={ROUTES.requestAssessment} variant="primary">
              Request Your Project Assessment →
            </Button>
          </div>
        </PageContainer>
      </ContentSection>
      </SectionReveal>

      <SectionReveal>
      <ContentSection>
        <PageContainer width="content">
          <SectionHeader
            overline="WHY WE EXIST"
            title="Why This Service Exists"
          />
          <div className="max-w-[var(--container-reading)] space-y-4 text-body text-[var(--color-text-primary)]">
            <p>
              When a contractor abandons a project in California, your options are worse than you
              think:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>CSLB complaints take 6–12 months. They cannot order direct payment.</li>
              <li>Contractor bonds are capped at $25,000  -  split among all claimants.</li>
              <li>Attorneys focus on litigation, not getting the project finished.</li>
              <li>Other contractors avoid taking over messy, partially built work.</li>
            </ul>
            <p>
              BuildCheck fills that gap. We assess what went wrong, document it, and when the
              project qualifies, complete it correctly. The assessment comes first because that is
              how we protect both you and ourselves.
            </p>
          </div>
        </PageContainer>
      </ContentSection>
      </SectionReveal>

      <SectionReveal>
      <ContentSection background="dark">
        <PageContainer width="content">
          <h2 className="font-headline text-h2 font-bold text-white mb-4">Service Area</h2>
          <p className="text-[var(--color-text-inverse-muted)] max-w-[var(--container-reading)] mb-8">
            BuildCheck serves homeowners throughout San Diego County, including San Diego, Chula
            Vista, Carlsbad, Oceanside, Escondido, San Marcos, Vista, El Cajon, and National City.
          </p>
          {serviceAreaCities.length > 0 && (
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {serviceAreaCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={ROUTES.city(c.slug)}
                    className="text-body font-medium text-[var(--color-text-inverse-muted)] hover:text-white transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-10">
            <Button
              href={ROUTES.requestAssessment}
              variant="primary"
              className="bg-accent text-white hover:bg-accent-hover"
            >
              Request Your Project Assessment →
            </Button>
          </div>
        </PageContainer>
      </ContentSection>
      </SectionReveal>

      <SectionReveal>
      <FAQSection items={faqItems} title="Frequently Asked Questions" background="subtle" />
      </SectionReveal>

      <SectionReveal>
      <CTASection
        heading="Your Project Deserves a Straight Answer."
        primaryCta={{
          label: "Request Your Project Assessment",
          href: ROUTES.requestAssessment,
        }}
        note={`Or call directly: ${COMPANY.phone}. Limited availability.`}
        background="default"
      />
      </SectionReveal>
    </>
  );
}
