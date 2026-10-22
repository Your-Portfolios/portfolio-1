export interface Project {
  id: string;
  title: string;
  category: 'enterprise' | 'personal';
  subtitle: string;
  description: string;
  longDescription: string;
  role: string;
  impactMetrics: string[];
  techStack: string[];
  architectureHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  imageBg: string; // Gradient style for thumbnail
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  summary: string;
  achievements: string[];
  skills: string[];
  impactMetric: string;
}

export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: SkillItem[];
}

// Primary source: Awais_Ali_Software_Engineer_CV.pdf. GitHub supplements personal projects.
export const PERSONAL_INFO = {
  "name": "Awais Ali",
  "firstName": "Awais",
  "lastName": "Ali",
  "initials": "AA",
  "title": "Software Engineer | Full Stack Developer",
  "subheading": "React, Next.js, React Native & Node.js",
  "location": "Lahore, Pakistan",
  "timezone": "UTC+05:00",
  "email": "awais6javaid@gmail.com",
  "phone": "+92 335 6620397",
  "linkedin": "https://linkedin.com/in/awaisali-exe1",
  "github": "https://github.com/awais-sufi",
  "resumePdf": "/Awais_Ali_Software_Engineer_CV.pdf",
  "summary": "I'm Awais, a Full Stack Software Engineer with 2+ years of experience building production web applications. I work with React, Next.js, Node.js, NestJS, and PostgreSQL to deliver responsive interfaces, REST APIs, and authentication systems.",
  "roles": [
    "Full Stack Software Engineer",
    "React & Next.js Development",
    "React Native Applications",
    "Node.js & NestJS APIs"
  ],
  "stats": [
    {
      "label": "Full-stack applications contributed to",
      "value": "5+",
      "accent": "from-cyan-400 to-blue-500"
    },
    {
      "label": "Dashboards & onboarding systems",
      "value": "3+",
      "accent": "from-emerald-400 to-teal-400"
    },
    {
      "label": "REST API endpoints implemented",
      "value": "15+",
      "accent": "from-purple-400 to-indigo-400"
    },
    {
      "label": "Reusable components for Zaz Mart",
      "value": "15+",
      "accent": "from-amber-400 to-orange-400"
    }
  ],
  "education": {
    "degree": "BS in Software Engineering",
    "institution": "Riphah International University",
    "period": "Oct 2020 - Nov 2024"
  }
};

export const WORK_EXPERIENCES: Experience[] = [
  {
    "id": "exeonic",
    "role": "Software Engineer",
    "company": "Exeonic",
    "period": "Jan 2025 - Present",
    "location": "Pakistan",
    "isCurrent": true,
    "summary": "Build full-stack web applications for live client and internal projects, collaborating across Agile teams.",
    "achievements": [
      "Developed and contributed to 5+ full-stack web applications using the MERN stack, Next.js, and NestJS.",
      "Built 3+ responsive dashboards and onboarding systems, reducing manual steps in internal workflows.",
      "Implemented JWT authentication flows and 15+ REST API endpoints for CRUD operations and client-server integration.",
      "Integrated Supabase and PostgreSQL for database and backend services.",
      "Collaborated using Git, GitHub/GitLab, Jira, and Agile workflows."
    ],
    "skills": [
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Supabase"
    ],
    "impactMetric": "5+ applications / 3+ dashboards / 15+ endpoints"
  }
];

export const PROJECTS: Project[] = [
  {
    "id": "zaz-mart",
    "title": "Zaz Mart",
    "category": "enterprise",
    "subtitle": "Client e-commerce store",
    "description": "Developed and deployed a client e-commerce store with reusable UI components and responsive product browsing across mobile, tablet, and desktop.",
    "longDescription": "Developed and deployed a client e-commerce store with reusable UI components and responsive product browsing across mobile, tablet, and desktop.",
    "role": "Full Stack Developer",
    "impactMetrics": [
      "15+ reusable UI components",
      "Production client delivery"
    ],
    "techStack": [
      "Next.js",
      "NestJS",
      "Tailwind CSS",
      "PostgreSQL"
    ],
    "architectureHighlights": [
      "Reusable UI components for consistent product presentation.",
      "Responsive product navigation across screen sizes."
    ],
    "featured": true,
    "imageBg": "from-cyan-900 via-blue-950 to-slate-900",
    "liveUrl": "https://zazpk.com/"
  },
  {
    "id": "asim-textile",
    "title": "Asim Textile",
    "category": "enterprise",
    "subtitle": "CMS-managed business website",
    "description": "Built a responsive business website with company, product, and contact sections. Integrated Payload CMS so the client can independently update products and business information.",
    "longDescription": "Built a responsive business website with company, product, and contact sections. Integrated Payload CMS so the client can independently update products and business information.",
    "role": "Full Stack Developer",
    "impactMetrics": [
      "5+ website sections",
      "Client-managed content"
    ],
    "techStack": [
      "Next.js",
      "Payload CMS",
      "Tailwind CSS",
      "SQLite"
    ],
    "architectureHighlights": [
      "Client-managed products and business content through Payload CMS.",
      "Responsive layouts for desktop, tablet, and mobile."
    ],
    "featured": true,
    "imageBg": "from-indigo-950 via-purple-900 to-slate-950",
    "liveUrl": "https://asimtextile.com/"
  },
  {
    "id": "authentication",
    "title": "Authentication Platform",
    "category": "personal",
    "subtitle": "Registration, OTP & protected dashboard",
    "description": "A Next.js authentication frontend with registration, email verification, OTP login, and a protected dashboard, paired with a Node.js and Express backend.",
    "longDescription": "A Next.js authentication frontend with registration, email verification, OTP login, and a protected dashboard, paired with a Node.js and Express backend.",
    "role": "Personal project",
    "impactMetrics": [
      "Email verification & OTP login",
      "Protected dashboard"
    ],
    "techStack": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    "architectureHighlights": [
      "React Hook Form and Zod validate authentication forms.",
      "JWT authentication and email OTP flows connect the frontend to the API."
    ],
    "featured": true,
    "imageBg": "from-emerald-950 via-teal-900 to-slate-950",
    "liveUrl": "https://auth-front-end-lovat.vercel.app",
    "githubUrl": "https://github.com/awais-sufi/auth-frontend"
  },
  {
    "id": "native-concepts",
    "title": "React Native Concepts",
    "category": "personal",
    "subtitle": "Mobile development learning project",
    "description": "A React Native learning project exploring secure storage with platform keychain and keystore integrations.",
    "longDescription": "A React Native learning project exploring secure storage with platform keychain and keystore integrations.",
    "role": "Learning project",
    "impactMetrics": [
      "Secure storage exploration",
      "Mobile development"
    ],
    "techStack": [
      "React Native",
      "TypeScript"
    ],
    "architectureHighlights": [
      "Platform secure storage through React Native libraries."
    ],
    "featured": true,
    "imageBg": "from-cyan-900 via-blue-950 to-slate-900",
    "githubUrl": "https://github.com/awais-sufi/learn-native-concepts"
  },
  {
    "id": "task-management",
    "title": "Task Management",
    "category": "personal",
    "subtitle": "Course-based full-stack learning project",
    "description": "A React task-management interface with authentication, task creation, search, filtering, and status tracking. Developed as learning work alongside a NestJS task-management backend.",
    "longDescription": "A React task-management interface with authentication, task creation, search, filtering, and status tracking. Developed as learning work alongside a NestJS task-management backend.",
    "role": "Course-based learning project",
    "impactMetrics": [
      "Task CRUD & filtering",
      "Authenticated API integration"
    ],
    "techStack": [
      "React",
      "Tailwind CSS",
      "Axios",
      "NestJS",
      "TypeORM"
    ],
    "architectureHighlights": [
      "JWT authentication and protected routes.",
      "Task CRUD, search, and status filtering."
    ],
    "featured": true,
    "imageBg": "from-indigo-950 via-purple-900 to-slate-950",
    "githubUrl": "https://github.com/awais-sufi/task-management-frontend"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    "title": "Languages & Frontend",
    "iconName": "Code",
    "skills": [
      {
        "name": "JavaScript (ES6+)"
      },
      {
        "name": "TypeScript"
      },
      {
        "name": "HTML5 & CSS3"
      },
      {
        "name": "React"
      },
      {
        "name": "Next.js"
      },
      {
        "name": "React Native"
      }
    ]
  },
  {
    "title": "UI & State Management",
    "iconName": "Layers",
    "skills": [
      {
        "name": "Tailwind CSS"
      },
      {
        "name": "Redux / Redux Toolkit"
      },
      {
        "name": "Responsive Web Design"
      },
      {
        "name": "API Integration"
      }
    ]
  },
  {
    "title": "Backend & Data",
    "iconName": "Server",
    "skills": [
      {
        "name": "Node.js"
      },
      {
        "name": "NestJS"
      },
      {
        "name": "Express.js"
      },
      {
        "name": "REST APIs"
      },
      {
        "name": "MongoDB"
      },
      {
        "name": "PostgreSQL"
      },
      {
        "name": "SQLite"
      },
      {
        "name": "Supabase"
      },
      {
        "name": "Payload CMS"
      }
    ]
  },
  {
    "title": "Delivery & Collaboration",
    "iconName": "Cpu",
    "skills": [
      {
        "name": "Git / GitHub / GitLab"
      },
      {
        "name": "Jira"
      },
      {
        "name": "Agile / Scrum"
      },
      {
        "name": "Postman"
      },
      {
        "name": "Vercel"
      },
      {
        "name": "CI/CD Basics"
      }
    ]
  }
];

export const ARCHITECTURE_CASES = [
  {
    "id": "client",
    "label": "Client delivery",
    "title": "Responsive interfaces & managed content",
    "summary": "Patterns used in the client projects documented in my resume.",
    "pillars": [
      {
        "title": "Reusable UI",
        "description": "Built 15+ reusable components for Zaz Mart to keep the storefront consistent."
      },
      {
        "title": "Responsive layouts",
        "description": "Designed product presentation and navigation for mobile, tablet, and desktop."
      },
      {
        "title": "Content management",
        "description": "Integrated Payload CMS for Asim Textile so the client can update products and company information."
      }
    ],
    "nodes": [
      "Next.js interfaces",
      "Tailwind CSS components",
      "Payload CMS content",
      "PostgreSQL / SQLite"
    ]
  },
  {
    "id": "api",
    "label": "Backend systems",
    "title": "APIs, authentication & data",
    "summary": "Backend work delivered across client and internal applications at Exeonic.",
    "pillars": [
      {
        "title": "REST API integration",
        "description": "Implemented 15+ endpoints supporting CRUD operations and client-server data flows."
      },
      {
        "title": "Authentication",
        "description": "Implemented JWT-based authentication flows for application access."
      },
      {
        "title": "Database services",
        "description": "Integrated Supabase and PostgreSQL across multiple projects."
      }
    ],
    "nodes": [
      "React / Next.js clients",
      "Node.js / NestJS / Express.js",
      "JWT authentication",
      "Supabase / PostgreSQL"
    ]
  }
];

export const ASSISTANT_INTRO = `Hello! I am ${PERSONAL_INFO.name}'s portfolio assistant. Ask about the experience, projects, skills, or education documented here.`;
export const ASSISTANT_PROMPTS = ["Tell me about Awais's experience", "What is his core stack?", "Tell me about Zaz Mart", "How can I contact Awais?"];
