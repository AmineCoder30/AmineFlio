// Import required icons from react-icons
import { FaNodeJs, FaDocker } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpo,
  SiTypescript,
  SiNextdotjs,
  SiSupabase,
} from "react-icons/si";

// Array of technologies with names, icons, specific colors, and size
const technologies = [
  {
    name: "ReactJS / Next.js",
    icon: <SiNextdotjs style={{ color: "#000000", fontSize: "2rem" }} />,
    description:
      "Building modern and interactive user interfaces with scalable component-based architecture.",
    level: "Expert",
    docs: "https://nextjs.org/docs",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss style={{ color: "#06B6D4", fontSize: "2rem" }} />,
    description:
      "Designing clean, responsive, and modern user interfaces efficiently.",
    level: "Expert",
    docs: "https://tailwindcss.com/docs",
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs style={{ color: "#339933", fontSize: "2rem" }} />,
    description:
      "Developing high-performance backend systems and scalable APIs.",
    level: "Expert",
    docs: "https://nodejs.org/en/docs",
  },

  {
    name: "React Native / expo",
    icon: <SiExpo style={{ color: "#000000", fontSize: "2rem" }} />,
    description:
      "Building cross-platform mobile applications with smooth native experiences.",

    level: "Expert",
    docs: "https://docs.expo.dev/",
  },
  {
    name: "Docker",
    icon: <FaDocker style={{ color: "#2496ED", fontSize: "2rem" }} />,
    description:
      "Containerizing applications for reliable development and deployment workflows.",
    level: "Intermediate",
    docs: "https://docs.docker.com/",
  },

  {
    name: "Typescript",
    icon: <SiTypescript style={{ color: "#3178C6", fontSize: "2rem" }} />,
    description:
      "Writing scalable and maintainable applications with strong typing and cleaner code.",
    level: "Intermediate",
    docs: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Supabase",
    icon: <SiSupabase style={{ color: "#3ECF8E", fontSize: "2rem" }} />,
    description:
      "Building modern applications with a powerful open-source backend-as-a-service platform.",
    level: "Intermediate",
    docs: "https://supabase.com/docs",
  },
];

export default technologies;
