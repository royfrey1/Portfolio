import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: {
          // Navbar            
            nav_inicio: "Inicio",
            nav_proyectos: "Proyectos",
            nav_habilidades: "Habilidades",
            nav_contacto: "Contacto",
            download_cv: "Descargar CV",
// Hero Section
            hero_title: "Hola, soy ",
            hero_title_2: "Roy Frey",
            hero_p: "Analista de Sistemas & Desarrollador Fullstack. Especializado en crear soluciones eficientes con React y arquitectura AWS.",
            hero_lugar: "Puerto iguazu, Misiones, Argentina.",
            hero_btn_proyectos: "Ver Proyectos",
            hero_btn_contacto: "Contacto",
// Stack Section
            stack_title: "Stack Tecnico",
            stack_desing_category: "Diseño",
            stack_frontend_category: "Frontend",
            stack_backend_category: "Backend",
            stack_data_category: "Data",
// Projects Section
            project_title: "Mis Proyectos",
            project_desc_1: "Proyecto de página Web responsiva para un atractivo turístico, La Aripuca.",
            project_desc_2: "Juego de adivinanza de números usando React, con lógica de juego e interface interactiva.",
            project_desc_3: "Diseño de esta página web usando Tailwind CSS, con un diseño moderno y responsivo.",
            project_details: "Ver más detalles",
// Experiencia Section
            exp_contable_title_1: "Experiencia Híbrida",
            exp_desc: "Combinando el rigor del análisis contable con la empatía de la atención al público y el poder del desarrollo de sistemas.",
            exp_contable_admin: "Administración y Gestión",
            exp_contable_admin2: "Estudio contable",
            exp_contable_atencion: "Atención al Cliente",
            exp_contable_atencion2: "Minimercado Miguelo",
            exp_contable_desc_admin: "Gestión administrativa integral utilizando sistemas de alta demanda como Holistor y Alma.net. Gestión hotelera avanzada (Booking.com, RoomCloud, Expedia Group) y manejo del sistema TOTVS. Especialista en análisis de informes financieros y soporte técnico interno de sistemas.",
            exp_contable_desc_atencion: "Experiencia directa en atención al público y manejo de valores. Enfoque en la resolución de consultas críticas y fidelización, clave para la relevancia de requisitos como Analista.",
// IA Section
            ia_title: "Experiencia con IA",
            ia_expertise: "Experiencia en inteligencia artificial aplicada",
            ia_expertise_desc: "Uso integral de IA (Gemini, ChatGPT, Claude) en tareas contables.",
            ia_business: "IA Aplicada a Negocios",
            ia_business_desc: "Integrando herramientas de IA Generativa para acelerar el desarrollo de software.",
            ia_logros_1: "Abordaje estratégico para resolver problemas técnicos y arquitectónicos con escalabilidad.",
            ia_logros_2: "Ingeniería de prompts avanzada para automatizar código en Python y React, realizar depuración profunda de arquitecturas en la nube como AWS y optimizar la lógica de negocios complejos.",
// Contact Section 
            contact_title: "Hablamos?",
            contact_desc: "¿Tienes un proyecto en mente o buscas sumar a alguien a tu equipo? ¡Escríbeme!",
            contact_name: "Nombre",
            contact_name_placeholder: "Tu nombre completo",
            contact_email: "Email",
            contact_email_placeholder: "Tu email",
            contact_message: "Mensaje",
            contact_message_placeholder: "Escribe tu mensaje aquí",
            contact_btn: "Enviar Mensaje",
            contact_site: "Datos de contacto",
            contact_site_desc: "Ubicación: Puerto Iguazu, Misiones, Argentina.(Disponible para trabajo remoto)",
// Footer Section
            footer_description: "Analista de Sistemas, Administrador Contable & Cloud Enthusiast",
            footer_desing: "Diseñado y desarrollado por Roy Frey",
            footer_remoto: "Remoto para el mundo",
        }
      },
      en: {
        translation: {
// Navbar            
            nav_inicio: "Home",
            nav_proyectos: "Projects",
            nav_habilidades: "Skills",
            nav_contacto: "Contact",
            download_cv: "Download CV",
// Hero Section
            hero_title: "Hi, I'm Roy Frey",
            hero_p: "Systems Analyst & Fullstack Developer. Specialized in creating efficient solutions with React and AWS architecture.",
            hero_lugar: "Puerto iguazu, Misiones, Argentina.",
            hero_btn_proyectos: "View Projects",
            hero_btn_contacto: "Contact",
// Stack Section
            stack_title: "Technical Stack",
            stack_desing_category: "Design",
            stack_frontend_category: "Frontend",
            stack_backend_category: "Backend",
            stack_data_category: "Data",
// Projects Section
            project_title: "My Projects",
            project_desc_1: "Responsive website project for a tourist attraction, La Aripuca.",
            project_desc_2: "Number guessing game using React, with game logic and interactive interface.",
            project_desc_3: "Design of this website using Tailwind CSS, with a modern and responsive design.",
            project_details: "View more details",
// Experiencia Section
            exp_contable_title_1: "Hybrid path",
            exp_desc: "Combining the rigor of accounting analysis with the empathy of customer service and the power of systems development.",
            exp_contable_admin: "Administration and Management",
            exp_contable_admin2: "Accounting Firm",
            exp_contable_atencion: "Customer Service",
            exp_contable_atencion2: "Minimarket Miguelo",
            exp_contable_desc_admin: "Comprehensive administrative management using high-demand systems such as Holistor and Alma.net. Advanced hotel management (Booking.com, RoomCloud, Expedia Group) and TOTVS system management. Specialist in financial report analysis and internal systems technical support.",
            exp_contable_desc_atencion: "Direct experience in customer service and handling valuables. Focus on resolving critical inquiries and building customer loyalty, key to gathering requirements as an Analyst.",
// IA Section
            ia_title: "Experience with IA",
            ia_expertise: "Specialist in applied artificial intelligence",
            ia_expertise_desc: "Comprehensive use of AI (Gemini, ChatGPT, Claude) in accounting tasks.",
            ia_business: "IA Applied to Business",
            ia_business_desc: "Integrating Generative AI tools to accelerate software development.",
            ia_logros_1: "Strategic approach to solving technical and architectural problems with scalability in mind.",
            ia_logros_2: "Advanced prompt engineering to automate code in Python and React, perform deep debugging of cloud architectures like AWS, and optimize complex business logic.",
// Contact Section
            contact_title: "Let's talk?",
            contact_desc: "Do you have a project in mind or are you looking for someone for your team? Write to me!",
            contact_name: "Name",
            contact_name_placeholder: "Your full name",
            contact_email: "Email",
            contact_email_placeholder: "Your best email",
            contact_message: "Message",
            contact_message_placeholder: "Write your message here",
            contact_btn: "Send Message",
            contact_site: "Contact Information: ",
            contact_site_desc: "Location: Puerto Iguazu, Misiones, Argentina.(Available for remote work)",
// Footer Section
            footer_description: "Systems Analyst, Accounting Administrator and Cloud Enthusiast",
            footer_desing: "Designed and developed by Roy Frey",
            footer_remoto: "Remote for the entire world", 
        }
      },
      pt: {
        translation: {
// Navbar            
            nav_inicio: "Início",
            nav_proyectos: "Projetos",
            nav_habilidades: "Habilidades",
            nav_contacto: "Contato",
            download_cv: "Baixar CV",
// Hero Section
            hero_title: "Olá, sou Roy Frey",
            hero_p: "Analista de Sistemas & Desenvolvedor Fullstack. Especializado em criar soluções eficientes com React e arquitetura AWS.",
            hero_lugar: "Puerto iguazu, Misiones, Argentina.",
            hero_btn_proyectos: "Ver Projetos",
            hero_btn_contacto: "Contato",
// Stack Section
            stack_title: "Stack Tecnico",
            stack_desing_category: "Desenho",
            stack_frontend_category: "Frontend",
            stack_backend_category: "Backend",
            stack_data_category: "Data",
// Projects Section
            project_title: "Meus Projetos",
            project_desc_1: "Projeto de pagina Web responsiva para um atrativo turistico, La Aripuca.",
            project_desc_2: "Jogo de adivinhação de números usando React, com lógica de jogo e interface interativa.",
            project_desc_3: "Disenho de essa pagina web usando Tailwind CSS, con un diseño moderno y responsivo.",
            project_details: "Ver mas detalhes",
// Experiencia Section
            exp_contable_title_1: "Administração e Gestão",
            exp_desc: "Combinando o rigor da análise contabilística com a empatia da atenção ao público e a potência do desenvolvimento de sistemas.",
            exp_contable_admin: "Administração e Gestão",
            exp_contable_admin2: "Estúdio contável",
            exp_contable_atencion: "Atencão ao Cliente",
            exp_contable_atencion2: "Minimercado Miguelo",
            exp_contable_desc_admin: "Gestão administrativa integral utilizando sistemas de alta demanda como Holistor e Alma.net. Gestão hoteleira avançada (Booking, RoomCloud, Expedia Group) e manejo do sistema TOTVS. Especialista em análise de relatórios financeiros e suporte técnico interno de sistemas.",
            exp_contable_desc_atencion: "Experiência direta em atenção ao público e manejo de valores. Foco na resolução de consultas críticas e fidelidade,chave para a relevância de requisitos como Analista.",
// IA Section
            ia_title: "Experiência com IA",
            ia_expertise: "Experiência em inteligência artificial aplicada",
            ia_expertise_desc: "Uso integral de IA (Gemini, ChatGPT, Claude) em tarefas contábeis.",
            ia_business: "IA Aplicada a Negócios",
            ia_business_desc: "Integrando ferramentas de IA Generativa para acelerar o desenvolvimento de software.",
            ia_logros_1: "Abordagem estratégica para resolver problemas técnicos e arquitetônicos com escalabilidade.",
            ia_logros_2: "Engenharia de prompts avançada para automatizar código em Python e React, realizar depuração profunda de arquiteturas na nuvem como AWS e otimizar a lógica de negócios complexos.",
// Contact Section
            contact_title: "Vamos conversar?",
            contact_desc: "Tem algum projeto em mente ou está procurando alguém para sua equipe? Escreva para mim!",
            contact_name: "Nome",
            contact_name_placeholder: "Seu nome completo",
            contact_email: "Email",
            contact_email_placeholder: "Seu melhor email",
            contact_message: "Mensagem",
            contact_message_placeholder: "Escreva sua mensagem aqui",
            contact_btn: "Enviar Mensagem",
            contact_site: "Datos para contato: ",
            contact_site_desc: "Ubicación: Puerto Iguazu, Misiones, Argentina.(Disponivle para trabalho remoto)",
// Footer Section
            footer_description: "Analista de Sistemas, Administrador de Contabilidade e Entusiasta da Nuvem",
            footer_desing: "Disenhado e desenvolvido por Roy Frey",
            footer_remoto: "Remoto para o mundo inteiro",     
        }
      }
    },
    lng: "es", // Idioma inicial
    fallbackLng: "es",
    interpolation: { escapeValue: false }
  });

export default i18n;