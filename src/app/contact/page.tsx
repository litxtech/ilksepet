"use client";

import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  projectType: z.enum(["corporate", "ecommerce", "saas", "mobile", "other"]),
  budget: z.string(),
  timeline: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacyAccepted: z.boolean().refine((val) => val === true, "You must accept the privacy policy"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "corporate",
    budget: "",
    timeline: "",
    message: "",
    privacyAccepted: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validated = contactSchema.parse(formData);
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrors({ submit: "Failed to send message. Please try again." });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="bg-white min-h-screen py-20">
        <div className="container mx-auto px-6 md:px-8 max-w-2xl text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-gray-700 mb-6">
              We've received your message and will get back to you within 24 hours.
            </p>
            <p className="text-gray-600 mb-4">
              Next steps:
            </p>
            <ul className="text-left text-gray-700 space-y-2 mb-6">
              <li>✓ Check your email for confirmation</li>
              <li>✓ Schedule a call using our calendar link</li>
              <li>✓ We'll review your requirements and send a proposal</li>
            </ul>
            <a
              href="https://calendly.com/ilksepet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Schedule a Call
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Or contact us via WhatsApp: <a href="https://wa.me/12136341961" className="text-blue-600 hover:underline">+1 (213) 634-1961</a>
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Tell us about your project. We'll respond within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                Project Type <span className="text-red-500">*</span>
              </label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value as any })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="corporate">Corporate Website</option>
                <option value="ecommerce">E-Commerce</option>
                <option value="saas">SaaS/Subscription</option>
                <option value="mobile">Mobile App</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range <span className="text-red-500">*</span>
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select budget range</option>
                <option value="under-1k">Under $1,000</option>
                <option value="1k-2.5k">$1,000 - $2,500</option>
                <option value="2.5k-5k">$2,500 - $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k+">$10,000+</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
              Timeline <span className="text-red-500">*</span>
            </label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select timeline</option>
              <option value="7-days">7 days</option>
              <option value="14-days">14 days</option>
              <option value="21-days">21+ days</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Project Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div className="mb-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                checked={formData.privacyAccepted}
                onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                className="mt-1 mr-2"
                required
              />
              <span className="text-sm text-gray-700">
                I have read and accept the{" "}
                <a href="/legal/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/legal/terms" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>
                <span className="text-red-500">*</span>
              </span>
            </label>
            {errors.privacyAccepted && <p className="text-red-500 text-sm mt-1">{errors.privacyAccepted}</p>}
          </div>

          {errors.submit && <p className="text-red-500 text-sm mb-4">{errors.submit}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}
