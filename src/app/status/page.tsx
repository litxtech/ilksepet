export default function StatusPage() {
  return (
    <main className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Status</h1>
          <p className="text-xl text-gray-600">
            System status and uptime monitoring.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
            <h2 className="text-2xl font-bold text-gray-900">All Systems Operational</h2>
          </div>
          <p className="text-gray-700 mb-4">
            All services are running normally. No incidents reported.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Platform</div>
              <div className="text-lg font-semibold text-green-600">100%</div>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">API</div>
              <div className="text-lg font-semibold text-green-600">100%</div>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Database</div>
              <div className="text-lg font-semibold text-green-600">100%</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>Last updated: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </main>
  );
}
