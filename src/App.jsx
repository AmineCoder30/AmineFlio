import {
  About,
  Contact,
  Skills,
  Blogs,
  Projects,
  Footer,
  Navbar,
  SideBar,
  Header,
} from "./components/layout";
import { ThemeProvider } from "./context/ToggleTheme";

import "./App.css";

function AppContent() {
  return (
    <ThemeProvider>
      <div className="w-full  relative bg-background py-10 px-2">
        {/* Main Content */}

        <div className="container mx-auto sm:px-4 px-0 relative z-10">
          <div className="flex flex-col justify-between w-full xl:flex-row relative gap-5 min-h-screen">
            <SideBar />
            <div className="flex-1 pt-20 pb-10 relative border border-border bg-card-bg rounded-md p-5">
              <Header />
              <Navbar />
              <About />
              <Skills />
              <Projects />
              <Blogs />
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

function App() {
  return <AppContent />;
}

export default App;
