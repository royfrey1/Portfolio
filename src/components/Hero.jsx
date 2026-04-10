export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center bg-slate-900">
      <h1 className="text-6xl font-extrabold text-white tracking-tight mb-4">
        Hola, soy <span className="text-cyan-400 animate-wave">Roy Frey</span>
      </h1>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
        Analista de Sistemas & Desarrollador Fullstack. 
        Especializado en crear soluciones eficientes con React y arquitectura AWS.
      </p>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
        Desde Puerto Iguazu, Misiones, Argentina.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-cyan-500 animate-wave hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-all">
          Ver Proyectos
        </a>
        <a href="#contacto" className="border border-slate-700 text-slate-300 hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition-all">
          Contactar
        </a>
      </div>
    </section>
  );
}