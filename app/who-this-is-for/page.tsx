import { PageHero } from "@/components/page-sections/PageHero";
import { ContentSection } from "@/components/page-sections/ContentSection";
import { PageContainer } from "@/components/layout/PageContainer";
import { QualificationCards } from "@/components/sections/QualificationCards";
import { AuthorityCallout } from "@/components/sections/AuthorityCallout";
import { CTASection } from "@/components/page-sections/CTASection";
import { ROUTES } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Is BuildCheck Right for You? | Who We Help and Who We Don't",
  description:
    "BuildCheck serves homeowners with abandoned ADUs, failed inspections, and stalled construction in San Diego County. Find out if your project qualifies.",
  path: "who-this-is-for",
});

const forItems = [
  {
    title: "Your project fits",
    description:
      "ADUs, garage conversions, room additions, or major remodels with permits and meaningful remaining work. Not cosmetic touch-ups.",
  },
  {
    title: "Your situation matches",
    description:
      "A contractor started and abandoned the project, stalled indefinitely, or was terminated. The work was 'completed' but you believe it's deficient. You have open permits with no path to final inspection. You passed inspections but don't trust the work.",
  },
  {
    title: "Your mindset is right",
    description:
      "You understand a professional assessment costs money  -  and that's an investment in a better decision. You're focused on resolution, not just blame. You have or can access realistic funding. Most completion projects run $50K–$250K+. You're ready to act within 30–90 days.",
  },
];

const notForItems = [
  {
    title: "You want free advice",
    description: "The screening call is free. The assessment is not.",
  },
  {
    title: "Your only goal is a lawsuit",
    description:
      "Our report can inform legal decisions, but we're contractors, not expert witnesses.",
  },
  {
    title: "Your project is unpermitted and you want to keep it that way",
    description: "We work within the system.",
  },
  {
    title: "The remaining scope is under $25K",
    description: "The assessment cost is disproportionate. A smaller contractor is a better fit.",
  },
  {
    title: "You want the cheapest option",
    description: "If a low price created the problem, a lower price won't solve it.",
  },
  {
    title: "You've already fired multiple contractors",
    description: "A pattern may indicate issues beyond the contractor. We'll discuss it openly.",
  },
];

export default function WhoThisIsForPage() {
  return (
    <>
      <PageHero
        title="Who This Is For"
        subtitle="This page will help you determine if BuildCheck™ makes sense for your project before you call."
        variant="light"
      />

      <QualificationCards
        title="Is BuildCheck™ Right for You?"
        forItems={forItems}
        notForTitle="BuildCheck™ Is Not the Right Fit If…"
        notForItems={notForItems}
      />

      <ContentSection>
        <PageContainer width="narrow">
          <AuthorityCallout title="Budget Reality">
        If your project was originally contracted at a price that seemed too good to be true, there
        is a reason it failed. Many distressed homeowners learned too late that the original price
        was never realistic.         A BuildCheck assessment gives you an honest number. It may be higher than
        what you were quoted. It will be real.
          </AuthorityCallout>
        </PageContainer>
      </ContentSection>

      <CTASection
        heading="Request Your Project Assessment"
        primaryCta={{ label: "Request Your Project Assessment", href: ROUTES.requestAssessment }}
        background="subtle"
      />
    </>
  );
}
