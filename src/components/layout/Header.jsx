import PropTypes from "prop-types";
import ToggleThemeBtn from "../ui/ToggleThemeBtn";
import BotChat from "../ui/Bot";

const openChat = () => {
  window.dispatchEvent(new CustomEvent("open-ai-chat"));
};

function Header() {
  return (
    <div className="absolute  top-0 left-0 w-full border-b border-border  flex-1 p-4 flex justify-between items-center">
      {/* Logo */}
      <a
        href="#"
        className="group relative inline-flex items-center gap-2.5 select-none no-underline"
      >
 

        {/* Logo Text & Underline */}
        <div className="flex flex-col items-start pt-1">
          <span className="text-2xl font-extrabold text-text group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-text group-hover:to-accent transition-all duration-300 leading-none">
            Amine
          </span>
          <svg
            viewBox="0 0 120 10"
            width="80"
            height="8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="mt-1 -ml-1 transition-transform opacity-80 group-hover:opacity-100 group-hover:scale-x-110 origin-left duration-300"
          >
            <defs>
              <linearGradient id="uline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-text)" />
                <stop offset="100%" stopColor="var(--color-accent)" />
              </linearGradient>
            </defs>
            <path
              d="M2 6 C 20 2, 40 9, 60 5 S 100 2, 118 6"
              stroke="url(#uline-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </a>

      {/* Desktop Navigation */}
      <div className="flex items-center gap-2">
        <ToggleThemeBtn />
        <BotChat handleClick={openChat} />
        <button
          type="submit"
          className="cursor-pointer hidden md:block  text-text  w-28 h-10 rounded-md border bg-card-hover border-border hover:scale-105 duration-200  hover:border-border hover:from-accent-hover hover:to-accent"
        >
          <a href="#contact" className="w-full h-full">
            Let&apos;s Talk
          </a>
        </button>
      </div>
    </div>
  );
}
Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
