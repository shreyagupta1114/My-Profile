import { User, Heart, Target, BookOpen, Compass, Code, CircleCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import {
  personalInfo,
  techInterests,
  personalInterests,
  careerGoals,
  currentlyLearning,
  currentlyExploring,
} from "@/data/about";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="section page-top">
      <div className="container">
        <SectionHeading
          as="h1"
          eyebrow="About Me"
          title="Get to know me"
          subtitle="A curious learner who enjoys turning ideas into working software."
        />

        <div className="grid grid-2">
          <InfoCard icon={User} title="Who I Am">
            <ul className="check-list">
              {personalInfo.map((item) => (
                <li key={item}>
                  <CircleCheck size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard icon={Target} title="Career Goals">
            <ul className="check-list">
              {careerGoals.map((goal) => (
                <li key={goal}>
                  <CircleCheck size={16} />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard icon={Code} title="Tech Interests">
            <div className="badge-row">
              {techInterests.map((interest) => (
                <span key={interest} className="badge badge-large">{interest}</span>
              ))}
            </div>
          </InfoCard>

          <InfoCard icon={Heart} title="Beyond Code">
            <div className="badge-row">
              {personalInterests.map((interest) => (
                <span key={interest} className="badge badge-large badge-soft">{interest}</span>
              ))}
            </div>
          </InfoCard>

          <InfoCard icon={BookOpen} title="Currently Learning">
            <div className="badge-row">
              {currentlyLearning.map((topic) => (
                <span key={topic} className="badge badge-large">{topic}</span>
              ))}
            </div>
          </InfoCard>

          <InfoCard icon={Compass} title="Currently Exploring">
            <div className="badge-row">
              {currentlyExploring.map((topic) => (
                <span key={topic} className="badge badge-large">{topic}</span>
              ))}
            </div>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
