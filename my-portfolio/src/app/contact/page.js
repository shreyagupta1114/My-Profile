import { Mail, Phone, User } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { profile } from "@/data/profile";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  const contactItems = [
    { icon: <User size={20} />, label: "Name", value: profile.name },
    { icon: <Mail size={20} />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone size={20} />, label: "Phone", value: profile.phone, href: `tel:+91${profile.phone}` },
    { icon: <GithubIcon size={20} />, label: "GitHub", value: "github.com/shreyagupta1114", href: profile.github, external: true },
    { icon: <LinkedinIcon size={20} />, label: "LinkedIn", value: "https://www.linkedin.com/in/shreya-gupta-34467636a/", href: profile.linkedin },
  ];

  return (
    <section className="section page-top">
      <div className="container">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Let's connect"
          subtitle="Have an opportunity, a hackathon team, or just want to say hi? My inbox is open."
        />

        <div className="contact-grid">
          <div className="card contact-info">
            <h3>Contact Information</h3>
            <ul className="contact-list">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <div className="icon-tile">{item.icon}</div>
                  <div>
                    <span className="contact-label">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="contact-value"
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
