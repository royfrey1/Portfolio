export default function Admin() {
 return (
    <div className="bg-slate-900/50 border border-emerald-500/20 rounded-3xl p-8 hover:border-emerald-500/50 transition-all shadow-xl">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h4 className="text-2xl font-bold text-white">Administración & Gestión Contable</h4>
          <p className="text-emerald-500 font-medium italic">Estudio Contable Daniele</p>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono text-slate-500 block">2024 — 2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-800/40 p-4 rounded-2xl border border-white/5">
          <p className="text-emerald-400 text-xs uppercase font-bold tracking-wider mb-1">Expertise Técnico</p>
          <p className="text-white text-sm">Gestión integral en sistema <strong>Holistor</strong> y rendición de cajas vía <strong>Alma.net</strong>.</p>
        </div>
        <div className="bg-slate-800/40 p-4 rounded-2xl border border-white/5">
          <p className="text-emerald-400 text-xs uppercase font-bold tracking-wider mb-1">Análisis de Datos</p>
          <p className="text-white text-sm">Descarga y análisis de reportes financieros; manejo de IVA, IIBB y ATM.</p>
        </div>
      </div>

      <div className="space-y-3">
        <h5 className="text-white font-semibold text-sm uppercase tracking-widest">Logros Clave:</h5>
        <ul className="text-slate-400 text-sm space-y-2">
          <li className="flex gap-2">
            <span className="text-emerald-500">▹</span>
            Mantenimiento operativo y resolución de incidencias en sistemas informáticos del estudio.
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-500">▹</span>
            Gestión hotelera avanzada (Booking, RoomCloud, Expedia Group) y manejo de sistema TOTVS.
          </li>
        </ul>
      </div>
    </div>
  );
};