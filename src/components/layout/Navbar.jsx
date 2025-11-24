import { useState, useEffect } from "react";
// import { Bot } from "lucide-react";
import navItems from "../../constants/navItems";

function Navbar() {
  const [activeItem, setActiveItem] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      let currentId = 1;
      for (let i = 0; i < navItems.length; i++) {
        const section = document.getElementById(
          navItems[i].url.replace("#", "") || "about"
        );
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            currentId = navItems[i].id;
            break;
          }
        }
      }
      setActiveItem(currentId);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <nav className="fixed bottom-5 left-[50%] p-2 rounded-lg z-50 border border-border -translate-x-1/2 glass flex items-center gap-5  ">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.url}
          onClick={() => handleItemClick(item.id)}
          className={`group relative hover:scale-105 duration-200 flex flex-col justify-center items-center gap-1 transition-all hover:text-accent ${
            activeItem === item.id ? "text-accent font-semibold" : "text-text"
          }`}
        >
          <span
            className={`text-md group-hover:text-accent  
            `}
          >
            {item.icon}
          </span>
          <span className={`text-xs  group-hover:text-accent  `}>
            {item.name}
          </span>
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
