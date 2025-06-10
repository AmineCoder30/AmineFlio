// src/components/Projects.jsx
import { useState, useEffect, useRef } from "react";
import Title from "../ui/Title";
import projectsData from "../../constants/projectsData";
import CategoryNavigation from "../ui/CategoryNavigation";
import { ExternalLink, Github, Heart } from "lucide-react";
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
  const [activeCategory, setActiveCategory] = useState("All");
  const [projectsWithLikes, setProjectsWithLikes] = useState(projectsData);
  const projectsContainerRef = useAnimation();
  const projectsGridRef = useAnimation();
  const prevLikedStates = useRef({});
  // Load likes from localStorage on component mount
  // This feature persists like counts and liked status across sessions
  useEffect(() => {
    const loadLikesFromStorage = () => {
      const updatedProjects = projectsData.map((project) => {
        const likesCount =
          localStorage.getItem(`project-${project.id}-likes`) || 0;
        const isLiked =
          localStorage.getItem(`project-${project.id}-isLiked`) === "true";

        // Initialize the previous liked states reference object
        prevLikedStates.current[project.id] = isLiked;

        return {
          ...project,
          likes: parseInt(likesCount, 10),
          isLiked: isLiked,
        };
      });
      setProjectsWithLikes(updatedProjects);
    };

    loadLikesFromStorage();
  }, []);

  // Handle like button click
  const handleLikeProject = (projectId) => {
    setProjectsWithLikes((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.id === projectId) {
          // Toggle like status
          const newIsLiked = !project.isLiked;
          const newLikesCount = newIsLiked
            ? (project.likes || 0) + 1
            : Math.max(0, (project.likes || 0) - 1);

          // Store the current liked state for animation reference
          prevLikedStates.current[projectId] = project.isLiked;

          // Update localStorage
          localStorage.setItem(`project-${projectId}-likes`, newLikesCount);
          localStorage.setItem(`project-${projectId}-isLiked`, newIsLiked);

          return {
            ...project,
            likes: newLikesCount,
            isLiked: newIsLiked,
            // Add property to determine if this is the initial like (for animation)
            isInitialLike: newIsLiked && !prevLikedStates.current[projectId],
          };
        }
        return project;
      });
    });
  };

  const filteredProjects =
    activeCategory === "All"
      ? projectsWithLikes
      : projectsWithLikes.filter(
          (project) => project.category === activeCategory
        );
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
              <div className="absolute top-0 p-2 left-O w-full -translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-between">
                <span className=" px-3 py-1 text-xs rounded-full bg-amber-600 text-white z-10">
                  {project.category}
                </span>
                {/* Like Button */}{" "}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleLikeProject(project.id);
                  }}
                  className={`heart-like-button flex items-center gap-1 px-3 py-1     rounded-full  transition-all duration-300  ${
                    project.isLiked
                      ? "liked bg-white"
                      : "bg-[#181818] hover:bg-[#181818]/90"
                  } ${project.isInitialLike ? "liked-init" : ""}`}
                  title={
                    project.isLiked
                      ? "Unlike this project"
                      : "Like this project"
                  }
                >
                  <Heart
                    size={18}
                    className={`heart-icon ${
                      project.isLiked
                        ? "fill-red-500 text-red-500"
                        : "text-text-secondary hover:text-red-400"
                    } transition-all duration-300`}
                    strokeWidth={project.isLiked ? 2.5 : 2}
                  />
                  <span
                    className={`like-count text-sm ${
                      project.isLiked ? "text-red-500" : "text-text-secondary"
                    }`}
                  >
                    {project.likes || 0}
                  </span>
                </button>
              </div>
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
            </div>{" "}
            {/* Overlay with links and like button */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
