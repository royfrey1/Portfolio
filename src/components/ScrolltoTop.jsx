import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  // estado para controlar la visibilidad del botón
  const [isVisible, setIsVisible] = useState(false);

  // cuando bajamos más de 300px, el botón se muestra, sino se oculta
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para realizar el scroll suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Agregamos el event listener para detectar el scroll y limpiamos el listener al desmontar el componente para evitar memory leaks o sobrecarga de memoria
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    // devolviendo el boton con estilos y animaciones, que solo se muestra cuando isVisible es true
    <div className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          bg-cyan-500 hover:bg-cyan-600 text-slate-950 p-3 rounded-full shadow-lg shadow-cyan-500/30
          transition-all duration-300 ease-in-out transform hover:scale-110
        `}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}