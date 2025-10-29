import Link from "next/link";

const posts = [
  {
    slug: "hotel-digital-transformation",
    title: "🏨 Digital Transformation in Hospitality: Elevating Guest Experience with Code",
    excerpt:
      "How modern hotels use software, AI, and integrations to transform guest experience and operations.",
    cover:
      "https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">Insights on shipping software fast and securely.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((p) => (
            <article key={p.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <Link href={`/blog/${p.slug}`}>
                <img src={p.cover} alt={p.title} className="w-full h-56 object-cover" />
              </Link>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  <Link href={`/blog/${p.slug}`} className="hover:underline">
                    {p.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{p.excerpt}</p>
                <Link href={`/blog/${p.slug}`} className="text-blue-600 hover:text-blue-700 font-semibold">
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
