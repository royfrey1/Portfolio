import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const idiomas = [
    { code: 'es', country: 'ar', label: 'Español' },
    { code: 'en', country: 'us', label: 'English' },
    { code: 'pt', country: 'br', label: 'Português' }
  ];

  // Bloqueo de scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (    
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-[#DEDEDE] px-6 h-16 md:h-20 flex items-center">
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center relative z-50 bg-transparent">
        
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img 
            src="/logo1.png" 
            alt="Selva Code Logo" 
            className="h-16 sm:h-16 md:h-18 w-auto object-contain"
          />
        </div>

        {/* Links Desktop */}
        <div className="hidden md:flex gap-8 text-[#262626]/80 font-medium items-center">
          <a href="#" className="hover:text-[#3EBD00] transition-colors text-sm lg:text-base">{t('nav_inicio', 'Inicio')}</a>
          <a href="#pasos" className="hover:text-[#3EBD00] transition-colors text-sm lg:text-base">{t('nav_paso', 'Paso a paso')}</a>
          <a href="#servicios" className="hover:text-[#3EBD00] transition-colors text-sm lg:text-base">{t('nav_servicios', 'Servicios')}</a>
          <a href="#projects" className="hover:text-[#3EBD00] transition-colors text-sm lg:text-base">{t('nav_proyectos', 'Proyectos')}</a>          
          <a href="#contacto" className="hover:text-[#3EBD00] transition-colors text-sm lg:text-base">{t('nav_contacto', 'Contacto')}</a>
        </div>

        {/* Lado derecho: Banderas Desktop / Botón Hamburguesa */}
        <div className="flex items-center gap-4">

          {/* Banderas Desktop */}
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

          {/* Botón Hamburguesa Animado */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#262626] focus:outline-none p-2 rounded-lg hover:bg-[#F2F2F2] transition-colors flex items-center justify-center w-10 h-10"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center relative">
              <span 
                className={`w-full h-0.5 bg-[#262626] rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                  isOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`} 
              />
              <span 
                className={`w-full h-0.5 bg-[#262626] rounded-full transition-all duration-200 ease-in-out ${
                  isOpen ? 'opacity-0 scale-0' : 'opacity-100'
                }`} 
              />
              <span 
                className={`w-full h-0.5 bg-[#262626] rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                  isOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`} 
              />
            </div>
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DROPDOWN (Desplazamiento vertical suave sin colapsar layout) */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-[#DEDEDE] shadow-xl transition-all duration-300 ease-in-out py-6 px-6 z-40 ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <a 
            href="#" 
            onClick={handleLinkClick} 
            className="text-base font-semibold text-[#262626] hover:text-[#3EBD00] transition-colors"
          >
            {t('nav_inicio', 'Inicio')}
          </a>

          <a 
            href="#pasos" 
            onClick={handleLinkClick} 
            className="text-base font-semibold text-[#262626] hover:text-[#3EBD00] transition-colors"
          >
            {t('nav_paso', 'Paso a paso')}
          </a>

          <a 
            href="#servicios" 
            onClick={handleLinkClick} 
            className="text-base font-semibold text-[#262626] hover:text-[#3EBD00] transition-colors"
          >
            {t('nav_servicios', 'Servicios')}
          </a>

          <a 
            href="#projects" 
            onClick={handleLinkClick} 
            className="text-base font-semibold text-[#262626] hover:text-[#3EBD00] transition-colors"
          >
            {t('nav_proyectos', 'Proyectos')}
          </a>

          <a 
            href="#contacto" 
            onClick={handleLinkClick} 
            className="text-base font-semibold text-[#262626] hover:text-[#3EBD00] transition-colors"
          >
            {t('nav_contacto', 'Contacto')}
          </a>

          <div className="w-16 h-[1px] bg-[#DEDEDE] my-1" />

          {/* Banderas en Móvil */}
          <div className="flex items-center gap-5">
            {idiomas.map((idioma) => (
              <button 
                key={idioma.code} 
                onClick={() => changeLanguage(idioma.code)} 
                className="transition-transform active:scale-95 focus:outline-none"
              >
                <img 
                  src={`https://flagcdn.com/w80/${idioma.country}.png`} 
                  className={`w-7 h-auto rounded-sm transition-all ${
                    i18n.language === idioma.code 
                      ? 'scale-110 border border-[#3EBD00] shadow-sm' 
                      : 'opacity-40 hover:opacity-100 grayscale hover:grayscale-0'
                  }`} 
                  alt={idioma.label} 
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}