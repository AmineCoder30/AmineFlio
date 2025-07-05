// src/components/Projects.jsx
import { useState } from "react";

import { ProjectDetails, Title, ProjectCard, CategoryNavigation } from "../ui";
import projectsData from "../../constants/projectsData";

const categories = [
  "All",
  "E-commerce",
  "Landing Pages",
  "Dashboards",
  "Blogs",
  "Delivery",
];

function Projects() {
  // State to manage active category, project ID, and project details visibility
  const [activeCategory, setActiveCategory] = useState("All");
  const [projectID, setProjectID] = useState(1);
  const [showProjectDetails, SetShowProjectDetails] = useState(false);

  // Filter projects based on the active category
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);
  return (
    <div className="py-10 text-text" id="projects">
      <Title partOne="Recent" PartTwo="Projects" />
      {showProjectDetails && (
        <ProjectDetails
          projectID={projectID}
          setProjectID={setProjectID}
          SetShowProjectDetails={SetShowProjectDetails}
        />
      )}
      {/* Category Navigation Component */}
      <CategoryNavigation
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            setProjectID={setProjectID}
            SetShowProjectDetails={SetShowProjectDetails}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
