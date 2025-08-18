import PropTypes from "prop-types";
const ServiceCard = ({
  Icon,
  title,
  description,
  classes,
  indx,
  features = [],
}) => {
  return (
    <div className="group w-full cursor-pointer  bg-gradient-to-br from-card-bg to-card-hover border border-border rounded-xl  p-9 space-y-4 relative overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
      {/* Background circle with index */}
      <div
        className={`w-24 h-24 ${classes} rounded-full absolute -right-5 -top-7 group-hover:scale-110 transition-transform duration-500`}
      >
        <p className="absolute bottom-6 left-7 text-white text-2xl font-bold">
          0{indx}
        </p>
      </div>

      {/* Icon */}
      <div
        className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-full ${classes} transition-colors duration-500`}
      >
        <Icon className="text-white w-8 h-8" />
      </div>

      {/* Title */}
      <h1 className="font-bold text-2xl text-text relative z-10  ">{title}</h1>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-6 relative z-10">
        {description}
      </p>

      {/* New Element: Feature Badges */}
      <div className="flex flex-wrap gap-2 pt-2 relative z-10">
        {features.map((feature, i) => (
          <span
            key={i}
            className={`
    px-3 py-1 
    text-xs font-medium 
    rounded-full 
    border border-border
   
    ${classes}                 
    
    backdrop-blur-sm 
    text-white
    shadow-sm 

   
    opacity-0 translate-y-2 scale-95 

   
    group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 

  
    transition-all duration-500 delay-[calc(100ms*var(--i))]
    hover:shadow-[0_0_10px_rgba(0,0,0,0.15)]
    hover:bg-gradient-to-r hover:from-accent/30 hover:to-accent/10
  `}
            style={{ "--i": i }}
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
  conicGR: PropTypes.string.isRequired,
};

export default ServiceCard;
