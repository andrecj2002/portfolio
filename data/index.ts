export const DATA = {
  home: {
    hero: {
      name: "André Jorge",
      title: "Full Stack Developer & UI/UX Designer",
      subtitle: "Hi! I'm a Full Stack Developer.",
    },
    skills: {
      sectionTitle: "What I Use",
      sectionDescription: "Technologies I use to build my projects",
      overview: [
        {
          name: "JavaScript",
          icon: "logos:javascript",
        },
        {
          name: "React.js",
          icon: "logos:react",
        },
        {
          name: "Vue.js",
          icon: "logos:vue",
        },
        {
          name: "Next.js",
          icon: "skill-icons:nextjs-dark",
        },
        {
          name: "Node.js",
          icon: "logos:nodejs-icon",
        },
        {
          name: "React Native (Expo)",
          icon: "logos:react",
        },
        {
          name: "PHP",
          icon: "logos:php",
        },
        {
          name: "MySQL",
          icon: "logos:mysql-icon",
        },
      ],
    },
  },
  about: {
    education: [
      {
        title: "Master's in Communication and Web Technologies",
        date: "2024 - Present",
        icon: "mdi:school",
        description:
          "Currently taking this master's degree to expand my knowledge in web programming and web development practices.",
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
    sectionTitle: "Featured Projects",
    sectionDescription:
      "A selection of my recent projects showcasing UI/UX design and development expertise",
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
        category: "Mobile Development",
        details:
          "BetLearn is an educational mobile application designed to teach users about sports betting in a safe, simulated environment. The app was developed under Context Based Learning (CBL) at Universidade de Aveiro in collaboration with Blip. The app provides a sandbox experience where users can learn betting strategies, understand odds, and practice decision-making before engaging with real betting platforms. Usability tests were conducted with real users to verify and improve the UI experience. Built with React Native, TypeScript, and Expo Go for cross-platform compatibility.",
        promoPage: "https://betlearn.vercel.app/#",
        promoVideo: "https://www.youtube.com/watch?v=9jl0bZ2ucjE",
        tech: [
          { name: "React Native", icon: "logos:react" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "Expo", icon: "simple-icons:expo" },
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
        tech: [
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "React", icon: "logos:react" },
          { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
          { name: "jsPDF", icon: "lucide:file-text" },
          { name: "Mailgun", icon: "lucide:mail" },
        ],
      },
      {
        id: 6,
        title: "Greener Acts",
        description:
          "A sustainability-focused app where companies commit to one of the 17 SDGs by organizing events aligned with those objectives. This project was developed during my internship at PCI – Parque de Ciência e Inovação de Aveiro, as a service for the company Greener Acts.",
        image: "/images/greener acts cover (2).png",
        detailImage: "/images/events_final.gif",
        gallery: ["/images/commitments_final.gif"],
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
                  image: "/images/commitments_final.gif",
                },
                { page: "Events", image: "/images/events_final.gif" },
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
  morphingTexts: {
    about: ["Creative", "Passionate", "Developer"] as const,
    projects: ["My Work", "Creations", "Experiments", "Innovations"] as const,
    contact: ["Let's", "Build", "Together"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
  ],
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
        url: "https://linkedin.com",
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
} as const;
