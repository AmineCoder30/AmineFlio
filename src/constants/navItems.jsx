import { User, Wrench, Briefcase, Phone } from "lucide-react";

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
    name: "Portfolio",
    url: "#portfolio",
    icon: <Briefcase size={20} />,
  },
  {
    id: 4,
    name: "Contact",
    url: "#contact",
    icon: <Phone size={20} />,
  },
];

export default navItems;
