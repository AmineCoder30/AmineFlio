import { User, Wrench, Briefcase, Phone, SquarePen } from "lucide-react";

const navItems = [
  {
    id: 1,
    name: "About",
    url: "#",
    icon: <User size={20} />,
  },
  {
    id: 2,
    name: "Skills",
    url: "#skills",
    icon: <Wrench size={20} />,
  },
  {
    id: 3,
    name: "Projects",
    url: "#projects",
    icon: <Briefcase size={20} />,
  },
  {
    id: 4,
    name: "Blogs",
    url: "#blogs",
    icon: <SquarePen size={20} />,
  },
  {
    id: 5,
    name: "Contact",
    url: "#contact",
    icon: <Phone size={20} />,
  },
];

export default navItems;
