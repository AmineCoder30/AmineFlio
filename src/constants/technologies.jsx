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
  SiNextdotjs,
} from "react-icons/si";

// Array of technologies with names, icons, specific colors, and size
const technologies = [
  {
    name: "HTML",
    icon: <FaHtml5 style={{ color: "#E34F26", fontSize: "2rem" }} />,
    description:
      "HTML (HyperText Markup Language) is the standard language for creating and structuring content on the web. It defines the structure of web pages using elements such as headings, paragraphs, links, images, and more.",
    level: "Expert",
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript style={{ color: "#F7DF1E", fontSize: "2rem" }} />,
    description:
      "JavaScript is a versatile, high-level programming language that enables interactive and dynamic features on websites, such as animations, form validation, and asynchronous data fetching.",
    level: "Expert",
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt style={{ color: "#1572B6", fontSize: "2rem" }} />,
    description:
      "CSS (Cascading Style Sheets) is used to style and layout web pages, controlling the appearance of elements including colors, fonts, spacing, and responsiveness.",
    level: "Expert",
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "ReactJS",
    icon: <FaReact style={{ color: "#61DAFB", fontSize: "2rem" }} />,
    description:
      "ReactJS is a popular JavaScript library for building user interfaces, especially single-page applications. It enables developers to create reusable UI components and manage application state efficiently.",
    level: "Expert",
    docs: "https://react.dev/",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss style={{ color: "#06B6D4", fontSize: "2rem" }} />,
    description:
      "TailwindCSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup, enabling rapid and consistent UI development.",
    level: "Expert",
    docs: "https://tailwindcss.com/docs",
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs style={{ color: "#339933", fontSize: "2rem" }} />,
    description:
      "Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server side, enabling scalable backend development and real-time applications.",
    level: "Expert",
    docs: "https://nodejs.org/en/docs",
  },
  {
    name: "ExpressJS",
    icon: <SiExpress style={{ color: "#000000", fontSize: "2rem" }} />,
    description:
      "ExpressJS is a minimal and flexible Node.js web application framework that provides robust features for building APIs and web servers quickly and efficiently.",
    level: "Expert",
    docs: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb style={{ color: "#47A248", fontSize: "2rem" }} />,
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it ideal for handling large volumes of unstructured or semi-structured data.",
    level: "Expert",
    docs: "https://www.mongodb.com/docs/",
  },
  {
    name: "Docker",
    icon: <FaDocker style={{ color: "#2496ED", fontSize: "2rem" }} />,
    description:
      "Docker is a platform for developing, shipping, and running applications inside lightweight containers, ensuring consistency across different environments and simplifying deployment.",
    level: "Beginner",
    docs: "https://docs.docker.com/",
  },
  {
    name: "Figma",
    icon: <SiFigma style={{ color: "#F24E1E", fontSize: "2rem" }} />,
    description:
      "Figma is a collaborative design tool used for creating user interfaces, prototypes, and graphics. It enables real-time collaboration and streamlines the design-to-development workflow.",
    level: "Intermediate",
    docs: "https://help.figma.com/hc/en-us",
  },
  {
    name: "Python",
    icon: <FaPython style={{ color: "#3776AB", fontSize: "2rem" }} />,
    description:
      "Python is a powerful, high-level programming language known for its readability and versatility. It is widely used in web development, data science, automation, and more.",
    level: "Intermediate",
    docs: "https://docs.python.org/3/",
  },
  {
    name: "Redux",
    icon: <SiRedux style={{ color: "#764ABC", fontSize: "2rem" }} />,
    description:
      "Redux is a predictable state management library for JavaScript applications, commonly used with React to manage and centralize application state across components.",
    level: "Intermediate",
    docs: "https://redux.js.org/",
  },
  {
    name: "Typescript",
    icon: <SiTypescript style={{ color: "#3178C6", fontSize: "2rem" }} />,
    description:
      "TypeScript is a strongly typed superset of JavaScript that adds static typing and advanced features, helping developers catch errors early and build scalable applications.",
    level: "Intermediate",
    docs: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs style={{ color: "#000000", fontSize: "2rem" }} />,
    description:
      "Next.js is a React framework for building fast, scalable web applications with features like server-side rendering, static site generation, and API routes.",
    level: "Beginner",
    docs: "https://nextjs.org/docs",
  },
];

export default technologies;
