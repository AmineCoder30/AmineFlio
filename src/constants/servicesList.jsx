import { Globe, Code2, Smartphone, Monitor } from "lucide-react";

const services = [
  {
    Icon: Globe,
    title: "Web Design",
    description:
      "Stunning, modern web designs crafted to elevate your brand and engage your audience with a seamless user experience.",
    background: "bg-indigo-600",
    classes: "bg-indigo-600/15 text-indigo-600 border border-indigo-600",

    features: ["Responsive Design", "UI/UX", "Prototyping"],
  },
  {
    Icon: Code2,
    title: "Web Development",
    description:
      "Robust and scalable websites built with the latest technologies, ensuring performance, security, and reliability.",
    background: "bg-cyan-600",
    classes: "bg-cyan-600/15 text-cyan-600 border border-cyan-600",

    features: ["Frontend", "Backend", "API Development"],
  },
  {
    Icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Custom mobile applications for iOS and Android, designed for speed, usability, and a flawless cross-platform experience.",
    background: "bg-amber-600",
    classes: "bg-amber-600/15 text-amber-600 border border-amber-600",

    features: ["iOS", "Android", "Cross-Platform"],
  },
  {
    Icon: Monitor,
    title: "Desktop Apps",
    description:
      "Powerful desktop applications tailored to your needs, delivering efficiency and reliability for any operating system.",

    background: "  bg-emerald-600",
    classes: "bg-emerald-600/15 text-emerald-600 border border-emerald-600",

    features: ["Windows", "macOS", "Linux"],
  },
];

export default services;
