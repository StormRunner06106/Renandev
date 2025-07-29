import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "rottas-app",
    companyName: "Rottas App",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription: `Collaborative project developed by me and three other developers during a College hackathon that helped more
      than 70% of the students interviewed to find their way around the campus of the Federal University of Cear´a through real-time
      monitoring of the internal bus and the provision of strategic places within from the University`,
    websiteLink: "https://github.com/ProjectRottas",
    techStack: ["Next.js", "express.js"],
    startDate: new Date("2020-07-01"),
    endDate: new Date("2022-11-30"),
    companyLogoImg: "/experience/rottas/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        `Collaborative project developed by me and three other developers during a College hackathon that helped more
        than 70% of the students interviewed to find their way around the campus of the Federal University of Cear´a through real-time
        monitoring of the internal bus and the provision of strategic places within from the University.`,
        `To develop this application, we used Flutter and Dart as main technologies, in addition to integrations with the Google Maps
        API, tracker to monitor the bus and Firebase. Project: https://github.com/ProjectRottas`,
      ],
      bullets: [],
    },
  },
  {
    id: "absopure",
    companyName: "Absopure",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "A web-based system for a Peru-based recycling company to streamline the collection and management of recyclable bottles and papers.",
    websiteLink: "https://www.absopure.com/",
    techStack: ["Laravel", "PHP", "MySQL"],
    startDate: new Date("2020-09-11"),
    endDate: new Date("2020-11-14"),
    companyLogoImg: "/experience/absopure/absopure-logo.png",
    pagesInfoArr: [
      {
        title: "Home page",
        description: "",
        imgArr: ["/experience/absopure/absopure.png"],
      },
      {
        title: "Products page",
        description: "",
        imgArr: ["/experience/absopure/absopure-1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `Developed and deployed Absopure, a web-based system for a Peru-based recycling company to streamline the collection and management of recyclable bottles and papers. As the lead developer, I conceptualized and implemented the core workflow based on limited initial requirements, delivering the first version in 2020.`,
      ],
      bullets: [
        `Independently designed the system’s workflow to support the collection, tracking, and management of recyclable materials, ensuring scalability and usability`,
        `Built the application using Laravel for the backend, integrated with Firebase for real-time data management and Stripe for secure payment processing`,
        `Collaborated with the client to refine requirements and iterated on feedback to align the system with their operational needs`,
        `Deployed Version 1 in 2020, marking my first successfully deployed project, and ensured system stability and performance in production`,
      ],
    },
  },
  {
    id: "meca",
    companyName: "Meca",
    type: "Professional",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription: `Taking care of your car just got easier with Meca!
      With just a few taps, you can find nearby repair shops, compare reviews, schedule inspections, oil changes, brake services, alignment, suspension work, and much more—all directly through the app.`,
    githubLink:
      "https://play.google.com/store/apps/details?id=br.com.megaleios.meca_cliente&hl=pt_BR",
    techStack: ["Flutter", "Firebase", "FastAPI"],
    startDate: new Date("2024-07-14"),
    endDate: new Date("2025-07-11"),
    companyLogoImg: "/experience/meca/meca-logo.jpg",
    pagesInfoArr: [
      {
        title: "Splash Screen",
        description: "",
        imgArr: ["/experience/meca/meca-3.jpg"],
      },
      {
        title: "Explore Screen",
        description: "",
        imgArr: ["/experience/meca/meca-1.jpg"],
      },
      {
        title: "Search Filter Screen",
        description: "",
        imgArr: ["/experience/meca/meca-2.jpg"],
      },
      {
        title: "Shop Details",
        description: "",
        imgArr: ["/experience/meca/meca.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `With just a few taps, you can find nearby auto repair shops, compare reviews, schedule maintenance, oil changes, brake services, alignment, suspension work, and much more — all directly through the app.
        No more endless phone calls, wasted time, or falling into traps. With Meca, you choose the shop, select the service, approve the quote, and make the payment via the app. Transparent, fast, and secure.`,
      ],
      bullets: [],
    },
  },
  {
    id: "qualitime",
    companyName: "Qualitime",
    type: "Professional",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Qualitime is the definitive solution for companies looking to monitor and optimize the productivity of their teams, whether they are working from home, in the office or in a hybrid model.",
    websiteLink:
      "https://play.google.com/store/apps/details?id=br.com.l5.qualitime&hl=en_US",
    techStack: ["Flutter", "express.js"],
    startDate: new Date("2024-03-01"),
    endDate: new Date("2025-06-27"),
    companyLogoImg: "/experience/qualitime/qualitime-logo.jpg",
    pagesInfoArr: [
      {
        title: "Collaborators Screen",
        description: "",
        imgArr: ["/experience/qualitime/qualitime.jpg"],
      },
      {
        title: "Progress Screen",
        description: "",
        imgArr: ["/experience/qualitime/qualitime-1.jpg"],
      },
      {
        title: "Profile Screen",
        description: "",
        imgArr: ["/experience/qualitime/qualitime-2.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `Qualitime is the definitive solution for companies looking to monitor and optimize the productivity of their teams, whether they are working from home, in the office or in a hybrid model.
        Developed by L5 Networks, the application offers advanced tools for real-time monitoring, promoting operational efficiency and employee well-being.`,
      ],
      bullets: [
        `Activity Monitoring: Track the tasks performed by each employee, identifying productivity patterns and areas for improvement.`,
        `Screen Capture: Receive screenshots every 5 minutes, stored for up to 30 days, ensuring transparency and security in operations`,
        `Geolocation: View the location of team members in real time, facilitating the management of distributed teams`,
        `Interactive Dashboards: Access intuitive panels that present individual and collective performance metrics`,
      ],
    },
  },
  {
    id: "skywork.ai",
    companyName: "Skywork.ai",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "AI"],
    shortDescription:
      "Skywork Super Agent is an AI agent to be built with deep reasearch, designed for reliable writing.",
    websiteLink: "https://skywork.ai/",
    techStack: ["OpenAI", "Next.js", "Python", "FastAPI", "LangChain"],
    startDate: new Date("2023-03-01"),
    endDate: new Date("2023-07-01"),
    companyLogoImg: "/experience/skywork/skywork.png",
    pagesInfoArr: [
      {
        title: "Chat page",
        description: "",
        imgArr: ["/experience/skywork/skywork.png"],
      },
      {
        title: "New Project page",
        description: "",
        imgArr: ["/experience/skywork/skywork-1.png"],
      },
      {
        title: "Description page",
        description: "",
        imgArr: ["/experience/skywork/skywork-2.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `Developed Skywork Super Agent, a web-based AI agent specialized in deep research on U.S. traditions and fashion, designed to generate reliable written content. This was the flagship project for our company in 2023, commissioned by a U.S.-based client. I led the development from dataset collection to deployment, creating Version 1 as a functional web application using Next.js.`,
      ],
      bullets: [
        "Collaborated with the client to define requirements for an AI agent focused on researching and writing about U.S. cultural traditions and fashion trends.",
        "Collected and curated datasets relevant to U.S. history, culture, and fashion to train the AI model, ensuring accuracy and depth in generated content.",
        "Built the full-stack web application using Next.js, integrating AI capabilities for research queries and content generation.",
        "Handled end-to-end development, including data processing, model training integration, and user interface for inputting research topics and viewing outputs.",
        "Deployed Version 1 in 2023, optimizing for performance and scalability to support reliable AI-driven writing tasks.",
      ],
    },
  },
  {
    id: "aluo",
    companyName: "Aluo",
    type: "Professional",
    category: ["Web Dev", "AI", "Full Stack"],
    shortDescription:
      "An innovative web-based image editing platform leveraging AI to enable users to upload, edit, and enhance images either manually or through intelligent AI tools.",
    websiteLink: "https://aluo.ai",
    techStack: ["Next.js", "OpenAI", "Model Integration"],
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-07-15"),
    companyLogoImg: "/experience/aluo/aluo.png",
    pagesInfoArr: [
      {
        title: "Home",
        description: "",
        imgArr: ["/experience/aluo/aluo.png"],
      },
      {
        title: "Workspace",
        description: "",
        imgArr: ["/experience/aluo/aluo-1.png"],
      },
      {
        title: "Subscription",
        description: "",
        imgArr: ["/experience/aluo/aluo-2.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `Developed Aluo, an innovative web-based image editing platform leveraging AI to enable users to upload, edit, and enhance images either manually or through intelligent AI tools. This was a new concept initiated by our company and assigned to me as a long-term project. I sourced an open-source AI image generation model from GitHub, integrated it into the application, and fine-tuned it to align with our vision for seamless, user-friendly editing. The Minimum Viable Product (MVP) was deployed in July 2024.`,
      ],
      bullets: [
        `Conceptualized and implemented core features allowing users to upload images and apply edits via manual controls or AI-assisted enhancements, such as automated adjustments for brightness, blur, texture, filters, border radius, and 3D effects (e.g., fold and stretch).`,
        `Integrated a GitHub-sourced AI model for image generation and manipulation, performing fine-tuning to ensure compatibility with the platform's requirements and improve output quality.`,
        `Built the full-stack application using Next.js, focusing on a responsive interface with real-time preview capabilities.`,
      ],
    },
  },
  {
    id: "taxi1000",
    companyName: "Taxi1000",
    type: "Professional",
    category: ["Mobile Dev", "Full Stack"],
    shortDescription:
      "This application was designed for those looking for a taxi service present in their own neighborhood and that guarantees that you and your family will be attended to by a taxi driver known for safety.",
    websiteLink:
      "https://play.google.com/store/apps/details?id=br.com.taxi1000.passenger.taximachine&hl=en",
    techStack: ["Kotlin", "Firebase", "Django"],
    startDate: new Date("2022-04-13"),
    endDate: new Date("2022-06-25"),
    companyLogoImg: "/experience/taxi1000/taxi1000-logo.jpg",
    pagesInfoArr: [
      {
        title: "Taxi Search Screen",
        description: "",
        imgArr: ["/experience/taxi1000/taxi1000-1.jpg"],
      },
      {
        title: "Route Selection Screen",
        description: "",
        imgArr: ["/experience/taxi1000/taxi1000-2.jpg"],
      },
      {
        title: "Taxi Selection Screen",
        description: "",
        imgArr: ["/experience/taxi1000/taxi1000-3.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `A generative trivia website built with Next.js, Firebase, NextAuth, Google OAuth, and TypeScript. Users can generate trivia questions for predefined school subjects and answer them with a unique interactive input style. The application supports user authentication with Google and stores data in Firestore.
        The project is a culmination of my passion for web development and my desire to create a fun and interactive learning platform. The website is designed to be user-friendly and engaging, with a clean and modern interface that appeals to a wide audience. The trivia questions are generated using the Gemini API, which provides a diverse range of questions for users to answer.`,
      ],
      bullets: [],
    },
  },
  {
    id: "personal_portfolio",
    companyName: "Motion Portfolio",
    type: "Personal Project",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "This project  is developed for my friend's portfolio, where he is a motion designer.",
    websiteLink: "https://awesome-profile-storm-runners-projects.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS"],
    startDate: new Date("2021-09-06"),
    endDate: new Date("2022-09-28"),
    companyLogoImg: "/experience/portfolio/portfolio.png",
    pagesInfoArr: [
      {
        title: "First Page",
        description: "",
        imgArr: ["/experience/portfolio/portfolio.png"],
      },
      {
        title: "About Me",
        description: "",
        imgArr: ["/experience/portfolio/portfolio-1.png"],
      },
      {
        title: "Experience",
        description: "",
        imgArr: ["/experience/portfolio/portfolio-2.png"],
      },
      {
        title: "Project",
        description: "",
        imgArr: ["/experience/portfolio/portfolio-3.png"],
      },
      {
        title: "Article",
        description: "",
        imgArr: ["/experience/portfolio/portfolio-4.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `Many animations were integrated. It was designed as very smart and modern designs and templates.`,
      ],
      bullets: [],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
