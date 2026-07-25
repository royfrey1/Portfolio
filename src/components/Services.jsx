import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Zap, Wrench, Cpu, Palette, Sparkles } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();

  const servicesList = [
    {
      icon: Zap,
      title: t('service_templates_title', 'Plantillas React / Next.js'),
      desc: t('service_templates_desc', 'Sitios web nativos optimizados listos para usar, con la máxima velocidad de carga y rendimiento SEO.')
    },
    {
      icon: Wrench,
      title: t('service_fullstack_title', 'Desarrollo Full-Stack a Medida'),
      desc: t('service_fullstack_desc', 'Aplicaciones complejas y plataformas robustas diseñadas de extremo a extremo según tus necesidades comerciales.')
    },
    {
      icon: Cpu,
      title: t('service_consulting_title', 'Consultoría de Sistemas y Datos'),
      desc: t('service_consulting_desc', 'Análisis técnico y diseño de arquitectura cloud (AWS) para optimizar la seguridad y procesos de tu negocio.')
    },
    {
      icon: Palette,
      title: t('service_uiux_title', 'UI/UX Diseño de Interacción'),
      desc: t('service_uiux_desc', 'Estructuración visual de interfaces modernas y animaciones fluidas pensadas estratégicamente para retener usuarios.')
    }
  ];

  return (
    <section id="servicios" className="relative pt-24 pb-36 bg-white scroll-mt-16 overflow-hidden">
      
      {/* Malla suave de fondo en tonos grises para darle textura al blanco */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-70 pointer-events-none" />

      {/* Glow verde de fondo muy tenue */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#3EBD00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3EBD00]/10 border border-[#3EBD00]/20 text-[#3EBD00] text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#3EBD00]" />
              {t('services_tag', 'Lo que hacemos')}
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#262626] tracking-tight mb-4"
          >
            {t('services_section_title', 'Nuestros Servicios')}
          </motion.h2>

          <div className="h-1 w-20 bg-[#3EBD00] rounded-full"></div>
        </div>

        {/* Tarjetas de servicios en estilo Clean Glass / White */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-md border border-slate-200/80 p-6 rounded-2xl hover:border-[#3EBD00] hover:shadow-xl hover:shadow-[#3EBD00]/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Icono con fondo blanco y borde verde en hover */}
                  <div className="mb-6 inline-flex p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#3EBD00] group-hover:bg-[#3EBD00] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-xl font-bold text-[#262626] mb-3 tracking-tight group-hover:text-[#3EBD00] transition-colors duration-200">
                    {service.title}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                {/* Footer de la Card */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#3EBD00]">
                  <span>Solución Digital</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">Selva Code</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Onda SVG Fina en Verde Brand (#3EBD00) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg 
          className="relative block w-full h-[40px] sm:h-[55px] lg:h-[70px]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C300,190 600,80 1200,60 L1200,120 L0,120 Z" 
            fill="#3EBD00"
          ></path>
        </svg>
      </div>

    </section>
  );
}