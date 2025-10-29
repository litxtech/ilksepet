"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -200]);

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section with Particles */}
      <section className="relative min-h-[95vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        <ParticlesBackground />
        
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="container mx-auto px-6 md:px-8 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase px-4 py-2 glass rounded-full">
                  🚀 Software Development Company
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  İlkSepet
                </span>
                <br />
                <span className="text-white text-4xl md:text-5xl lg:text-6xl font-normal">
                  Smart Software, Fast Delivery
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                From e-commerce to enterprise automation, live systems in <span className="text-yellow-300 font-semibold">weeks</span>. 
                AI-powered, secure, and scalable solutions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/pricing"
                    className="relative inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold overflow-hidden group"
                  >
                    <span className="relative z-10">View Packages</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/portfolio"
                    className="glass border-2 border-blue-400 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition"
                  >
                    Watch Demo →
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Advanced Code Animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 max-w-4xl mx-auto"
            >
              <div className="code-terminal shadow-2xl">
                <div className="flex gap-2 mb-4 pb-4 border-b border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  <span className="ml-4 text-gray-400 text-sm">terminal — zsh</span>
                </div>
                <CodeEditor />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why İlkSepet - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Why İlkSepet?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for developers, designed for speed
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Showcase - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Solutions</h2>
            <p className="text-xl text-gray-600">What we build</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project / Demo - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Featured Project
            </h2>
            <div className="glass rounded-2xl p-8 md:p-12 backdrop-blur-xl border border-white/20">
              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {["React", "Supabase", "Stripe", "AI"].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-sm font-semibold glow-blue"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <p className="text-xl text-blue-100 mb-8">
                Complete SaaS platform delivered in 14 days. Watch a 60-second demo to see how we deliver production-ready code.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/portfolio"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition"
                >
                  View Case Study →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Summary - Enhanced */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Packages</h2>
            <p className="text-xl text-gray-600">Choose your plan</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} index={index} />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/pricing" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
              Compare all packages →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <p className="text-center text-gray-600 mb-6">Trusted by companies powered by</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Stripe", "Supabase", "Vercel", "DeepSeek"].map((name, i) => (
                <motion.span
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-gray-700 font-semibold text-lg"
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">FAQ</h2>
            <p className="text-xl text-gray-600">Frequently asked questions</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Enhanced */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 md:px-8 text-center relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Answer 3 quick questions, and we'll recommend the perfect plan for your project.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/wizard"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition"
            >
              Start Your Project →
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

// Data
const features = [
  { title: "Fast Delivery", description: "Optimized templates + automation get you live in weeks, not months.", icon: "⚡", color: "from-yellow-400 to-orange-500" },
  { title: "AI-Powered", description: "Content suggestions, recommendations, and automated responses.", icon: "🤖", color: "from-purple-400 to-pink-500" },
  { title: "Enterprise Security", description: "SSL, RLS, WAF, backups — enterprise-grade protection.", icon: "🔒", color: "from-blue-400 to-cyan-500" },
  { title: "24/7 Support", description: "We solve issues before they become problems.", icon: "🛟", color: "from-green-400 to-emerald-500" },
];

const solutions = [
  { title: "E-Commerce", items: ["Product catalog", "Shopping cart", "Payment integration"], href: "/solutions#ecommerce", gradient: "from-blue-500 to-cyan-500" },
  { title: "Corporate Web", items: ["Multi-page sites", "CMS integration", "SEO optimization"], href: "/solutions#corporate", gradient: "from-purple-500 to-pink-500" },
  { title: "SaaS/Subscription", items: ["User management", "Billing & invoicing", "Webhooks"], href: "/solutions#saas", gradient: "from-orange-500 to-red-500" },
  { title: "Mobile App", items: ["iOS & Android", "Push notifications", "Offline sync"], href: "/solutions#mobile", gradient: "from-green-500 to-emerald-500" },
  { title: "Hotel & Restaurant", items: ["Booking system", "Menu management", "Table reservations"], href: "/solutions#hospitality", gradient: "from-indigo-500 to-purple-500" },
];

const packages = [
  { title: "Starter Website", price: "$990", description: "1 landing + 2 sub-pages", delivery: "7 days", featured: false },
  { title: "Professional Suite", price: "$2,490", description: "5-7 dynamic pages + admin", delivery: "10-14 days", featured: true },
  { title: "Enterprise SaaS", price: "$4,990+", description: "Full platform with AI", delivery: "15-21 days", featured: false },
];

const testimonials = [
  { quote: "İlkSepet delivered our e-commerce platform in 10 days. Incredible speed and quality.", author: "Sarah Johnson", role: "CEO, TechStore" },
  { quote: "The AI features save us hours every week. Best investment we've made.", author: "Michael Chen", role: "CTO, StartupX" },
  { quote: "24/7 support means we never worry. They're always one step ahead.", author: "Emily Rodriguez", role: "Founder, DesignCo" },
];

const faqs = [
  { question: "How long does delivery take?", answer: "Starter packages: 7 days. Professional: 10-14 days. Enterprise: 15-21 days. We optimize for speed without compromising quality." },
  { question: "How is maintenance handled?", answer: "Annual Maintenance Plan ($490/year) includes uptime monitoring, security updates, monthly reports, and priority support." },
  { question: "How do you handle payments?", answer: "We accept payments via Stripe. One-time payments for Starter/Professional. For Enterprise, we can discuss custom payment terms." },
  { question: "Can I customize my package?", answer: "Absolutely! Fill out our 3-question wizard, and we'll recommend the best plan for your needs. Custom add-ons available." },
];

// Components
function ParticlesBackground() {
  return (
    <div className="particles">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${Math.random() * 4 + 4}s`,
          }}
        />
      ))}
    </div>
  );
}

function CodeEditor() {
  const [currentCode, setCurrentCode] = React.useState(0);
  const codes = [
    { lang: "typescript", code: "const app = createApp();\napp.deploy('production');" },
    { lang: "bash", code: "$ npm run deploy\n✓ Deployed to production" },
    { lang: "typescript", code: "AI.generate('content');\n→ Content ready!" },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <motion.div
        key={currentCode}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
          <span>{codes[currentCode].lang}</span>
        </div>
        <pre className="text-green-400 font-mono text-sm overflow-x-auto">
          <code>{codes[currentCode].code.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              <span className="text-purple-400">$</span> {line}
              {'\n'}
            </React.Fragment>
          ))}</code>
        </pre>
      </motion.div>
    </div>
  );
}

function FeatureCard({ title, description, icon, color, index }: { title: string; description: string; icon: string; color: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition"
    >
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center text-3xl mb-4`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function SolutionCard({ title, items, href, gradient, index }: { title: string; items: string[]; href: string; gradient: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition group"
    >
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradient} mb-4`}></div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3 mb-6">
        {items.map((item, i) => (
          <li key={i} className="text-gray-700 flex items-center">
            <span className={`text-${gradient.split('-')[1]}-500 mr-2 font-bold`}>✓</span> {item}
          </li>
        ))}
      </ul>
      <Link href={href} className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient} font-semibold group-hover:scale-105 transition inline-block`}>
        Details →
      </Link>
    </motion.div>
  );
}

function PackageCard({ title, price, description, delivery, featured, index }: { title: string; price: string; description: string; delivery: string; featured: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${featured ? 'border-blue-500 glow-blue' : 'border-gray-200'} relative`}
    >
      {featured && (
        <span className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-bl-xl text-sm font-semibold">
          Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className={`text-5xl font-bold mb-4 bg-gradient-to-r ${featured ? 'from-blue-600 to-purple-600' : 'from-gray-600 to-gray-800'} bg-clip-text text-transparent`}>
        {price}
      </div>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-gray-500 mb-6">Delivery: {delivery}</p>
      <Link
        href="/pricing"
        className={`block text-center py-3 rounded-xl font-semibold transition ${
          featured
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Learn More
      </Link>
    </motion.div>
  );
}

function TestimonialCard({ quote, author, role, index }: { quote: string; author: string; role: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
    >
      <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{quote}"</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </motion.div>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{question}</h3>
      <p className="text-gray-600 leading-relaxed">{answer}</p>
    </motion.div>
  );
}
