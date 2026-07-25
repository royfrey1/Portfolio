
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../public/logo1.png'

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Cierra el menú al cambiar de idioma
  };

  // Definimos los idiomas
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

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (    
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-[#DEDEDE]  px-6 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo moderno con el isotipo en verde */}
        <div className="flex items-center gap-2.5 z-50">
          <img 
            src={logo} 
            alt="Selva Code Logo" 
            className="h-12 sm:h-14 md:h-24 w-auto object-contain dark:brightness-110"
          />
          
        </div>

        {/* Links de navegación - Escritorio (Gris oscuro a Verde #3EBD00) */}
        <div className="hidden md:flex gap-8 text-[#262626]/80 font-medium items-center">
          <a href="#" className="hover:text-[#3EBD00] transition-colors">{t('nav_inicio', 'Inicio')}</a>
          <a href="#pasos" className="hover:text-[#3EBD00] transition-colors">{t('nav_paso', 'Paso a paso')}</a>
          <a href="#servicios" className="hover:text-[#3EBD00] transition-colors">{t('nav_servicios', 'Servicios')}</a>
          <a href="#projects" className="hover:text-[#3EBD00] transition-colors">{t('nav_proyectos', 'Proyectos')}</a>          
          <a href="#contacto" className="hover:text-[#3EBD00] transition-colors">{t('nav_contacto', 'Contacto')}</a>
        </div>

        {/* Lado derecho: CV + Banderas Desktop / Botón Hamburguesa */}
        <div className="flex items-center gap-4">
          
          {/* Botón de CV al estilo Stripe (Verde brillante con sombra difuminada) */}
          <a 
            href="/CV_Roy2026.pdf"
            download="CV_Roy2026.pdf"
            className="hidden sm:block bg-[#3EBD00] hover:bg-[#2D8700] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-[#3EBD00]/20 hover:shadow-md active:scale-95"
          >
            {t('download_cv', 'Descargar CV')}
          </a>

          {/* Banderas Desktop (Gris claro a color al hacer hover o estar activo) */}
          <div className="hidden md:flex items-center gap-2 border-l border-[#DEDEDE] pl-4">
            {idiomas.map((lang) => (
              <button 
                key={lang.code} 
                onClick={() => changeLanguage(lang.code)}
                title={lang.label}
                className="hover:scale-110 transition-transform focus:outline-none"
              >
                <img 
                  src={`https://flagcdn.com/w40/${lang.country}.png`} 
                  alt={lang.label}
                  className={`w-6 h-auto rounded-sm transition-all ${
                    i18n.language === lang.code 
                      ? 'grayscale-0 border border-[#3EBD00]' 
                      : 'grayscale opacity-40 hover:opacity-100 hover:grayscale-0'
                  }`} 
                />
              </button>
            ))}
          </div>

          {/* Botón Hamburguesa (Adaptado a color oscuro para fondo claro) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#262626] focus:outline-none z-50 p-1"
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

      {/* Menú Móvil (Overlay en color claro y limpio con barra verde) */}
      <div 
        className={`fixed top-0 left-0 w-full h-[100svh] bg-[#F9F9F9] transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-[100]`}
      >
        {/* Borde lateral verde brillante para dar profundidad visual */}
        <div className="absolute inset-y-0 left-0 w-1.5 bg-[#3EBD00] shadow-[0_0_15px_rgba(62,189,0,0.3)]"></div>

        <div className="flex flex-col h-full w-full relative">
          
          {/* Botón de cerrar móvil */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-[#262626] p-2 hover:bg-[#DEDEDE]/50 rounded-full transition-colors"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Contenedor de links móvil */}
          <div className="flex flex-col items-center justify-center flex-grow gap-10">
            
            <nav className="flex flex-col items-center gap-8">
              <a href="#" onClick={() => setIsOpen(false)} className="text-3xl text-[#262626] font-bold hover:text-[#3EBD00] transition-all active:scale-95">
                {t('nav_inicio', 'Inicio')}
              </a>

              <a href="#pasos" onClick={() => setIsOpen(false)} className="text-3xl text-[#262626] font-bold hover:text-[#3EBD00] transition-all active:scale-95">
                {t('nav_paso', 'Paso a paso')}
              </a>

              <a href="#servicios" onClick={() => setIsOpen(false)} className="text-3xl text-[#262626] font-bold hover:text-[#3EBD00] transition-all active:scale-95">
                {t('nav_servicios', 'Servicios')}
              </a>

              <a href="#projects" onClick={() => setIsOpen(false)} className="text-3xl text-[#262626] font-bold hover:text-[#3EBD00] transition-all active:scale-95">
                {t('nav_proyectos', 'Proyectos')}
              </a>

              <a href="#contacto" onClick={() => setIsOpen(false)} className="text-3xl text-[#262626] font-bold hover:text-[#3EBD00] transition-all active:scale-95">
                {t('nav_contacto', 'Contacto')}
              </a>

              <div className="h-[1px] w-24 bg-[#DEDEDE] my-4"></div>

              {/* Banderas en móvil */}
              <div className="flex gap-8">
                {idiomas.map((idioma) => (
                  <button 
                    key={idioma.code} 
                    onClick={() => changeLanguage(idioma.code)} 
                    className={`transition-all ${
                      i18n.language === idioma.code 
                        ? 'scale-125 border-b-2 border-[#3EBD00] pb-1' 
                        : 'opacity-40 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={`https://flagcdn.com/w80/${idioma.country}.png`} 
                      className="w-10 rounded-sm shadow-md" 
                      alt={idioma.label} 
                    />
                  </button>
                ))}
              </div>

              {/* Botón de CV destacado en menú móvil */}
              <a 
                href="/CV_Roy.pdf"
                download
                className="mt-6 bg-[#3EBD00] hover:bg-[#2D8700] text-white px-12 py-3 rounded-xl font-bold text-lg shadow-md shadow-[#3EBD00]/15 active:scale-95 transition-all"
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