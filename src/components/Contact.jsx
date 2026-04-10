import React from 'react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-slate-900 px-4 scroll-mt-18">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Hablemos</h2>
          <p className="text-slate-400">¿Tienes un proyecto en mente o buscas sumar a alguien a tu equipo? ¡Escríbeme!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto rápida */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-cyan-400">Datos de contacto</h3>
            <p className="text-slate-300">Ubicación: Puerto Iguazu, Misiones, Argentina (Disponible para remoto)</p>
            <div className="flex gap-4">
                <a 
                    href="https://linkedin.com/in/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-all group"
                >
                    <i className="fab fa-linkedin text-3xl"></i>
                    <span className="text-sm font-medium">LinkedIn</span>
                </a>

                <a 
                    href="https://github.com/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-all group"
                >
                    <i className="fab fa-github text-3xl"></i>
                    <span className="text-sm font-medium">GitHub</span>
                </a>

                <a 
                    href="https://instagram.com/roy.frey" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-all group"
                >
                    <i className="fab fa-instagram text-3xl"></i>
                    <span className="text-sm font-medium">Instagram</span>
                </a>
            </div>
          </div>

          {/* Formulario */}
          <form action="https://formspree.io/f/xgopjelq" 
                method="POST" 
                className="space-y-4"
            >
            <div>
                <label className="block text-slate-300 mb-2 text-sm">Nombre</label>
                <input 
                    name="name" // IMPORTANTE: Agregamos el atributo name
                    type="text" 
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-all"
                    placeholder="Tu nombre"
                />
            </div>
            <div>
                <label className="block text-slate-300 mb-2 text-sm">Email</label>
                <input 
                    name="email" // IMPORTANTE: Agregamos el atributo name
                    type="email" 
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-all"
                    placeholder="correo@ejemplo.com"
                />
            </div>
            <div>
                <label className="block text-slate-300 mb-2 text-sm">Mensaje</label>
                <textarea 
                    name="message" // IMPORTANTE: Agregamos el atributo name
                    rows="4"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-all"
                    placeholder="¿En qué puedo ayudarte?"
                    ></textarea>
            </div>
            <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-cyan-500/20 transition-all">
                    Enviar Mensaje
            </button>
            </form>
        </div>
        </div>
    </section>
                );
}