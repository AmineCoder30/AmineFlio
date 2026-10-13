// src/components/Projects.jsx
import { useState } from "react";

import { ProjectDetails, Title, ProjectCard, CategoryNavigation } from "../ui";
import projectsData from "../../constants/projectsData";
import { useTranslation } from "react-i18next";

const categories = [
  { key: "All", labelKey: "sections.categories.all" },
  { key: "Web Apps", labelKey: "sections.categories.webApps" },
  { key: "Mobile Apps", labelKey: "sections.categories.mobileApps" },
];

function Projects() {
  const { t } = useTranslation();
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
    <div className="py-20 text-text" id="projects">
      <Title partOne={t("sections.projects.0")} PartTwo={t("sections.projects.1")} />
      {showProjectDetails && (
        <ProjectDetails
          projectID={projectID}
          setProjectID={setProjectID}
          SetShowProjectDetails={SetShowProjectDetails}
        />
      )}
      {/* Category Navigation Component */}
      <CategoryNavigation
        categories={categories.map((category) => ({
          ...category,
          label: t(category.labelKey),
        }))}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={{
              ...project,
              title: t(`data.projects.${project.id}.title`, { defaultValue: project.title }),
              description: t(`data.projects.${project.id}.description`, { defaultValue: project.description }),
              category: t(`sections.categories.${project.category === "Web Apps" ? "webApps" : "mobileApps"}`),
            }}
            setProjectID={setProjectID}
            SetShowProjectDetails={SetShowProjectDetails}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
