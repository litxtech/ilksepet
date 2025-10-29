export const metadata = {
  title: "Subprocessors | İlksepet LLC",
  description: "List of subprocessors engaged by İlksepet LLC.",
};

export default function SubProcessorsPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 lg:py-24 text-gray-800">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">İlksepet LLC – Subprocessors</h1>
          <p className="text-gray-600">Last Updated: October 2025</p>
        </header>

        <p className="mb-6">This page lists the subprocessors that İlksepet LLC uses to process customer data in connection with our Services.</p>
        <p className="mb-8">Each subprocessor must comply with İlksepet’s DPA and applicable data protection laws.</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Infrastructure & Cloud Hosting</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Vercel Inc. (USA) – Web hosting and serverless deployment</li>
              <li>Supabase, Inc. (USA) – Managed PostgreSQL, auth, storage</li>
              <li>Cloudflare, Inc. (USA) – CDN, DDoS protection, edge services</li>
              <li>Microsoft Azure (USA) – Backup infrastructure and compute</li>
              <li>AWS (USA) – Cloud storage and redundancy</li>
              <li>Neon Database Inc. (USA) – Serverless PostgreSQL</li>
              <li>HashiCorp Cloud (USA) – Infra mgmt and secret storage</li>
              <li>Grafana Labs (USA) – Performance monitoring</li>
              <li>Synadia Cloud (USA) – Real-time event/message services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Payments and Billing</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Stripe, Inc. (USA) – Payment processing</li>
              <li>Verifi Inc. (USA) – Dispute resolution</li>
              <li>Orb (USA) – Usage-based billing</li>
              <li>Clazar (USA) – Marketplace billing management</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Customer Support and Communication</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Zendesk (USA) – Support management</li>
              <li>Twilio, Inc. (USA) – SMS/communication</li>
              <li>Mailgun (USA) – Email delivery</li>
              <li>Common Room (USA) – Community analytics</li>
              <li>OWND ApS (Parahelp) (USA) – Ticket management</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Analytics and Product Insights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Datadog, Inc. (USA) – APM</li>
              <li>Amplitude (USA) – Product analytics</li>
              <li>Segment (USA) – Data pipeline</li>
              <li>Hex Technologies Inc. (USA) – Product data analysis</li>
              <li>Looker Studio (Google) (USA) – Dashboards</li>
              <li>AppsFlyer Inc. (USA) – Mobile analytics</li>
              <li>ZoomInfo (USA) – Marketing analytics</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Marketing and CRM</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>HubSpot (USA) – CRM & automation</li>
              <li>Iterable (USA) – Campaigns and notifications</li>
              <li>Attribution Inc. (USA) – Marketing insights</li>
              <li>LaunchDarkly (USA) – Feature flags</li>
              <li>Anima App, Inc. (USA) – Design-to-code tools</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Artificial Intelligence (AI) and Automation</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>OpenAI, Inc. (USA) – AI models</li>
              <li>Anthropic, PBC (USA) – AI models and safety</li>
              <li>Google AI (Vertex AI) (USA) – Model hosting</li>
              <li>Inngest (USA) – Workflow automation</li>
              <li>Temporal Technologies Inc. (USA) – Orchestration</li>
              <li>Zapier, Inc. (USA) – Integrations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Data Storage and Processing</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fivetran (USA) – Data pipelines</li>
              <li>Enterpret (USA) – Feedback analysis</li>
              <li>Hashboard (USA) – BI</li>
              <li>Name.com (USA) – Domain registration</li>
              <li>WorkOS (USA) – Auth & SSO</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Protection Commitments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process data only as instructed by İlksepet</li>
              <li>Maintain industry-standard security controls</li>
              <li>Notify İlksepet of any data incident</li>
            </ul>
            <p className="mt-4">Future changes will be reflected on this page with updated dates.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="font-semibold text-gray-900 mb-2">Contact</p>
            <p>📧 <a className="text-blue-600 hover:underline" href="mailto:privacy@ilksepet.com">privacy@ilksepet.com</a> · <a className="text-blue-600 hover:underline" href="mailto:legal@ilksepet.com">legal@ilksepet.com</a></p>
            <p>📍 30 N Gould St Ste N, Sheridan, WY 82801, USA</p>
          </div>
        </section>
      </div>
    </main>
  );
}


