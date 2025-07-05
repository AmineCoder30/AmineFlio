function Title({ partOne, PartTwo }) {
  return (
    <h1 className="text-text text-5xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-extrabold">
      <span>{partOne}</span>
      <br />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-text to-accent ">
        {PartTwo}
      </span>
    </h1>
  );
}

export default Title;
