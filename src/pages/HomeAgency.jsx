import React from 'react';
import NavBar from '../components/NavBar';
import NewHeroAgency from '../components/NewHeroAgency'; // Tu nuevo hero comercial
import Services from '../components/Services';
import OurProcess from '../components/Process';         // Las 4 columnas basadas en la referencia
import Projects from '../components/Projects';         // Tu grid conectado a Supabase adaptado
import Contact from '../components/Contact';           // Tu formulario con el canvas nativo
import Footer from '../components/Footer';

export default function HomeAgency() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100">
      <NavBar isAgency={true} />
      <main>
        <NewHeroAgency />
        <OurProcess />
        <Services />
        <Projects /> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
}