export const DATA = {
  home: {
    hero: {
      name: "André Jorge",
      title: "Full Stack Developer & UI/UX Designer",
      subtitle:
        "Hi! I'm a Full Stack Developer at Universidade de Aveiro. I build fast, accessible and visually engaging web experiences.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        "Specialized in creating modern digital experiences with cutting-edge technologies",
      overview: [
        {
          name: "Web Development",
          level: 100,
          icon: "lucide:code",
          olor: "primary",
        },
        {
          name: "UI/UX Design",
          level: 100,
          icon: "lucide:layout-dashboard",
          color: "secondary",
        },
        {
          name: "Mobile Development",
          level: 95,
          icon: "lucide:smartphone",
          color: "success",
        },
        {
          name: "Content Creation",
          level: 80,
          icon: "lucide:video",
          color: "warning",
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
        "I'm André Jorge, currently taking a Master's degree in Communication and Web Technologies at the University of Aveiro. I found my passion for coding in high school, and thanks to what I learned during my course, I was able to appreciate it even more!",
        "My approach is both technical and aesthetic — I enjoy turning complex problems into elegant user experiences. I work primarily with modern frameworks like React, JavaScript, and various web technologies.",
        "What I love to do the most is playing videogames, listening to music and jogging! Outside of code, I enjoy content creation and always pushing the boundaries of front-end development. It's nice to meet you!",
      ],
    },
    skills: [
      "Scrum",
      "Software Development",
      "Figma",
      "End User Research",
      "User Experience (UX)",
      "HTML5",
      "JavaScript",
      "Camera Operation",
      "UI design",
      "Back-End Web Development",
      "Cameras",
      "Mobile Interface Design",
      "User Research",
    ],
    technologies: {
      frontend: {
        description:
          "I craft dynamic, responsive UIs using modern JavaScript frameworks and CSS tools.",
        tools: [
          { name: "React", icon: "logos:react" },
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "React Native", icon: "logos:react" },
          { name: "Expo", icon: "simple-icons:expo" },
          { name: "Tailwind", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
        ],
      },
      backend: {
        description:
          "I build fast APIs and scalable backends using Node.js, Bun, and Python.",
        tools: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "Bun", icon: "logos:bun" },
          { name: "Python", icon: "logos:python" },
          { name: "MySQL", icon: "logos:mysql-icon" },
          { name: "PostgresSQL", icon: "logos:postgresql" },
          { name: "OpenAI", icon: "simple-icons:openai" },
        ],
      },
      ux: {
        description:
          "I design smooth, user-centered interfaces and high-fidelity prototypes.",
        tools: [
          { name: "Figma", icon: "logos:figma" },
          { name: "Framer", icon: "simple-icons:framer", color: "#0055FF" },
          { name: "Notion", icon: "logos:notion-icon" },
        ],
      },
      graphicDesign: {
        description:
          "My graphic work includes logos, branding, and posters using Adobe Suite.",
        tools: [
          { name: "Photoshop", icon: "logos:adobe-photoshop" },
          { name: "Illustrator", icon: "logos:adobe-illustrator" },
        ],
      },
      motionDesign: {
        description:
          "I animate UI flows and cinematic intros using After Effects and Blender.",
        tools: [
          { name: "After Effects", icon: "logos:adobe-after-effects" },
          { name: "Premiere Pro", icon: "logos:adobe-premiere" },
          { name: "Blender", icon: "logos:blender" },
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
        github: "https://github.com",
        live: "https://example.com",
        tech: [
          { name: "React Native", icon: "logos:react" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "Expo", icon: "simple-icons:expo" },
        ],
      },
      {
        id: 2,
        title: "PokéBase",
        description:
          "A project to simulate decks from the Pokémon TCG game with Firebase authentication and API integration.",
        image: "/images/pokebox.png",
        gallery: [
          "/images/pokebox.png",
          "/images/pokebox_1.png",
          "/images/pokebox_2.png",
          "/images/pokebox_3.png",
        ],
        category: "Web Development",
        details:
          "PokéBase is a personal project that simulates Pokémon TCG decks. Features include Firebase authentication allowing each account to have its own deck, deck comparison functionality, and integration with Pokémon-specific APIs (PokéTCG and Pokémon Database) to search for Pokémon and relate them to their respective TCG cards. Built with React and modern web technologies.",
        github: "https://github.com",
        live: "https://example.com",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "JavaScript", icon: "logos:javascript" },
          { name: "Firebase", icon: "logos:firebase" },
          { name: "Bootstrap", icon: "logos:bootstrap" },
        ],
      },
      {
        id: 3,
        title: "Smart Village",
        description:
          "An interactive project about Smart Cities where users can interact with various items to learn curiosities.",
        image: "/images/blog-image3.png",
        gallery: ["/images/blog-image3.png"],
        category: "Web Development",
        details:
          "Smart Village is a basic interactive project created to test and demonstrate JavaScript skills. The application allows users to interact with various items in a virtual village setting, and when clicked, displays interesting facts and curiosities about Smart Cities related to the selected object. This project showcases fundamental web development skills and interactive design principles.",
        github: "https://github.com",
        live: "https://example.com",
        tech: [
          { name: "JavaScript", icon: "logos:javascript" },
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
          { name: "Bootstrap", icon: "logos:bootstrap" },
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
