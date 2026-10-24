import { useEffect } from "react";
import {
  About,
  Contact,
  Skills,
  Blogs,
  Footer,
  Navbar,
  SideBar,
  Header,
  Testimonials,
  Pricing,
  Faq,
  Projects,
} from "../components/layout";
import FixedCta from "../components/ui/FixedCta";
import { ThemeProvider } from "../context/ToggleTheme";
import i18n from "../i18n";
import PropTypes from "prop-types";
import "../App.css";

const seo = {
  en: {
    title: "Amine Mohamed | Full-Stack Web & Mobile Developer",
    description:
      "Amine Mohamed is a full-stack developer building modern web applications, mobile apps, and AI-powered solutions.",
  },
  fr: {
    title: "Amine Mohamed | Développeur Web & Mobile Full-Stack",
    description:
      "Amine Mohamed est un développeur full-stack qui crée des applications web, mobiles et des solutions basées sur l'IA.",
  },
  ar: {
    title: "أمين محمد | مطور ويب وتطبيقات جوال Full-Stack",
    description:
      "أمين محمد مطور Full-Stack متخصص في بناء تطبيقات الويب والجوال الحديثة وحلول الذكاء الاصطناعي.",
  },
};

function PortfolioPage({ language }) {
  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = seo[language].title;

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", seo[language].description);

    const canonical = document.querySelector('link[rel="canonical"]');
    canonical?.setAttribute("href", `https://amine.website/${language}`);
  }, [language]);

  return (
    <ThemeProvider>
      <div
        style={{
          fontFamily:
            language == "ar" ? "IBM Plex Sans Arabic" : "Space Grotesk",
        }}
        className="w-full relative bg-background py-10 px-2"
      >
        <div className="container mx-auto sm:px-4 px-0 relative z-10">
          <div className="flex flex-col justify-between w-full xl:flex-row relative gap-5 min-h-screen">
            <SideBar />
            <FixedCta />
            <div className="flex-1 pt-20 pb-10 relative border border-border bg-card-bg rounded-md p-5">
              <Header />
              <Navbar />
              <About />
              <Skills />
              <Projects />
              <Testimonials />
              <Pricing />
              <Faq />
              <Blogs />
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
        <FixedCta />
      </div>
    </ThemeProvider>
  );
}

export default PortfolioPage;

PortfolioPage.propTypes = {
  language: PropTypes.oneOf(["en", "fr", "ar"]).isRequired,
};
