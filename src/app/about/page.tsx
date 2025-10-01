export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('/bg-money.png')] bg-cover bg-center opacity-10" />

      {/* Contenido */}
      <section className="relative z-10 text-center px-6 max-w-3xl space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Acerca de <span className="text-cyan-400">diviXpress</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          <strong className="text-white">diviXpress</strong> es una aplicación web diseñada para 
          convertir monedas en tiempo real.  
          Con soporte para{" "}
          <span className="font-semibold text-cyan-300">10 divisas internacionales</span>, está pensada 
          para viajeros, comerciantes y estudiantes.
        </p>

        <p className="text-md md:text-lg italic text-gray-300">
          Proyecto integrador desarrollado con{" "}
          <span className="text-blue-400 font-semibold">React</span>,{" "}
          <span className="text-blue-400 font-semibold">Next.js 13</span> y{" "}
          <span className="text-blue-400 font-semibold">TailwindCSS</span>.
        </p>

        {/* Botón */}
        <a
          href="/exchange"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          🌍 Ir al Convertidor
        </a>
      </section>
    </div>
  );
}
