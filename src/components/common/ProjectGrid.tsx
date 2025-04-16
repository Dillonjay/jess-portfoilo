import { type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  title?: string;
  className?: string;
}

export default function ProjectGrid({
  projects,
  title,
  className = "",
}: ProjectGridProps) {
  return (
    <div className={className}>
      {title && <h2 className="text-3xl font-bold mb-12">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
