
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

 // Bloqueo de scroll cuando el menú está abierto
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
            href="/CV_Roy2026.pdf"
            download="CV_Roy2026.pdf"
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
      <div 
        className={`fixed top-0 left-0 w-full h-[100svh] bg-[#020617] transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden z-[100]`}
>
        {/* borde lateral con brillo para separar del fondo principal */}
        <div className="absolute inset-y-0 left-0 w-1 bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>

        <div className="flex flex-col h-full w-full relative">
          
          {/* Botón de cerrar en la parte superior derecha */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white p-2 hover:bg-slate-900 rounded-full transition-colors"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Contenedor de links centrado matemáticamente */}
          <div className="flex flex-col items-center justify-center flex-grow gap-10">
            
            <nav className="flex flex-col items-center gap-8">
              <a href="#" onClick={() => setIsOpen(false)} className="text-3xl text-white font-bold hover:text-cyan-400 transition-all active:scale-95">
                {t('nav_inicio', 'Inicio')}
              </a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-3xl text-white font-bold hover:text-cyan-400 transition-all active:scale-95">
                {t('nav_proyectos', 'Proyectos')}
              </a>
              <a href="#experiencia" onClick={() => setIsOpen(false)} className="text-3xl text-white font-bold hover:text-cyan-400 transition-all active:scale-95">
                {t('nav_habilidades', 'Habilidades')}
              </a>
              <a href="#contacto" onClick={() => setIsOpen(false)} className="text-3xl text-white font-bold hover:text-cyan-400 transition-all active:scale-95">
                {t('nav_contacto', 'Contacto')}
              </a>

              <div className="h-[1px] w-24 bg-slate-800 my-4 shadow-sm"></div>

              {/* Banderas con tamaño optimizado para móvil */}
              <div className="flex gap-8">
                {idiomas.map((idioma) => (
                  <button 
                    key={idioma.code} 
                    onClick={() => changeLanguage(idioma.code)} 
                    className={`transition-all ${i18n.language === idioma.code ? 'scale-125 border-b-2 border-cyan-400 pb-1' : 'opacity-40 hover:opacity-100'}`}
                  >
                    <img 
                      src={`https://flagcdn.com/w80/${idioma.country}.png`} 
                      className="w-10 rounded-sm shadow-xl" 
                      alt={idioma.label} 
                    />
                  </button>
                ))}
              </div>

              {/* Botón de CV destacado en el menú */}
              <a 
                href="/CV_Roy.pdf"
                download
                className="mt-6 bg-cyan-500 text-slate-950 px-12 py-3 rounded-md font-bold text-lg shadow-[0_0_20px_rgba(34,211,238,0.2)] active:scale-95 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {t('download_cv', 'CV')}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}