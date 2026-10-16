import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
const SITE_URL = "https://amine.website";

const seoConfig = {
  en: {
    lang: "en",
    dir: "ltr",
    path: "/en/",
    locale: "en_US",
    title: "Amine Mohamed | Full-Stack Web & Mobile Developer",
    description:
      "Amine Mohamed is a full-stack developer building modern web applications, mobile apps, and AI-powered solutions for businesses and startups.",
  },

  fr: {
    lang: "fr",
    dir: "ltr",
    path: "/fr",
    locale: "fr_FR",
    title: "Amine Mohamed | Développeur Web et Mobile Full-Stack",
    description:
      "Amine Mohamed est développeur full-stack spécialisé dans les applications web, mobiles et les solutions basées sur l'intelligence artificielle.",
  },

  ar: {
    lang: "ar",
    dir: "rtl",
    path: "/ar/",
    locale: "ar_AR",
    title: "أمين محمد | مطور ويب وتطبيقات متكاملة",
    description:
      "أمين محمد، مطور ويب وتطبيقات موبايل، متخصص في بناء تطبيقات حديثة وحلول تعتمد على الذكاء الاصطناعي.",
  },
};

export default function SEO({ lang = "en" }) {
  const seo = seoConfig[lang] || seoConfig.en;
  const canonicalUrl = `${SITE_URL}${seo.path}`;

  return (
    <Helmet>
      <html lang={seo.lang} dir={seo.dir} />

      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:locale" content={seo.locale} />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/djmzvj6yf/image/upload/v1791825808/avatar_ddthmo.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/djmzvj6yf/image/upload/v1791825808/avatar_ddthmo.png"
      />

      <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en/`} />
      <link rel="alternate" hrefLang="fr" href={`${SITE_URL}/fr`} />
      <link rel="alternate" hrefLang="ar" href={`${SITE_URL}/ar/`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
    </Helmet>
  );
}

SEO.propTypes = {
  lang: PropTypes.oneOf(["en", "fr", "ar"]),
};
