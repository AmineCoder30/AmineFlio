import Title from "../ui/Title";
import { useAnimation } from "../../hooks/useAnimation";
import technologies from "../../constants/technologies";

function Skills() {
  const skillsContainerRef = useAnimation();
  const skillsGridRef = useAnimation();

  return (
    <div className="py-10" id="skills">
      <Title partOne="Things I’m" PartTwo="Great At" />
      <div ref={skillsContainerRef} className="mt-10 opacity-100">
        <div
          ref={skillsGridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-card-bg border border-border rounded-lg hover:shadow-lg transition-shadow opacity-100"
            >
              <div className="text-accent mb-2">{tech.icon}</div>
              <h3 className="text-text font-semibold text-center">
                {tech.name}
              </h3>
              <p className="text-text-secondary text-sm text-center mt-1">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
