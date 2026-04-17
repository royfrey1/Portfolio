import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Nombre */}
        <div className="text-white font-bold text-xl tracking-wider">
          ROY <span className="text-cyan-400">FREY</span>
        </div>

        {/* Links de navegación - Usando t() para traducir */}
        <div className="hidden md:flex gap-8 text-slate-300 font-medium items-center">
          <a href="#" className="hover:text-cyan-400 transition-colors">
            {t('nav_inicio', 'Inicio')}
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            {t('nav_proyectos', 'Proyectos')}
          </a>
          <a href="#experiencia" className="hover:text-cyan-400 transition-colors">
            {t('nav_habilidades', 'Habilidades')}
          </a>
          <a href="#contacto" className="hover:text-cyan-400 transition-colors">
            {t('nav_contacto', 'Contacto')}
          </a>

          {/* Selector de Idiomas integrado */}
          <div className="flex items-center gap-2 border-l border-slate-700 pl-4">
            {[
              { code: 'es', flag: '🇦🇷', label: 'Español' },
              { code: 'en', flag: '🇺🇸', label: 'English' },
              { code: 'pt', flag: '🇧🇷', label: 'Português' }  
              ].map((lng) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                title={lng.label}
                className={`text-2xl hover:scale-125 transition-transform ${
                i18n.language === lng.code ? 'grayscale-0 brightness-110' : 'grayscale-[0.5] opacity-70 hover:opacity-100'
                }`}
              >
                {lng.flag}
              </button>
            ))}
          </div>
        </div>

        {/* Botón descargar CV */}
        <a 
          href="/CV_Roy.pdf"
          download="CV_Roy.pdf"
          className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-4 py-2 rounded-md hover:bg-cyan-500 hover:text-white transition-all text-sm font-medium"
        >
          {t('download_cv', 'Descargar CV')}
        </a>
      </div>
    </nav>
  );
}