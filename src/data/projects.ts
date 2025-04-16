export type ProjectSlug = "pondo" | "abea" | "albo" | "freela";

export interface ProjectImage {
  // Card/List view
  thumbnail: string; // Used in project cards (smaller, optimized for grid view)

  // Project page images
  cover: string; // Main project header image (was previously 'hero')
  sections: {
    challenge?: string;
    define?: {
      brandAnalysis: string;
      styleGuide: string;
    };
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

export interface ShowcaseSection {
  description: string;
  highlightedText: string;
  conclusion: string;
  demo?: {
    gif: string;
    alt: string;
    caption: string;
  };
}

export interface ProjectSection {
  title: string;
  description: string[];
  showcase?: ShowcaseSection;
}

export interface DefineSection {
  title: string;
  description: string[];
  number?: string;
  brandAnalysis?: {
    header: string;
    catchPhrase: string;
    description: string[];
    visual: {
      image: string;
      alt: string;
    };
  };
  styleGuide?: {
    header: string;
    catchPhrase: string;
    description: string[];
    visual: {
      image: string;
      alt: string;
    };
  };
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
  sections: {
    challenge: ProjectSection;
    define: DefineSection;
  };
}

export const PROJECTS = [
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
    images: {
      thumbnail: "/images/projects/pondo/thumbnail.png",
      cover: "/images/projects/pondo/cover.png",
      sections: {
        challenge: "/images/projects/pondo/challenge.png",
        define: {
          brandAnalysis: "/images/projects/pondo/brand-analysis.png",
          styleGuide: "/images/projects/pondo/style-guide.png",
        },
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
    tags: ["Fintech", "UI/UX", "Mobile"],
    tools: ["Figma", "React Native", "TypeScript"],
    time: "10 min - Time in case",
    minutesToRead: 10,
    sections: {
      challenge: {
        title: "Ambitious timeline, and the stakes were high.",
        description: [
          "The mission was ambitious: design the first MVP for Pondo app.",
          "I joined a fast-moving team building one of the first AI technologies that interprets your bathroom sessions (yep, we're talking pee and poop) and turns them into personalized health insights. Weird? A little. Brilliant? Absolutely. This tech has the power to prevent, track, and improve people's health.",
          "I was sold. The vision felt bold, the product had massive potential, and it aligned perfectly with trends shaping the future of health tech. Plus, there was a blank canvas waiting for design, and few things get me more excited than the chance to build something meaningful from the ground up.",
        ],
        showcase: {
          description: "The team was deep into hardware development.",
          highlightedText:
            "some super basic screens to test if the device was working.",
          conclusion: "This is what they were working with.",
          demo: {
            gif: "/demos/pondo/challenge-login.gif",
            alt: "Initial basic login screen of Pondo app",
            caption: "Initial test screens",
          },
        },
      },
      define: {
        number: "02",
        title: "Define",
        description: [
          "Before diving into the visual design, we needed to establish a clear brand direction that would resonate with our target users.",
          "Through extensive research and analysis, we developed a brand strategy that would position Pondo as both premium and approachable.",
        ],
        brandAnalysis: {
          header: "BRAND ANALYSIS",
          catchPhrase: "Ok... But let's make it iconic.",
          description: [
            "Before jumping into colors and logos, I needed to deeply understand the vibe we were going for. Who's our user? Who would spend $400 on a device that scans your... well, bathroom moments? So I went deep into trend research and benchmarked across health tech products. Our mission was clear: build a brand that feels innovative, premium, and minimal — something that sparks confidence. This isn't a device you hide. It's one you proudly display because it says: \"Yeah, this is how much I care about my health and I got good taste!\"",
          ],
          visual: {
            image: "/images/projects/pondo/brand-analysis.png",
            alt: "Pondo app screens showing the modern, premium interface",
          },
        },
        styleGuide: {
          header: "STYLE GUIDE",
          catchPhrase: "And... how are we doing that?",
          description: [
            "To make Pondo feel premium without feeling clinical, I built a visual system rooted in simplicity and clarity. Muted neutrals keep things clean, while aqua and blue accents add just enough personality. The palette feels smart, fresh, and approachable.",
            "We used Inter typography for its modern feel and versatility — one typeface, multiple weights, minimal fuss. Icons? Just like the rest: linear, rounded, and clean. Simple by design.",
          ],
          visual: {
            image: "/images/projects/pondo/style-guide.png",
            alt: "Pondo's visual system showing typography, colors, and design elements",
          },
        },
      },
    },
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
    images: {
      thumbnail: "/images/projects/abea/thumbnail.png",
      cover: "/images/projects/abea/cover.png",
      sections: {
        challenge: "/images/projects/abea/challenge.png",
        define: {
          brandAnalysis: "/images/projects/abea/brand-analysis.png",
          styleGuide: "/images/projects/abea/style-guide.png",
        },
        research: ["/images/projects/abea/research-1.png"],
        design: ["/images/projects/abea/design-1.png"],
        outcome: ["/images/projects/abea/outcome.png"],
      },
    },
    tags: ["Banking", "Enterprise", "Web"],
    tools: ["Figma", "React", "Node.js"],
    time: "10 min - Time in case",
    minutesToRead: 10,
    sections: {
      challenge: {
        title: "The Challenge",
        description: [
          "Design an efficient scheduling system that works for both healthcare providers and patients.",
          "Create an interface that simplifies complex scheduling requirements.",
        ],
        showcase: {
          description:
            "We needed to make healthcare scheduling as simple as booking a restaurant.",
          highlightedText:
            "How might we simplify healthcare scheduling while maintaining compliance?",
          conclusion:
            "By focusing on user needs and regulatory requirements, we created an intuitive scheduling system.",
          demo: {
            gif: "/demos/abea/challenge-login.gif",
            alt: "Abea scheduling system demo",
            caption: "The final scheduling experience",
          },
        },
      },
      define: {
        title: "Define",
        description: [
          "Research revealed that both providers and patients struggled with existing scheduling systems.",
          "We identified key opportunities to streamline the scheduling process while maintaining HIPAA compliance.",
        ],
      },
    },
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
    images: {
      thumbnail: "/images/projects/albo/thumbnail.png",
      cover: "/images/projects/albo/cover.png",
      sections: {
        challenge: "/images/projects/albo/challenge.png",
        define: {
          brandAnalysis: "/images/projects/albo/brand-analysis.png",
          styleGuide: "/images/projects/albo/style-guide.png",
        },
        research: ["/images/projects/albo/research-1.png"],
        design: ["/images/projects/albo/design-1.png"],
        outcome: ["/images/projects/albo/outcome.png"],
      },
    },
    tags: ["Marketplace", "FinTech", "Web"],
    tools: ["Figma", "React", "TypeScript"],
    time: "5 min - Time in case",
    minutesToRead: 5,
    sections: {
      challenge: {
        title: "The Challenge",
        description: [
          "Create an intuitive expense tracking system that users will actually use.",
          "Design clear visualizations for financial data.",
        ],
        showcase: {
          description:
            "We aimed to make personal finance management accessible to everyone.",
          highlightedText:
            "How might we make expense tracking engaging and insightful?",
          conclusion:
            "Through careful design iterations, we created a system that users love to engage with daily.",
          demo: {
            gif: "/demos/albo/challenge-login.gif",
            alt: "Albo expense tracking demo",
            caption: "The final expense tracking experience",
          },
        },
      },
      define: {
        title: "Define",
        description: [
          "User research showed that most people abandon expense tracking apps due to complexity.",
          "We identified opportunities to simplify the tracking process while providing valuable insights.",
        ],
      },
    },
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
    images: {
      thumbnail: "/images/projects/freela/thumbnail.png",
      cover: "/images/projects/freela/cover.png",
      sections: {
        challenge: "/images/projects/freela/challenge.png",
        define: {
          brandAnalysis: "/images/projects/freela/brand-analysis.png",
          styleGuide: "/images/projects/freela/style-guide.png",
        },
        research: ["/images/projects/freela/research-1.png"],
        design: ["/images/projects/freela/design-1.png"],
        outcome: ["/images/projects/freela/outcome.png"],
      },
    },
    tags: ["Platform", "Marketplace", "Web"],
    tools: ["Figma", "Next.js", "TailwindCSS"],
    time: "10 min - Time in case",
    minutesToRead: 10,
    sections: {
      challenge: {
        title: "The Challenge",
        description: [
          "Design a comprehensive yet simple system for freelancers to manage their business.",
          "Create an interface that handles complex workflows without overwhelming users.",
        ],
        showcase: {
          description:
            "We needed to simplify business management for freelancers.",
          highlightedText:
            "How might we help freelancers focus on their work instead of administrative tasks?",
          conclusion:
            "By streamlining common tasks, we helped freelancers save hours each week on business management.",
          demo: {
            gif: "/demos/freela/challenge-login.gif",
            alt: "Freela business management demo",
            caption: "The final business management experience",
          },
        },
      },
      define: {
        title: "Define",
        description: [
          "Research showed that freelancers spend too much time on administrative tasks.",
          "We identified key opportunities to automate and simplify business management workflows.",
        ],
      },
    },
  },
] as const;

// Helper to get image paths for a project
export const getProjectImages = (slug: ProjectSlug) => {
  const project = PROJECTS.find((p) => p.slug === slug);
  return project?.images;
};
