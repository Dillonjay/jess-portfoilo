"use client";

import Image from "next/image";
import Link from "next/link";
import { ClockIcon } from "../common/Icons";

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Build a product from 0-100",
    description: "",
    image: "/images/project-pondo.png",
    slug: "pondo",
    role: "Lead Product designer (Solo designer)",
    time: "10 min - Time in case",
    minutesToRead: 10,
  },
  {
    id: 2,
    title: "Turning lending in to our main revenue",
    description: "",
    image: "/images/project-abea.png",
    slug: "abea",
    role: "Lead Product designer (Solo designer)",
    time: "10 min - Time in case",
    minutesToRead: 10,
  },
  {
    id: 3,
    title: "Open Market - abea",
    description: "",
    image: "/images/project-albo.png",
    slug: "albo",
    role: "Lead Product designer (Solo designer)",
    time: "5 min - Time in case",
    minutesToRead: 5,
  },
  {
    id: 4,
    title: "Freela Website",
    description: "",
    image: "/images/project-freela.png",
    slug: "freela",
    role: "Lead Product designer (Solo designer)",
    time: "10 min - Time in case",
    minutesToRead: 10,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-20 uppercase">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black transition-all duration-300 delay-150 bg-opacity-0 group-hover:bg-opacity-75 flex items-end">
                <div className="space-y-1 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-150 translate-y-4 group-hover:translate-y-0 p-6">
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <div className="flex font-light items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    <span>{project.time}</span>
                  </div>
                  <p className="font-light">
                    <span className="font-bold">My Role:</span> {project.role}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
