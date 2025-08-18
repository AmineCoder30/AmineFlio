import PropTypes from "prop-types";
import { ArrowUpRight } from "lucide-react";

function SkillCard({ tech, index }) {
  const handleLevelBg = () => {
    switch (tech.level) {
      case "Expert":
        // Royal purple tones for mastery
        return "bg-gradient-to-br from-purple-500 to-indigo-700";
      case "Intermediate":
        // Ocean teal tones for steady progress
        return "bg-gradient-to-br from-cyan-400 to-teal-700";
      default:
        // Bright orange tones for early enthusiasm
        return "bg-gradient-to-br  from-amber-400 to-orange-700";
    }
  };

  return (
    <div key={index} className="cursor-pointer ">
      <div className="relative w-full        border border-border rounded-lg flex flex-col items-start justify-start gap-2 p-4 overflow-hidden ">
        <span
          className={`absolute top-0 right-0 ${handleLevelBg()} w-24 h-24 bg-gradient-to-br from-accent/60 via-accent-hover/40 to-transparent rounded-full blur-2xl pointer-events-none z-20`}
          style={{ transform: "translate(30%,-30%)" }}
        ></span>
        <div className="flex gap-2 items-center relative z-10">
          <div
            className="text-accent p-2 rounded-md border border-border bg-slate-50
                        "
          >
            {tech.icon}
          </div>
          <div>
            <h4 className="text-text text-lg sm:text-xl mb-1 font-semibold ">
              {tech.name}
            </h4>
            <span
              className={`font-semibold text-xs ${handleLevelBg()} min-w-20 text-center text-white py-[2px] px-1 rounded-md`}
            >
              {tech.level}
            </span>
          </div>
        </div>
        <p className="text-text-secondary text-sm line-clamp-3 mt-1">
          {tech.description}
        </p>
        <div>
          <button className="inline-flex items-center gap-2 text-text font-semibold mt-auto group-hover:underline transition-all cursor-pointer">
            Read More <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
SkillCard.propTypes = {
  tech: PropTypes.shape({
    icon: PropTypes.node,
    name: PropTypes.string,
    description: PropTypes.string,
    level: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default SkillCard;
