import { ReactNode } from "react";
import Navigation from "./Navigation";
import { Container } from "./Container";

interface BaseLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function BaseLayout({ children, className }: BaseLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-graphite-darker relative">
      <Navigation className="bg-graphite-base/95" />
      <Container>
        <main
          className={`w-full pt-[var(--content-top-spacing)] ${
            className ?? ""
          }`}
        >
          {children}
        </main>
      </Container>
    </div>
  );
}
