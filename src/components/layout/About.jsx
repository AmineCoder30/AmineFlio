import React from "react";
import { Title, ServiceCard } from "..";
import services from "../../constants/servicesList";
function About() {
  return (
    <div id="#">
      <div>
        <Title partOne="Mern Stack" PartTwo="Developer" />
        <p className="text-gray-500 w-full md:w-[500px] text-wrap text-base sm:text-lg">
          I am a Software Engineer who has developed countless innovative
          solutions. I have a Bachelor's degree in Computer Science and have
          been working in the industry for over 3 years. I am passionate about
          creating intuitive and engaging user experiences. I specialize in
          transforming ideas into beautifully crafted products.
        </p>
      </div>

      <div className="flex gap-5 md:gap-10 mt-16">
        <div className="text-white">
          <h3 className="text-4xl md:text-5xl lg:text-7xl  font-extrabold ">
            +3
          </h3>
          <p className="text-gray-500 uppercase text-sm sm:text-lg break-words">
            Years of <br /> Experience
          </p>
        </div>
        <div className="text-white">
          <h3 className="text-4xl md:text-5xl lg:text-7xl  font-extrabold ">
            +50
          </h3>
          <p className="text-gray-500 uppercase text-sm sm:text-lg break-words">
            Projects <br /> Completed
          </p>
        </div>
        <div className="text-white">
          <h3 className="text-4xl md:text-5xl lg:text-7xl  font-extrabold ">
            +20
          </h3>
          <p className="text-gray-500 uppercase text-sm sm:text-lg break-words">
            WORLDWIDE <br /> CLIENTS
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Title partOne="what i'am" PartTwo="doing" />
        <div className=" mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.Icon}
              title={service.title}
              colors={service.color}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
