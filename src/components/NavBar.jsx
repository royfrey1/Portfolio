
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Cierra el menú al cambiar de idioma
  };

  // Definimos los idiomas una sola vez para evitar errores
  const idiomas = [
    { code: 'es', country: 'ar', label: 'Español' },
    { code: 'en', country: 'us', label: 'English' },
    { code: 'pt', country: 'br', label: 'Português' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-white font-bold text-xl tracking-wider z-50">
          ROY <span className="text-cyan-400">FREY</span>
        </div>

        {/* Links de navegación - Escritorio */}
        <div className="hidden md:flex gap-8 text-slate-300 font-medium items-center">
          <a href="#" className="hover:text-cyan-400 transition-colors">{t('nav_inicio', 'Inicio')}</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">{t('nav_proyectos', 'Proyectos')}</a>
          <a href="#experiencia" className="hover:text-cyan-400 transition-colors">{t('nav_habilidades', 'Habilidades')}</a>
          <a href="#contacto" className="hover:text-cyan-400 transition-colors">{t('nav_contacto', 'Contacto')}</a>
        </div>

        {/* Lado derecho: CV + Banderas Desktop / Botón Hamburguesa */}
        <div className="flex items-center gap-4">
          
          <a 
            href="/CV_Roy.pdf"
            download="CV_Roy.pdf"
            className="hidden sm:block bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-4 py-2 rounded-md hover:bg-cyan-500 hover:text-white transition-all text-sm font-medium"
          >
            {t('download_cv', 'Descargar CV')}
          </a>

          {/* Banderas Desktop (Ocultas en móvil) */}
          <div className="hidden md:flex items-center gap-2 border-l border-slate-700 pl-4">
            {idiomas.map((lang) => (
              <button 
                key={lang.code} 
                onClick={() => changeLanguage(lang.code)}
                title={lang.label}
                className="hover:scale-110 transition-transform"
              >
                <img 
                  src={`https://flagcdn.com/w40/${lang.country}.png`} 
                  alt={lang.label}
                  className={`w-6 h-auto rounded-sm ${i18n.language === lang.code ? 'grayscale-0 border border-cyan-400/50' : 'grayscale opacity-50'}`} 
                />
              </button>
            ))}
          </div>

          {/* Botón Hamburguesa (Solo móvil) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none z-50 p-1"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú Móvil (Overlay) */}
      {/* Menú Móvil (Overlay) */}
      <div className={`fixed inset-0 bg-slate-950 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-[60]`}>
        
        {/* Contenedor principal con padding superior para no chocar con el logo */}
        <div className="flex flex-col items-center justify-center h-full w-full px-6">
          
          {/* Botón de cerrar en la esquina superior derecha */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-slate-400 hover:text-white"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Lista de links centrada */}
          <div className="flex flex-col items-center gap-8 text-2xl font-semibold text-white">
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">
              {t('nav_inicio', 'Inicio')}
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">
              {t('nav_proyectos', 'Proyectos')}
            </a>
            <a href="#experiencia" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">
              {t('nav_habilidades', 'Habilidades')}
            </a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">
              {t('nav_contacto', 'Contacto')}
            </a>

            <div className="h-[1px] w-16 bg-slate-800 my-2"></div>

            {/* Banderas */}
            <div className="flex gap-10">
              {idiomas.map((idioma) => (
                <button 
                  key={idioma.code} 
                  onClick={() => changeLanguage(idioma.code)} 
                  className={`transition-transform active:scale-90 ${i18n.language === idioma.code ? 'scale-150' : 'scale-110 opacity-40'}`}
                >
                  <img 
                    src={`https://flagcdn.com/w80/${idioma.country}.png`} 
                    className="w-10 rounded-sm shadow-2xl" 
                    alt={idioma.label} 
                  />
                </button>
              ))}
            </div>
            
            {/* Botón de CV también aquí para máxima visibilidad */}
            <a 
              href="/CV_Roy.pdf"
              download
              className="mt-4 bg-cyan-500 text-slate-950 px-6 py-2 rounded-md font-bold text-sm"
              onClick={() => setIsOpen(false)}
            >
              {t('download_cv', 'Descargar CV')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}