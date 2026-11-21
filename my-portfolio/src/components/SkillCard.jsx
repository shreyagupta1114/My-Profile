import { Code, Globe, Server, Database, Wrench, BookOpen, Sparkles } from "lucide-react";

const skillIcons = {
  code: Code,
  globe: Globe,
  server: Server,
  database: Database,
  wrench: Wrench,
  book: BookOpen,
};

export default function SkillCard({ category }) {
  const Icon = skillIcons[category.icon] || Sparkles;

  return (
    <article className="card skill-card">
      <div className="skill-card-header">
        <div className="icon-tile">
          <Icon size={22} />
        </div>
        <h3>{category.title}</h3>
      </div>
      <div className="badge-row">
        {category.skills.map((skill) => (
          <span key={skill} className="badge badge-large">{skill}</span>
        ))}
      </div>
    </article>
  );
}
