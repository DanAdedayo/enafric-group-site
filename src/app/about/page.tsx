export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white text-gray-800">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">About Enafric Group</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
          Enafric Group is a strategic holding company committed to driving Africa&apos;s industrial and economic transformation.
        </p>
      </section>

      <section className="space-y-10">
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To accelerate inclusive growth by delivering innovative, sustainable, and integrated solutions across energy,
            infrastructure, bio-based industries, and digital innovation.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Our Vision</h2>
          <p className="text-gray-700">
            To be Africa&apos;s most impactful industrial group, fostering global partnerships and empowering local communities.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Our Strategic Focus</h2>
          <p className="text-gray-700">
            We operate across four core areas: Enafric Energy, Enafric Infrastructure, Enafric Biochem, and Enafric Innovation — delivering
            value through high-impact ventures and services that address Africa&apos;s most pressing challenges.
          </p>
        </div>
      </section>
    </main>
  );
}
