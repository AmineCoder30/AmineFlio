import PropTypes from "prop-types";
const ServiceCard = ({
  Icon,
  title,
  description,

  features = [],
}) => {
  return (
    <div className="w-full  duration-500 group cursor-pointer overflow-hidden relative rounded border border-border bg-card-bg p-4 flex flex-col justify-evenly">
      <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900/15 backdrop-blur-sm right-1 -bottom-24"></div>
      <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700/15 backdrop-blur-sm right-12 bottom-12"></div>
      <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12  bg-sky-900/15 backdrop-blur-sm right-1 -top-12"></div>
      <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700/15 rounded-full group-hover:-translate-x-12"></div>
      <div className="z-10 flex flex-col justify-evenly w-full h-full">
        {/* Icon */}
        <div
          className={`text-primary p-2 w-fit rounded-md border border-border mb-5 bg-slate-50`}
        >
          <Icon className="text-accent-hover w-8 h-8" />
        </div>

        {/* Title */}
        <h1 className="font-bold text-2xl text-text relative  ">{title}</h1>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-6 ">{description}</p>

        {/* New Element: Feature Badges */}
        <div className="flex flex-wrap gap-2 pt-2 relative mt-5 ">
          {features.map((feature, i) => (
            <span
              key={i}
              className={`
    px-3 py-1 
    text-xs font-medium
    rounded-full
    text-white
    bg-gradient-to-tr
  from-indigo-600 to-accent-hover backdrop-blur-sm shadow-sm transition-all duration-500 delay-[calc(100ms*var(--i))]`}
              style={{ "--i": i }}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  indx: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  background: PropTypes.string.isRequired,
};

export default ServiceCard;
