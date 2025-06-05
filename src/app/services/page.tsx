// src/app/services/page.tsx
export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-24 bg-white text-black">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight text-center mb-8">
        Our Services
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-5xl w-full">
        <section className="p-6 border rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Enafric Energy</h2>
          <p className="text-gray-700">
            Oil & Gas development, power generation, renewables, and integrated energy solutions that fuel Africa’s industrial growth.
          </p>
        </section>

        <section className="p-6 border rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">Enafric Infrastructure</h2>
          <p className="text-gray-700">
            Infrastructure development including EPC projects, marine & subsea services, engineering, and construction management.
          </p>
        </section>

        <section className="p-6 border rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">Enafric Biochem</h2>
          <p className="text-gray-700">
            Bio-based chemicals, sustainable materials, and industrial biotechnology innovations for a circular African economy.
          </p>
        </section>

        <section className="p-6 border rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Enafric Innovation</h2>
          <p className="text-gray-700">
            Cutting-edge R&D, digital transformation, fintech, and scalable innovation platforms to power Africa’s future.
          </p>
        </section>
      </div>
    </main>
  );
}
