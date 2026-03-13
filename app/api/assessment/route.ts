import { NextRequest, NextResponse } from "next/server";
import { assessmentFormSchema } from "@/lib/assessment-form-schema";

/**
 * Assessment request API route.
 * Validates payload and returns 200. Wire to webhook, CRM, or email platform.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = assessmentFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // TODO: Send to webhook, CRM (e.g. HubSpot), or email (e.g. Resend).
    // Example: await fetch(WEBHOOK_URL, { method: 'POST', body: JSON.stringify(data) });
    // For now we only validate and return success.
    console.info("[Assessment request]", {
      projectType: data.projectType,
      city: data.city,
      email: data.email,
    });

    return NextResponse.json(
      { message: "Received. We'll follow up within 1–2 business days." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
