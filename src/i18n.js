import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: {
          nav_inicio: "Inicio",
          nav_proyectos: "Proyectos",
          nav_habilidades: "Habilidades",
          nav_contacto: "Contacto",
          download_cv: "Descargar CV",
          title: "Analista de Sistemas & Administrador Contable" // [cite: 2]
        }
      },
      en: {
        translation: {
          nav_inicio: "Home",
          nav_proyectos: "Projects",
          nav_habilidades: "Skills",
          nav_contacto: "Contact",
          download_cv: "Download CV",
          title: "Systems Analyst & Accounting Admin" // [cite: 2]
        }
      },
      pt: {
        translation: {
          nav_inicio: "Início",
          nav_proyectos: "Projetos",
          nav_habilidades: "Habilidades",
          nav_contacto: "Contato",
          download_cv: "Baixar CV",
          title: "Analista de Sistemas e Administrador Contábil" // [cite: 2]
        }
      }
    },
    lng: "es", // Idioma inicial
    fallbackLng: "es",
    interpolation: { escapeValue: false }
  });

export default i18n;