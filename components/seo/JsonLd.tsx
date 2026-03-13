import {
  buildOrganizationJsonLd,
  buildLocalBusinessJsonLd,
  buildServiceJsonLd,
  buildArticleJsonLd,
} from "@/lib/seo/schema";

interface JsonLdProps {
  type: "organization" | "localBusiness" | "service";
}

interface JsonLdArticleProps {
  type: "article";
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function JsonLd(props: JsonLdProps | JsonLdArticleProps) {
  let data: object;
  if (props.type === "article") {
    const { headline, description, url, datePublished, dateModified } = props;
    data = buildArticleJsonLd({
      headline,
      description,
      url,
      datePublished,
      dateModified,
    });
  } else if (props.type === "organization") {
    data = buildOrganizationJsonLd();
  } else if (props.type === "localBusiness") {
    data = buildLocalBusinessJsonLd();
  } else {
    data = buildServiceJsonLd();
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
