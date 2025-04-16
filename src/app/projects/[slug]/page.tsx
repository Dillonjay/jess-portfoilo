import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectFooter } from "@/components/projects/ProjectFooter";

interface ProjectDetailsPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  // Await the params object
  const { slug } = await params;

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Get other projects excluding the current one
  const otherProjects = PROJECTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main>
      <ProjectHero project={project} />

      {/* The Challenge Section */}
      <section className="containe6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Challenge breakdown text goes here...
              </p>
              <div className="aspect-[4/3] bg-graphite-base rounded-lg">
                {/* Phone image will go here */}
              </div>
            </div>
            <div>
              <p className="text-lg leading-relaxed">
                Additional paragraph about the challenge...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Define Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Define</h2>

          {/* Brand Analysis */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Brand Analysis</h3>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  Brand analysis breakdown...
                </p>
              </div>
              <div className="aspect-video bg-graphite-base rounded-lg">
                {/* Brand analysis image */}
              </div>
            </div>
          </div>

          {/* Style Guide */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Style Guide</h3>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Style guide breakdown...
              </p>
              <div className="aspect-video bg-graphite-base rounded-lg">
                {/* Style guide image */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Structure</h2>
          {/* Structure sections will be added here */}
        </div>
      </section>

      {/* Design Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Design</h2>
          {/* Design sections will be added here */}

          {/* Zigzag Section */}
          <div className="space-y-16 mt-16">
            <div className="grid grid-cols-2 gap-12 items-center">
              <div className="aspect-video bg-graphite-base rounded-lg">
                {/* First zigzag image */}
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  First zigzag text content...
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed">
                  Second zigzag text content...
                </p>
              </div>
              <div className="aspect-video bg-graphite-base rounded-lg">
                {/* Second zigzag image */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectFooter otherProjects={otherProjects} />
    </main>
  );
}
