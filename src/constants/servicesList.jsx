import { Globe, Code2, Smartphone, Monitor } from "lucide-react";

const services = [
  {
    Icon: Globe,

    title: "AI & Automation",
    description:
      "Build AI-powered workflows that connect emails, spreadsheets, CRMs, messaging apps, and custom systems to save time and reduce manual work.",
    features: ["AI Agents", "n8n", "APIs"],
    background: "bg-indigo-600",
    classes: "bg-indigo-600/15 text-indigo-600 border border-indigo-600",
  },
  {
    Icon: Code2,
    background: "bg-cyan-600",
    classes: "bg-cyan-600/15 text-cyan-600 border border-cyan-600",

    title: "Web Applications",
    description:
      "Custom dashboards, SaaS platforms, admin panels, and business applications built for performance and scalability.",
    features: ["Frontend", "Backend", "APIs"],
  },
  {
    Icon: Smartphone,
    background: "bg-amber-600",
    classes: "bg-amber-600/15 text-amber-600 border border-amber-600",

    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications for iOS and Android with modern UI, authentication, real-time features, and backend integration.",
    features: ["iOS", "Android", "Expo"],
  },
  {
    Icon: Monitor,
    title: "Desktop Apps",
    description:
      "Desktop tools and internal business applications for automation, productivity, and data management.",
    features: ["Windows"],
    background: "  bg-emerald-600",
    classes: "bg-emerald-600/15 text-emerald-600 border border-emerald-600",
  },
];

export default services;
