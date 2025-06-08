import { useState } from "react";
import navItems from "../../constants/navItems";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.svg"; // Adjust the path as necessary
import PropTypes from "prop-types";

function Navbar({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full border-b border-border  flex-1 p-2 flex justify-between items-center">
      {/* Logo */}
      {/* <h1 className="text-2xl font-bold text-text">Amine</h1> */}
      <img src={logo} className="h-10" alt="amiine logo" loading="lazy" />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden p-2 rounded-md hover:bg-card-hover transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X size={24} className="text-text" />
        ) : (
          <Menu size={24} className="text-text" />
        )}
      </button>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8 ">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className="group relative flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
          </a>
        ))}
        {children}
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute z-50  top-12 right-0 mt-2 w-full bg-card-bg border border-border rounded-lg shadow-lg transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-2 p-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-text-secondary hover:text-accent hover:bg-card-hover rounded-md transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </a>
          ))}
          {children}
        </nav>
      </div>
    </div>
  );
}
Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
