export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
        Bienvenido a <span className="text-cyan-400">diviXpress</span>
      </h2>

      <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
        Convierte monedas en <span className="text-cyan-300 font-semibold">tiempo real</span> de forma
        rápida, sencilla y confiable.
      </p>

      <p className="mt-3 text-base md:text-lg text-gray-300">
        Soportamos las <span className="text-cyan-400 font-semibold">10 monedas más utilizadas</span> en el mundo 🌍
        incluyendo el <span className="text-yellow-300">COP 🇨🇴</span>
      </p>

      {/* Botón CTA */}
      <div className="mt-8">
        <a
          href="/exchange"
          className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-xl text-lg md:text-xl font-semibold shadow-lg hover:opacity-90 transition"
        >
          🚀 Comenzar ahora
        </a>
      </div>
    </section>
  );
}
