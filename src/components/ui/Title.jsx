import { useAnimation } from "../../hooks/useAnimation";

function Title({ partOne, PartTwo }) {
  const titleRef = useAnimation();
  const subtitleRef = useAnimation();

  return (
    <h1 className="text-text text-5xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-extrabold">
      <span ref={titleRef}>{partOne}</span>
      <br />
      <span
        ref={subtitleRef}
        className="bg-clip-text text-transparent bg-gradient-to-r from-text to-accent "
      >
        {PartTwo}
      </span>
    </h1>
  );
}

export default Title;
