import EnglishPage from "./pages/en/App";
import FrenchPage from "./pages/fr/App";
import ArabicPage from "./pages/ar/App";
import { getLanguageFromPath } from "./i18n";

function App() {
  const pages = {
    en: EnglishPage,
    fr: FrenchPage,
    ar: ArabicPage,
  };
  const Page = pages[getLanguageFromPath()];

  return <Page />;
}

export default App;
