// Import required icons from react-icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiRedux,
} from "react-icons/si";

// Array of technologies with names, icons, specific colors, and size
const technologies = [
  {
    name: "HTML",
    icon: <FaHtml5 style={{ color: "#E34F26", fontSize: "2rem" }} />,
    description: "markup language",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript style={{ color: "#F7DF1E", fontSize: "2rem" }} />,
    description: "programming language",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt style={{ color: "#1572B6", fontSize: "2rem" }} />,
    description: "styling sheets",
  },
  {
    name: "ReactJS",
    icon: <FaReact style={{ color: "#61DAFB", fontSize: "2rem" }} />,
    description: "UI library",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss style={{ color: "#06B6D4", fontSize: "2rem" }} />,
    description: "utility framework",
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs style={{ color: "#339933", fontSize: "2rem" }} />,
    description: "runtime environment",
  },
  {
    name: "ExpressJS",
    icon: <SiExpress style={{ color: "#000000", fontSize: "2rem" }} />,
    description: "web framework",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb style={{ color: "#47A248", fontSize: "2rem" }} />,
    description: "NoSQL database",
  },
  {
    name: "Docker",
    icon: <FaDocker style={{ color: "#2496ED", fontSize: "2rem" }} />,
    description: "container platform",
  },
  {
    name: "Figma",
    icon: <SiFigma style={{ color: "#F24E1E", fontSize: "2rem" }} />,
    description: "design tool",
  },
  {
    name: "Python",
    icon: <FaPython style={{ color: "#3776AB", fontSize: "2rem" }} />,
    description: "general-purpose language",
  },
  {
    name: "Redux",
    icon: <SiRedux style={{ color: "#764ABC", fontSize: "2rem" }} />,
    description: "state management",
  },
];

export default technologies;
