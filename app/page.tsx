import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsGallary from "@/components/ProjectsGallary";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#030014]">
      <Hero />
      <About />
      <ProjectsGallary />
      <Contact />
    </main>
  );
}
