import { ReactNode } from "react";

interface ProjectSectionProps {
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function ProjectSection({
  number,
  title,
  children,
  className = "",
}: ProjectSectionProps) {
  return (
    <section className={`pb-24 ${className}`}>
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-baseline gap-4 mb-6">
          <h2 className="text-4xl font-extrabold uppercase">
            {number}. {title}
          </h2>
        </div>
        <div className="border-b border-snow-base/20" />
      </div>

      {/* Section Content */}
      {children}
    </section>
  );
}
