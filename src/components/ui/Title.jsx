import PropTypes from "prop-types";
function Title({ partOne, PartTwo }) {
  return (
    <h1
      className={
        "text-text  text-3xl sm:text-5xl md:text-6xl xl:text-7xl uppercase font-extrabold leading-tight"
      }
    >
      <span>{partOne}</span>
      <br />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-text to-accent">
        {PartTwo}
      </span>
    </h1>
  );
}

Title.propTypes = {
  partOne: PropTypes.string.isRequired,
  PartTwo: PropTypes.string.isRequired,
};

export default Title;
