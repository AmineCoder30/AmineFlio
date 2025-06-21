import { useState, useEffect } from "react";
import { About, Contact, Skills, Projects, Footer } from "./components";
import { SideBar, Navbar } from "./components";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";
import { Sun, Moon, ArrowBigUp } from "lucide-react";
import "./App.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-1 rounded-full bg-card-bg border border-border hover:bg-card-hover transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="text-text" size={16} />
      ) : (
        <Sun className="text-text" size={16} />
      )}
    </button>
  );
}

function AppContent() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full relative bg-background py-10 px-2">
      {/* Main Content */}
      <div className="container mx-auto sm:px-4 px-0">
        <div className="flex flex-col justify-between w-full xl:flex-row relative gap-5 min-h-screen">
          <SideBar />
          <div className="flex-1 pt-20 pb-10 relative border border-border bg-card-bg rounded-md p-5">
            <Navbar>
              <ThemeToggle />
            </Navbar>
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isFixed && (
        <button className="fixed right-3 border border-border bottom-2 flex justify-center items-center  w-10 h-9 rounded-md bg-gradient-to-r from-accent to-accent-hover">
          <a href="#" className="text-white font-bold  rounded">
            <ArrowBigUp size={24} />
          </a>
        </button>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
