import React from "react";
import { useAnimation } from "../../hooks/useAnimation";

function Title({ partOne, PartTwo }) {
  const titleRef = useAnimation('fadeUp');
  const subtitleRef = useAnimation('fadeUp');

  return (
    <h1 className="text-text text-5xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-extrabold">
      <span ref={titleRef}>{partOne}</span>
      <br />
      <span ref={subtitleRef} className="text-text-secondary opacity-30">{PartTwo}</span>
    </h1>
  );
}

export default Title;
