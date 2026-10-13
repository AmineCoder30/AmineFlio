import technologies from "../../constants/technologies";
import { SkillCard, Title } from "../ui";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  return (
    <div className="py-20" id="skills">
      <Title partOne={t("sections.skills.0")} PartTwo={t("sections.skills.1")} />
      <div className="mt-10 opacity-100">
        <div
          style={{ perspective: "1000px" }}
          className="grid grid-cols-1   lg:grid-cols-2  gap-4"
        >
          {technologies.map((tech, index) => (
            <SkillCard
              key={index}
              tech={{
                ...tech,
                name: t(`data.technologies.${index}.name`, { defaultValue: tech.name }),
                description: t(`data.technologies.${index}.description`, { defaultValue: tech.description }),
                level: t(`data.technologies.${index}.level`, { defaultValue: tech.level }),
              }}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
