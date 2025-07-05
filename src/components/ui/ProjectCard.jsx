import { Maximize2, Github, ExternalLink } from "lucide-react";
import PropTypes from "prop-types";

function ProjectCard({ project, setProjectID, SetShowProjectDetails }) {
  return (
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
          loading="lazy"
        />
        <div className="absolute top-0 p-2 left-O w-full -translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-between">
          <span className=" px-3 py-1 text-xs rounded-full bg-amber-600 text-white z-10">
            {project.category}
          </span>
          {/* show project details */}{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              setProjectID(project.id);
              SetShowProjectDetails(true);
            }}
            className="p-2 bg-accent rounded-md hover:bg-accent-hover transition-colors duration-300 z-10"
          >
            <Maximize2 size={16} className="text-white " title="View Details" />
          </button>
        </div>
      </div>
      {/* Project Info */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-2xl font-bold text-text">{project.title}</h3>
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
