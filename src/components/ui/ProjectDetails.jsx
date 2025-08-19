import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import PropTypes from "prop-types";

import projectsData from "../../constants/projectsData";
import { Minimize2, ChevronRight, ChevronLeft } from "lucide-react";
function ProjectDetails({ projectID, SetShowProjectDetails, setProjectID }) {
  const [project, setProject] = useState({});
  useEffect(() => {
    const project = projectsData.find((p) => p.id === projectID);
    setProject(project);
  }, [projectID]);

  return (
    <div className="fixed inset-0 glass z-50 flex items-center justify-center p-4">
      <div
        key={project.id}
        className="group w-full md:w-[600px] relative bg-card-bg border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg "
      >
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.lrgImgSrc}
            alt={project.altText}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <button
            onClick={() => SetShowProjectDetails(false)}
            className="absolute top-1 p-2 bg-accent right-1  rounded-md hover:bg-accent-hover  -translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-between"
          >
            <Minimize2 size={20} className="text-white" />
          </button>
        </div>
        {/* Project Info */}
        <div className="p-4">
          <div className="mb-2">
            <h3 className="text-2xl font-bold text-text">{project.title}</h3>
          </div>
          <p className="text-text-secondary text-sm ">{project.description}</p>
          {/* Technologies List */}
          {
            <div className="flex flex-wrap gap-2 mt-4">
              {project?.technologies?.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 rounded-full text-xs font-semibold text-text shadow-md transition-colors duration-300 
                  
                       border border-border 
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          }
        </div>{" "}
        {/* Overlay with links and like button */}
        <div className="flex  items-center justify-between p-4">
          <div className="w-full flex items-center gap-2">
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
            {/* Switch Project Buttons */}
            <div className="flex gap-2 flex-1  items-center justify-end ">
              <button
                onClick={() =>
                  setProjectID((prev) => (prev > 1 ? prev - 1 : prev))
                }
                className="px-3 py-1 z-50 rounded-full bg-accent text-white hover:bg-accent-hover transition-colors duration-300 disabled:opacity-50"
                disabled={projectID === 1}
                title="Previous Project"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() =>
                  setProjectID((prev) =>
                    prev < projectsData.length ? prev + 1 : prev
                  )
                }
                className="px-3 py-1 z-50 rounded-full bg-accent text-white hover:bg-accent-hover transition-colors duration-300 disabled:opacity-50"
                disabled={projectID === projectsData.length}
                title="Next Project"
              >
                <ChevronRight />
              </button>
            </div>
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
