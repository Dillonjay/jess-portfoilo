import Link from "next/link";
import { type Project } from "@/data/projects";
import ProjectGrid from "@/components/common/ProjectGrid";

interface ProjectFooterProps {
  otherProjects: Project[];
}

export function ProjectFooter({ otherProjects }: ProjectFooterProps) {
  return (
    <section className=" py-20 border-t border-snow-base/20">
      <div>
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-xl font-bold hover:text-snow-dark transition-all duration-300"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span>Take me back</span>
          </Link>
        </div>

        <ProjectGrid
          projects={otherProjects}
          title="Check out my other projects"
        />
      </div>
    </section>
  );
}
