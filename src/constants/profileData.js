import ProjectsData from "./projectsData";
import socialMediaLinks from "./socialMedia";

const profileData = {
  name: "Amine Mohamed",
  role: "Fullstack Developer",
  experienceYears: 5,

  hourlyRate: 25, // USD

  description: `I am a skilled MERN stack developer with 5 years of experience and a
          certificate from the ALX Software Engineering program. I specialize in
          creating intuitive and engaging user experiences, transforming
          innovative ideas into beautifully crafted and functional products. My
          passion lies in delivering cutting-edge solutions that align with user
          needs and industry standards.`,

  technologies: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Supabase",
    "Socket.IO",
    "React Native",
    "Expo",
    "Electron",
    "TypeScript",
    "TailwindCSS",
    "Vite",
    "SQLite",
  ],

  services: [
    "Web Application Development",
    "Mobile App Development (React Native)",
    "SaaS Platforms",
    "API Development",
    "Real-time Applications (WebSockets)",
    "Authentication & Security Systems",
    "Desktop Applications (Electron)",
  ],

  projects: ProjectsData,

  contact: socialMediaLinks,
};

export default profileData;
