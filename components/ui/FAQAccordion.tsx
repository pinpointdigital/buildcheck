import { cn } from "@/lib/utils";

export interface FAQAccordionItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQAccordionItem[];
  /** Allow multiple open (default: false) - ignored when using native details/summary */
  allowMultiple?: boolean;
}

export function FAQAccordion({
  items,
}: FAQAccordionProps) {
  return (
    <div className="divide-y divide-border-light faq-accordion">
      {items.map((item, index) => (
        <details
          key={index}
          className="group py-4 first:pt-0"
        >
          <summary className="flex w-full cursor-pointer list-none items-start justify-between gap-4 text-left hover:opacity-80 transition-opacity [&::-webkit-details-marker]:hidden">
            <span className="text-h4 font-semibold text-[var(--color-text-primary)]">
              {item.question}
            </span>
            <span
              className="faq-icon shrink-0 text-[var(--color-text-tertiary)] transition-transform duration-300 ease-out group-open:rotate-45"
              aria-hidden
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </span>
          </summary>
          <div className="pt-2 pb-1">
            <p className="text-body text-[var(--color-text-secondary)] leading-normal">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
