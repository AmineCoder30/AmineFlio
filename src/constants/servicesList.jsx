import { Globe, Code2, Smartphone, Monitor } from "lucide-react";

const services = [
  {
    Icon: Globe,
    title: "Web Design",
    description:
      "Stunning, modern web designs crafted to elevate your brand and engage your audience with a seamless user experience.",

    classes: "bg-gradient-to-br from-purple-500 to-indigo-700",

    features: ["Responsive Design", "UI/UX", "Prototyping"],
  },
  {
    Icon: Code2,
    title: "Web Development",
    description:
      "Robust and scalable websites built with the latest technologies, ensuring performance, security, and reliability.",

    classes: "bg-gradient-to-br from-cyan-400 to-teal-700",

    features: ["Frontend", "Backend", "API Development"],
  },
  {
    Icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Custom mobile applications for iOS and Android, designed for speed, usability, and a flawless cross-platform experience.",

    classes: "bg-gradient-to-br  from-amber-400 to-orange-700",

    features: ["iOS", "Android", "Cross-Platform"],
  },
  {
    Icon: Monitor,
    title: "Desktop Apps",
    description:
      "Powerful desktop applications tailored to your needs, delivering efficiency and reliability for any operating system.",

    classes: "bg-gradient-to-br from-green-500 to-green-700",

    features: ["Windows", "macOS", "Linux"],
  },
];

export default services;
