import { z } from "zod";

/**
 * Validation schema for the assessment request form.
 * Used by the form component and the API route.
 */
export const assessmentFormSchema = z.object({
  projectType: z.enum(["adu", "addition", "remodel", "garage-conversion", "other"], {
    error: "Please select a project type.",
  }),
  city: z.string().min(1, "City is required."),
  permitStatus: z.enum(["active", "closed", "unsure"], {
    error: "Please select permit status.",
  }),
  projectStage: z.enum(["framework", "inspections", "near-completion", "unknown"], {
    error: "Please select project stage.",
  }),
  problemDescription: z.string().min(10, "Please describe the problem (at least 10 characters)."),
  photoUrls: z.array(z.string()).optional().default([]),
  amountPaid: z.string().optional(),
  primaryGoal: z.enum(["complete", "document", "both", "unsure"]).optional(),
  howFound: z.string().optional(),
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(10, "Please enter a valid phone number."),
});

export type AssessmentFormData = z.infer<typeof assessmentFormSchema>;
