import { Droplets, Wrench, Palette, Clock, FolderGit2, ExternalLink, CircleCheck } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

const projectIcons = {
  droplets: Droplets,
  wrench: Wrench,
  palette: Palette,
  clock: Clock,
};

// Turns "In Development" into "in-development" for a CSS class.
function statusClass(status) {
  return "status-" + status.toLowerCase().replace(/\s+/g, "-");
}

// A link is "available" when it is not empty and not just "#".
function hasLink(url) {
  return Boolean(url) && url !== "#";
}

// compact = true hides the feature list (used on the home page).
export default function ProjectCard({ project, compact = false }) {
  const Icon = projectIcons[project.icon] || FolderGit2;

  return (
    <article className="card project-card">
      <div className="project-top">
        <div className="icon-tile">
          <Icon size={24} />
        </div>
        <span className={`status-badge ${statusClass(project.status)}`}>{project.status}</span>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      {!compact && (
        <div className="project-features">
          <h4>Key Features</h4>
          <ul className="check-list">
            {project.features.map((feature) => (
              <li key={feature}>
                <CircleCheck size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="badge-row">
        {project.technologies.map((tech) => (
          <span key={tech} className="badge">{tech}</span>
        ))}
      </div>

      <div className="project-actions">
        {hasLink(project.github) ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-primary">
            <GithubIcon size={16} /> GitHub
          </a>
        ) : (
          <span className="btn btn-small btn-disabled" title="Link coming soon">
            <GithubIcon size={16} /> GitHub — coming soon
          </span>
        )}

        {hasLink(project.liveDemo) ? (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">
            <ExternalLink size={16} /> Live Demo
          </a>
        ) : (
          <span className="btn btn-small btn-disabled">
            <ExternalLink size={16} /> Not deployed yet
          </span>
        )}
      </div>
    </article>
  );
}
