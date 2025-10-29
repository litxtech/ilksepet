import Link from "next/link";

export default function SolutionsPage() {
  return (
    <main className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Solutions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From e-commerce to enterprise automation, we build solutions that scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SolutionDetail
            id="ecommerce"
            title="E-Commerce"
            description="Complete online store solutions with payment processing, inventory management, and order tracking."
            features={[
              "Product catalog with variants",
              "Shopping cart & checkout",
              "Stripe payment integration",
              "Order management system",
              "Inventory tracking",
              "Customer accounts"
            ]}
          />
          <SolutionDetail
            id="corporate"
            title="Corporate Web"
            description="Professional websites for businesses with CMS, SEO, and multi-language support."
            features={[
              "Multi-page architecture",
              "Content management system",
              "SEO optimization",
              "Multi-language support",
              "Contact forms & CRM",
              "Analytics integration"
            ]}
          />
          <SolutionDetail
            id="saas"
            title="SaaS/Subscription"
            description="Scalable SaaS platforms with user management, billing, and automation."
            features={[
              "User authentication & roles",
              "Subscription billing (Stripe)",
              "Webhooks & automations",
              "API endpoints",
              "Usage analytics",
              "Admin dashboard"
            ]}
          />
          <SolutionDetail
            id="mobile"
            title="Mobile App"
            description="iOS and Android apps with offline sync and push notifications."
            features={[
              "iOS & Android support",
              "Offline data sync",
              "Push notifications",
              "In-app purchases",
              "Social authentication",
              "Cloud backend"
            ]}
          />
          <SolutionDetail
            id="hospitality"
            title="Hotel & Restaurant"
            description="Booking systems, menu management, and reservation platforms."
            features={[
              "Room/table booking",
              "Menu management",
              "Online reservations",
              "Payment processing",
              "Customer reviews",
              "Calendar integration"
            ]}
          />
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-6">We can build exactly what you need.</p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </main>
  );
}

function SolutionDetail({ id, title, description, features }: { id: string; title: string; description: string; features: string[] }) {
  return (
    <div id={id} className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start text-gray-700">
            <span className="text-blue-600 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
