import { ReactNode } from "react";
import BaseLayout from "./BaseLayout";

interface ProjectLayoutProps {
  children: ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return <BaseLayout>{children}</BaseLayout>;
}
