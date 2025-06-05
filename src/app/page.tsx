export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen px-6 py-24 bg-white text-black">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Powering Africa’s Future
      </h1>
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600">
        Enafric Group drives innovation and sustainable growth across Energy, Infrastructure, Biochem, and Innovation sectors in Africa.
      </p>
      <a
        href="#services"
        className="mt-10 inline-block rounded-xl bg-black text-white px-6 py-3 text-lg font-medium hover:bg-gray-800 transition"
      >
        Explore Our Services
      </a>
    </main>
  );
}
