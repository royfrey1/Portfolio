import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 text-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white mb-4">
          ROY <span className="text-cyan-400 btn-rainbow">FREY</span>
        </div>
        
        {/* Título */}
        <p className="text-slate-500 text-xs mb-6 uppercase tracking-widest">
          Analista de Sistemas, Administrador Contable & Cloud Enthusiast
        </p>

        {/* Separador */}
        <div className="w-50 h-1 bg-cyan-500/40 mx-auto mb-6 rounded-full"></div>

        {/* Copyright y Ubicación */}
        <div className="text-slate-500 text-xs space-y-2">
          <p>© {year} - Diseñado y desarrollado por Roy Frey</p>
          <p className="flex justify-center items-center gap-2 text-slate-600">
            <span>Iguazu, Misiones, Argentina</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
            <span>Remoto para el mundo</span>
          </p>
        </div>
      </div>
    </footer>
  );
}