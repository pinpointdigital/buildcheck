# BuildCheck

Construction Failure Analysis & Completion Planning  -  a specialized service by ZOOM ADU.

Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

- **`app/`**  -  Routes: homepage, service, how-it-works, who-this-is-for, about, request-assessment, `city/[city]`, `articles/[slug]`, API route `api/assessment`.
- **`components/`**  -  Layout (Header, Footer), page-section primitives (PageHero, ContentSection, TrustSection, FAQSection, CTASection, SplitSection), sections (ProcessSteps, AuthorityCallout, etc.), linking blocks (RelatedArticlesBlock, RelatedCitiesBlock, CoreServiceLinksBlock, CTABlock), form (MultiStepAssessmentForm), content layouts (ArticleLayout, CityPageLayout), UI (Button, Card, SectionHeader, FAQAccordion), motion (SectionReveal), SEO (JsonLd).
- **`content/`**  -  Scalable content: `content/schemas/` (city, article, meta types), `content/cities/*.ts` (one file per city), `content/articles/*.ts` (one file per article). `content/cities/index.ts` and `content/articles/index.ts` export `getAllCities`, `getCityBySlug`, `getAllArticles`, `getArticleBySlug`, and slug lists for SSG/sitemap.
- **`lib/`**  -  `constants`, `utils`, `seo/metadata`, `seo/schema`, `assessment-form-schema` (Zod). Form submits to `POST /api/assessment` (backend-ready for webhook/CRM).

## Adding content

- **New city:** Add `content/cities/<slug>.ts` (see `chula-vista.ts`) and register it in `content/cities/index.ts`.
- **New article:** Add `content/articles/<slug>.ts` (see `contractor-abandoned-adu-chula-vista.ts`) and register it in `content/articles/index.ts`.

Design tokens and motion are in `app/globals.css`; Tailwind is extended in `tailwind.config.ts`.
