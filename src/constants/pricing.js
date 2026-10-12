const pricing = {
  label: "Pricing",
  title: "Clear Starting Prices. Built Around Your Goals.",
  highlightWord: "Goals",
  description:
    "Every project is different. Explore starting prices for common project types, with a tailored quote based on your requirements.",
  switcher: {
    website: "Web Development",
    mobile: "Mobile Apps",
  },
  plans: {
    website: [
      {
        name: "Landing Page",
        price: "$299+",
        period: "/project",
        description:
          "A polished, responsive landing page built to showcase your offer and turn visitors into leads.",
        features: [
          "One custom landing page",
          "Responsive design",
          "Contact form integration",
          "Technical SEO essentials",
          "Performance optimization",
          "2 revision rounds",
        ],
        cta: "Start Your Project",
      },
      {
        name: "Business Website",
        price: "$599+",
        period: "/project",
        description:
          "A professional multi-page website designed to strengthen your brand and support business growth.",
        features: [
          "Up to 8 custom pages",
          "Responsive, accessible UI",
          "CMS integration if required",
          "Contact forms & integrations",
          "Analytics setup",
          "Technical SEO essentials",
          "30-day bug-fix support",
        ],
        badge: "Most Popular",
        cta: "Build Your Website",
      },
      {
        name: "Custom Web App",
        price: "Custom Quote",
        period: "",
        description:
          "Tailored web applications built around your workflows, product requirements, and business goals.",
        features: [
          "Custom frontend & backend",
          "Database design & integration",
          "Authentication & permissions",
          "Third-party API integrations",
          "Dashboards & business workflows",
          "Deployment & launch support",
        ],
        cta: "Discuss Your Project",
      },
    ],
    mobile: [
      {
        name: "Mobile MVP",
        price: "$1,200+",
        period: "/project",
        description:
          "Launch a focused iOS and Android app with essential features to validate your product idea.",
        features: [
          "React Native & Expo",
          "Core screens & navigation",
          "Authentication integration",
          "Basic backend or API integration",
          "iOS & Android builds",
          "Testing & handoff",
        ],
        cta: "Build Your MVP",
      },
      {
        name: "Production App",
        price: "$2,500+",
        period: "/project",
        description:
          "A feature-rich mobile application built for a defined launch scope, with polished UI and reliable integrations.",
        features: [
          "Custom mobile UI & UX",
          "Backend & database integration",
          "Push notifications if required",
          "API & third-party integrations",
          "Testing & performance review",
          "Store submission assistance",
          "30-day bug-fix support",
        ],
        badge: "Most Popular",
        cta: "Launch Your App",
      },
      {
        name: "Advanced App",
        price: "Custom Quote",
        period: "",
        description:
          "Complex mobile products requiring advanced workflows, multiple integrations, or a dedicated backend.",
        features: [
          "Custom application architecture",
          "Advanced authentication & roles",
          "Complex API integrations",
          "Admin dashboard integration",
          "Scalable backend solutions",
          "Deployment & launch planning",
        ],
        cta: "Discuss Your Project",
      },
    ],
  },
};

export default pricing;
