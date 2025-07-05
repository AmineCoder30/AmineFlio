import technologies from "../../constants/technologies";
import { SkillCard, Title } from "../ui";
import useAnimation from "../../hook/useAnimation";

function Skills() {
  const boxRef = useAnimation();
  return (
    <div className="py-10" id="skills">
      <Title partOne="Things I’m" PartTwo="Great At" />
      <div className="mt-10 opacity-100">
        <div
          ref={boxRef}
          style={{ perspective: "1000px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {technologies.map((tech, index) => (
            <SkillCard key={index} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
