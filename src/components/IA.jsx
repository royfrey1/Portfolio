import { useTranslation } from 'react-i18next';

export default function IA() {
const { t } = useTranslation();
 return (
    <div className="bg-slate-900/50 border border-emerald-500/20 rounded-3xl p-8 hover:border-emerald-500/50 transition-all shadow-xl">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h4 className="text-2xl font-bold text-white">{t('IA_title', 'Experiencia con IA')}</h4>
          <p className="text-emerald-500 font-medium italic">Especialista en inteligencia artificial aplicada</p>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono text-slate-500 block">2024 — 2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-800/40 p-4 rounded-2xl border border-white/5">
          <p className="text-emerald-400 text-xs uppercase font-bold tracking-wider mb-1">Expertise Técnico</p>
          <p className="text-white text-sm">Uso integral de Inteligencia Artificial <strong>Gemini, ChatGPT, Claude</strong> en tareas contables.</p>
        </div>
        <div className="bg-slate-800/40 p-4 rounded-2xl border border-white/5">
          <p className="text-emerald-400 text-xs uppercase font-bold tracking-wider mb-1">IA Aplicada a Negocios</p>
          <p className="text-white text-sm">Como Analista de Sistemas, integro herramientas de Inteligencia Artificial Generativa y Modelos de Lenguaje Extensos (LLMs) para acelerar el ciclo de vida del desarrollo de software.</p>
        </div>
      </div>

      <div className="space-y-3">
        <h5 className="text-white font-semibold text-sm uppercase tracking-widest">Logros Clave:</h5>
        <ul className="text-slate-400 text-sm space-y-2">
          <li className="flex gap-2">
            <span className="text-emerald-500">▹</span>
             Mi enfoque no se limita al uso superficial de la IA, sino a su implementación estratégica para resolver problemas técnicos y arquitectónicos con precisión y escalabilidad.
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-500">▹</span>
             Poseo una sólida capacidad para el diseño de prompts avanzados (Prompt Engineering), lo que me permite automatizar la escritura de código limpio en Python y React, realizar debugging profundo de arquitecturas en la nube como AWS y optimizar la lógica de negocios compleja.
          </li>
        </ul>
      </div>
    </div>
  );
};