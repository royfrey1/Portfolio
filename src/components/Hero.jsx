import React from 'react';
import { useTranslation } from 'react-i18next';


export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center bg-slate-900">
      {/* Seccion de bienvenida o presentación */}
      <h1 className="text-6xl font-extrabold text-white tracking-tight mb-4">
        {t('hero_title', 'Hola, soy')}{' '}
        <span className="text-cyan-400 animate-wave">
        {t('hero_title_2', 'Roy Frey')}
        </span>
      </h1>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
        {t('hero_p', 'Analista de Sistemas & Desarrollador Fullstack. Especializado en crear soluciones eficientes con React y arquitectura AWS.')}
      </p>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
        {t('hero_lugar', 'Desde Puerto Iguazu, Misiones, Argentina.')}
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-cyan-500 border-slate-700 text-slate-300 px-6 py-3 rounded-lg font-medium btn-rainbow transition-all">
          {t('hero_btn_proyectos', 'Ver Proyectos')}
        </a>
        <a href="#contacto" className="border border-slate-700 text-slate-300 hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition-all">
          {t('hero_btn_contacto', 'Contacto')}
        </a>
      </div>
    </section>
  );
}