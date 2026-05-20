const pricing = {
  label: "Pricing",
  title: "Transparent Pricing Built for Scale",
  highlightWord: "Scale",
  description:
    "Simple, predictable pricing. No hidden fees. Choose a plan that aligns with your business goals.",
  switcher: {
    website: "Website",
    mobile: "Mobile App",
  },
  plans: {
    website: [
      {
        name: "MVP Website",
        price: "$249",
        period: "/project",
        description:
          "A lightning-fast, highly-optimized website to establish your online presence.",
        features: [
          "Up to 4 custom pages",
          "Responsive & accessible",
          "Technical SEO foundation",
          "Lead capture forms",
        ],
        cta: "Start Building",
      },
      {
        name: "Business Pro",
        price: "$499",
        period: "/project",
        description:
          "A conversion-focused website designed to turn your traffic into revenue.",
        features: [
          "Up to 8 custom pages",
          "Headless CMS integration",
          "Performance optimization",
          "Advanced analytics setup",
          "30-day priority support",
        ],
        badge: "Most Popular",
        cta: "Grow Your Business",
      },
      {
        name: "Custom Scale",
        price: "$890",
        period: "/project",
        description:
          "Bespoke digital solutions for complex products and rapidly scaling startups.",
        features: [
          "Custom web applications",
          "Complex API integrations",
          "Role-based authentication",
          "Workflow automation",
          "Dedicated launch support",
        ],
        cta: "Let's Talk Scope",
      },
    ],
    mobile: [
      {
        name: "MVP App",
        price: "$790",
        period: "/project",
        description:
          "Validate your concept quickly with a functional, native-feel mobile app.",
        features: [
          "Core user journeys",
          "Secure authentication",
          "React Native UI",
          "Beta testing distribution",
        ],
        cta: "Build Your MVP",
      },
      {
        name: "Launch Ready",
        price: "$1490",
        period: "/project",
        description:
          "A polished, production-ready application primed for App Store success.",
        features: [
          "Premium UI/UX design",
          "Robust backend integration",
          "Push notification system",
          "In-app analytics",
          "Store deployment",
        ],
        badge: "Best Value",
        cta: "Launch Your App",
      },
      {
        name: "Enterprise Solutions",
        price: "$2490",
        period: "/project",
        description:
          "Mission-critical mobile platforms with advanced architecture and security.",
        features: [
          "Microservices architecture",
          "Advanced permissions",
          "Enterprise-grade security",
          "Admin dashboard integration",
          "SLA & maintenance plan",
        ],
        cta: "Request Custom Quote",
      },
    ],
  },
};

export default pricing;
