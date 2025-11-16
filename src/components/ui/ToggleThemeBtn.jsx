import { useTheme } from "../../context/ToggleTheme";
import { Sun, Moon } from "lucide-react";

function ToggleThemeBtn() {
  const { theme, toggleTheme } = useTheme(); // <-- get current theme too

  return (
    <button
      className="relative w-10 h-10 font-semibold text-text overflow-hidden border border-border rounded-md flex items-center justify-center cursor-pointer"
      onClick={toggleTheme}
    >
      {/* Light side */}
      <div
        className={`absolute text-center left-0 top-0 w-full h-full flex items-center justify-center transition-transform duration-300 z-10
          ${theme === "dark" ? "-translate-x-full" : "translate-x-0"}`}
      >
        <Sun className=" fill-yellow-500 text-yellow-500 w-6 h-6" />
      </div>

      {/* Dark side */}
      <div
        className={`absolute text-center  right-0 top-0 w-full h-full flex items-center justify-center transition-transform duration-300 z-0
          ${theme === "dark" ? "translate-x-0" : "translate-x-full"}`}
      >
        <Moon className="fill-blue-500 text-blue-500 w-6 h-6" />
      </div>
    </button>
  );
}

export default ToggleThemeBtn;
