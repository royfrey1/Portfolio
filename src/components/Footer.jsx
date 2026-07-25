import { useTranslation } from 'react-i18next';
import { Heart, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-200 border-t border-slate-200/80 pt-16 pb-8 text-slate-600 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECCIÓN PRINCIPAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80">
          
          {/* LADO IZQUIERDO: Branding, Descripción y CTA */}
          <div className="md:col-span-5 space-y-5">
            {/* Logo y Nombre */}
            <div className="flex items-center gap-2.5">
              <img 
                src="/logo1.png" 
                alt="Selva Code Logo" 
                className="h-12 sm:h-14 md:h-28 w-auto object-contain dark:brightness-110"
              />
            </div>

            {/* Breve descripción */}
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              {t('footer_desc', 'Diseñando y desarrollando soluciones digitales eficientes, escalables y con un enfoque minimalista centrado en el usuario.')}
            </p>

            {/* Botón CTA directo estilo la imagen de referencia */}
            <div>
              <a 
                href="#contacto"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3EBD00] hover:bg-[#339e00] text-white text-xs font-bold transition-all shadow-md shadow-[#3EBD00]/20 hover:shadow-lg hover:shadow-[#3EBD00]/30 active:scale-[0.98]"
              >
                <span>{t('footer_cta', 'Iniciar un Proyecto')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Redes Sociales con SVGs Inline */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/in/roy-walter-martinez-frey-bbaa461b8/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-slate-100 hover:bg-[#3EBD00] text-slate-500 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              <a 
                href="https://github.com/royfrey1" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-slate-100 hover:bg-[#3EBD00] text-slate-500 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>

              <a 
                href="https://instagram.com/roy.frey" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-slate-100 hover:bg-[#3EBD00] text-slate-500 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* LADO DERECHO: Columnas de Navegación Útiles */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            
            {/* Columna 1: Navegación Principal */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#262626] uppercase tracking-wider">
                {t('footer_col_nav', 'Navegación')}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#inicio" className="hover:text-[#3EBD00] transition-colors">{t('nav_home', 'Inicio')}</a>
                </li>
                <li>
                  <a href="#pasos" className="hover:text-[#3EBD00] transition-colors">{t('nav_pasos', 'Pasos')}</a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-[#3EBD00] transition-colors">{t('nav_servicios', 'Servicios')}</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#3EBD00] transition-colors">{t('nav_projects', 'Proyectos')}</a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-[#3EBD00] transition-colors">{t('nav_contact', 'Contacto')}</a>
                </li>
              </ul>
            </div>

            {/* Columna 2: Servicios / Especialidades */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#262626] uppercase tracking-wider">
                {t('footer_col_services', 'Especialidades')}
              </h4>
              <ul className="space-y-2.5 text-slate-500">
                <li>{t('service_web', 'Desarrollo Web Full-Stack')}</li>
                <li>{t('service_ui', 'Diseño UI / UX')}</li>
                <li>{t('service_dashboards', 'Paneles & Dashboards')}</li>
                <li>{t('service_optimization', 'Optimización Web')}</li>
              </ul>
            </div>

            {/* Columna 3: Legal / Info Adicional */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#262626] uppercase tracking-wider">
                {t('footer_col_legal', 'Legal')}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#privacidad" className="hover:text-[#3EBD00] transition-colors">{t('legal_privacy', 'Privacidad')}</a>
                </li>
                <li>
                  <a href="#terminos" className="hover:text-[#3EBD00] transition-colors">{t('legal_terms', 'Términos de Servicio')}</a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* PIE DE PÁGINA: Copyright & Hecho con amor */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} Iguazú Marketplace. {t('footer_rights', 'Todos los derechos reservados.')}
          </p>

          <p className="flex items-center gap-1.5">
            <span>{t('footer_built', 'Creado por Roy')}</span>
            <Heart className="w-3.5 h-3.5 text-[#3EBD00] fill-[#3EBD00]" />
          </p>
        </div>

      </div>
    </footer>
  );
}