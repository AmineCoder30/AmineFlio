// src/components/Projects.jsx
import React from "react";
import Title from "../ui/Title";
import projectsData from "../../constants/projectsData";
import CategoryNavigation from "../ui/CategoryNavigation";
import { ExternalLink, Github } from "lucide-react";
import { useAnimation } from "../../hooks/useAnimation";

const categories = [
  "All",
  "E-commerce",
  "Landing Pages",
  "Dashboards",
  "Blogs",
  "Delivery",
];

function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const projectsContainerRef = useAnimation("scaleUp");
  const projectsGridRef = useAnimation("stagger");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);
  return (
    <div className="py-10 text-text" ref={projectsContainerRef} id="portfolio">
      <Title partOne="Recent" PartTwo="Projects" />

      {/* Category Navigation Component */}
      <CategoryNavigation
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Project Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        ref={projectsGridRef}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-card-bg border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-accent"
          >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.imgSrc}
                alt={project.altText}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute top-4 left-4 -translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 px-3 py-1 text-xs rounded-full bg-amber-600 text-white z-10">
                {project.category}
              </span>
            </div>

            {/* Project Info */}
            <div className="p-4">
              <div className="mb-2">
                <h3 className="text-2xl font-bold text-text">
                  {project.title}
                </h3>
              </div>
              <p className="text-text-secondary text-sm line-clamp-3">
                {project.description}
              </p>
            </div>
            {/* Overlay with links */}
            <div className="flex items-center gap-4 p-4">
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full text-white flex items-center gap-2 bg-accent hover:bg-accent hover:text-white transition-colors duration-300"
                  title="View Code"
                >
                  <p>Code</p>
                  <Github size={18} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 border border-border rounded-full flex items-center gap-2 bg-card-bg hover:bg-accent hover:text-white transition-colors duration-300"
                  title="View Demo"
                >
                  <p>Demo</p>
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
