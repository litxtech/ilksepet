export const metadata = {
  title: "About – İlker Toprak | İlksepet LLC",
  description: "About İlker Toprak – Founder of İlksepet LLC. Software developer, entrepreneur, and digital transformation consultant.",
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-8 max-w-3xl">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">About Me – İlker Toprak</h1>
          <p className="text-gray-600">Founder, İlksepet LLC</p>
        </header>

        <section className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            I’m İlker Toprak, a software developer, entrepreneur, and digital transformation consultant. I am the founder of İlksepet LLC, a U.S.-based technology company focused on building scalable software solutions for global businesses.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">My work centers around</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>SaaS (Software as a Service) platforms</li>
              <li>E-commerce and automation systems</li>
              <li>Cloud computing and AI-powered applications</li>
            </ul>
          </div>

          <p>
            My philosophy is simple: use smart software to solve real problems. Technology should make life easier — that’s the driving force behind every product I build.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Connect with Me</h2>
            <ul className="space-y-2">
              <li>🔗 LinkedIn: <a href="https://linkedin.com/in/ilkertoprak" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/ilkertoprak</a></li>
              <li>📸 Instagram: <a href="https://instagram.com/ilkertoprak61" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@ilkertoprak61</a></li>
              <li>🌐 Website: <a href="https://www.ilksepet.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.ilksepet.com</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Areas of Interest</h2>
            <p>
              Artificial Intelligence, modern web technologies, UI/UX design, and scalable cloud infrastructure. In my free time, I enjoy learning new programming languages, improving design systems, and staying up to date with tech trends.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Mission</h2>
            <p>
              To accelerate digital transformation by developing reliable, innovative, and intelligent software solutions that empower businesses to grow sustainably.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Company Details</h3>
            <p className="text-gray-700">İlksepet LLC</p>
            <p className="text-gray-700">30 N Gould St Ste N</p>
            <p className="text-gray-700">Sheridan, WY 82801, USA</p>
            <p className="text-gray-700 mt-2">D‑U‑N‑S: <span className="font-semibold">119480139</span></p>
          </div>
        </section>
      </div>
    </main>
  );
}


