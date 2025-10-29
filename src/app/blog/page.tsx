export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Insights on shipping software fast and securely.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h2>
            <p className="text-gray-600 mb-4">
              We're preparing articles on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>How to ship a SaaS platform in 14 days</li>
              <li>AI-powered development workflows</li>
              <li>Security best practices for modern web apps</li>
              <li>Optimizing startup costs with serverless</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
