import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Mail, Send, Sparkles } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const canvasRef = useRef(null);

  // Animación suave de partículas gigantes verdes en el canvas sobre fondo claro
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const config = {
      count: 5,
      minSize: 900,
      maxSize: 1200,
      minSpeed: 0.1,
      maxSpeed: 0.25,
      background: "#f8fafc", // Fondo slate-50 bien claro
      particles: ["rgba(62, 189, 0, 0.08)", "rgba(62, 189, 0, 0.04)", "rgba(16, 185, 129, 0.06)"]
    };

    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    for (let i = 0; i < config.count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (config.maxSize - config.minSize) + config.minSize,
        vx: (Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed) * (Math.random() > 0.5 ? 1 : -1),
        vy: (Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed) * (Math.random() > 0.5 ? 1 : -1),
        color: config.particles[i % config.particles.length]
      });
    }

    const animate = () => {
      ctx.fillStyle = config.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.save();
        
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size / 2);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x - p.size / 2 > canvas.width) p.x = -p.size / 2;
        if (p.x + p.size / 2 < 0) p.x = canvas.width + p.size / 2;
        if (p.y - p.size / 2 > canvas.height) p.y = -p.size / 2;
        if (p.y + p.size / 2 < 0) p.y = canvas.height + p.size / 2;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="contacto" className="relative py-18 bg-slate-50 overflow-hidden scroll-mt-16">
      
      {/* Canvas animado de fondo suave */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Encabezado minimalista */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#3EBD00]/10 border border-[#3EBD00]/20 text-[#3EBD00] text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#3EBD00]" />
              {t('contact_tag', 'Hablemos')}
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#262626] tracking-tight mb-3"
          >
            {t('contact_title', '¿Tienes un proyecto en mente?')}
          </motion.h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl">
            {t('contact_desc', '¿Buscas sumar a alguien a tu equipo o impulsar una solución digital? ¡Escríbeme y lo hacemos realidad!')}
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* LADO IZQUIERDO: Información y Redes Sociales */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 p-8 rounded-md shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#262626] tracking-tight">
                {t('contact_info_title', 'Información de contacto')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 text-slate-600 text-sm">
                  <div className="p-2 rounded-lg bg-[#3EBD00]/10 text-[#3EBD00] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#262626] block">Ubicación</span>
                    <span>Puerto Iguazú, Misiones, Argentina (Disponible Remoto)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-slate-600 text-sm">
                  <div className="p-2 rounded-lg bg-[#3EBD00]/10 text-[#3EBD00] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#262626] block">Atención Directa</span>
                    <span>Respuesta rápida en menos de 24 hs</span>
                  </div>
                </div>
              </div>

              <hr className="border-slate-100" />

              {/* Botones de Redes Sociales con SVGs Inline */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Redes Profesionales</span>
                
                <div className="flex flex-wrap gap-2">
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/roy-walter-martinez-frey-bbaa461b8/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-slate-100 hover:bg-[#3EBD00] text-slate-700 hover:text-white transition-all text-xs font-semibold shadow-sm group"
                  >
                    <svg className="w-4 h-4 fill-current text-[#3EBD00] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>

                  {/* GitHub */}
                  <a 
                    href="https://github.com/royfrey1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-slate-100 hover:bg-[#3EBD00] text-slate-700 hover:text-white transition-all text-xs font-semibold shadow-sm group"
                  >
                    <svg className="w-4 h-4 fill-current text-[#3EBD00] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://instagram.com/roy.frey" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-slate-100 hover:bg-[#3EBD00] text-slate-700 hover:text-white transition-all text-xs font-semibold shadow-sm group"
                  >
                    <svg className="w-4 h-4 fill-current text-[#3EBD00] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* LADO DERECHO: Formulario Clean Minimalista */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <form 
              action="https://formspree.io/f/xgopjelq" 
              method="POST" 
              className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-8 rounded-md shadow-sm space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {t('contact_name', 'Nombre')}
                  </label>
                  <input 
                    name="name" 
                    type="text" 
                    required
                    pattern="^[A-Za-zÁ-ž\s]+$"
                    title='Por favor, ingresa solo letras'
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm text-[#262626] focus:bg-white focus:outline-none focus:border-[#3EBD00] focus:ring-2 focus:ring-[#3EBD00]/20 transition-all placeholder:text-slate-400 font-normal"
                    placeholder={t('contact_name_placeholder', 'Tu nombre completo')}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {t('contact_email', 'Email')}
                  </label>
                  <input 
                    name="email" 
                    type="email" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm text-[#262626] focus:bg-white focus:outline-none focus:border-[#3EBD00] focus:ring-2 focus:ring-[#3EBD00]/20 transition-all placeholder:text-slate-400 font-normal"
                    placeholder={t('contact_email_placeholder', 'correo@ejemplo.com')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {t('contact_subject', 'Motivo del contacto')}
                </label>
                <select 
                  name="subject" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm text-[#262626] focus:bg-white focus:outline-none focus:border-[#3EBD00] focus:ring-2 focus:ring-[#3EBD00]/20 transition-all outline-none font-normal"
                >
                  <option value="Trabajo">{t('contact_opt_work', 'Propuesta Laboral')}</option>
                  <option value="Consulta">{t('contact_opt_query', 'Consulta General')}</option>
                  <option value="Error">{t('contact_opt_bug', 'Reportar un error en la página')}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {t('contact_message', 'Mensaje')}
                </label>
                <textarea 
                  name="message" 
                  rows="4"
                  required
                  minLength="5"
                  title='El mensaje debe tener al menos 5 caracteres'
                  className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm text-[#262626] focus:bg-white focus:outline-none focus:border-[#3EBD00] focus:ring-2 focus:ring-[#3EBD00]/20 transition-all placeholder:text-slate-400 resize-none font-normal"
                  placeholder={t('contact_message_placeholder', 'Escribe tu mensaje aquí...')}
                ></textarea>
              </div>

              {/* Spam Trap para Formspree */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <button 
                type="submit" 
                className="w-full bg-[#3EBD00] hover:bg-[#339e00] text-white px-6 py-3.5 font-bold rounded-xl shadow-lg shadow-[#3EBD00]/20 hover:shadow-xl hover:shadow-[#3EBD00]/30 transition-all flex items-center justify-center gap-2 group active:scale-[0.99]"
              >
                <span>{t('contact_btn', 'Enviar Mensaje')}</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          </motion.div>

        </div>

      </div>

    </section>
  );
}