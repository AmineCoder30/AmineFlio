import { ServiceCard, Title } from "../ui";
import services from "../../constants/servicesList";

function About() {
  return (
    <div className="pb-20 pt-10" id="about">
      {/* <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pb-10 sm:pb-20"> */}
      {/* Left Side: Info & Stats */}
      <div className="flex-1 w-full flex flex-col">
        <div className="mb-8">
          <Title partOne="Build Web" PartTwo="& Mobile Apps" />
          <p className="text-text-secondary w-full md:w-[500px] text-wrap text-base sm:text-lg mt-6">
            I design and develop fast, modern, and user-focused digital
            experiences for businesses and brands.
          </p>
        </div>

        <hr className="border-border h-px w-3/4 max-w-[400px]" />

        <div className="flex flex-wrap gap-6 md:gap-10 mt-10">
          <div className="text-text">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">
              +5
            </h2>
            <p className="text-text-secondary uppercase text-xs sm:text-sm md:text-base font-bold tracking-widest mt-2">
              Years of <br /> Experience
            </p>
          </div>
          <div className="text-text">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">
              +50
            </h2>
            <p className="text-text-secondary uppercase text-xs sm:text-sm md:text-base font-bold tracking-widest mt-2">
              Projects <br /> Completed
            </p>
          </div>
          <div className="text-text">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">
              +20
            </h2>
            <p className="text-text-secondary uppercase text-xs sm:text-sm md:text-base font-bold tracking-widest mt-2">
              WORLDWIDE <br /> CLIENTS
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
        <Title partOne="what i'm" PartTwo="doing" />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto ">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              indx={index + 1}
              Icon={service.Icon}
              title={service.title}
              description={service.description}
              classes={service.classes}
              background={service.background}
              features={service.features}
            />
          ))}
        </div>
        <button
          type="submit"
          className="cursor-pointer mt-4 text-white bg-gradient-to-r from-accent to-accent-hover w-28 h-10 rounded-md border border-border hover:scale-105 duration-200  hover:border-border hover:from-accent-hover hover:to-accent"
        >
          <a href="#contact" className="w-full h-full">
            Let&apos;s Talk
          </a>
        </button>
      </div>
    </div>
  );
}

export default About;
