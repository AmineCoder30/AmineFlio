import { Star } from "lucide-react";
import PropTypes from "prop-types";

function SkillCard({ tech, index }) {
  return (
    <div key={index} className="group [perspective:1000px] cursor-pointer">
      <div className="relative w-full h-40 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 bg-card-bg  border border-border rounded-lg flex flex-col items-center justify-center p-4 overflow-hidden [backface-visibility:hidden]">
          <span
            className="absolute top-0 left-1/2 -translate-x-1/2 bg-accent w-20 h-20 bg-gradient-to-br from-accent/60 via-accent-hover/40 to-transparent rounded-full blur-2xl pointer-events-none z-20"
            style={{ transform: "translate(30%,-30%)" }}
          ></span>
          <div className="text-accent mb-2">{tech.icon}</div>
          <h4 className="text-text text-lg sm:text-xl font-semibold text-center">
            {tech.name}
          </h4>
          <p className="text-text-secondary text-sm text-center mt-1">
            {tech.description}
          </p>
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent to-card-bg rounded-lg flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <span className="text-white text-2xl md:text-4xl font-bold flex items-center gap-2">
            {tech.rating.toFixed(1)}
            <Star size={32} color="yellow" className="inline-block" />
          </span>
          <span className="text-white mt-2 text-sm md:text-lg font-semibold">
            My Rating
          </span>
        </div>
      </div>
    </div>
  );
}
SkillCard.propTypes = {
  tech: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    icon: PropTypes.node,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default SkillCard;
