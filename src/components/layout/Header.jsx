import logo from "../../assets/logo.svg";
import resume from "../../assets/resume.pdf";
import PropTypes from "prop-types";

function Header() {
  return (
    <div className="absolute  top-0 left-0 w-full border-b border-border  flex-1 p-4 flex justify-between items-center">
      {/* Logo */}
      {/* <h1 className="text-2xl font-bold text-text">Amine</h1> */}
      <img src={logo} className="h-10" alt="amiine logo" loading="lazy" />

      {/* Desktop Navigation */}
      <div className="flex items-center gap-2">
        <button
          type="submit"
          className="cursor-pointer border border-border  text-white bg-card-bg w-28 h-10  hover:scale-105 duration-200  hover:border-border hover:from-accent-hover hover:to-accent"
        >
          <a href="#contact" className="w-full h-full">
            Contact Me
          </a>
        </button>
        <button
          type="submit"
          className="cursor-pointer  text-white bg-gradient-to-r from-accent to-accent-hover w-28 h-10 rounded-md border border-border hover:scale-105 duration-200  hover:border-border hover:from-accent-hover hover:to-accent"
        >
          <a href="" className="w-full h-full" download={resume}>
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
