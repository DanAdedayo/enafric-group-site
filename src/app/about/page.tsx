export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-20 bg-white text-black">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight text-center mb-6">
        About Enafric Group
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mb-10">
        Enafric Group is an African enterprise committed to powering sustainable growth across the continent through innovation and strategic investments in Energy, Infrastructure, Biochem, and Innovation.
      </p>

      <section className="text-left max-w-4xl space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To drive inclusive industrial growth by delivering integrated solutions that address Africa's most pressing challenges and unlock long-term value.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Our Vision</h2>
          <p className="text-gray-700">
            To become Africa’s most impactful catalyst for innovation-led transformation across strategic sectors.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Our Structure</h2>
          <p className="text-gray-700">
            Enafric Group operates through four strategic subsidiaries:
          </p>
          <ul className="list-disc list-inside pl-2 mt-2 text-gray-700">
            <li><strong>Enafric Energy</strong> – Oil & gas, renewables, and integrated energy solutions</li>
            <li><strong>Enafric Infrastructure</strong> – EPC, marine, subsea, and civil engineering</li>
            <li><strong>Enafric Biochem</strong> – Bio-based materials and chemical innovation</li>
            <li><strong>Enafric Innovation</strong> – R&D, fintech, and scalable digital platforms</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
