import { useEffect, useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronRight,
  ChevronLeft,
  X,
} from "lucide-react";
import PropTypes from "prop-types";

import projectsData from "../../constants/projectsData";

function ProjectDetails({ projectID, SetShowProjectDetails, setProjectID }) {
  const [project, setProject] = useState({});
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const project = projectsData.find((p) => p.id === projectID);
    setProject(project || {});
  }, [projectID]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => SetShowProjectDetails(false), 300);
  };

  if (!project.id) return null;

  return (
    <div
      className={`fixed inset-0 glass z-50 flex items-center justify-center p-4 transition-all duration-300 ${isClosing ? "opacity-0 backdrop-blur-none" : "opacity-100"}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className={`group w-full max-w-[900px] aspect-[4/3] sm:aspect-[16/9] relative bg-card-bg border border-border shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 ease-out ${isClosing ? "scale-95 translate-y-4" : "scale-100 translate-y-0"}`}
      >
        {/* Project Full Background Image */}
        <div className="absolute inset-0 w-full h-full bg-surface">
          <img
            src={project.lrgImgSrc || project.imgSrc}
            alt={project.altText || project.title}
            className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
          />
        </div>

        {/* Dynamic Dark Gradient Overlay - Always a bit at top for buttons, bottom darkens on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/0 to-transparent pointer-events-none transition-all duration-500 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

        {/* Top Navigation Bar / Actions (Always visible) */}
        <div className="absolute top-0 inset-x-0 z-20 flex justify-between items-center p-6 text-white pointer-events-none">
          <div className="flex gap-3 pointer-events-auto">
            <button
              onClick={() =>
                setProjectID((prev) => (prev > 1 ? prev - 1 : prev))
              }
              disabled={projectID === 1}
              className="p-2 sm:p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-accent hover:border-accent disabled:opacity-30 transition-all duration-300 transform hover:scale-110 active:scale-95"
              title="Previous Project"
            >
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>
            <button
              onClick={() =>
                setProjectID((prev) =>
                  prev < projectsData.length ? prev + 1 : prev,
                )
              }
              disabled={projectID === projectsData.length}
              className="p-2 sm:p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-accent hover:border-accent disabled:opacity-30 transition-all duration-300 transform hover:scale-110 active:scale-95"
              title="Next Project"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          </div>

          <button
            onClick={handleClose}
            className="p-2 sm:p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-red-500 hover:border-red-500 hover:rotate-90 transition-all duration-300 pointer-events-auto"
            title="Close"
          >
            <X size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* Floating Info & Actions (Slides up on Hover for Desktop, Always visible at bottom for Mobile) */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col p-6 sm:p-10 transform sm:translate-y-8 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-t from-black/90 via-black/60 to-transparent sm:bg-none">
          <div className="flex flex-wrap items-center gap-3 mb-3 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-700 delay-75 pointer-events-none">
            <span className="px-3 py-1 text-[11px] font-bold tracking-widest uppercase rounded bg-accent/20 border border-accent/50 text-accent backdrop-blur-md shadow-sm">
              {project.category}
            </span>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tighter text-white drop-shadow-md">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl line-clamp-3 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-700 delay-100 drop-shadow-sm pointer-events-none">
            {project.description}
          </p>

          {/* Technologies Segment */}
          {project?.technologies?.length > 0 && (
            <div className="hidden sm:block mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-150 pointer-events-none">
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/10 backdrop-blur-sm text-xs font-semibold text-white shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {tech}
                  </div>
                ))}
                {project.technologies.length > 5 && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-semibold text-gray-400">
                    +{project.technologies.length - 5}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center gap-4 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-700 delay-200">
            <a
              href={project.code || "#"}
              target={project.code ? "_blank" : undefined}
              rel={project.code ? "noopener noreferrer" : undefined}
              onClick={(e) => !project.code && e.preventDefault()}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                project.code
                  ? "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black hover:scale-105"
                  : "bg-black/40 border border-white/10 text-gray-500 cursor-not-allowed"
              }`}
              title={project.code ? "View Source Code" : "Code Not Available"}
            >
              Code
              <Github size={18} />
            </a>
            <a
              href={project.demo || "#"}
              target={project.demo ? "_blank" : undefined}
              rel={project.demo ? "noopener noreferrer" : undefined}
              onClick={(e) => !project.demo && e.preventDefault()}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                project.demo
                  ? "bg-accent text-white border border-accent hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/40 hover:scale-105"
                  : "bg-black/40 border border-white/10 text-gray-500 cursor-not-allowed"
              }`}
              title={project.demo ? "Visit Live Demo" : "Demo Not Available"}
            >
              Demo
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectDetails.propTypes = {
  projectID: PropTypes.number.isRequired,
  SetShowProjectDetails: PropTypes.func.isRequired,
  setProjectID: PropTypes.func.isRequired,
};

export default ProjectDetails;
