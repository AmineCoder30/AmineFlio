import { Star } from "lucide-react";

function SkillCard({ tech, index }) {
  return (
    <div
      key={index}
      className="flex group glass  duration-200 transition-tansform relative cursor-pointer flex-col overflow-hidden items-center p-4  border border-border rounded-lg hover:shadow-lg transition-shadow "
    >
      <span
        className="absolute circle bottom-0 left-0 bg-accent w-10 h-10 bg-gradient-to-br from-accent/60 via-accent-hover/40 to-transparent rounded-full blur-2xl pointer-events-none z-20"
        style={{ transform: "translate(30%,-30%)" }}
      ></span>
      <div className="absolute flex justify-center items-center top-0 right-0 w-12 h-10 rounded-bl-md duration-200 scale-100 origin-top-right group-hover:scale-100 bg-gradient-to-tr from-accent to-accent-hover pointer-events-none z-0">
        <span className="text-white w-full flex items-center justify-center gap-1 text-xs font-semibold ">
          <span className="group-hover:scale-100 scale-100 duration-200 delay-200 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]">
            {tech.rating.toFixed(1)}
          </span>
          <Star
            size={14}
            color="yellow"
            className="inline-block mr-1 group-hover:scale-100 scale-100 duration-200 delay-200 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
          />
        </span>
      </div>
      <div className="text-accent mb-2">{tech.icon}</div>
      <h4 className="text-text text-xl font-semibold text-center">
        {tech.name}
      </h4>
      <p className="text-text-secondary text-sm text-center mt-1">
        {tech.description}
      </p>
    </div>
  );
}

export default SkillCard;
