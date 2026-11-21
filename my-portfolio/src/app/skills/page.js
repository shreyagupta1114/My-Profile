import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import { skillCategories } from "@/data/skills";

export const metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <section className="section page-top">
      <div className="container">
        <SectionHeading
          as="h1"
          eyebrow="Skills"
          title="My technical toolkit"
          subtitle="Languages, frameworks and tools I have used in my projects and internship."
        />
        <div className="grid grid-3">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
