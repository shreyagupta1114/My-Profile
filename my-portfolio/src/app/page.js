import Link from "next/link";
import { ArrowRight, Mail, User, Sparkles, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);
  
  const skillOverview = skillCategories.slice(0, 4);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-content fade-up">
            <span className="hero-tag">
              Open to internships &amp; hackathons
            </span>
            <h1 className="hero-title">
              Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
            </h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-intro">{profile.intro}</p>

            <div className="hero-actions">
              <Link href="/projects" className="btn btn-primary">
                View Projects <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                <Mail size={18} /> Contact Me
              </Link>
            </div>

            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href={profile.linkedin} className="icon-button" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href={`mailto:${profile.email}`} className="icon-button" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {}
          <div className="hero-visual fade-up delay-1">
            <div className="avatar-ring">
              <div className="avatar-placeholder">
                <User size={72} strokeWidth={1.25} />
                
              </div>
            </div>
            <div className="hero-card glass">
              <MapPin size={16} />
              <span>B.E. Computer Science &amp; Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Featured projects ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Work"
            title="Selected Projects"
            subtitle="A few things I have built and worked on recently."
          />
          <div className="grid grid-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
          <div className="center-action">
            <Link href="/projects" className="btn btn-outline">
              See all projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Skills overview ---------- */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Toolkit"
            title="Skills Overview"
            subtitle="Languages and technologies I work with."
          />
          <div className="grid grid-4">
            {skillOverview.map((category) => (
              <div key={category.title} className="card overview-card">
                <h3>{category.title}</h3>
                <div className="badge-row">
                  {category.skills.map((skill) => (
                    <span key={skill} className="badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="center-action">
            <Link href="/skills" className="btn btn-outline">
              View all skills <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
