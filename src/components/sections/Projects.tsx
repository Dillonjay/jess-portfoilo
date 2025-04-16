import { PROJECTS } from "@/data/projects";
import ProjectGrid from "../common/ProjectGrid";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div>
        <h2 className="text-5xl font-bold mb-20 uppercase">Projects</h2>
        <ProjectGrid projects={PROJECTS} />
      </div>
    </section>
  );
}
