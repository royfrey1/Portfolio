import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; 

export default function Projects() {
  // definir estado - array vacío para guardar los proyectos que traemos de Supabase
  const [misProyectos, setMisProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // buscando los datos al cargar la pagina 
  useEffect(() => {
    const obtenerProyectos = async () => {
      try {
        // consulta a Supabase para traer los proyectos
        const { data, error } = await supabase
          .from('proyectos') 
          .select('*')
          .order('id', { ascending: true }); 
        // console.log para verificar que traemos los datos correctamente, sino se muestra el error
          if (data) {
          console.log("Datos recibidos de Supabase:", data); 
          setMisProyectos(data);
          }

        if (error) throw error;
          // guardamos los datos en el estado para luego mostrarlos en la UI
        setMisProyectos(data);
      } catch (error) {
        console.error("Error al obtener datos:", error.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerProyectos();
  }, []);

  // msj mientras se cargan los proyectos 
  if (cargando) {
    return (
      <section className="py-20 bg-slate-950 text-center">
        <p className="text-cyan-400 animate-pulse">Cargando proyectos desde la base de datos...</p>
      </section>
    );
  }

  return (
    // Sección de Proyectos
    <section id="projects" className="py-20 bg-slate-950 px-4 scroll-mt-18 border-t border-slate-800">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Mis <span className="text-cyan-400 animate-wave">Proyectos</span>
      </h2> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {misProyectos.map((proyectos) => (
          // Card para cada proyecto, con imagen, título, descripción y link a detalles
          <div key={proyectos.id} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all group">
            <div className="overflow-hidden">
               <img 
                src={proyectos.image_url} 
                alt={proyectos.titulo}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{proyectos.titulo}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {proyectos.descripcion}
              </p>
              <a 
                href={proyectos.link} 
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