import Image from "next/image";
import { type Project } from "@/data/projects";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="space-y-5 mb-16">
        <h2 className="text-3xl font-extrabold text-snow-base">
          {project.company}
        </h2>
        <h1 className="text-5xl font-bold text-snow-base">{project.title}</h1>
        <p className="text-3xl text-snow-base">{project.subtitle}</p>
      </div>

      {/* Cover Image */}
      <div className="aspect-[16/9] mb-24 overflow-hidden relative rounded-lg">
        <Image
          src={project.images.cover}
          alt={`${project.title} cover image`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Project Details Grid */}
      <div className="grid grid-cols-4 gap-x-8 pb-24">
        <div className="col-span-1">
          <h3 className="text-2xl font-bold mb-2">My Role:</h3>
          <p className="text-sm leading-relaxed">{project.details.role}</p>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl font-bold mb-2">Team:</h3>
          <p className="text-sm leading-relaxed">{project.details.team}</p>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl font-bold mb-2">Deliverables:</h3>
          <p className="text-sm leading-relaxed">
            {project.details.deliverables}
          </p>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl font-bold mb-2">Timeline:</h3>
          <p className="text-sm leading-relaxed">{project.details.timeline}</p>
        </div>
      </div>
    </section>
  );
}
