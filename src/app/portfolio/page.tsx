import Link from "next/link";

export default function PortfolioPage() {
  const cases = [
    {
      title: "E-Commerce Platform",
      problem: "Client needed a complete online store with inventory management and payment processing in 10 days.",
      solution: "Built with React, Supabase, and Stripe. Implemented product variants, cart, checkout, and admin dashboard.",
      result: "Launched in 9 days. 500+ products, $50K+ revenue in first month.",
      tech: ["React", "Supabase", "Stripe", "Tailwind CSS"],
    },
    {
      title: "SaaS Dashboard",
      problem: "Startup required a subscription platform with user management and billing automation.",
      solution: "Created role-based access, Stripe subscriptions, webhooks, and analytics dashboard.",
      result: "1,200+ users onboarded. 95% subscription retention rate.",
      tech: ["Next.js", "Supabase", "Stripe", "AI Features"],
    },
    {
      title: "Corporate Website",
      problem: "Multi-language corporate site with CMS and SEO optimization needed.",
      solution: "Built with Next.js, i18n support, headless CMS, and advanced SEO.",
      result: "40% increase in organic traffic. 5 languages supported.",
      tech: ["Next.js", "TypeScript", "Headless CMS", "SEO"],
    },
  ];

  return (
    <main className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Portfolio & Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects with measurable results. See how we deliver value.
          </p>
        </div>

        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <div key={index} className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{caseStudy.title}</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h3>
                    <p className="text-gray-700">{caseStudy.problem}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Solution</h3>
                    <p className="text-gray-700">{caseStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Results</h3>
                    <p className="text-gray-700 font-semibold text-blue-600">{caseStudy.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm text-gray-600">Technologies:</span>
                  {caseStudy.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gray-900 rounded text-white font-mono text-sm">
                  <p className="text-gray-400 mb-1">// Demo coming soon</p>
                  <p className="text-green-400">Watch a 60-second walkthrough →</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Project?</h2>
          <p className="text-gray-600 mb-6">Let's discuss how we can help you achieve similar results.</p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
