import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero'; // El hero actual tuyo
import Experiencia from '../components/Experiencia';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Trayectoria() {
  return (
    <>
      <NavBar isAgency={false} /> {/* Le pasamos un flag por si quieres cambiar links */}
      <Hero />
      <Experiencia />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}