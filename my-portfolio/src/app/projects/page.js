import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <section className="section page-top">
      <div className="container">
        <SectionHeading
          as="h1"
          eyebrow="Projects"
          title="Things I've built"
          subtitle="From hackathon ideas to full-stack applications — here is what I have been working on."
        />
        <div className="grid grid-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
