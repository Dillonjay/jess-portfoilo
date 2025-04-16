import ProjectLayout from "@/components/common/ProjectLayout";

export default function ProjectPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProjectLayout>{children}</ProjectLayout>;
}
