import { useEffect, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { ArrowRight } from 'lucide-react';
import { Laptop3D } from './Laptop'; // Apunta a './Laptop' ya que están en la misma carpeta

// Creamos un cargador simple para que veas si está cargando el archivo 3D
function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-400">
      Cargando laptop 3D...
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation();

  useEffect(() => {
    const initAnimation = () => {
      if (window.FinisherHeader && document.querySelector('.finisher-header')) {
        new window.FinisherHeader({
          "count": 4,
          "size": { "min": 900, "max": 1200, "pulse": 0 },
          "speed": { "x": { "min": 0.05, "max": 0.15 }, "y": { "min": 0.05, "max": 0.15 } },
          "colors": {
            "background": "#F9F9F9", 
            "particles": [ "#E5E7EB", "#D1FAE5", "#E0F2FE" ] 
          },
          "blending": "multiply",
          "opacity": { "center": 0.4, "edge": 0 },
          "skew": 0, 
          "shapes": [ "c" ] 
        });
      }
    };

    const timeout = setTimeout(() => {
      initAnimation();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (    
    <header className="finisher-header relative w-full min-h-screen flex items-center overflow-hidden bg-[#F9F9F9] py-16 px-6">
      
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Lado Izquierdo: Textos */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-[#262626] leading-tight">
            {t('hero_title', 'Hola, soy')}{' '}
            <span className="text-[#3EBD00] block lg:inline">
              {t('hero_title_2', 'Roy Frey')}
            </span>
          </h1>

          <div className="space-y-3">
            <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-xl">
              {t('hero_p', 'Analista de Sistemas & Desarrollador Fullstack. Especializado en crear soluciones eficientes con React y arquitectura AWS.')}
            </p>
            <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
              {t('hero_lugar', 'Desde Puerto Iguazu, Misiones, Argentina.')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="bg-[#3EBD00] hover:bg-[#2D8700] text-white px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-[#3EBD00]/10 hover:shadow-lg active:scale-95"
            >
              {t('hero_btn_proyectos', 'Ver Proyectos')}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contacto" 
              className="border border-[#DEDEDE] bg-white text-[#262626] hover:bg-gray-50 px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center transition-all shadow-sm active:scale-95"
            >
              {t('hero_btn_contacto', 'Contacto')}
            </a>
          </div>
        </div>

        {/* Lado Derecho: Canvas 3D de la Laptop con Altura Forzada */}
        <div className="lg:col-span-7 h-[450px] w-full relative cursor-grab active:cursor-grabbing">
          <Suspense fallback={<Loader />}>
            <Canvas
              camera={{ position: [0, 0, 4], fov: 45 }} // Alejamos un poco más la cámara por si el modelo es grande
              className="w-full h-full"
              style={{ height: '450px' }} // Forzamos la altura en el estilo inline
            >
              <ambientLight intensity={1} /> {/* Aumentamos la luz general */}
              <directionalLight position={[10, 10, 5]} intensity={1.5} />
              
              <Stage environment="city" intensity={0.5} contactShadow={{ opacity: 0.4, blur: 2 }}>
                {/* 
                  Agregamos una escala de seguridad y la centramos.
                  Si no se ve, prueba cambiando scale={[1.5, 1.5, 1.5]} o similar.
                */}
                <Laptop3D scale={1.2} position={[0, 0, 0]} />
              </Stage>

              <OrbitControls 
                enableZoom={true} // Permitimos zoom temporalmente para que puedas buscar el modelo si está lejos
                maxPolarAngle={Math.PI / 2} 
                minPolarAngle={Math.PI / 3}
              />
            </Canvas>
          </Suspense>
        </div>

      </div>

      <style>{`
        .finisher-header canvas {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          z-index: 1 !important;
          pointer-events: none;
        }
      `}</style>

    </header>
  );
}