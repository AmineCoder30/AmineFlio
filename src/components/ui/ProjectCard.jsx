import { Maximize2, Github, ExternalLink } from "lucide-react";
import PropTypes from "prop-types";

function ProjectCard({ project, setProjectID, SetShowProjectDetails }) {
  return (
    <div
      key={project.id}
      className="group relative flex flex-col h-full bg-card-bg border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <img
          src={project.imgSrc}
          alt={project.altText}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Frost Overlay */}
        <div className="absolute inset-0 z-10 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]"></div>

        {/* Hover Actions / Badges */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between p-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex justify-between items-start -translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <span className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-md border border-border bg-surface text-text shadow-sm">
              {project.category}
            </span>

            <button
              onClick={(e) => {
                e.preventDefault();
                setProjectID(project.id);
                SetShowProjectDetails(true);
              }}
              className="p-3 rounded-full bg-accent text-white shadow-xl hover:scale-110 hover:bg-accent-hover transition-all duration-300"
              title="View Details"
            >
              <Maximize2 size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-text mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex items-center gap-5 pt-5 mt-auto border-t border-border">
          <a
            href={project.code || "#"}
            target={project.code ? "_blank" : undefined}
            rel={project.code ? "noopener noreferrer" : undefined}
            onClick={(e) => !project.code && e.preventDefault()}
            className={`group/link flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              project.code
                ? "text-text hover:text-accent"
                : "text-text-secondary cursor-not-allowed opacity-50"
            }`}
            title={project.code ? "View Code" : "Code Not Available"}
          >
            Code
            <Github
              size={15}
              className={
                project.code
                  ? "group-hover/link:scale-110 transition-transform"
                  : ""
              }
            />
          </a>

          <div className="w-px h-3.5 bg-border"></div>

          <a
            href={project.demo || "#"}
            target={project.demo ? "_blank" : undefined}
            rel={project.demo ? "noopener noreferrer" : undefined}
            onClick={(e) => !project.demo && e.preventDefault()}
            className={`group/link flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              project.demo
                ? "text-text hover:text-accent"
                : "text-text-secondary cursor-not-allowed opacity-50"
            }`}
            title={project.demo ? "View Demo" : "Demo Not Available"}
          >
            Demo
            <ExternalLink
              size={15}
              className={
                project.demo
                  ? "group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform"
                  : ""
              }
            />
          </a>
        </div>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-700 ease-out group-hover:w-full"></div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    imgSrc: PropTypes.string.isRequired,
    altText: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    code: PropTypes.string,
    demo: PropTypes.string,
  }).isRequired,
  setProjectID: PropTypes.func.isRequired,
  SetShowProjectDetails: PropTypes.func.isRequired,
};

export default ProjectCard;
