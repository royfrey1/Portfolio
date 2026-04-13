// componente para mostrar las habilidades técnicas del desarrollador, con categorías y estilos modernos usando Tailwind CSS

export default function Skills() {
  const skills = [
    { name: "React", category: "Frontend" },
    { name: "JavaScript ES6+", category: "Frontend" },
    { name: "Tailwind CSS", category: "Diseño" },
    { name: "Python", category: "Backend" },
    { name: "SQL", category: "Data" },
    { name: "AWS (EC2/S3)", category: "Cloud" },
  ];

  return (
    <section className="py-20 bg-slate-900 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Stack Técnico</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-cyan-500 transition-colors">
              <p className="text-cyan-400 text-sm font-mono">{skill.category}</p>
              <h3 className="text-white text-lg font-bold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}