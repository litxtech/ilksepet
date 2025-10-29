"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 md:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              İlkSepet – Smart Software, Fast Delivery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              From e-commerce to enterprise automation, live systems in weeks. AI-powered, secure, and scalable solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/pricing"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
              >
                View Packages
              </Link>
              <Link
                href="/portfolio"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
              >
                Watch Demo
              </Link>
            </motion.div>
          </div>
          
          {/* Code Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="bg-gray-900 rounded-lg shadow-2xl p-6">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <CodeTyping />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why İlkSepet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why İlkSepet?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Fast Delivery"
              description="Optimized templates + automation get you live in weeks, not months."
              icon="⚡"
            />
            <FeatureCard
              title="AI-Powered"
              description="Content suggestions, recommendations, and automated responses."
              icon="🤖"
            />
            <FeatureCard
              title="Enterprise Security"
              description="SSL, RLS, WAF, backups — enterprise-grade protection."
              icon="🔒"
            />
            <FeatureCard
              title="24/7 Support"
              description="We solve issues before they become problems."
              icon="🛟"
            />
          </div>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SolutionCard
              title="E-Commerce"
              items={["Product catalog", "Shopping cart", "Payment integration"]}
              href="/solutions#ecommerce"
            />
            <SolutionCard
              title="Corporate Web"
              items={["Multi-page sites", "CMS integration", "SEO optimization"]}
              href="/solutions#corporate"
            />
            <SolutionCard
              title="SaaS/Subscription"
              items={["User management", "Billing & invoicing", "Webhooks"]}
              href="/solutions#saas"
            />
            <SolutionCard
              title="Mobile App"
              items={["iOS & Android", "Push notifications", "Offline sync"]}
              href="/solutions#mobile"
            />
            <SolutionCard
              title="Hotel & Restaurant"
              items={["Booking system", "Menu management", "Table reservations"]}
              href="/solutions#hospitality"
            />
          </div>
        </div>
      </section>

      {/* Featured Project / Demo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Project</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
              <p className="text-gray-400 mb-4">Technologies Used:</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-blue-600 px-4 py-2 rounded text-white">React</span>
                <span className="bg-green-600 px-4 py-2 rounded text-white">Supabase</span>
                <span className="bg-purple-600 px-4 py-2 rounded text-white">Stripe</span>
                <span className="bg-orange-600 px-4 py-2 rounded text-white">AI</span>
              </div>
              <p className="text-gray-300">
                Watch a 60-second screen recording or explore our live demo to see how we delivered a complete SaaS platform in 14 days.
              </p>
              <Link
                href="/portfolio"
                className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                View Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Summary */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Packages</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PackageCard
              title="Starter Website"
              price="$990"
              description="1 landing + 2 sub-pages"
              delivery="7 days"
              featured={false}
            />
            <PackageCard
              title="Professional Suite"
              price="$2,490"
              description="5-7 dynamic pages + admin"
              delivery="10-14 days"
              featured={true}
            />
            <PackageCard
              title="Enterprise SaaS"
              price="$4,990+"
              description="Full platform with AI"
              delivery="15-21 days"
              featured={false}
            />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/pricing"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Compare all packages →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              quote="İlkSepet delivered our e-commerce platform in 10 days. Incredible speed and quality."
              author="Sarah Johnson"
              role="CEO, TechStore"
            />
            <TestimonialCard
              quote="The AI features save us hours every week. Best investment we've made."
              author="Michael Chen"
              role="CTO, StartupX"
            />
            <TestimonialCard
              quote="24/7 support means we never worry. They're always one step ahead."
              author="Emily Rodriguez"
              role="Founder, DesignCo"
            />
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-6">Trusted by companies powered by</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-gray-700 font-semibold">Stripe</span>
              <span className="text-gray-700 font-semibold">Supabase</span>
              <span className="text-gray-700 font-semibold">Vercel</span>
              <span className="text-gray-700 font-semibold">DeepSeek</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem
              question="How long does delivery take?"
              answer="Starter packages: 7 days. Professional: 10-14 days. Enterprise: 15-21 days. We optimize for speed without compromising quality."
            />
            <FAQItem
              question="How is maintenance handled?"
              answer="Annual Maintenance Plan ($490/year) includes uptime monitoring, security updates, monthly reports, and priority support."
            />
            <FAQItem
              question="How do you handle payments?"
              answer="We accept payments via Stripe. One-time payments for Starter/Professional. For Enterprise, we can discuss custom payment terms."
            />
            <FAQItem
              question="Can I customize my package?"
              answer="Absolutely! Fill out our 3-question wizard, and we'll recommend the best plan for your needs. Custom add-ons available."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Answer 3 quick questions, and we'll recommend the perfect plan for your project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Start Your Project →
          </Link>
        </div>
      </section>
    </div>
  );
}

function CodeTyping() {
  const codes = [
    "const app = createApp();",
    "await deploy.to('production');",
    "AI.generate('content');"
  ];
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % codes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <code className="text-green-400 font-mono text-sm">
      {codes[current]} <span className="animate-pulse">|</span>
    </code>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function SolutionCard({ title, items, href }: { title: string; items: string[]; href: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 mb-4">
        {items.map((item, i) => (
          <li key={i} className="text-gray-600 flex items-center">
            <span className="text-blue-600 mr-2">✓</span> {item}
          </li>
        ))}
      </ul>
      <Link href={href} className="text-blue-600 hover:text-blue-700 font-semibold">
        Details →
      </Link>
    </div>
  );
}

function PackageCard({ title, price, description, delivery, featured }: { title: string; price: string; description: string; delivery: string; featured: boolean }) {
  return (
    <motion.div
      whileHover={{ scale: featured ? 1.05 : 1.03 }}
      className={`bg-white p-8 rounded-lg shadow-lg border-2 ${featured ? 'border-blue-600' : 'border-gray-200'} relative`}
    >
      {featured && (
        <span className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
          Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">{price}</div>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-gray-500 mb-6">Delivery: {delivery}</p>
      <Link
        href="/pricing"
        className={`block text-center py-3 rounded-lg font-semibold transition ${
          featured
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Learn More
      </Link>
    </motion.div>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}
