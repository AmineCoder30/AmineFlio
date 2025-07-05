import { ServiceCard, Title } from "../ui";
import services from "../../constants/servicesList";
import resume from "../../assets/resume.pdf";
import useAnimation from "../../hook/useAnimation";

function About() {
  const boxRef = useAnimation();
  const boxRef2 = useAnimation();
  const boxRef3 = useAnimation();
  return (
    <div ref={boxRef} className="py-10" id="about">
      <div>
        <Title partOne="Mern Stack" PartTwo="Developer" />
        <p className="text-text-secondary w-full md:w-[500px] text-wrap text-base sm:text-lg">
          I am a skilled MERN stack developer with 5 years of experience and a
          certificate from the ALX Software Engineering program. I specialize in
          creating intuitive and engaging user experiences, transforming
          innovative ideas into beautifully crafted and functional products. My
          passion lies in delivering cutting-edge solutions that align with user
          needs and industry standards.
        </p>
      </div>

      <div ref={boxRef2} className="flex gap-5 md:gap-10 mt-16">
        <div className="text-text">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold">
            +5
          </h2>
          <p className="text-text-secondary uppercase text-sm sm:text-lg break-words">
            Years of <br /> Experience
          </p>
        </div>
        <div className="text-text">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold">
            +50
          </h2>
          <p className="text-text-secondary uppercase text-sm sm:text-lg break-words">
            Projects <br /> Completed
          </p>
        </div>
        <div className="text-text">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold">
            +20
          </h2>
          <p className="text-text-secondary uppercase text-sm sm:text-lg break-words">
            WORLDWIDE <br /> CLIENTS
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Title partOne="what i'am" PartTwo="doing" />
        <div
          ref={boxRef3}
          className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.Icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="cursor-pointer mt-4 text-white bg-gradient-to-r from-accent to-accent-hover w-28 h-10 rounded-md border border-border hover:scale-105 duration-200  hover:border-border hover:from-accent-hover hover:to-accent"
      >
        <a href="" className="w-full h-full" download={resume}>
          My Resume
        </a>
      </button>
    </div>
  );
}

export default About;
