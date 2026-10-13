import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "./locales/ar.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

export const supportedLanguages = ["en", "fr", "ar"];
export const defaultLanguage = "en";

export const getLanguageFromPath = (pathname = window.location.pathname) => {
  const language = pathname.split("/").filter(Boolean)[0];
  return supportedLanguages.includes(language) ? language : defaultLanguage;
};

i18n.use(initReactI18next).init({
  resources: { en, fr, ar },
  lng: getLanguageFromPath(),
  fallbackLng: defaultLanguage,
  supportedLngs: supportedLanguages,
  interpolation: { escapeValue: false },
});

export default i18n;
