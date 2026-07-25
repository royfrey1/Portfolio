import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { Laptop3D } from './Laptop'; // Ruta original
import { GridBeam } from './background-grid-beam';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function NewHeroAgency() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const techStack = [
    {
      name: 'React',
      description: 'Librería frontend para construir interfaces de usuario interactivas y reactivas.',
    },
    {
      name: 'Supabase',
      description: 'Backend como servicio con base de datos PostgreSQL en tiempo real y autenticación.',
    },
    {
      name: 'Tailwind CSS',
      description: 'Framework CSS orientado a utilidades para un diseño rápido, limpio y responsivo.',
    },
    {
      name: 'Vite',
      description: 'Herramienta de compilación ultrarrápida para desarrollo web moderno.',
    },
    {
      name: 'Framer Motion',
      description: 'Librería de animaciones fluidas y gestos de alto rendimiento para React.',
    },
    {
      name: 'JavaScript',
      description: 'Lenguaje de programación estándar para la lógica dinámica en el cliente.',
    },
    {
      name: 'Git',
      description: 'Sistema de control de versiones distribuido para la gestión de código.',
    }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#262626] font-sans selection:bg-[#3EBD00] selection:text-white">
      
      {/* SECCIÓN HERO CON GRID BEAM DE BACKGROUND */}
      <section className="relative min-h-[90vh] flex flex-col justify-center bg-slate-50 overflow-hidden pt-6 pb-16 border-b border-[#DEDEDE]">
        
        <GridBeam className="flex items-center justify-center">
          
          {/* Fondo sutil de cuadrícula Tailwind */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-60 z-0 pointer-events-none" />

          {/* Glow verde de acento */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#3EBD00]/10 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="relative max-w-7xl mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            
            {/* COLUMNA IZQUIERDA: Texto y Acciones */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3EBD00]/10 border border-[#3EBD00]/20 text-[#3EBD00] text-xs font-bold tracking-widest uppercase">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#3EBD00]" />
                  Selva Code — Next Gen Studio
                </span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#262626] leading-[1.15] mb-4"
              >
                {t('hero_title_1', 'Diseñamos experiencias digitales que')}{' '}
                <span className="text-[#3EBD00] block sm:inline">
                  {t('hero_title_gradient', 'impulsan resultados')}
                </span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg text-[#262626]/75 max-w-xl mb-4 leading-relaxed font-normal"
              >
                {t('hero_subtitle', 'Agencia de desarrollo web nativo y software a medida. Creamos productos digitales veloces, modernos y optimizados para marcas ambiciosas.')}
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contacto"
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#3EBD00] hover:bg-[#2D8700] text-white font-semibold rounded-xl shadow-md shadow-[#3EBD00]/20 transition-colors duration-200 text-center flex items-center justify-center gap-2 group text-sm sm:text-base"
                >
                  <span>{t('hero_btn_primary', 'Comenzar un Proyecto')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#projects"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white text-[#262626] font-semibold rounded-xl border border-[#DEDEDE] hover:border-[#B3B3B3] hover:bg-[#F8FAFC] shadow-sm transition-all duration-200 text-center text-sm sm:text-base"
                >
                  {t('hero_btn_secondary', 'Explorar Plantillas')}
                </motion.a>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="mt-12 flex items-center gap-2 text-xs font-bold tracking-widest text-[#B3B3B3] uppercase"
              >
                <span className="w-2 h-2 rounded-full bg-[#3EBD00] animate-ping" />
                <span>{t('hero_scroll', 'Selva Code — 2026')}</span>
              </motion.div>
            </motion.div>

            {/* COLUMNA DERECHA: Canvas 3D (Coordenadas Intactas) */}
            <div className="lg:col-span-6 h-[380px] sm:h-[480px] w-full relative pointer-events-none">
              <Canvas
                camera={{ position: [0, 0.8, 3.2], fov: 40 }}
                className="w-full h-full"
              >
                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 10, 5]} intensity={2} />

                <Center>
                  <Laptop3D scale={0.4} />
                </Center>
              </Canvas>
            </div>

          </div>

        </GridBeam>
      </section>

      {/* CINTILLO TECNOLOGÍAS CON TOOLTIP DE INFORMACIÓN */}
      <section className="border-b border-[#DEDEDE] bg-[#3EBD00]/10 py-10 relative z-20 overflow-visible">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold tracking-widest text-[#B3B3B3] uppercase mb-8 border-b border-[#3EBD00] pb-4">
            {t('trusted_by_title', 'TECNOLOGÍAS Y HERRAMIENTAS QUE POTENCIAN NUESTRO CÓDIGO')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.span
                  whileHover={{ y: -3 }}
                  className={`font-extrabold text-lg tracking-tight transition-colors duration-200 cursor-default select-none ${
                    hoveredIndex === index ? 'text-[#3EBD00]' : 'text-[#262626]/60'
                  }`}
                >
                  {tech.name}
                </motion.span>

                {/* Card Flotante (Tooltip) */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full mt-3 w-52 p-4 rounded-2xl bg-white text-[#262626] shadow-xl border border-slate-100 z-50 pointer-events-none text-left"
                    >
                      {/* Flechita apuntadora superior */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-slate-100" />

                      <div className="relative z-10 space-y-1">
                        <h4 className="font-bold text-xs text-[#262626] uppercase tracking-wider">
                          {tech.name}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-normal">
                          {t(`tech_desc_${index}`, tech.description)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}