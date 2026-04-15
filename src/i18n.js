import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: {
          title: "Analista de Sistemas & Administrador Contable",
          ia_section: "Experiencia con IA",
          exp_hybrid: "Trayectoria Híbrida"
        }
      },
      en: {
        translation: {
          title: "Systems Analyst & Accounting Administrator",
          ia_section: "AI Experience",
          exp_hybrid: "Hybrid Career"
        }
      },
      pt: {
        translation: {
          title: "Analista de Sistemas e Administrador Contábil",
          ia_section: "Experiência com IA",
          exp_hybrid: "Trajetória Híbrida"
        }
      }
    },
    fallbackLng: "es",
    interpolation: { escapeValue: false }
  });

export default i18n;