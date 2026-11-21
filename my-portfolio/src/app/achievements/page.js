import { Briefcase, Trophy, Award, Flag, Plus, CircleCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import { internship, hackathons, certifications, milestones } from "@/data/achievements";

export const metadata = { title: "Achievements" };

function PointList({ points }) {
  return (
    <ul className="check-list">
      {points.map((point) => (
        <li key={point}>
          <CircleCheck size={16} />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AchievementsPage() {
  return (
    <section className="section page-top">
      <div className="container">
        <SectionHeading
          as="h1"
          eyebrow="Achievements"
          title="Milestones so far"
          subtitle="Internships, hackathons, certifications and project milestones."
        />

        <div className="grid grid-2">
          <InfoCard icon={Briefcase} title="Internship Experience">
            <p className="card-label">{internship.title}</p>
            <PointList points={internship.points} />
          </InfoCard>

          <InfoCard icon={Trophy} title="Hackathon Participation">
            {hackathons.map((hackathon) => (
              <div key={hackathon.title}>
                <p className="card-label">{hackathon.title}</p>
                <PointList points={hackathon.points} />
              </div>
            ))}
          </InfoCard>
        </div>

        {/* Certifications */}
        <div className="subsection">
          <h2 className="subsection-title">
            <Award size={22} /> Certifications
          </h2>
          <div className="grid grid-3">
            {certifications.map((cert, index) =>
              cert.placeholder ? (
                <div key={index} className="card cert-card cert-placeholder">
                  <Plus size={22} />
                  <div>
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
              ) : (
                <div key={index} className="card cert-card">
                  <div className="icon-tile">
                    <Award size={22} />
                  </div>
                  <div>
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Project milestones timeline */}
        <div className="subsection">
          <h2 className="subsection-title">
            <Flag size={22} /> Project Milestones
          </h2>
          <div className="timeline">
            {milestones.map((milestone) => (
              <div key={milestone} className="timeline-item">
                <div className="timeline-dot timeline-dot-small" />
                <div className="card timeline-card milestone-card">
                  <p>{milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
