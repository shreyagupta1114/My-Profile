"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, FolderGit2, Briefcase, Code, Trophy, Mail, Menu, X } from "lucide-react";
import { navLinks } from "@/data/profile";

// One icon per nav item, matched by href.
const navIcons = {
  "/about": User,
  "/projects": FolderGit2,
  "/experience": Briefcase,
  "/skills": Code,
  "/achievements": Trophy,
  "/contact": Mail,
};

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <nav className="navbar-inner container" aria-label="Main navigation">
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-mark">SG</span>
          <span className="logo-text">Shreya Gupta</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => {
            const Icon = navIcons[link.href];
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMenu}
                >
                  <Icon size={16} />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
