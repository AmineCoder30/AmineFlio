import React, { useState } from "react";

const CategoryDropdown = ({
  setActiveCategory,
  activeCategory,
  categories,
}) => {
  const [showOptions, setshowOptions] = useState(false);

  const handleSelect = (category) => {
    setActiveCategory(category);
    setshowOptions(false);
  };

  return (
    <div className="relative mt-10 mb-5 md:hidden w-full">
      <button
        onClick={() => setshowOptions(!showOptions)}
        className="w-full border-border bg-card-bg text-text text-left px-4 py-3 rounded-md border focus:outline-none"
        type="button"
      >
        {activeCategory}
      </button>
      <ul
        className={`absolute z-10 mt-1 border border-border bg-card-bg transition-all duration-500 ${
          showOptions ? "max-h-fit opacity-100" : "max-h-0 opacity-0"
        } rounded-md shadow-lg w-full`}
      >
        {categories.map((category, index) => (
          <li key={index}>
            <button
              onClick={() => handleSelect(category)}
              className="block w-full text-left px-4 py-2 text-text-secondary hover:text-text focus:outline-none"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDropdown; 