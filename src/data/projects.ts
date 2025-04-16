export type ProjectSlug = "pondo" | "abea" | "albo" | "freela";

export interface ProjectImage {
  // Card/List view
  thumbnail: string; // Used in project cards (smaller, optimized for grid view)

  // Project page images
  cover: string; // Main project header image (was previously 'hero')
  sections: {
    challenge?: string;
    research?: string[];
    design?: string[];
    outcome?: string[];
  };
}

export interface ProjectDetails {
  role: string;
  team: string;
  deliverables: string;
  timeline: string;
}

export interface Project {
  slug: ProjectSlug;
  company: string;
  title: string;
  subtitle: string;
  description: string;
  details: ProjectDetails;
  images: ProjectImage;
  tags: string[];
  tools: string[];
  time: string;
  minutesToRead: number;
}

// Image paths are type-safe and centralized
const PROJECT_IMAGES: Record<ProjectSlug, ProjectImage> = {
  pondo: {
    thumbnail: "/images/projects/pondo/thumbnail.png",
    cover: "/images/projects/pondo/cover.png",
    sections: {
      challenge: "/images/projects/pondo/challenge.png",
      research: [
        "/images/projects/pondo/research-1.png",
        "/images/projects/pondo/research-2.png",
      ],
      design: [
        "/images/projects/pondo/design-1.png",
        "/images/projects/pondo/design-2.png",
      ],
      outcome: ["/images/projects/pondo/outcome.png"],
    },
  },
  abea: {
    thumbnail: "/images/projects/abea/thumbnail.png",
    cover: "/images/projects/abea/cover.png",
    sections: {
      challenge: "/images/projects/abea/challenge.png",
      research: ["/images/projects/abea/research-1.png"],
      design: ["/images/projects/abea/design-1.png"],
      outcome: ["/images/projects/abea/outcome.png"],
    },
  },
  albo: {
    thumbnail: "/images/projects/albo/thumbnail.png",
    cover: "/images/projects/albo/cover.png",
    sections: {
      challenge: "/images/projects/albo/challenge.png",
      research: ["/images/projects/albo/research-1.png"],
      design: ["/images/projects/albo/design-1.png"],
      outcome: ["/images/projects/albo/outcome.png"],
    },
  },
  freela: {
    thumbnail: "/images/projects/freela/thumbnail.png",
    cover: "/images/projects/freela/cover.png",
    sections: {
      challenge: "/images/projects/freela/challenge.png",
      research: ["/images/projects/freela/research-1.png"],
      design: ["/images/projects/freela/design-1.png"],
      outcome: ["/images/projects/freela/outcome.png"],
    },
  },
} as const;

export const PROJECTS: Project[] = [
  {
    slug: "pondo",
    company: "Pondo",
    title: "App Design 0 to 100",
    subtitle:
      "Transforming sensor data and vision tech into smart, digestible health insights",
    description: "Fintech platform revolutionizing personal finance",
    details: {
      role: "Lead Product Designer – UX/UI, Branding, Strategy",
      team: "Founder, Co founder, Hardware engineer and AI/ML engineer",
      deliverables:
        "Brand Identity, Design system, UX/UI design and end-to-end app",
      timeline: "4 Months ( November 2024)",
    },
    images: PROJECT_IMAGES.pondo,
    tags: ["Fintech", "UI/UX", "Mobile"],
    tools: ["Figma", "React Native", "TypeScript"],
    time: "10 min - Time in case",
    minutesToRead: 10,
  },
  {
    slug: "abea",
    company: "Abea",
    title: "Turning lending into our main revenue",
    subtitle: "Revolutionizing business banking for the modern era",
    description: "Digital banking solution for modern businesses",
    details: {
      role: "Lead Product Designer (Solo designer)",
      team: "Product team of 5",
      deliverables: "End-to-end platform design, User flows, Design System",
      timeline: "6 Months",
    },
    images: PROJECT_IMAGES.abea,
    tags: ["Banking", "Enterprise", "Web"],
    tools: ["Figma", "React", "Node.js"],
    time: "10 min - Time in case",
    minutesToRead: 10,
  },
  {
    slug: "albo",
    company: "Albo",
    title: "Open Market Platform",
    subtitle: "Creating a seamless marketplace experience for digital banking",
    description:
      "Innovative marketplace solution for digital banking customers",
    details: {
      role: "Lead Product Designer (Solo designer)",
      team: "Cross-functional team of 8",
      deliverables: "Marketplace UX/UI, Design System, User Research",
      timeline: "8 Months",
    },
    images: PROJECT_IMAGES.albo,
    tags: ["Marketplace", "FinTech", "Web"],
    tools: ["Figma", "React", "TypeScript"],
    time: "5 min - Time in case",
    minutesToRead: 5,
  },
  {
    slug: "freela",
    company: "Freela",
    title: "Freelancer Platform",
    subtitle: "Empowering freelancers with powerful tools and connections",
    description: "Modern platform connecting freelancers with opportunities",
    details: {
      role: "Lead Product Designer (Solo designer)",
      team: "Startup team of 6",
      deliverables: "Platform Design, User Flows, Design System",
      timeline: "5 Months",
    },
    images: PROJECT_IMAGES.freela,
    tags: ["Platform", "Marketplace", "Web"],
    tools: ["Figma", "Next.js", "TailwindCSS"],
    time: "10 min - Time in case",
    minutesToRead: 10,
  },
];
