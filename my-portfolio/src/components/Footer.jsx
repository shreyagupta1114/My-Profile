import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, navLinks } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>{profile.name}</h3>
          <p>{profile.shortBio}</p>
          <div className="social-row">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={profile.linkedin} className="icon-button" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="icon-button" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4>Navigation</h4>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Get in touch</h4>
          <ul className="footer-links">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a href={profile.linkedin}>LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
