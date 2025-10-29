import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All prices are one-time payment unless otherwise specified.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Starter */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Starter Website</h2>
            <div className="text-4xl font-bold text-blue-600 mb-4">$990</div>
            <p className="text-gray-600 mb-6">Perfect for small businesses</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">1 landing page + 2 sub-pages (About, Contact)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Basic SEO setup</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Fast hosting setup</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Contact form</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Simple blog</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">7 days delivery</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="block text-center bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Professional */}
          <div className="bg-white border-2 border-blue-600 rounded-lg p-8 shadow-xl relative">
            <span className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
              Popular
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Professional Website Suite</h2>
            <div className="text-4xl font-bold text-blue-600 mb-4">$2,490</div>
            <p className="text-gray-600 mb-6">For growing businesses</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">5-7 dynamic pages + admin panel</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Multi-language content</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Basic analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Stripe payment (one-time/donation)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Simple product catalog</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Email notifications & form→CRM</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">10-14 days delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Priority support</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Enterprise */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Enterprise SaaS Platform</h2>
            <div className="text-4xl font-bold text-blue-600 mb-4">$4,990+</div>
            <p className="text-gray-600 mb-6">Custom solutions for scale</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">User management + role-based access</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Subscription & billing (Stripe)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Webhooks & automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">AI features (DeepSeek/OpenAI)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Scalable database</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Reporting dashboard</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">15-21 days delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Dedicated developer</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="block text-center bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Maintenance Plan */}
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Annual Maintenance Plan</h2>
          <div className="text-3xl font-bold text-blue-600 mb-4">$490/year</div>
          <p className="text-gray-700 mb-6">
            Keep your system running smoothly with our comprehensive maintenance plan. Includes uptime monitoring, security updates, monthly reports, and priority support.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">Uptime monitoring</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">Security updates & patches</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">Monthly performance reports</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">Priority support</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
