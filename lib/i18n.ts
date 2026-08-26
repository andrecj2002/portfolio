export type Locale = "en" | "pt";

export const STORAGE_KEY = "portfolio-locale";
export const DEFAULT_LOCALE: Locale = "pt";

export const UI_TEXT = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    footer: {
      heading: "Let's Connect",
      services: "Services",
      contact: "Contact",
      description: "Always interested in new projects and collaborations.",
      madeWith: "made with ❤️.",
    },
    home: {
      viewWork: "View Work",
      viewMore: "View More Work",
      viewMoreShort: "View more",
      greeting: "Hi, I'm {name} — I design & code modern web experiences.",
      summary: "{subtitle}",
      sectionTitle: "What I Use",
      sectionDescription: "Technologies I use to build my projects",
      categories: {
        backendAndData: "Backend & Data",
        designAndDelivery: "Design & Delivery",
        development: "Development",
      },
      workTitle: "Featured Projects",
      workDescription:
        "A selection of my recent projects showcasing UI/UX design and development expertise",
    },
    about: {
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      texts: ["Creative", "Passionate", "Developer"],
      categories: {
        backendAndData: "Backend & Data",
        designAndDelivery: "Design & Delivery",
        development: "Development",
      },
    },
    projects: {
      title: "Projects",
      tabs: "Project Categories",
      detail: "View Details",
      all: "All",
      texts: ["My Work", "Creations", "Experiments", "Innovations"],
      backToProjects: "Back to Projects",
      technologies: "Technologies",
      github: "GitHub",
      live: "Live Site",
      promoPage: "Promo Page",
      promoVideo: "Promo Video",
      close: "Close",
      categoriesAria: "Project categories",
    },
    contact: {
      heading: "Contact Me",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      reset: "Reset Form",
      placeholders: {
        name: "Your full name",
        email: "your.email@example.com",
        subject: "Project type or inquiry topic",
        message:
          "Tell me about your project, timeline, and any specific requirements...",
      },
      successTitle: "Message Sent Successfully",
      successDescription: "Thank you for your message! I'll get back to you soon.",
      errorTitle: "Failed to Send Message",
      errorDescription:
        "Email configuration is incomplete. Please check environment variables.",
      generalError: "Failed to send message. Please try again later.",
      successHeading: "Message Sent Successfully!",
      successParagraph: "Thank you for reaching out. I'll get back to you as soon as possible.",
      sendAnother: "Send Another Message",
      ariaSendAnother: "Send another message",
      mapError: "Unable to load map",
      mapTitle: "Location Map",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contacto",
      menuOpen: "Abrir menu",
      menuClose: "Fechar menu",
    },
    footer: {
      heading: "Vamos Conversar",
      services: "Serviços",
      contact: "Contacto",
      description: "Sempre interessado em novos projetos e colaborações.",
      madeWith: "feito com ❤️.",
    },
    home: {
      viewWork: "Projetos",
      viewMore: "Ver Mais Projetos",
      viewMoreShort: "Ver mais",
      greeting: "Olá, sou o {name} — crio e desenho experiências web modernas.",
      summary: "{subtitle}",
      sectionTitle: "O que uso",
      sectionDescription: "Tecnologias que utilizo para criar os meus projetos",
      categories: {
        backendAndData: "Backend & Dados",
        designAndDelivery: "Design & Entrega",
        development: "Desenvolvimento",
      },
      workTitle: "Projetos em Destaque",
      workDescription:
        "Uma seleção dos meus projetos recentes que mostram a minha experiência em design e desenvolvimento UI/UX",
    },
    about: {
      experience: "Experiência",
      education: "Educação",
      skills: "Competências",
      texts: ["Criativo", "Apaixonado", "Desenvolvedor"],
      categories: {
        backendAndData: "Backend & Dados",
        designAndDelivery: "Design & Entrega",
        development: "Desenvolvimento",
      },
    },
    projects: {
      title: "Projetos",
      tabs: "Categorias de Projetos",
      detail: "Ver Detalhes",
      all: "Todos",
      texts: ["O Meu Trabalho", "Criações", "Experiências", "Inovações"],
      backToProjects: "Voltar para Projetos",
      technologies: "Tecnologias",
      github: "GitHub",
      live: "Site em Tempo Real",
      promoPage: "Página Promocional",
      promoVideo: "Vídeo Promocional",
      close: "Fechar",
      categoriesAria: "Categorias de projetos",
    },
    contact: {
      heading: "Contacta-me",
      name: "Nome",
      email: "Email",
      subject: "Assunto",
      message: "Mensagem",
      send: "Enviar Mensagem",
      sending: "A enviar...",
      reset: "Limpar Formulário",
      placeholders: {
        name: "O teu nome completo",
        email: "o.teu.email@exemplo.com",
        subject: "Tipo de projeto ou assunto",
        message:
          "Conta-me sobre o teu projeto, calendário e requisitos específicos...",
      },
      successTitle: "Mensagem Enviada com Sucesso",
      successDescription: "Obrigado pela mensagem! Respondo em breve.",
      errorTitle: "Falha ao Enviar Mensagem",
      errorDescription:
        "A configuração do email está incompleta. Verifica as variáveis de ambiente.",
      generalError: "Falha ao enviar mensagem. Tenta novamente mais tarde.",
      successHeading: "Mensagem Enviada com Sucesso!",
      successParagraph: "Obrigado por entrares em contacto. Respondo assim que possível.",
      sendAnother: "Enviar Outra Mensagem",
      ariaSendAnother: "Enviar outra mensagem",
      mapError: "Não foi possível carregar o mapa",
      mapTitle: "Mapa de Localização",
    },
  },
} as const;

export const getLocale = (): Locale => {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);

  return saved === "en" || saved === "pt" ? saved : DEFAULT_LOCALE;
};

export const setLocale = (locale: Locale) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale === "pt" ? "pt-PT" : "en-US";
  }
};
