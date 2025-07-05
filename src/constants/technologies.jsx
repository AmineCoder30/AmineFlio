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
  SiTypescript,
} from "react-icons/si";

// Array of technologies with names, icons, specific colors, and size
const technologies = [
  {
    name: "HTML",
    icon: <FaHtml5 style={{ color: "#E34F26", fontSize: "2rem" }} />,
    description: "markup language",
    rating: 5.0,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript style={{ color: "#F7DF1E", fontSize: "2rem" }} />,
    description: "programming language",
    rating: 5.0,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt style={{ color: "#1572B6", fontSize: "2rem" }} />,
    description: "styling sheets",
    rating: 5.0,
  },
  {
    name: "ReactJS",
    icon: <FaReact style={{ color: "#61DAFB", fontSize: "2rem" }} />,
    description: "UI library",
    rating: 5.0,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss style={{ color: "#06B6D4", fontSize: "2rem" }} />,
    description: "utility framework",
    rating: 4.5,
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs style={{ color: "#339933", fontSize: "2rem" }} />,
    description: "runtime environment",
    rating: 4.5,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress style={{ color: "white", fontSize: "2rem" }} />,
    description: "web framework",
    rating: 4.5,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb style={{ color: "#47A248", fontSize: "2rem" }} />,
    description: "NoSQL database",
    rating: 4.0,
  },
  {
    name: "Docker",
    icon: <FaDocker style={{ color: "#2496ED", fontSize: "2rem" }} />,
    description: "container platform",
    rating: 3.5,
  },
  {
    name: "Figma",
    icon: <SiFigma style={{ color: "#F24E1E", fontSize: "2rem" }} />,
    description: "design tool",
    rating: 4.5,
  },
  {
    name: "Python",
    icon: <FaPython style={{ color: "#3776AB", fontSize: "2rem" }} />,
    description: "general-purpose language",
    rating: 4.0,
  },
  {
    name: "Redux",
    icon: <SiRedux style={{ color: "#764ABC", fontSize: "2rem" }} />,
    description: "state management",
    rating: 4.0,
  },
  {
    name: "Typescript",

    icon: <SiTypescript style={{ color: "#3178C6", fontSize: "2rem" }} />,
    description: "typed superset of JavaScript",
    rating: 4.0,
  },
];

export default technologies;
