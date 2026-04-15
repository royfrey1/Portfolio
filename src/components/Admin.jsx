const AdminContableComponent = () => {
  return (
    <div className="bg-slate-900/50 border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h4 className="text-xl font-bold text-white">Módulo de Análisis Financiero</h4>
          <p className="text-slate-400 text-sm">Experiencia en Auditoría y Control de Gestión</p>
        </div>
        <span className="bg-cyan-500/10 text-cyan-500 text-xs font-mono px-3 py-1 rounded-full border border-cyan-500/20">
          DATA-DRIVEN
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-800/50 p-4 rounded-xl">
          <p className="text-slate-500 text-xs uppercase">Conciliaciones</p>
          <p className="text-white font-bold">100% Exactitud</p>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl">
          <p className="text-slate-500 text-xs uppercase">Optimización</p>
          <p className="text-cyan-400 font-bold">-15% Costos</p>
        </div>
      </div>

      <ul className="text-sm space-y-2 text-slate-300">
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
          Gestión de flujos de caja y proyecciones.
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
          Análisis de desvíos y reportes para gerencia.
        </li>
      </ul>
    </div>
  );
};