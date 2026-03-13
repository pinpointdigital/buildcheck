import { ROUTES } from "@/lib/constants";
import { InternalLinkCards } from "./InternalLinkCards";

const coreLinks = [
  { href: ROUTES.service, title: "Construction Failure Assessment", description: "What the assessment includes and what you receive." },
  { href: ROUTES.howItWorks, title: "How It Works", description: "From screening call to written report." },
  { href: ROUTES.whoThisIsFor, title: "Who This Is For", description: "Find out if your project qualifies." },
  { href: ROUTES.about, title: "About BuildCheck", description: "Why this service exists and who stands behind it." },
  { href: ROUTES.requestAssessment, title: "Request Your Project Assessment", description: "Start the process." },
];

interface CoreServiceLinksBlockProps {
  title?: string;
}

export function CoreServiceLinksBlock({
  title = "Learn More",
}: CoreServiceLinksBlockProps) {
  return <InternalLinkCards items={coreLinks} title={title} />;
}
