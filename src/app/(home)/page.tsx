import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import References from "@/components/sections/References";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <References />
      </div>
      <div>
        <Contact />
      </div>
    </main>
  );
}
