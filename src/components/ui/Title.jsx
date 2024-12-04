import React from "react";

function Title({ partOne, PartTwo }) {
  return (
    <h1 className="text-white text-5xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-extrabold">
      {partOne} <br />
      <span className="text-[#b6b4bd33]">{PartTwo}</span>
    </h1>
  );
}

export default Title;
