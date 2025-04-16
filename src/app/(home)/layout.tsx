import Navigation from "@/components/common/Navigation";
import SplineViewer from "@/components/common/SplineViewer";
import { Container } from "@/components/common/Container";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <SplineViewer />
      <div className="relative z-10">
        <Navigation />
        <Container>
          <main>{children}</main>
        </Container>
      </div>
    </div>
  );
}
