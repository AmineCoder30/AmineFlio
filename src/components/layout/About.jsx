import { ServiceCard, Title } from "../ui";
import services from "../../constants/servicesList";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div className="pb-20 pt-10" id="about">
      {/* <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pb-10 sm:pb-20"> */}
      {/* Left Side: Info & Stats */}
      <div className="flex-1 w-full flex flex-col">
        <div className="mb-8">
          <Title partOne={t("about.titleOne")} PartTwo={t("about.titleTwo")} />
          <p className="text-text-secondary w-full md:w-[500px] text-wrap text-base sm:text-lg mt-6">
            {t("about.intro")}
          </p>

          <p className="text-text-secondary w-full md:w-[500px] text-wrap text-base sm:text-lg ">
            {t("about.mvp")}
          </p>
        </div>

        <hr className="border-border h-px w-3/4 max-w-[400px]" />

        <div className="flex flex-wrap gap-6 md:gap-10 mt-10">
          <div className="text-text">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">
              +6
            </h2>
            <p className="text-text-secondary uppercase text-xs sm:text-sm md:text-base font-bold tracking-widest mt-2">
              {t("about.experience")}
            </p>
          </div>
          <div className="text-text">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">
              +50
            </h2>
            <p className="text-text-secondary uppercase text-xs sm:text-sm md:text-base font-bold tracking-widest mt-2">
              {t("about.projects")}
            </p>
          </div>
          <div className="text-text">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">
              +20
            </h2>
            <p className="text-text-secondary uppercase text-xs sm:text-sm md:text-base font-bold tracking-widest mt-2">
              {t("about.clients")}
            </p>
          </div>
        </div>
      </div>

      {/*    
        <div className="flex-1 w-full max-w-[500px] relative min-h-[350px] sm:min-h-[450px] flex items-center justify-center">
        
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-accent/20 rounded-full blur-[90px] animate-pulse pointer-events-none"></div>

      
        </div> */}
      {/* </div> */}

      <div className="mt-20">
        <Title partOne={t("about.doingOne")} PartTwo={t("about.doingTwo")} />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto ">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              indx={index + 1}
              Icon={service.Icon}
              title={t(`data.services.${index}.title`, { defaultValue: service.title })}
              description={t(`data.services.${index}.description`, { defaultValue: service.description })}
              classes={service.classes}
              background={service.background}
              features={service.features.map((feature, featureIndex) =>
                t(`data.services.${index}.features.${featureIndex}`, { defaultValue: feature }),
              )}
            />
          ))}
        </div>
        <button
          type="submit"
          className="cursor-pointer mt-4 text-white bg-gradient-to-r from-accent to-accent-hover w-28 h-10 rounded-md border border-border hover:scale-105 duration-200  hover:border-border hover:from-accent-hover hover:to-accent"
        >
          <a href="#contact" className="w-full h-full">
            {t("about.letsTalk")}
          </a>
        </button>
      </div>
    </div>
  );
}

export default About;
