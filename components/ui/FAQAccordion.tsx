"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FAQAccordionItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQAccordionItem[];
  /** Allow multiple open (default: false) */
  allowMultiple?: boolean;
}

export function FAQAccordion({
  items,
  allowMultiple = false,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => {
      if (prev === index) return null;
      return allowMultiple ? (prev === null ? index : prev) : index;
    });
  };

  return (
    <div className="divide-y divide-border-light">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-4 first:pt-0">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-start justify-between gap-4 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span className="text-h4 font-semibold text-[var(--color-text-primary)]">
                {item.question}
              </span>
              <span
                className={cn(
                  "shrink-0 text-[var(--color-text-tertiary)] transition-transform duration-normal",
                  isOpen && "rotate-45"
                )}
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
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <p className="pt-2 text-body text-[var(--color-text-secondary)] leading-normal">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
