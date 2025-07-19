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
          level: 90,
          icon: "lucide:code",
          color: "primary",
        },
        {
          name: "UI/UX Design",
          level: 85,
          icon: "lucide:layout-dashboard",
          color: "secondary",
        },
        {
          name: "Mobile Development",
          level: 82,
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
    profile: {
      name: "André Jorge",
      title: "Full Stack Developer",
      image:
        "https://res.cloudinary.com/devq06psf/image/upload/v1750626859/chic_soba_apc1ht.png",
      description: [
        "I'm André Jorge, a 3rd year student of Multimedia and Communication Technologies at the University of Aveiro. I found my passion for coding in high school, and thanks to what I learned during my course, I was able to appreciate it even more!",
        "My approach is both technical and aesthetic — I enjoy turning complex problems into elegant user experiences. I work primarily with modern frameworks like React, JavaScript, and various web technologies.",
        "What I love to do the most is playing videogames, listening to music and jogging! Outside of code, I enjoy content creation and always pushing the boundaries of front-end development. It's nice to meet you!",
      ],
    },
    education: [
      {
        title: "Multimedia and Communication Technologies",
        date: "2022 - Present",
        icon: "mdi:school",
        description:
          "Currently pursuing a Bachelor's degree in Multimedia and Communication Technologies at the University of Aveiro. Gaining strong skills in web development, UI/UX design, content creation, and digital communication.",
      },
      {
        title: "High School Education",
        date: "2019 - 2022",
        icon: "mdi:school-outline",
        description:
          "Completed high school education where I first discovered my passion for coding and technology. This foundational period sparked my interest in programming and digital design.",
      },
    ],
    experience: [
      {
        title: "Student Developer",
        date: "2022 - Present",
        icon: "mdi:school",
        description:
          "Currently studying and working on various projects as part of my Multimedia and Communication Technologies degree. Developing skills in web development, UI/UX design, and content creation through academic and personal projects.",
      },
      {
        title: "Personal Projects & Learning",
        date: "2020 - Present",
        icon: "mdi:code-tags",
        description:
          "Continuously learning and building personal projects to improve my coding skills. Started with basic web development and gradually moved to more complex applications using JavaScript, React, and various web technologies.",
      },
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
      uiux: {
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
          "A program that allows you to manage, add and edit events as well as interaction from a comments tab.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-3",
        ],
        category: "Web Development",
        details:
          "CosmoZone is a comprehensive event management system developed to help 'Centros de Ciência Viva' (Live Science Centers) in Portugal organize events and understand customer preferences. The platform includes event management capabilities, user interaction through comments, and an administrative area with statistical data regarding event preferences and user locations. Built with JavaScript, HTML, PHP, and styled with Bootstrap.",
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
          "A sandbox app that teaches users how to bet before they go to an actual existing betting sports house.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-3",
        ],
        category: "Mobile Development",
        details:
          "BetLearn is an educational mobile application designed to teach users about sports betting in a safe, simulated environment. The app provides a sandbox experience where users can learn betting strategies, understand odds, and practice decision-making before engaging with real betting platforms. Built with React Native, TypeScript, and Expo Go for cross-platform compatibility.",
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
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-3",
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
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-3",
        ],
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
  contact: {
    heading: "Have a project in mind? Get in touch and let's create something amazing.",
    location: {
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.017947223557!2d-122.41941508468191!3d37.774929779759245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cbb69f3ef%3A0x4c80b42c33b6a77d!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1715701234567!5m2!1sen!2sus",
      address: "Aveiro, Portugal",
    },
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "André Jorge",
    description: "Always interested in new projects and collaborations.",
    contact: {
      email: "hello@example.com",
      phone: "+351 (XXX) XXX-XXX",
      location: "Aveiro, Portugal",
    },
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/kikode24", icon: "mdi:github" },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        icon: "mdi:linkedin",
      },
    ],
    services: ["Web Development", "UI/UX Design", "Content Creation", "JavaScript Development"],
  },
} as const;
