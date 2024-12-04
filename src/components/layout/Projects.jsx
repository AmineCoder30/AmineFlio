// src/components/Projects.jsx
import React from "react";
import Title from "../ui/Title";
import projectsData from "../../constants/projectsData";
import CategoryDropdown from "../ui/CategoryDropdown ";
import { IoEyeOutline, IoCodeSlashOutline } from "react-icons/io5";
const categories = ["All", "Web design", "Applications", "Web development"];

function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <div className="py-20 text-white" id="portfolio">
      <Title partOne="Recent" PartTwo="Projects" />

      {/* Category Navigation */}
      <nav className="hidden md:flex space-x-10 text-lg mb-10 mt-10">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`${
              activeCategory === category
                ? "text-yellow-400"
                : "text-gray-400 hover:text-yellow-400"
            } transition-colors duration-300`}
          >
            {category}
          </button>
        ))}
      </nav>
      <CategoryDropdown
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
        categories={categories}
      />

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id + 66}
            className="bg-[#ffffff0c] cursor-pointer group p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="relative">
              <div className=" group-hover:opacity-100   flex gap-2 justify-center items-center rounded-lg opacity-0 absolute inset-0 bg-[#0303031010] z-20">
                <div
                  title="View Code"
                  className={`rounded-md ${
                    project.code !== "" ? "" : "hidden"
                  } w-10 h-10 flex justify-center items-center p-1  hover:text-orange-600 bg-sideBg-950`}
                >
                  <IoCodeSlashOutline size={22} />
                </div>
                <div
                  title="View Project"
                  className={`rounded-md ${
                    project.demo !== "" ? "" : "hidden"
                  }  w-10 h-10 flex justify-center items-center p-1  hover:text-orange-600 bg-sideBg-950`}
                >
                  <IoEyeOutline size={22} />
                </div>
              </div>
              <img
                src={project.imgSrc}
                alt={project.altText}
                className="rounded-lg mb-4 w-full"
              />
            </div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400">{project.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
