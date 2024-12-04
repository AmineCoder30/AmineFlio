import { useState, useEffect } from "react";
import { About, Contact, Skills, Projects, Footer } from "./components";
import { SideBar, Navbar } from "./components";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import "./App.css";
function App() {
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

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full  relative bg-sideBg-950 py-10 px-2">
      <div className=" container mx-auto ">
        <div className="flex flex-col justify-between w-full lg:flex-row relative gap-5  min-h-screen ">
          <SideBar />
          <div className=" flex-1  pt-20 pb-10 relative border border-gray-300 bg-sideBg-900 rounded-md p-5 ">
            <Navbar />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>

      {isFixed && (
        <button className="fixed right-3  bottom-2 p-2 rounded-full bg-gradient-to-r from-orange-500 to-[#fff0]">
          <a
            href="#"
            className=" text-white font-bold py-2 px
      4 rounded"
          >
            <IoArrowUpCircleOutline size={30} />
          </a>
        </button>
      )}
    </div>
  );
}

export default App;
