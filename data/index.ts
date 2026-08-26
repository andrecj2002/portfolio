import type { Locale } from "@/lib/i18n";

const DATA_EN = {
  home: {
    hero: {
      name: "André Jorge",
      title: "Full Stack Developer & UI/UX Designer",
      subtitle:
        "Full Stack Developer & UI/UX Designer: Hi! I'm a Full Stack Developer.",
    },
  },
  about: {
    experience: [
      {
        title:
          "Internship — Design Factory at PCI – Parque de Ciência e Inovação de Aveiro",
        date: "Oct 2025 - May 2026",
        icon: "mdi:briefcase-outline",
        description:
          "Worked within a strategic unit of the park focused on developing projects and solutions for start-ups and incubated companies, conducting UI/UX research and translating findings into practical design and development decisions while designing and developing web applications for the incubator with a user-centred approach.",
      },
    ],
    education: [
      {
        title: "Master's in Communication and Web Technologies",
        date: "Sep 2024 - Jul 2026",
        icon: "mdi:school",
        description:
          "Project-based cycle of studies working alongside IT companies to develop web application solutions using SCRUM methodologies, with UI/UX research integrated into functional, user-centred web applications and hands-on experience with relational databases and React Native.",
      },
      {
        title: "Bachelor's in Multimedia and Communication Technologies",
        date: "2021 - 2024",
        icon: "mdi:school-outline",
        description:
          "During this degree I was able to develop competences in UI/UX Research, Web Development languages (HTML5, CSS, PHP, MySQL, JavaScript – React), some camera and photography work, and web services and data.",
      },
    ],
    profile: {
      name: "André Jorge",
      title: "Full Stack Developer",
      image: "/images/foto_perfil.jpg",
      description: [
        "I'm André Jorge, a Full-Stack Developer with a strong front-end focus, currently pursuing a Master's degree in Communication and Web Technologies at the University of Aveiro.",
        "I build production-ready web and mobile applications with JavaScript ecosystems including React, Vue.js, Nuxt.js, Next.js, Node.js, and React Native with Expo.",
        "My work also includes REST APIs, API integration, relational databases, and user-centred UI/UX development using Agile and SCRUM methodologies.",
      ],
    },
    technologies: {
      development: {
        description:
          "Web technologies and frameworks I use in application development.",
        tools: [
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS", icon: "logos:css-3" },
          { name: "JavaScript", icon: "logos:javascript" },
          { name: "React.js", icon: "logos:react" },
          { name: "Vue.js", icon: "logos:vue" },
          { name: "Nuxt.js", icon: "logos:nuxt-icon" },
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "React Native (Expo)", icon: "logos:react" },
          { name: "PHP", icon: "logos:php" },
          { name: "WordPress", icon: "logos:wordpress-icon" },
        ],
      },
      backendAndData: {
        description:
          "Backend technologies for APIs, integrations, and relational data.",
        tools: [
          { name: "REST", icon: "lucide:route" },
          { name: "API Design", icon: "lucide:waypoints" },
          { name: "API Integration", icon: "lucide:plug-zap" },
          { name: "MySQL", icon: "logos:mysql-icon" },
          { name: "PostgreSQL", icon: "logos:postgresql" },
          { name: "Postman", icon: "simple-icons:postman" },
        ],
      },
      designAndDelivery: {
        description:
          "Tools I use for interface design, media production, and delivery.",
        tools: [
          { name: "Figma", icon: "logos:figma" },
          { name: "Vegas", icon: "simple-icons:vegas" },
          { name: "DaVinci Resolve", icon: "lucide:film" },
          { name: "GitHub CI/CD", icon: "simple-icons:github" },
        ],
      },
    },
  },
  projects: {
    work: [
      {
        id: 1,
        title: "CosmoZone",
        description:
          "A program that allows you to manage, add and edit events as well as interaction from a comments tab. Developed under Context Based Learning (CBL) at Universidade de Aveiro in collaboration with Planetário do Porto. Usability tests were conducted with real users to verify and improve the UI experience.",
        image: "/images/cosmozone_cover.png",
        gallery: [
          "/images/cosmozone_1.png",
          "/images/cosmozone_2.png",
          "/images/cosmozone_aa.png",
          "/images/cosmozone_cover.png",
        ],
        category: "Web Development",
        details:
          "CosmoZone is a comprehensive event management system developed to help 'Centros de Ciência Viva' (Live Science Centers) in Portugal organize events and understand customer preferences. The platform was developed under Context Based Learning (CBL) at Universidade de Aveiro in collaboration with Planetário do Porto. The platform includes event management capabilities, user interaction through comments, and an administrative area with statistical data regarding event preferences and user locations. Usability tests were conducted with real users to verify and improve the UI experience. Built with JavaScript, HTML, PHP, and styled with Bootstrap.",
        github: "https://github.com",
        live: "https://example.com",
        tech: [
          { name: "JavaScript", icon: "logos:javascript" },
          { name: "HTML5", icon: "logos:html-5" },
          { name: "PHP", icon: "logos:php" },
          { name: "Bootstrap", icon: "logos:bootstrap" },
        ],
      },
      {
        id: 4,
        title: "BetLearn",
        description:
          "A sandbox app that teaches users how to bet before they go to an actual existing betting sports house. Developed under Context Based Learning (CBL) at Universidade de Aveiro in collaboration with Blip. Usability tests were conducted with real users to verify and improve the UI experience.",
        image: "/images/betlearn_1.png",
        gallery: [
          "/images/betlearn_1.png",
          "/images/betlearn_2.png",
          "/images/betlearn_3.png",
          "/images/betlearn_4.png",
          "/images/betlearn_5.png",
        ],
        architectureSection: {
          title: "Architecture and Data Flow",
          description:
            "The backend was built with Node.js and Express.js to expose a modular REST API, while Prisma and PostgreSQL handled database access, schema management, migrations, and automatic seeding. GitHub Actions was used to automate CI/CD workflows, including preview builds with the Vercel CLI and scheduled cron jobs to update monthly user budgets, rotate the daily tip, and generate the daily championship via Gemini.",
          images: ["/images/Screenshot_12.jpg", "/images/Picture1_HQ.svg"],
          imageLabels: ["Architecture overview", "Database schema"],
        },
        category: "Mobile Development",
        details:
          "BetLearn is an educational mobile application designed to teach users about sports betting in a safe, simulated environment. The app was developed under Context Based Learning (CBL) at Universidade de Aveiro in collaboration with Blip. The app provides a sandbox experience where users can learn betting strategies, understand odds, and practice decision-making before engaging with real betting platforms. Usability tests were conducted with real users to verify and improve the UI experience. Built with React Native, TypeScript, and Expo Go for cross-platform compatibility.",
        promoPage: "https://betlearn.vercel.app/#",
        promoVideo: "https://www.youtube.com/watch?v=9jl0bZ2ucjE",
        tech: [
          { name: "React Native", icon: "logos:react" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "Expo", icon: "simple-icons:expo" },
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "Express.js", icon: "simple-icons:express" },
          { name: "Prisma", icon: "simple-icons:prisma" },
          { name: "PostgreSQL", icon: "logos:postgresql" },
          { name: "GitHub Actions", icon: "simple-icons:githubactions" },
          { name: "Gemini", icon: "mdi:robot" },
        ],
      },
      {
        id: 5,
        title: "Chat-Bot for TechLab",
        description:
          "A chatbot created to support TechLab services at PCI (Parque de Ciência e Inovação de Aveiro), with two conversation flows for discovering services and exploring ideas. Supports Portuguese and English, with conversation history, document attachments, and PDF summaries.",
        image: "/images/Frame.png",
        detailImage: "/images/Adobe Express - Timeline 1.gif",
        gallery: ["/images/ChatDefault 2.png", "/images/ChatDefault 3.png"],
        galleryLabels: [undefined, "UI prototypes", "UI prototypes"],
        category: "Web Development",
        details:
          "Chat-Bot TechLab is a chatbot developed to support the services of TechLab at PCI (Parque de Ciência e Inovação de Aveiro). It includes two different conversation flows: Route A for getting to know TechLab's services and Route B for exploring ideas. The chatbot supports Portuguese and English, uses Claude Haiku 4.5, generates PDF summaries of conversations, sends PDFs directly by email, and allows users to save and load previous conversations as well as attach documents. Built with Next.js, TypeScript, React hooks, Tailwind CSS, jsPDF, and Mailgun.",
        github: "https://github.com/andrecj2002/chat-bot-techlab",
        live: "https://chat-bot-techlab.vercel.app",
        stackTable: {
          title: "Technologies Used",
          columns: ["Libraries Used", "Functionality"],
          rows: [
            { name: "Next.js", description: "React framework for web apps" },
            {
              name: "jsPDF",
              description: "PDF document generation on the front end",
            },
            {
              name: "Iconify",
              description: "Component with access to an SVG icon library",
            },
            {
              name: "TypeScript",
              description: "Typed language that compiles to JavaScript",
            },
            {
              name: "Tailwind CSS",
              description: "CSS framework for styling",
            },
            {
              name: "ESLint",
              description: "Tool for code quality control",
            },
            { name: "MailGun", description: "API for sending emails" },
          ],
        },
        tech: [
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "React", icon: "logos:react" },
          { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
          { name: "jsPDF", icon: "lucide:file-text" },
          { name: "Mailgun", icon: "lucide:mail" },
          { name: "Iconify", icon: "simple-icons:iconify" },
          { name: "ESLint", icon: "logos:eslint" },
        ],
      },
      {
        id: 6,
        title: "Greener Acts",
        description:
          "A sustainability-focused app where companies commit to one of the 17 SDGs by organizing events aligned with those objectives. This project was developed during my internship at PCI – Parque de Ciência e Inovação de Aveiro, as a service for the company Greener Acts.",
        image: "/images/greener acts cover final.png",
        detailImage: "/images/events_final_first_frame.png",
        gallery: ["/images/commitments_final_first_frame.png"],
        category: "UI/UX Design",
        details:
          "Greener Acts is a platform that helps companies turn sustainability goals into concrete actions by committing to one of the 17 UN Sustainable Development Goals through aligned initiatives and events. This project was developed during my internship at PCI (Parque de Ciência e Inovação de Aveiro) and delivered as a service for the company with the same name, Greener Acts. I was asked to redesign two back-office pages - Commitments and Events - while respecting an already established design system in Figma. The redesign process was documented across three phases: original state, low-fidelity exploration, and final UI.",
        uiuxCaseStudy: {
          summary:
            "Below is the redesign journey for both back-office pages across Original, Lo-Fi, and Final phases.",
          phases: [
            {
              name: "Original",
              results: [
                { page: "Commitments", image: "/images/commitments_og.png" },
                { page: "Events", image: "/images/eventos_og.gif" },
              ],
            },
            {
              name: "Lo-Fi",
              results: [
                {
                  page: "Commitments",
                  image: "/images/commitments_lofi.gif",
                },
                { page: "Events", image: "/images/eventos_lofi.gif" },
              ],
            },
            {
              name: "Final",
              results: [
                {
                  page: "Commitments",
                  image: "/images/commitments_final_first_frame.png",
                },
                {
                  page: "Events",
                  image: "/images/events_final_first_frame.png",
                },
              ],
            },
          ],
        },
        tech: [
          { name: "Figma", icon: "logos:figma" },
          { name: "Design System", icon: "lucide:palette" },
          { name: "UI/UX", icon: "lucide:layout-template" },
        ],
      },
    ],
  },
  footer: {
    name: "André Jorge",
    description: "Always interested in new projects and collaborations.",
    contact: {
      email: "andrecostaj2002@gmail.com",
      phone: "+351 916 750 888",
      location: "Aveiro, Portugal",
    },
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/andrecj2002",
        icon: "mdi:github",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/andrejorge2002/",
        icon: "mdi:linkedin",
      },
    ],
    services: [
      "Web Development",
      "UI/UX Design",
      "Content Creation",
      "Web Development",
    ],
  },
};

const DATA_PT: typeof DATA_EN = {
  home: {
    hero: {
      name: "André Jorge",
      title: "Programador Full Stack & Designer UI/UX",
      subtitle:
        "Programador Full Stack & Designer UI/UX: Olá! Sou um Programador Full Stack.",
    },
  },
  about: {
    experience: [
      {
        title:
          "Estágio — Design Factory no PCI – Parque de Ciência e Inovação de Aveiro",
        date: "Out 2025 - Mai 2026",
        icon: "mdi:briefcase-outline",
        description:
          "Trabalhei numa unidade estratégica do parque focada no desenvolvimento de projetos e soluções para start-ups e empresas incubadas, realizando investigação de UI/UX e traduzindo os resultados em decisões práticas de design e desenvolvimento, enquanto concebia e desenvolvia aplicações web para a incubadora com uma abordagem centrada no utilizador.",
      },
    ],
    education: [
      {
        title: "Mestrado em Tecnologias de Comunicação e Web",
        date: "Set 2024 - Jul 2026",
        icon: "mdi:school",
        description:
          "Ciclo de estudos baseado em projetos, trabalhando ao lado de empresas de TI para desenvolver soluções de aplicações web utilizando metodologias SCRUM, com investigação de UI/UX integrada em aplicações web funcionais e centradas no utilizador, e experiência prática com bases de dados relacionais e React Native.",
      },
      {
        title: "Licenciatura em Tecnologias Multimédia e Comunicação",
        date: "2021 - 2024",
        icon: "mdi:school-outline",
        description:
          "Durante esta licenciatura desenvolvi competências em Investigação de UI/UX, linguagens de Desenvolvimento Web (HTML5, CSS, PHP, MySQL, JavaScript – React), trabalho de câmara e fotografia, e serviços e dados web.",
      },
    ],
    profile: {
      name: "André Jorge",
      title: "Programador Full Stack",
      image: "/images/foto_perfil.jpg",
      description: [
        "Sou o André Jorge, Programador Full-Stack com um forte foco em front-end, atualmente a concluir o Mestrado em Tecnologias de Comunicação e Web na Universidade de Aveiro.",
        "Desenvolvo aplicações web e móveis prontas para produção com ecossistemas JavaScript, incluindo React, Vue.js, Nuxt.js, Next.js, Node.js e React Native com Expo.",
        "O meu trabalho também inclui APIs REST, integração de APIs, bases de dados relacionais e desenvolvimento de UI/UX centrado no utilizador, utilizando metodologias Agile e SCRUM.",
      ],
    },
    technologies: {
      development: {
        description:
          "Tecnologias e frameworks web que utilizo no desenvolvimento de aplicações.",
        tools: [
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS", icon: "logos:css-3" },
          { name: "JavaScript", icon: "logos:javascript" },
          { name: "React.js", icon: "logos:react" },
          { name: "Vue.js", icon: "logos:vue" },
          { name: "Nuxt.js", icon: "logos:nuxt-icon" },
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "React Native (Expo)", icon: "logos:react" },
          { name: "PHP", icon: "logos:php" },
          { name: "WordPress", icon: "logos:wordpress-icon" },
        ],
      },
      backendAndData: {
        description:
          "Tecnologias de backend para APIs, integrações e dados relacionais.",
        tools: [
          { name: "REST", icon: "lucide:route" },
          { name: "API Design", icon: "lucide:waypoints" },
          { name: "API Integration", icon: "lucide:plug-zap" },
          { name: "MySQL", icon: "logos:mysql-icon" },
          { name: "PostgreSQL", icon: "logos:postgresql" },
          { name: "Postman", icon: "simple-icons:postman" },
        ],
      },
      designAndDelivery: {
        description:
          "Ferramentas que utilizo para design de interfaces, produção de media e entrega.",
        tools: [
          { name: "Figma", icon: "logos:figma" },
          { name: "Vegas", icon: "simple-icons:vegas" },
          { name: "DaVinci Resolve", icon: "lucide:film" },
          { name: "GitHub CI/CD", icon: "simple-icons:github" },
        ],
      },
    },
  },
  projects: {
    work: [
      {
        id: 1,
        title: "CosmoZone",
        description:
          "Um programa que permite gerir, adicionar e editar eventos, bem como interação através de uma aba de comentários. Desenvolvido no âmbito de Context Based Learning (CBL) na Universidade de Aveiro em colaboração com o Planetário do Porto. Foram realizados testes de usabilidade com utilizadores reais para verificar e melhorar a experiência de UI.",
        image: "/images/cosmozone_cover.png",
        gallery: [
          "/images/cosmozone_1.png",
          "/images/cosmozone_2.png",
          "/images/cosmozone_aa.png",
          "/images/cosmozone_cover.png",
        ],
        category: "Desenvolvimento Web",
        details:
          "CosmoZone é um sistema completo de gestão de eventos desenvolvido para ajudar os Centros de Ciência Viva em Portugal a organizar eventos e compreender as preferências dos clientes. A plataforma foi desenvolvida no âmbito de Context Based Learning (CBL) na Universidade de Aveiro em colaboração com o Planetário do Porto. A plataforma inclui funcionalidades de gestão de eventos, interação dos utilizadores através de comentários, e uma área administrativa com dados estatísticos sobre as preferências de eventos e localizações dos utilizadores. Foram realizados testes de usabilidade com utilizadores reais para verificar e melhorar a experiência de UI. Construído com JavaScript, HTML, PHP e estilizado com Bootstrap.",
        github: "https://github.com",
        live: "https://example.com",
        tech: [
          { name: "JavaScript", icon: "logos:javascript" },
          { name: "HTML5", icon: "logos:html-5" },
          { name: "PHP", icon: "logos:php" },
          { name: "Bootstrap", icon: "logos:bootstrap" },
        ],
      },
      {
        id: 4,
        title: "BetLearn",
        description:
          "Uma aplicação sandbox que ensina os utilizadores a apostar antes de irem para uma casa de apostas desportivas real. Desenvolvida no âmbito de Context Based Learning (CBL) na Universidade de Aveiro em colaboração com a Blip. Foram realizados testes de usabilidade com utilizadores reais para verificar e melhorar a experiência de UI.",
        image: "/images/betlearn_1.png",
        gallery: [
          "/images/betlearn_1.png",
          "/images/betlearn_2.png",
          "/images/betlearn_3.png",
          "/images/betlearn_4.png",
          "/images/betlearn_5.png",
        ],
        architectureSection: {
          title: "Arquitetura e Fluxo de Dados",
          description:
            "O backend foi construído com Node.js e Express.js para expor uma API REST modular, enquanto o Prisma e o PostgreSQL geriram o acesso à base de dados, a gestão de esquemas, as migrações e o seeding automático. O GitHub Actions foi utilizado para automatizar os workflows de CI/CD, incluindo builds de pré-visualização com o Vercel CLI e cron jobs agendados para atualizar os orçamentos mensais dos utilizadores, alternar a dica diária e gerar o campeonato diário através do Gemini.",
          images: ["/images/Screenshot_12.jpg", "/images/Picture1_HQ.svg"],
          imageLabels: [
            "Visão geral da arquitetura",
            "Esquema da base de dados",
          ],
        },
        category: "Desenvolvimento Mobile",
        details:
          "BetLearn é uma aplicação móvel educativa concebida para ensinar os utilizadores sobre apostas desportivas num ambiente seguro e simulado. A aplicação foi desenvolvida no âmbito de Context Based Learning (CBL) na Universidade de Aveiro em colaboração com a Blip. A aplicação oferece uma experiência sandbox onde os utilizadores podem aprender estratégias de apostas, compreender as odds e praticar a tomada de decisões antes de utilizarem plataformas de apostas reais. Foram realizados testes de usabilidade com utilizadores reais para verificar e melhorar a experiência de UI. Construída com React Native, TypeScript e Expo Go para compatibilidade multiplataforma.",
        promoPage: "https://betlearn.vercel.app/#",
        promoVideo: "https://www.youtube.com/watch?v=9jl0bZ2ucjE",
        tech: [
          { name: "React Native", icon: "logos:react" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "Expo", icon: "simple-icons:expo" },
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "Express.js", icon: "simple-icons:express" },
          { name: "Prisma", icon: "simple-icons:prisma" },
          { name: "PostgreSQL", icon: "logos:postgresql" },
          { name: "GitHub Actions", icon: "simple-icons:githubactions" },
          { name: "Gemini", icon: "mdi:robot" },
        ],
      },
      {
        id: 5,
        title: "Chat-Bot for TechLab",
        description:
          "Um chatbot criado para apoiar os serviços do TechLab no PCI (Parque de Ciência e Inovação de Aveiro), com dois fluxos de conversa para descobrir serviços e explorar ideias. Suporta português e inglês, com histórico de conversas, anexos de documentos e resumos em PDF.",
        image: "/images/Frame.png",
        detailImage: "/images/Adobe Express - Timeline 1.gif",
        gallery: ["/images/ChatDefault 2.png", "/images/ChatDefault 3.png"],
        galleryLabels: [undefined, "Protótipos de UI", "Protótipos de UI"],
        category: "Desenvolvimento Web",
        details:
          "Chat-Bot TechLab é um chatbot desenvolvido para apoiar os serviços do TechLab no PCI (Parque de Ciência e Inovação de Aveiro). Inclui dois fluxos de conversa diferentes: Rota A para conhecer os serviços do TechLab e Rota B para explorar ideias. O chatbot suporta português e inglês, utiliza o Claude Haiku 4.5, gera resumos em PDF das conversas, envia os PDFs diretamente por email, e permite aos utilizadores guardar e carregar conversas anteriores, bem como anexar documentos. Construído com Next.js, TypeScript, React hooks, Tailwind CSS, jsPDF e Mailgun.",
        github: "https://github.com/andrecj2002/chat-bot-techlab",
        live: "https://chat-bot-techlab.vercel.app",
        stackTable: {
          title: "Tecnologias Utilizadas",
          columns: ["Bibliotecas Utilizadas", "Funcionalidade"],
          rows: [
            { name: "Next.js", description: "Framework React para web-apps" },
            {
              name: "jsPDF",
              description: "Geração de documentos PDF no Front-End",
            },
            {
              name: "Iconify",
              description: "Componente com acesso a Biblioteca de Ícones SVG",
            },
            {
              name: "TypeScript",
              description: "Linguagem tipada com compilação para JavaScript",
            },
            {
              name: "Tailwind CSS",
              description: "Framework CSS para estilização",
            },
            {
              name: "ESLint",
              description: "Ferramenta para controlo de qualidade do código",
            },
            { name: "MailGun", description: "API para envio de e-mails" },
          ],
        },
        tech: [
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "React", icon: "logos:react" },
          { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
          { name: "jsPDF", icon: "lucide:file-text" },
          { name: "Mailgun", icon: "lucide:mail" },
          { name: "Iconify", icon: "simple-icons:iconify" },
          { name: "ESLint", icon: "logos:eslint" },
        ],
      },
      {
        id: 6,
        title: "Greener Acts",
        description:
          "Uma aplicação focada em sustentabilidade onde as empresas se comprometem com um dos 17 ODS ao organizar eventos alinhados com esses objetivos. Este projeto foi desenvolvido durante o meu estágio no PCI – Parque de Ciência e Inovação de Aveiro, como um serviço para a empresa Greener Acts.",
        image: "/images/greener acts cover final.png",
        detailImage: "/images/events_final_first_frame.png",
        gallery: ["/images/commitments_final_first_frame.png"],
        category: "Design UI/UX",
        details:
          "Greener Acts é uma plataforma que ajuda as empresas a transformar objetivos de sustentabilidade em ações concretas, comprometendo-se com um dos 17 Objetivos de Desenvolvimento Sustentável da ONU através de iniciativas e eventos alinhados. Este projeto foi desenvolvido durante o meu estágio no PCI (Parque de Ciência e Inovação de Aveiro) e entregue como um serviço para a empresa com o mesmo nome, Greener Acts. Foi-me pedido para redesenhar duas páginas de back-office - Compromissos e Eventos - respeitando um sistema de design já estabelecido no Figma. O processo de redesign foi documentado em três fases: estado original, exploração de baixa fidelidade e UI final.",
        uiuxCaseStudy: {
          summary:
            "Abaixo está o percurso de redesign de ambas as páginas de back-office ao longo das fases Original, Baixa Fidelidade e Final.",
          phases: [
            {
              name: "Original",
              results: [
                { page: "Compromissos", image: "/images/commitments_og.png" },
                { page: "Eventos", image: "/images/eventos_og.gif" },
              ],
            },
            {
              name: "Baixa Fidelidade",
              results: [
                {
                  page: "Compromissos",
                  image: "/images/commitments_lofi.gif",
                },
                { page: "Eventos", image: "/images/eventos_lofi.gif" },
              ],
            },
            {
              name: "Final",
              results: [
                {
                  page: "Compromissos",
                  image: "/images/commitments_final_first_frame.png",
                },
                {
                  page: "Eventos",
                  image: "/images/events_final_first_frame.png",
                },
              ],
            },
          ],
        },
        tech: [
          { name: "Figma", icon: "logos:figma" },
          { name: "Design System", icon: "lucide:palette" },
          { name: "UI/UX", icon: "lucide:layout-template" },
        ],
      },
    ],
  },
  footer: {
    name: "André Jorge",
    description: "Sempre interessado em novos projetos e colaborações.",
    contact: {
      email: "andrecostaj2002@gmail.com",
      phone: "+351 916 750 888",
      location: "Aveiro, Portugal",
    },
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/andrecj2002",
        icon: "mdi:github",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/andrejorge2002/",
        icon: "mdi:linkedin",
      },
    ],
    services: [
      "Desenvolvimento Web",
      "Design UI/UX",
      "Criação de Conteúdo",
      "Desenvolvimento Web",
    ],
  },
};

export const getData = (locale: Locale) =>
  locale === "pt" ? DATA_PT : DATA_EN;

// Locale-neutral reference kept for stable ids/slugs/images (identical across locales).
export const DATA = DATA_EN;
