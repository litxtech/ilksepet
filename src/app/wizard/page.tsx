"use client";

import React from "react";
import { createLead } from "@/app/actions/createLead";

type Step = 0 | 1 | 2 | 3;

export default function WizardPage() {
  const [step, setStep] = React.useState<Step>(0);
  const [need, setNeed] = React.useState<"corporate" | "ecommerce" | "saas" | "mobile">("corporate");
  const [timeline, setTimeline] = React.useState<"7-days" | "14-days" | "21-days" | "flexible">("7-days");
  const [budget, setBudget] = React.useState<string>("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [resultPlan, setResultPlan] = React.useState<string | null>(null);

  function next() {
    setStep((s) => (Math.min(3, (s + 1) as Step)) as Step);
  }
  function prev() {
    setStep((s) => (Math.max(0, (s - 1) as Step)) as Step);
  }

  function choosePlan() {
    // simple heuristic
    if (need === "corporate" && budget.includes("under") || budget === "1k-2.5k") return setResultPlan("Starter Website – $990");
    if (need === "ecommerce" || need === "corporate") return setResultPlan("Professional Website Suite – $2,490");
    if (need === "saas" || need === "mobile") return setResultPlan("Enterprise SaaS Platform – $4,990+");
    return setResultPlan("Professional Website Suite – $2,490");
  }

  async function submitLead(formData: FormData) {
    try {
      setLoading(true);
      setError(null);
      const name = String(formData.get("name") || "");
      const email = String(formData.get("email") || "");
      const notes = String(formData.get("notes") || "");
      await createLead({ name, email, need, timeline, budget, notes });
      setStep(3);
    } catch (e: any) {
      setError(e.message || "Failed to submit");
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    choosePlan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [need, budget]);

  const progress = ((step) => (step / 3) * 100)(step);

  return (
    <main className="bg-white min-h-screen py-16">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Find Your Perfect Plan</h1>
        <p className="text-gray-600 mb-6">Answer 3 quick questions — we’ll suggest the best package.</p>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%` }} />
        </div>

        {step === 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1) What do you need?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {(["corporate","ecommerce","saas","mobile"] as const).map((n) => (
                <button key={n} onClick={() => setNeed(n)} className={`p-4 rounded-lg border ${need===n?"border-blue-600 bg-blue-50":"border-gray-200"}`}>{n.toUpperCase()}</button>
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              <div />
              <button onClick={next} className="px-6 py-3 bg-blue-600 text-white rounded-lg">Next</button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2) What is your timeline?</h2>
            <div className="grid md:grid-cols-4 gap-3">
              {(["7-days","14-days","21-days","flexible"] as const).map((t) => (
                <button key={t} onClick={() => setTimeline(t)} className={`p-3 rounded-lg border ${timeline===t?"border-blue-600 bg-blue-50":"border-gray-200"}`}>{t}</button>
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={prev} className="px-6 py-3 bg-gray-100 rounded-lg">Back</button>
              <button onClick={next} className="px-6 py-3 bg-blue-600 text-white rounded-lg">Next</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3) What is your budget?</h2>
            <div className="grid md:grid-cols-3 gap-3">
              {(["under-1k","1k-2.5k","2.5k-5k","5k-10k","10k+"] as const).map((b) => (
                <button key={b} onClick={() => setBudget(b)} className={`p-3 rounded-lg border ${budget===b?"border-blue-600 bg-blue-50":"border-gray-200"}`}>{b}</button>
              ))}
            </div>

            {resultPlan && (
              <div className="mt-6 p-4 rounded-lg border-2 border-blue-600 bg-blue-50">
                <p className="font-semibold text-blue-700">Recommended: {resultPlan}</p>
              </div>
            )}

            <div className="mt-6 flex justify-between">
              <button onClick={prev} className="px-6 py-3 bg-gray-100 rounded-lg">Back</button>
              <button onClick={() => setStep(3)} className="px-6 py-3 bg-blue-600 text-white rounded-lg">Continue</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Great! Share your contact details</h2>
            <p className="text-gray-600 mb-6">We’ll email you the recommended plan and next steps.</p>
            <form action={submitLead} className="space-y-4">
              <input name="name" placeholder="Full name" className="w-full px-4 py-3 border rounded-lg" required />
              <input name="email" type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-lg" required />
              <textarea name="notes" placeholder="Notes (optional)" rows={4} className="w-full px-4 py-3 border rounded-lg" />
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button disabled={loading} className="px-6 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50">{loading?"Submitting...":"Submit"}</button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}


