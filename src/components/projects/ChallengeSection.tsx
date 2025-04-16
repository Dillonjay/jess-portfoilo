import { ProjectSection as Section } from "./ProjectSection";
import PhoneFrame from "../common/PhoneFrame";
import { type Project } from "@/data/projects";

interface ChallengeSectionProps {
  project: Project;
}

export function ChallengeSection({ project }: ChallengeSectionProps) {
  const { title, description, showcase } = project.sections.challenge;

  return (
    <Section number="01" title="Challenge">
      <div className="space-y-16">
        {/* Main Challenge */}
        <div>
          <h3 className="text-3xl font-bold mb-8">{title}</h3>
          <div className="space-y-4">
            {description.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-relaxed text-snow-base/80"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Phone Demo Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="text-center">
              <PhoneFrame
                gifSrc={showcase.demo.gif}
                alt={showcase.demo.alt}
                className="max-w-[280px]"
              />
              {showcase.demo.caption && (
                <p className="mt-4 text-sm text-snow-base/60 italic">
                  {showcase.demo.caption}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg font-light leading-relaxed text-snow-base/80">
              {showcase.description}{" "}
              <span className="font-bold">{showcase.highlightedText}</span>.
            </p>
            <p className="text-lg font-light leading-relaxed text-snow-base/80">
              {showcase.conclusion}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
