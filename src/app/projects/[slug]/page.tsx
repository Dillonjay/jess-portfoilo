import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const PROJECTS = [
  {
    slug: "pondo",
    title: "Pondo",
    description: "Fintech platform revolutionizing personal finance",
    image: "/images/project-pondo.png",
    content: "<p>Detailed description of the Pondo project...</p>",
    tags: ["Fintech", "UI/UX", "Mobile"],
    tools: ["Figma", "React Native", "TypeScript"]
  },
  {
    slug: "abea",
    title: "Abea",
    description: "Digital banking solution for modern businesses",
    image: "/images/project-abea.png",
    content: "<p>Detailed description of the Abea project...</p>",
    tags: ["Banking", "Enterprise", "Web"],
    tools: ["Figma", "React", "Node.js"]
  },
  {
    slug: "albo",
    title: "Albo",
    description: "Mexico's leading neobank",
    image: "/images/project-albo.png",
    content: "<p>Detailed description of the Albo project...</p>",
    tags: ["Fintech", "Mobile", "Banking"],
    tools: ["Figma", "Swift", "Kotlin"]
  },
  {
    slug: "freela",
    title: "Freela",
    description: "Freelancer management platform",
    image: "/images/project-freela.png",
    content: "<p>Detailed description of the Freela project...</p>",
    tags: ["SaaS", "Productivity", "Web"],
    tools: ["Figma", "React", "Python"]
  }
];

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-lg text-gray-600">{project.description}</p>
        </header>

        <div className="relative aspect-w-16 aspect-h-9 mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tools Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
} 