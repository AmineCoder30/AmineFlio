import { useState, useEffect } from "react";
import { About, Contact, Skills, Projects, Footer } from "./components";
import { SideBar, Navbar } from "./components";
import { ArrowUpCircle } from "lucide-react";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import "./App.css";
import "./styles/theme.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-1 rounded-full bg-card-bg border border-border hover:bg-card-hover transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="text-text" />
      ) : (
        <Sun className="text-text" />
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
      {/* Header */}
      {/* <header className="mb-10">
        <div className="container mx-auto px-4">
          <div className="bg-card-bg border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
            

            
                
         
            </div>
          </div>
        </div>
      </header> */}

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
        <button className="fixed right-3 bottom-2 p-2 rounded-full bg-gradient-to-r from-accent to-accent-hover">
          <a href="#" className="text-white font-bold py-2 px-4 rounded">
            <ArrowUpCircle size={30} />
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
