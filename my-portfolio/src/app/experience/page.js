import { Briefcase, CircleCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/data/experience";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <section className="section page-top">
      <div className="container container-narrow">
        <SectionHeading
          as="h1"
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Hands-on experience building backend APIs and working with databases."
        />

        <div className="timeline">
          {experiences.map((job) => (
            <div key={job.role + job.company} className="timeline-item">
              <div className="timeline-dot">
                <Briefcase size={18} />
              </div>

              <article className="card timeline-card">
                <h3 className="timeline-role">{job.role}</h3>
                <p className="timeline-company">{job.company}</p>
                <p className="timeline-description">{job.description}</p>

                <h4 className="card-subheading">Key Responsibilities &amp; Learning</h4>
                <ul className="check-list check-list-2col">
                  {job.responsibilities.map((item) => (
                    <li key={item}>
                      <CircleCheck size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="card-subheading">Technologies</h4>
                <div className="badge-row">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="badge">{tech}</span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
