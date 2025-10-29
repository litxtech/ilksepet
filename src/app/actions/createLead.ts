"use server";

import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  need: z.enum(["corporate", "ecommerce", "saas", "mobile"]),
  timeline: z.enum(["7-days", "14-days", "21-days", "flexible"]),
  budget: z.string(),
  company: z.string().optional(),
  phone: z.string().optional(),
  notes: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

function getServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
  return createClient(url, key);
}

export async function createLead(input: LeadInput) {
  const parsed = leadSchema.parse(input);
  const supabase = getServiceClient();
  const { data, error } = await supabase.from("leads").insert({
    name: parsed.name,
    email: parsed.email,
    need: parsed.need,
    timeline: parsed.timeline,
    budget: parsed.budget,
    company: parsed.company ?? null,
    phone: parsed.phone ?? null,
    notes: parsed.notes ?? null,
    source: "website",
  }).select().single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
}


