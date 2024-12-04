import React from "react";
import technologies from "../../constants/technologies";
import Title from "../ui/Title";
function Skills() {
  return (
    <div className="py-20" id="skills">
      <Title partOne="what i am" PartTwo="good in" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
        {technologies.map((tool, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center h-20 p-1 px-3 gap-2 bg-[#ffffff0c] hover:bg-orange-500/20  rounded-lg"
          >
            <div className="w-12 h-12 bg-white rounded-md flex justify-center items-center">
              {tool.icon}
            </div>
            <div>
              <h2 className=" text-white font-bold">{tool.name}</h2>
              <p className="text-gray-400 text-xs md:text-sm">
                {tool.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
