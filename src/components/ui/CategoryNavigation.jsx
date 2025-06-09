import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CategoryNavigation({ categories, activeCategory, setActiveCategory }) {
  const navRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check scroll position and update arrow visibility
  const updateArrowVisibility = () => {
    if (navRef.current) {
      // Show left arrow if we've scrolled to the right
      setShowLeftArrow(navRef.current.scrollLeft > 0);

      // Show right arrow if there's more content to scroll to
      const isAtEnd =
        Math.round(navRef.current.scrollLeft + navRef.current.clientWidth) >=
        navRef.current.scrollWidth - 1; // -1 for subpixel rendering issues

      setShowRightArrow(!isAtEnd);
    }
  };
  // Function to scroll categories left or right
  const scrollCategories = (direction) => {
    if (navRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      navRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Update arrow visibility after scrolling (with a slight delay to allow the scroll to complete)
      setTimeout(updateArrowVisibility, 300);
    }
  }; // Listen for scroll events and window resize to update arrow visibility
  useEffect(() => {
    const navElement = navRef.current;
    const handleResize = () => {
      // When window resizes, check if arrows should be shown
      updateArrowVisibility();
    };

    if (navElement) {
      // Add scroll event listener
      navElement.addEventListener("scroll", updateArrowVisibility);

      // Add resize event listener
      window.addEventListener("resize", handleResize);

      // Initial check
      updateArrowVisibility();

      // Check after a slight delay to ensure accurate dimensions
      setTimeout(updateArrowVisibility, 100);

      return () => {
        // Clean up event listeners
        navElement.removeEventListener("scroll", updateArrowVisibility);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  // Also update arrow visibility when categories or active category changes
  useEffect(() => {
    // Wait for render to complete before checking
    setTimeout(updateArrowVisibility, 100);
  }, [categories, activeCategory]);

  // CSS for hiding scrollbars across different browsers
  const scrollbarHideStyle = {
    scrollbarWidth: "none" /* Firefox */,
    msOverflowStyle: "none" /* IE and Edge */,
    WebkitOverflowScrolling: "touch",
  };
  return (
    <div className="flex items-center mb-10 mt-10 relative">
      {showLeftArrow && (
        <button
          onClick={() => scrollCategories("left")}
          className="absolute left-0 z-10 text-text-secondary hover:text-accent bg-card-bg/80 p-1.5 rounded-full shadow-md transition-all duration-300 hover:scale-110"
          aria-label="Scroll categories left"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      <nav
        ref={navRef}
        className="flex space-x-4 text-lg overflow-x-auto mx-10 scroll-smooth w-full"
        style={scrollbarHideStyle}
        onScroll={updateArrowVisibility}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`${
              activeCategory === category
                ? "text-accent font-medium"
                : "text-text-secondary hover:text-accent"
            } transition-colors duration-300 whitespace-nowrap py-2 px-1`}
          >
            {category}
          </button>
        ))}
      </nav>

      {showRightArrow && (
        <button
          onClick={() => scrollCategories("right")}
          className="absolute right-0 z-10 text-text-secondary hover:text-accent bg-card-bg/80 p-1.5 rounded-full shadow-md transition-all duration-300 hover:scale-110"
          aria-label="Scroll categories right"
        >
          <ChevronRight size={22} />
        </button>
      )}
    </div>
  );
}

export default CategoryNavigation;
