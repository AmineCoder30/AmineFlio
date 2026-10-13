import { User, Wrench, Briefcase, Phone, SquarePen } from "lucide-react";

const navItems = [
  {
    id: 1,
    translationKey: "about",
    url: "#",
    icon: <User size={20} />,
  },
  {
    id: 2,
    translationKey: "skills",
    url: "#skills",
    icon: <Wrench size={20} />,
  },
  {
    id: 3,
    translationKey: "projects",
    url: "#projects",
    icon: <Briefcase size={20} />,
  },
  {
    id: 4,
    translationKey: "blogs",
    url: "#blogs",
    icon: <SquarePen size={20} />,
  },
  {
    id: 5,
    translationKey: "contact",
    url: "#contact",
    icon: <Phone size={20} />,
  },
];

export default navItems;
