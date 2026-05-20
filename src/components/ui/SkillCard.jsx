import PropTypes from "prop-types";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

function SkillCard({ tech, index }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
  });
  const [isHover, setIsHover] = useState(false);

  const handleLevelBg = () => {
    switch (tech.level) {
      case "Expert":
        return "bg-gradient-to-br from-purple-500 to-indigo-700";
      case "Intermediate":
        return "bg-gradient-to-br from-cyan-400 to-teal-700";
      default:
        return "bg-gradient-to-br  from-amber-400 to-orange-700";
    }
  };

  const rotateAmplitude = 12;

  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    setTransform({
      rotateX: rotationX,
      rotateY: rotationY,
    });
  }

  function handleMouseEnter() {
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
    setTransform({ rotateX: 0, rotateY: 0 });
  }

  return (
    <div
      key={index}
      className="cursor-pointer group h-full"
      ref={cardRef}
      style={{
        perspective: "1000px",
        WebkitPerspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative w-full h-full border border-border bg-card-bg rounded-xl flex flex-col items-start justify-start gap-4 p-6 overflow-hidden transition-colors duration-300 ${isHover ? "bg-card-hover" : ""}`}
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${isHover ? 1.02 : 1})`,
          transition: isHover
            ? "transform 0.1s ease-out, background-color 0.3s ease"
            : "transform 0.5s cubic-bezier(.17,.67,.83,.67), background-color 0.3s ease",
          willChange: "transform",
          transformStyle: "preserve-3d",
        }}
      >
        <span
          className={`absolute top-0 right-0 ${handleLevelBg()} w-24 h-24 bg-gradient-to-br from-accent/60 via-accent-hover/40 to-transparent rounded-full blur-2xl pointer-events-none z-20`}
          style={{ transform: "translate(30%,-30%)" }}
        ></span>

        <div
          className="flex gap-4 items-start w-full relative z-10"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex-shrink-0 text-accent p-3 rounded-lg border border-border bg-slate-100 flex items-center justify-center shadow-sm">
            {tech.icon}
          </div>

          <div className="flex-grow pt-1">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-text font-bold text-lg tracking-tight">
                {tech.name}
              </h4>
            </div>
            <span
              className={`inline-flex items-center gap-1.5 px-2 py-0.5  ${handleLevelBg()} rounded-md  border border-border text-[11px] font-medium tracking-wide text-white uppercase w-fit`}
            >
              <span className="w-1 h-1 rounded-full bg-white animate-pulse"></span>
              {tech.level}
            </span>
          </div>
        </div>

        <p
          className="text-text-secondary text-sm leading-relaxed line-clamp-3 relative z-10 mx-1 flex-grow"
          style={{ transform: "translateZ(10px)" }}
        >
          {tech.description}
        </p>

        <div
          className="w-full relative z-10 mt-2 mx-1"
          style={{ transform: "translateZ(15px)" }}
        >
          <a
            href={tech.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-text-secondary hover:text-accent transition-colors duration-200 uppercase tracking-widest"
          >
            Explore{" "}
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
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
    docs: PropTypes.string,
    level: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default SkillCard;
