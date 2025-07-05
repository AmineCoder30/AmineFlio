import useAnimation from "../../hook/useAnimation";
function Title({ partOne, PartTwo }) {
  const boxRef = useAnimation();
  return (
    <h1
      ref={boxRef}
      className="text-text text-5xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-extrabold"
    >
      <span>{partOne}</span>
      <br />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-text to-accent ">
        {PartTwo}
      </span>
    </h1>
  );
}

export default Title;
