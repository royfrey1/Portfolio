
import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // cierra menu hamburguesa al cambiar idioma
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <div className="text-white font-bold text-xl tracking-wider">
          ROY <span className="text-cyan-400">FREY</span>
        </div>

        {/* Links de navegación */}
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
        </div>

        {/* Lado derecho: CV + Banderas */}
        <div className="flex items-center gap-4">
          {/* Botón descargar CV */}
          <a 
            href="/CV_Roy.pdf"
            download="CV_Roy.pdf"
            className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-4 py-2 rounded-md hover:bg-cyan-500 hover:text-white transition-all text-sm font-medium"
          >
            {t('download_cv', 'Descargar CV')}
          </a>

          {/* Botón Hamburguesa (Solo móvil) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none z-50"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
          {/* Banderas Desktop (Ocultas en móvil para que no se amontonen) */}
          <div className="hidden md:flex items-center gap-2 border-l border-slate-700 pl-4">
            {[{ code: 'es', f: 'ar' }, { code: 'en', f: 'us' }, { code: 'pt', f: 'br' }].map((lang) => (
              <button key={lang.code} onClick={() => changeLanguage(lang.code)}>
                <img 
                  src={`https://flagcdn.com/w40/${lang.f}.png`} 
                  className={`w-6 h-auto ${i18n.language === lang.code ? 'grayscale-0' : 'grayscale opacity-50'}`} 
                />
              </button>
            ))}
          </div>


          {/* Selector de Idiomas - Ahora a la derecha del CV */}
          {/* <div className="flex items-center gap-2 border-l border-slate-700 pl-4">
            {[
              { code: 'es', country: 'ar', label: 'Español' },
              { code: 'en', country: 'us', label: 'English' },
              { code: 'pt', country: 'br', label: 'Português' }  
            ].map((idioma) => (
              <button
                key={idioma.code}
                onClick={() => changeLanguage(idioma.code)}
                title={idioma.label}
                className="text-2xl hover:scale-125 transition-transform" 
                >
                <img 
                  src={`https://flagcdn.com/w80/${idioma.country}.png`} 
                  alt={idioma.label}
                  className={`w-6 h-4 rounded-sm shadow-sm object-cover ${
                  i18n.language === idioma.code ? 'grayscale-0 border border-cyan-400' : 'grayscale opacity-40 hover:opacity-100'
                }`}
                />
              </button>
            ))}
          </div> */}
        </div>
      </div>
      {/* Menú Móvil (Overlay) */}
      <div className={`fixed inset-0 bg-slate-950 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl text-white">
          <a href="#" onClick={() => setIsOpen(false)}>{t('nav_inicio', 'Inicio')}</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>{t('nav_proyectos', 'Proyectos')}</a>
          <a href="#experiencia" onClick={() => setIsOpen(false)}>{t('nav_habilidades', 'Habilidades')}</a>
          <a href="#contacto" onClick={() => setIsOpen(false)}>{t('nav_contacto', 'Contacto')}</a>
          
          {/* Banderas en Menú Móvil */}
          <div className="flex gap-6 mt-4">
            {[
              { code: 'es', country: 'ar', label: 'Español' },
              { code: 'en', country: 'us', label: 'English' },
              { code: 'pt', country: 'br', label: 'Português' }
            ].map((idioma) => (
              <button 
              key={idioma.code} 
              onClick={() => changeLanguage(idioma.code)} 
              className="scale-150">
                <img src={`https://flagcdn.com/w40/${idioma.country}.png`} className="w-8" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}