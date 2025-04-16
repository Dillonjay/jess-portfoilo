import Image from "next/image";
import Link from "next/link";
import { ClockIcon } from "./Icons";
import { type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({
  project,
  className = "",
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative aspect-[4/3] overflow-hidden rounded-lg ${className}`}
    >
      <Image
        src={project.images.thumbnail}
        alt={project.title}
        fill
        className="object-cover transition-all duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black transition-all duration-300 delay-150 bg-opacity-0 group-hover:bg-opacity-75 flex items-end">
        <div className="space-y-1 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-150 translate-y-4 group-hover:translate-y-0 p-6">
          <h3 className="text-3xl font-bold">{project.title}</h3>
          <div className="flex font-light items-center gap-2">
            <ClockIcon className="w-4 h-4" />
            <span>{project.minutesToRead} min read</span>
          </div>
          <p className="font-light">
            <span className="font-bold">My Role:</span> {project.details.role}
          </p>
        </div>
      </div>
    </Link>
  );
}
