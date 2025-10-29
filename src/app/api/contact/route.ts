import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.enum(["corporate", "ecommerce", "saas", "mobile", "other"]),
  budget: z.string(),
  timeline: z.string(),
  message: z.string().min(10),
  privacyAccepted: z.boolean(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // TODO: Save to Supabase leads table
    // For now, just log the data
    console.log("Contact form submission:", validated);

    // TODO: Send email notification
    // You can use a service like Resend, SendGrid, or similar

    return NextResponse.json({ success: true, message: "Message received" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

