import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Layout, Code2, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

export default function OurProcess() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: '01',
      icon: Search,
      badge: 'Fase 01',
      title: t('process_step1_title', 'Descubrimiento y Estrategia'),
      subtitle: 'Mapeo de requerimientos y arquitectura del sistema',
      description: t('process_step1_desc', 'Analizamos a fondo los objetivos de tu negocio, tu audiencia y los requisitos técnicos para definir una hoja de ruta clara.'),
      highlights: [
        'Auditoría y levantamiento de requerimientos',
        'Diseño de arquitectura de software y DB',
        'Definición de stack (React + Supabase)'
      ]
    },
    {
      id: '02',
      icon: Layout,
      badge: 'Fase 02',
      title: t('process_step2_title', 'Diseño UI/UX Nativo'),
      subtitle: 'Sistemas de diseño dinámicos orientados a conversión',
      description: t('process_step2_desc', 'Estructuramos interfaces modernas, limpias e intuitivas con foco en la conversión, velocidad de carga y experiencia en móviles.'),
      highlights: [
        'Prototipado interactivo de alta fidelidad',
        'Sistema de componentes reutilizables',
        'Garantía de diseño responsive y accesible'
      ]
    },
    {
      id: '03',
      icon: Code2,
      badge: 'Fase 03',
      title: t('process_step3_title', 'Desarrollo y Código a Medida'),
      subtitle: 'Construcción con rendimiento extremo',
      description: t('process_step3_desc', 'Transformamos el diseño en código ultra rápido, limpio y escalable utilizando React, Tailwind y bases de datos robustas.'),
      highlights: [
        'Desarrollo modular y limpio en React',
        'Integración de APIs y autenticación segura',
        'Optimización extrema de performance (Lighthouse 95+)'
      ]
    },
    {
      id: '04',
      icon: Rocket,
      badge: 'Fase 04',
      title: t('process_step4_title', 'Despliegue y Soporte Global'),
      subtitle: 'Publicación en infraestructura cloud de baja latencia',
      description: t('process_step4_desc', 'Publicamos la plataforma en servidores globales de alta velocidad, garantizando monitoreo continuo y optimización constante.'),
      highlights: [
        'Despliegue en CDNs de borde (Edge Networks)',
        'Configuración de dominio, SSL y SEO técnico',
        'Acompañamiento y mantenimiento proactivo'
      ]
    }
  ];

  const currentStep = steps[activeStep];
  const IconComponent = currentStep.icon;

  return (
    <section id="pasos" className="py-24 bg-[#F8FAFC] text-[#262626] relative overflow-hidden border-b border-[#DEDEDE]">
      
      {/* FONDO DECORATIVO */}
      <div className="absolute inset-0 bg-[radial-gradient(#DEDEDE_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ENCABEZADO */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3EBD00]/10 border border-[#3EBD00]/20 text-[#3EBD00] text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3EBD00] animate-pulse" />
            {t('process_badge', 'NUESTRO PROCESO')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#262626] leading-tight">
            {t('process_title', 'Un método claro para resultados extraordinarios')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#262626]/70 leading-relaxed">
            {t('process_subtitle', 'Seguimos un flujo de trabajo estructurado y transparente para convertir ideas complejas en productos digitales de alto rendimiento.')}
          </p>
        </div>

        {/* GRID INTERACTIVO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* PASOS DE LA IZQUIERDA (TIMELINE INTERACTIVO) */}
          <div className="lg:col-span-5 space-y-3 relative">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const StepIcon = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 relative flex items-center gap-4 group ${
                    isActive
                      ? 'bg-white shadow-md shadow-[#3EBD00]/50 border border-[#3EBD00]'
                      : 'hover:bg-white/60 border border-transparent'
                  }`}
                >
                  {/* Pastilla flotante animada de selección */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-white border border-[#3EBD00]/40 rounded-2xl shadow-sm -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Círculo con Icono */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0 ${
                      isActive
                        ? 'bg-[#3EBD00] text-white shadow-sm shadow-[#3EBD00]/30'
                        : 'bg-[#DEDEDE]/60 text-[#262626]/70 group-hover:bg-[#DEDEDE]'
                    }`}
                  >
                    <StepIcon className="w-5 h-5" />
                  </div>

                  {/* Texto del Botón */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#3EBD00]' : 'text-[#B3B3B3]'}`}>
                        {step.id}
                      </span>
                      <span className="text-[11px] font-semibold text-[#B3B3B3]">
                        {step.badge}
                      </span>
                    </div>
                    <h3 className={`text-base font-bold truncate transition-colors ${isActive ? 'text-[#262626]' : 'text-[#262626]/80'}`}>
                      {step.title}
                    </h3>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? 'text-[#3EBD00] translate-x-1' : 'text-[#B3B3B3] opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* TARJETA DINÁMICA DE LA DERECHA (ANIMADA CON FRAMER MOTION) */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="bg-white border border-[#DEDEDE] rounded-3xl p-8 shadow-xl shadow-slate-200/50 relative overflow-hidden min-h-[420px] flex flex-col justify-between">
              
              {/* Resplandor suave en esquina con tu verde principal */}
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#3EBD00]/10 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  {/* Sub-header de la Tarjeta */}
                  <div className="flex items-center justify-between border-b border-[#DEDEDE] pb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#3EBD00]/10 text-[#3EBD00] rounded-xl">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-[#B3B3B3] uppercase block">
                          Selva Code Process
                        </span>
                        <h4 className="text-xl font-bold text-[#262626]">
                          {currentStep.title}
                        </h4>
                      </div>
                    </div>

                    <span className="text-xs font-bold font-mono px-3 py-1 bg-[#262626] text-white rounded-full">
                      {currentStep.id} / 04
                    </span>
                  </div>

                  {/* Descripción Breve */}
                  <p className="text-base text-[#262626]/80 leading-relaxed font-normal">
                    {currentStep.description}
                  </p>

                  {/* Lista de Highlights / Puntos clave */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold text-[#B3B3B3] uppercase tracking-wider block">
                      Entregables & Metas
                    </span>
                    {currentStep.highlights.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 + 0.1 }}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#DEDEDE]/80"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#3EBD00] shrink-0" />
                        <span className="text-sm font-medium text-[#262626]">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* BARRA DE PROGRESO INFERIOR */}
              <div className="pt-6 border-t border-[#DEDEDE] mt-6">
                <div className="flex justify-between items-center text-xs font-mono text-[#B3B3B3] mb-2">
                  <span>PROGRESO DE FASE</span>
                  <span className="font-bold text-[#3EBD00]">
                    {((activeStep + 1) * 25)}%
                  </span>
                </div>
                <div className="w-full bg-[#DEDEDE] h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-[#3EBD00] h-full rounded-full"
                    animate={{ width: `${(activeStep + 1) * 25}%` }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}