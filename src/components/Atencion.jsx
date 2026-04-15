export default function Atencion() {
 return (
    <div className="bg-slate-900/50 border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500/50 transition-all shadow-xl">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h4 className="text-2xl font-bold text-white">Atención al Público & Ventas</h4>
          <p className="text-blue-400 font-medium italic">Minimercado "Miguelo"</p>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono text-slate-500 block">2020 — 2024</span>
        </div>
      </div>

      <div className="bg-blue-500/5 border border-blue-500/10 p-5 rounded-2xl mb-6">
        <p className="text-slate-300 text-sm leading-relaxed">
          Responsable de la atención directa al cliente y manejo de valores, enfocándome en la 
          <span className="text-white font-semibold"> resolución de consultas y fidelización</span>. 
          Esta experiencia forjó mi capacidad para trabajar bajo presión y gestionar conflictos de manera efectiva.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-3 bg-slate-800/30 p-3 rounded-xl">
          <span className="text-blue-400 text-xl">✓</span>
          <span className="text-xs text-white uppercase font-medium">Control de Stock</span>
        </div>
        {<div className="flex items-center gap-3 bg-slate-800/30 p-3 rounded-xl">
          <span className="text-blue-400 text-xl">✓</span>
          <span className="text-xs text-white uppercase font-medium">Facturación POS</span>
        </div>}
         {<div className="flex items-center gap-3 bg-slate-800/30 p-3 rounded-xl">
          <span className="text-blue-400 text-xl">✓</span>
          <span className="text-xs text-white uppercase font-medium">Pago de Proveedores</span>
        </div>}
        {<div className="flex items-center gap-3 bg-slate-800/30 p-3 rounded-xl">
          <span className="text-blue-400 text-xl">✓</span>
          <span className="text-xs text-white uppercase font-medium">Responsable en compras</span>
        </div>}
      </div>
    </div>
  );
};