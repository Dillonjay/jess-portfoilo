import { ProjectSection as Section } from "./ProjectSection";
import { type Project } from "@/data/projects";
import Image from "next/image";

interface DefineSectionProps {
  project: Project;
}

export function DefineSection({ project }: DefineSectionProps) {
  const { number, title, brandAnalysis, styleGuide } = project.sections.define;

  console.warn("Here is everything", project);

  return (
    <Section number={number ?? ""} title={title}>
      <div className="space-y-24">
        {/* Brand Analysis */}
        {brandAnalysis && (
          <div>
            <div className="space-y-4 mb-8">
              <p className="text-sm font-medium tracking-wider text-snow-base/60 uppercase">
                {brandAnalysis.header}
              </p>
              <h3 className="text-3xl font-bold">
                {brandAnalysis.catchPhrase}
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                {brandAnalysis.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-snow-base/80"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* App Screens */}
              <div className="relative flex justify-center">
                <Image
                  src={brandAnalysis.visual.image}
                  alt={brandAnalysis.visual.alt}
                  width={400}
                  height={500}
                  className="w-auto h-auto scale-[1.8]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Style Guide */}
        {styleGuide && (
          <div>
            <div className="space-y-4 mb-8">
              <p className="text-sm font-medium tracking-wider text-snow-base/60 uppercase">
                {styleGuide.header}
              </p>
              <h3 className="text-3xl font-bold">{styleGuide.catchPhrase}</h3>
            </div>

            <div className="space-y-12">
              {/* Description */}
              <div className="space-y-6">
                {styleGuide.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-snow-base/80"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Visual System */}
              <div className="w-full">
                <Image
                  src={styleGuide.visual.image}
                  alt={styleGuide.visual.alt}
                  width={1200}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
