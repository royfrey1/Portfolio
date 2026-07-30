import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../supabaseClient';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Loader2 } from 'lucide-react';

export default function Projects() {
  const { t, i18n } = useTranslation();
  const [misProyectos, setMisProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Inicialización de Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Funciones del carrusel
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Cargar Proyectos desde Supabase
  useEffect(() => {
    const obtenerProyectos = async () => {
      try {
        const { data, error } = await supabase
          .from('proyectos')
          .select('*')
          .order('id', { ascending: true });

        if (data) setMisProyectos(data);
        if (error) throw error;
      } catch (error) {
        console.error("Error al obtener datos:", error.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerProyectos();
  }, []);

  if (cargando) {
    return (
      <section className="py-24 bg-slate-50 text-center flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-[#3EBD00] mb-4" />
        <p className="text-slate-700 font-semibold text-sm animate-pulse">
          {t('project_loading', 'Cargando proyectos...')}
        </p>
      </section>
    );
  }

  return (
    <section id="projects" className="relative pb-24 bg-slate-50 overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-6">
        
        {/* ENCABEZADO: Título chico a la izquierda + Flechas/Dots a la derecha */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          
          {/* Lado Izquierdo */}
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest text-[#3EBD00] uppercase">
              {t('projects_tag', 'FEATURED CASE STUDIES')}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#262626]">
              {t('projects_title', 'Resultados reales para Clientes reales')}
            </h2>
          </div>

          {/* Lado Derecho: Puntos de control + Flechas */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            
            {/* Dots / Puntos */}
            <div className="flex items-center gap-2 bg-slate-200/60 backdrop-blur-md px-3 py-2 rounded-full border border-slate-300/50">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === selectedIndex 
                      ? 'w-6 bg-[#3EBD00]' 
                      : 'w-2.5 bg-slate-400/60 hover:bg-slate-500'
                  }`}
                  aria-label={`Ir al slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Flechas de Navegación */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 shadow-sm flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95 text-slate-700"
                aria-label="Anterior"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 shadow-sm flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95 text-slate-700"
                aria-label="Siguiente"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* CARRUSEL DE TARJETAS */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing -mx-4 px-4" ref={emblaRef}>
          <div className="flex gap-6">
            {misProyectos.map((proyecto) => {
              const descripcionTexto = i18n.language === 'es' 
                ? proyecto.descripcion 
                : (proyecto[`descripcion_${i18n.language}`] || proyecto.descripcion);

              return (
                <div 
                  key={proyecto.id}
                  className="flex-[0_0_88%] sm:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0"
                >
                  <motion.div 
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="group relative h-[380px] w-full rounded-md overflow-hidden bg-slate-950 border border-slate-200/80 shadow-lg flex flex-col justify-between p-6"
                  >
                    {/* Imagen de Fondo */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={proyecto.image_url || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"} 
                        alt={proyecto.titulo} 
                        className="w-auto h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                    </div>

                    {/* Header de Card */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {proyecto.technologies?.[0] || 'Web Platform'}
                      </span>
                      
                      {proyecto.link && (
                        <a 
                          href={proyecto.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3EBD00] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Texto inferior de la Card */}
                    <div className="relative z-10 space-y-2 pb-4">
                      <h3 className=" text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#3EBD00] transition-colors">
                        {proyecto.titulo}
                      </h3>
                      
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
                        {descripcionTexto}
                      </p>

                      {proyecto.link && (
                        <a 
                          href={proyecto.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#3EBD00] pt-2 transition-colors"
                        >
                          <span>{t('view_case', 'View Case Study')}</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                      )}
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}