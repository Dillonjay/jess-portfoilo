import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectFooter } from "@/components/projects/ProjectFooter";
import { ChallengeSection } from "@/components/projects/ChallengeSection";
import { DefineSection } from "@/components/projects/DefineSection";

// Define the params as expected by Next.js 15
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  // Resolve the params promise
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Get other projects excluding the current one
  const otherProjects = PROJECTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main>
      <ProjectHero project={project} />
      <ChallengeSection project={project} />
      <DefineSection project={project} />
      <ProjectFooter otherProjects={otherProjects} />
    </main>
  );
}
