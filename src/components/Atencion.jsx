export default function Atencion() {
  return (
    <div className="bg-slate-900/50 border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h4 className="text-xl font-bold text-white">Gestión de Stakeholders</h4>
          <p className="text-slate-400 text-sm">Resolución de Conflictos y Comunicación</p>
        </div>
        <span className="bg-cyan-500/10 text-cyan-500 text-xs font-mono px-3 py-1 rounded-full border border-cyan-500/20">
          SOFT SKILLS
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="bg-blue-500/20 p-2 rounded-lg h-fit text-cyan-400">💬</div>
          <div>
            <p className="text-sm text-white font-semibold">Empatía con el Usuario</p>
            <p className="text-xs text-slate-400">Traducción de necesidades de negocio a requerimientos técnicos.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-amber-500/20 p-2 rounded-lg h-fit text-amber-400">⚖️</div>
          <div>
            <p className="text-sm text-white font-semibold">Negociación</p>
            <p className="text-xs text-slate-400">Capacidad para manejar situaciones críticas bajo presión.</p>
          </div>
        </div>
      </div>
    </div>
  );
};