import React from 'react';
import { useTranslation } from 'react-i18next';

const Experiencias = () => {
const { t } = useTranslation();
  return (
    <section id='experiencia' className="max-w-7xl mx-auto px-8 py-24 bg-[#050810]">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
          {t('exp_contable_title_1', 'Experiencia')} <span className="text-emerald-500">{t('exp_contable_title_2', 'Híbrida')}</span>
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 mt-4 rounded-full"></div>
        <p className="mt-6 text-slate-400 max-w-2xl text-lg">
          {t('exp_desc', 'Combinando el rigor del análisis contable con la empatía de la atención al público y el poder del desarrollo de sistemas.')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* TARJETA 1: ADMINISTRACIÓN CONTABLE */}
        <div className="group perspective-1000">
          <div className="relative h-full bg-slate-900/40 border border-white/10 rounded-[2.5rem] p-10 transition-all duration-500 ease-out 
                        group-hover:rotate-x-2 group-hover:rotate-y-[-5deg] group-hover:shadow-[20px_20px_50px_rgba(16,185,129,0.1)] 
                        group-hover:border-emerald-500/50 group-hover:-translate-y-2">
            
            <div className="flex justify-between items-start mb-8">
              <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20">
                <span className="text-3xl">📊</span>
              </div>
              <span className="text-xs font-mono text-slate-500 border border-white/5 px-3 py-1 rounded-full">
                2024 — 2026
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{t('exp_contable_admin', 'Administración & Gestión')}</h3>
            <p className="text-emerald-500 font-semibold mb-6">{t('exp_contable_admin2', 'Estudio Contable')}</p>

            <div className="space-y-4 mb-8">
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('exp_contable_desc_admin', 'Gestión administrativa integral utilizando sistemas de alta demanda como ')} <span className="text-white">{t('exp_contable_program', 'Holistor y Alma.net')}</span>
                {t('exp_contable_desc_admin', 'Gestión hotelera avanzada (Booking.com, RoomCloud, Expedia Group) y manejo del sistema TOTVS. Especialista en análisis de informes financieros y soporte técnico interno de sistemas.')}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Holistor', 'IVA/IIBB','ARCA', 'Auditoría', 'TOTVS','Microsoft Excel', 'Microsoft Teams', 'Microsoft Word'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-emerald-500/5 text-emerald-400 text-[10px] uppercase font-bold tracking-widest rounded-lg border border-emerald-500/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
    
        {/* TARJETA 2: ATENCIÓN AL PÚBLICO */}
        <div className="group perspective-1000">
          <div className="relative h-full bg-slate-900/40 border border-white/10 rounded-[2.5rem] p-10 transition-all duration-500 ease-out 
                        group-hover:rotate-x-2 group-hover:rotate-y-[5deg] group-hover:shadow-[-20px_20px_50px_rgba(59,130,246,0.1)] 
                        group-hover:border-blue-500/50 group-hover:-translate-y-2">
            
            <div className="flex justify-between items-start mb-8">
              <div className="bg-blue-500/10 p-4 rounded-2xl border border-blue-500/20">
                <span className="text-3xl">🤝</span>
              </div>
              <span className="text-xs font-mono text-slate-500 border border-white/5 px-3 py-1 rounded-full">
                2020 — 2024 
              </span>
            </div>
 
            <h3 className="text-2xl font-bold text-white mb-2">{t('exp_contable_atencion', 'Atención al Cliente')}</h3>
            <p className="text-blue-400 font-semibold mb-6">{t('exp_contable_atencion2', 'Minimercado "Miguelo" ')}</p>
            
            <div className="space-y-4 mb-8">
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('exp_contable_desc_atencion', 'Experiencia directa en ')} <span className="text-white">{t('exp_contable_desc_atencion2', 'atención al público')}</span> {t('exp_contable_desc_atencion3', 'Foco en la resolución de consultas críticas y fidelización, clave para el relevamiento de requerimientos como Analista.')}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Soft Skills', 'Resolución', 'Facturación', 'Stock', 'Pagos','Logistica'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-500/5 text-blue-400 text-[10px] uppercase font-bold tracking-widest rounded-lg border border-blue-500/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experiencias;