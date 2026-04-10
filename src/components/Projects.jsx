import React from 'react';

// . Los datos van arriba para que la función los encuentre
const misProyectos = [
  {
    id: 1,
    titulo: "Adivina el Número",
    descripcion: "Pagina web interactiva para adivinar números.",
    imagen: "./img/adivina.png",
    link: "https://royfrey1.github.io/adivinaelNumero/Juego1.html"
  },
  {
    id: 2,
    titulo: "Pagina La Aripuka",
    descripcion: "Pagina web para atractivo turístico La Aripuka.",
    imagen: "./img/aripuka.png",
    link: "https://royfrey1.github.io/La-aripuka/dise%C3%B1_negocio/index.html"
  },
  {
    id: 3,
    titulo: "Portfolio Personal",
    descripcion: "Este sitio que estás viendo ahora mismo.",
    imagen: "./img/portfolio.png",
    link: ""
  }
];

// . La función envuelve TODO el contenido
export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950 px-4 scroll-mt-18 border-t border-slate-800">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Mis <span className="text-cyan-400">Proyectos</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {misProyectos.map((proyecto) => (
          <div key={proyecto.id} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all group">
            <div className="overflow-hidden">
               <img 
                src={proyecto.imagen} 
                alt={proyecto.titulo} 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{proyecto.titulo}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {proyecto.descripcion}
              </p>
              <a 
                href={proyecto.link} 
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
              >
                Ver más detalles <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}