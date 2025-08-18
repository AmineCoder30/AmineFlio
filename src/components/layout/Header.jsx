import logo from "../../assets/logo.svg";
import resume from "../../assets/resume.pdf";
import PropTypes from "prop-types";
import ToggleThemeBtn from "../ui/ToggleThemeBtn";

function Header() {
  return (
    <div className="absolute  top-0 left-0 w-full border-b border-border  flex-1 p-4 flex justify-between items-center">
      {/* Logo */}
      {/* <h1 className="text-2xl font-bold text-text">Amine</h1> */}
      <img
        src={logo}
        className="h-8 md:h-10"
        alt="amiine logo"
        loading="lazy"
      />

      {/* Desktop Navigation */}
      <div className="flex items-center gap-2">
        <ToggleThemeBtn />
        <button
          type="submit"
          className="cursor-pointer hidden md:block  text-white bg-gradient-to-r from-accent to-accent-hover w-28 h-10 rounded-md border border-border hover:scale-105 duration-200  hover:border-border hover:from-accent-hover hover:to-accent"
        >
          <a href={resume} download className="w-full h-full">
            My Resume
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
