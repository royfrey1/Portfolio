import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Nombre */}
        <div className="text-white font-bold text-xl tracking-wider">
          ROY <span className="text-cyan-400 animate-wave">FREY</span>
        </div>

        {/* Links de navegación */}
        <div className="hidden md:flex gap-8 text-slate-300 font-medium">
          <a href="#" className="hover:text-cyan-400 transition-colors">Inicio</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Proyectos</a>
          <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
          <a href="#experiencia" className="hover:text-cyan-400 transition-colors">Habilidades</a>
        </div>

        {/* Botón descargar CV*/}
        <a 
          href="/CV_Roy.pdf"
          download="CV_Roy.pdf"
          className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-4 py-2 rounded-md hover:bg-cyan-500 hover:text-white transition-all text-sm font-medium"
        >
            Descargar CV
        </a>
      </div>
    </nav>
  );
}