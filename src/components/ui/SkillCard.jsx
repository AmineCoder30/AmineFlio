import PropTypes from "prop-types";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

function SkillCard({ tech, index }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
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

  const rotateAmplitude = 14;

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
    setTransform((prev) => ({ ...prev }));
  }

  function handleMouseLeave() {
    setIsHover(false);
    setTransform({ rotateX: 0, rotateY: 0 });
  }

  return (
    <div
      key={index}
      className="cursor-pointer"
      ref={cardRef}
      style={{
        perspective: "800px",
        WebkitPerspective: "800px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full border border-border rounded-lg flex flex-col items-start justify-start gap-2 p-4 overflow-hidden"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) `,
          transition: isHover
            ? "transform 0.12s cubic-bezier(.17,.67,.83,.67)"
            : "transform 0.4s cubic-bezier(.17,.67,.83,.67)",
          willChange: "transform",
        }}
      >
        <span
          className={`absolute top-0 right-0 ${handleLevelBg()} w-24 h-24 bg-gradient-to-br from-accent/60 via-accent-hover/40 to-transparent rounded-full blur-2xl pointer-events-none z-20`}
          style={{ transform: "translate(30%,-30%)" }}
        ></span>
        {/* ...existing code... */}
        <div className="flex gap-2 items-center relative z-10">
          <div className="text-accent p-2 rounded-md border border-border bg-slate-50">
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
          <a
            href={tech.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text hover:text-accent font-semibold mt-auto group-hover:underline transition-all cursor-pointer"
          >
            Read More <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        {/* ...existing code... */}
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
