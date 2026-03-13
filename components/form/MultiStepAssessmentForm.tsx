"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  assessmentFormSchema,
  type AssessmentFormData,
} from "@/lib/assessment-form-schema";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const STEPS = [
  { id: "project", title: "Project details" },
  { id: "problem", title: "Describe the problem" },
  { id: "contact", title: "Your information" },
];

const PROJECT_TYPES = [
  { value: "adu", label: "ADU" },
  { value: "addition", label: "Addition" },
  { value: "remodel", label: "Major remodel" },
  { value: "garage-conversion", label: "Garage conversion" },
  { value: "other", label: "Other" },
];

const PERMIT_STATUSES = [
  { value: "active", label: "Active permit" },
  { value: "closed", label: "Closed permit" },
  { value: "unsure", label: "Unsure" },
];

const PROJECT_STAGES = [
  { value: "framework", label: "Framework / rough-in" },
  { value: "inspections", label: "Inspections in progress" },
  { value: "near-completion", label: "Near completion" },
  { value: "unknown", label: "Unknown" },
];

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

interface MultiStepAssessmentFormProps {
  onSuccess?: () => void;
  /** For server action or custom submit; if not provided, POSTs to /api/assessment */
  onSubmit?: (data: AssessmentFormData) => Promise<void>;
}

export function MultiStepAssessmentForm({
  onSuccess,
  onSubmit: customSubmit,
}: MultiStepAssessmentFormProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    watch,
  } = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentFormSchema),
    defaultValues: {
      projectType: undefined,
      city: "",
      permitStatus: undefined,
      projectStage: undefined,
      problemDescription: "",
      name: "",
      email: "",
      phone: "",
    },
  });

  const currentStep = STEPS[stepIndex];
  const isLastStep = stepIndex === STEPS.length - 1;

  const goNext = async () => {
    const fieldsToValidate =
      stepIndex === 0
        ? (["projectType", "city", "permitStatus", "projectStage"] as const)
        : stepIndex === 1
          ? (["problemDescription"] as const)
          : (["name", "email", "phone"] as const);
    const valid = await trigger(fieldsToValidate);
    if (valid) setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  };

  const goBack = () => setStepIndex((i) => Math.max(0, i - 1));

  const onFormSubmit = async (data: AssessmentFormData) => {
    setSubmitStatus("submitting");
    setSubmitError(null);
    try {
      if (customSubmit) {
        await customSubmit(data);
      } else {
        const res = await fetch("/api/assessment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body.message || "Submission failed. Please try again.");
        }
      }
      setSubmitStatus("success");
      onSuccess?.();
    } catch (e) {
      setSubmitStatus("error");
      setSubmitError(e instanceof Error ? e.message : "Something went wrong.");
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="rounded-md bg-bg-callout border border-border-light p-8 text-center">
        <h3 className="font-headline text-h2 font-bold text-navy-800">
          Thank you
        </h3>
        <p className="mt-4 text-body text-[var(--color-text-secondary)]">
          We&apos;ll review your submission and follow up within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="max-w-[var(--container-form)] mx-auto"
    >
      <div className="mb-8 text-body-sm text-[var(--color-text-tertiary)]">
        Step {stepIndex + 1} of {STEPS.length}: {currentStep.title}
      </div>

      {/* Step 1: Project details */}
      {stepIndex === 0 && (
        <div className="space-y-6">
          <div>
            <label className="block text-body-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Project type *
            </label>
            <select
              {...register("projectType")}
              className="w-full h-12 px-4 rounded-sm border-[1.5px] border-border-medium focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-colors"
            >
              <option value="">Select…</option>
              {PROJECT_TYPES.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <p className="mt-1 text-caption text-accent">{errors.projectType.message}</p>
            )}
          </div>
          <div>
            <label className="block text-body-sm font-medium text-[var(--color-text-secondary)] mb-2">
              City *
            </label>
            <input
              type="text"
              {...register("city")}
              placeholder="e.g. Chula Vista"
              className="w-full h-12 px-4 rounded-sm border-[1.5px] border-border-medium focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-colors"
            />
            {errors.city && (
              <p className="mt-1 text-caption text-accent">{errors.city.message}</p>
            )}
          </div>
          <div>
            <label className="block text-body-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Permit status *
            </label>
            <select
              {...register("permitStatus")}
              className="w-full h-12 px-4 rounded-sm border-[1.5px] border-border-medium focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
            >
              <option value="">Select…</option>
              {PERMIT_STATUSES.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            {errors.permitStatus && (
              <p className="mt-1 text-caption text-accent">{errors.permitStatus.message}</p>
            )}
          </div>
          <div>
            <label className="block text-body-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Project stage *
            </label>
            <select
              {...register("projectStage")}
              className="w-full h-12 px-4 rounded-sm border-[1.5px] border-border-medium focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
            >
              <option value="">Select…</option>
              {PROJECT_STAGES.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            {errors.projectStage && (
              <p className="mt-1 text-caption text-accent">{errors.projectStage.message}</p>
            )}
          </div>
        </div>
      )}

      {/* Step 2: Problem */}
      {stepIndex === 1 && (
        <div className="space-y-6">
          <div>
            <label className="block text-body-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Describe the problem *
            </label>
            <textarea
              {...register("problemDescription")}
              rows={5}
              placeholder="What happened with your previous contractor? What is the current state of the project?"
              className="w-full min-h-[120px] px-4 py-3 rounded-sm border-[1.5px] border-border-medium focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none resize-y"
            />
            {errors.problemDescription && (
              <p className="mt-1 text-caption text-accent">
                {errors.problemDescription.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-body-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Upload photos (optional)
            </label>
            <p className="text-caption text-[var(--color-text-tertiary)]">
              Photo upload can be wired to your storage or API. For now this is a placeholder.
            </p>
          </div>
        </div>
      )}

      {/* Step 3: Contact */}
      {stepIndex === 2 && (
        <div className="space-y-6">
          <div>
            <label className="block text-body-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Name *
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full h-12 px-4 rounded-sm border-[1.5px] border-border-medium focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
            />
            {errors.name && (
              <p className="mt-1 text-caption text-accent">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-body-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Email *
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full h-12 px-4 rounded-sm border-[1.5px] border-border-medium focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-caption text-accent">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-body-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Phone *
            </label>
            <input
              type="tel"
              {...register("phone")}
              className="w-full h-12 px-4 rounded-sm border-[1.5px] border-border-medium focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
            />
            {errors.phone && (
              <p className="mt-1 text-caption text-accent">{errors.phone.message}</p>
            )}
          </div>
        </div>
      )}

      {submitStatus === "error" && submitError && (
        <p className="mt-4 text-body-sm text-accent">{submitError}</p>
      )}

      <div className="mt-10 flex gap-4">
        {stepIndex > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="px-6 py-3 rounded-sm border-[1.5px] border-navy-800 text-navy-800 font-semibold hover:bg-navy-800 hover:text-white transition-colors"
          >
            Back
          </button>
        ) : null}
        {!isLastStep ? (
          <button
            type="button"
            onClick={goNext}
            className="px-6 py-3 rounded-sm bg-accent text-white font-semibold hover:bg-accent-hover transition-colors"
          >
            Next
          </button>
        ) : (
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting || submitStatus === "submitting"}
          >
            {submitStatus === "submitting" ? "Sending…" : "Submit request"}
          </Button>
        )}
      </div>
    </form>
  );
}
