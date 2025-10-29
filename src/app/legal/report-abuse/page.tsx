export const metadata = {
  title: "Reporting Abuse | İlksepet LLC",
  description: "Report abuse, phishing, fraud, or security issues to İlksepet.",
};

export default function ReportAbusePage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-8 lg:py-24 text-gray-800">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Reporting Abuse at Ilksepet</h1>
          <p className="text-gray-600">Last Updated: October 2025</p>
        </header>

        <p className="mb-6 leading-relaxed">We’re committed to a safe, fair, and respectful environment. Report abusive, fraudulent, harmful, or illegal activity immediately.</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Use the In‑App or On‑Site Reporting Feature</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Navigate to the content</li>
              <li>Click “Report”</li>
              <li>Select a reason and add brief details</li>
              <li>Submit</li>
            </ol>
            <p className="mt-3">Our moderation team will review and may issue warnings, removals, or suspensions.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Report Abuse via Email</h2>
            <p className="mb-2">Email: <a className="text-blue-600 hover:underline" href="mailto:abuse@ilksepet.com">abuse@ilksepet.com</a></p>
            <p className="mb-2">Subject: e.g., “Phishing Attempt Detected”</p>
            <p>Include URLs, usernames, short description, screenshots/evidence where possible.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Copyright or Intellectual Property (DMCA)</h2>
            <p>Follow our DMCA Policy and submit a takedown request as required by 17 U.S.C. §512.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Reporting Security Vulnerabilities</h2>
            <p>Responsible disclosure: <a className="text-blue-600 hover:underline" href="mailto:security@ilksepet.com">security@ilksepet.com</a></p>
            <p>Share description, steps to reproduce, and impact. Please avoid public disclosure before a fix.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Partnership Reports</h2>
            <p>Cybersecurity partners or law enforcement: contact <a className="text-blue-600 hover:underline" href="mailto:abuse@ilksepet.com">abuse@ilksepet.com</a> (use “Automated Phishing Detection” in subject).</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="font-semibold text-gray-900 mb-2">Important Notes</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reports are reviewed confidentially</li>
              <li>False or malicious reports may lead to restrictions</li>
              <li>For urgent safety, contact local law enforcement first</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="font-semibold text-gray-900 mb-2">Contact Information</p>
            <p>Ilksepet LLC<br/>30 N Gould St Ste N<br/>Sheridan, WY 82801, USA</p>
            <p>📧 abuse@ilksepet.com · legal@ilksepet.com · security@ilksepet.com</p>
            <p>☎ +1 (213) 634-1961</p>
          </div>
        </section>
      </div>
    </main>
  );
}


