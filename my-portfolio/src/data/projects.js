// Project data. Use "#" or an empty string for links that are not available yet.
export const projects = [
  {
    id: "jal-raksha",
    title: "Jal Raksha — Groundwater Monitoring Platform",
    status: "Prototype",
    icon: "droplets",
    description:
      "A web-based platform designed to help farmers monitor groundwater levels, water quality, and soil quality while providing information and possible solutions. The platform also aims to connect farmers with government authorities for better groundwater management.",
    technologies: ["Web Development"], 
    features: [
      "Farmer and government-authority interfaces",
      "Water-level, water-quality, and soil-quality data collection",
      "Water management recommendations",
      "Potential integration with government groundwater databases",
    ],
    
    featured: true,
  },
  {
    id: "ac-management",
    title: "AC Management System",
    status: "Developed",
    icon: "wrench",
    description:
      "A service management application designed to streamline AC repair requests, customer management, technician allocation, and service tracking.",
    technologies: ["Node.js", "Express.js", "MySQL", "React", "JWT"],
    features: [
      "User authentication and role-based access",
      "Customer and service request management",
      "Technician assignment based on workload",
      "CRUD operations for managing repair records",
      "Database integration with MySQL",
    ],
    github: "https://github.com/shreyagupta1114/AC-Management",
    featured: true,
  },
  {
    id: "osco",
    title: "Osco — Digital Market Access for Local Artisans",
    status: "Hackathon Project",
    icon: "palette",
    description:
      "A platform developed for SIH focused on improving digital market access for local artisans in Coastal Karnataka, particularly artisans working with traditional crafts.",
    technologies: ["React", "Vite", "JavaScript", "Node.js", "Express.js", "SQLite"],
    features: [
      "Artisan and product management",
      "Product listings and image uploads",
      "Craft stories",
      "Meet the Maker section",
      "Promoting traditional crafts through digital platforms",
      "Preserving local craft heritage while expanding market reach",
    ],
    github: "https://github.com/shreyagupta1114/Osco-2026",
    featured: true,
  },
  {
    id: "one-hour-task-matcher",
    title: "One-Hour Task Matcher",
    status: "In Development",
    icon: "clock",
    description:
      "A platform designed to connect students with NGOs and community organizations that need help with small, time-based tasks. The idea is to make volunteering accessible to students who may not have the time for long-term commitments.",
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    features: [
      "Volunteer and organization registration",
      "Task listings with specific time requirements",
      "Matching tasks based on skills and availability",
      "Application and scheduling system",
      "Volunteer hours and task completion tracking",
    ],
    github: "https://github.com/shreyagupta1114/Milestone-1.git", 
        featured: false,
  },
];
