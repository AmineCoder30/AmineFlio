import PropTypes from "prop-types";

const ServiceCard = ({ Icon, title, description, features = [] }) => {
  return (
    <div className="group relative w-full cursor-pointer overflow-hidden rounded-3xl border border-border bg-card-bg shadow-lg transition-all duration-500 hover:shadow-2xl">
      {/* Animated gradient backgrounds */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-700/20 blur-3xl transition-all duration-1000 group-hover:right-0 group-hover:scale-125" />
        <div className="absolute left-1/4 -bottom-32 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-400/15 to-teal-700/15 blur-3xl transition-all duration-1000 group-hover:bottom-0 group-hover:scale-110" />
        <div className="absolute -top-20 left-1/3 h-64 w-64 rounded-full bg-gradient-to-bl from-purple-500/20 to-indigo-700/20 blur-3xl transition-all duration-1000 group-hover:-top-10 group-hover:left-1/4" />
      </div>
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(var(--primary-rgb, 255, 255, 255), 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--primary-rgb, 255, 255, 255), 0.03) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 translate-y-full bg-gradient-to-b from-transparent via-primary/5 to-transparent transition-transform duration-1000 group-hover:translate-y-0" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-7">
        {/* Icon container */}
        <div className="relative mb-7 w-fit">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-background to-background/50 p-4 shadow-lg backdrop-blur-sm transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-primary/20">
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/10 to-accent-hover/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <Icon className="relative h-9 w-9 text-accent-hover transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6" />

            {/* Orbiting particles */}
            <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary opacity-0 shadow-lg shadow-primary/50 transition-all duration-500 group-hover:opacity-100 group-hover:animate-spin" />
            <div className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rounded-full bg-accent-hover opacity-0 shadow-lg shadow-accent-hover/50 transition-all duration-700 group-hover:opacity-100 group-hover:animate-spin" />
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold text-text ">{title}</h1>

        {/* Description */}
        <p className="mb-8 flex-grow text-sm leading-relaxed text-text-secondary opacity-90 transition-all duration-700 group-hover:translate-x-2 group-hover:opacity-100">
          {description}
        </p>

        {/* Feature badges */}
        {features.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group/badge relative overflow-hidden rounded-2xl border border-orange-400/30 bg-gradient-to-r from-orange-400/10 to-orange-700/15 px-2 py-1 text-xs font-medium text-text shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/30"
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                {/* Ripple effect */}
                <div className="absolute inset-0 scale-0 rounded-2xl bg-gradient-to-r from-orange-400/30 to-orange-700/40 opacity-50 transition-all duration-700 group-hover/badge:scale-150 group-hover/badge:opacity-0" />

                {/* Shimmer */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover/badge:translate-x-full" />

                {/* Content */}
                <span className="relative flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-hover opacity-75 duration-1000"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-hover"></span>
                  </span>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom highlight bar */}
      <div className="absolute bottom-0 left-0 h-1 w-0 overflow-hidden bg-gradient-to-r from-primary via-accent-hover to-primary transition-all duration-700 group-hover:w-full">
        <div className="absolute inset-0 -translate-x-full animate-pulse bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      </div>

      {/* Corner accents */}
      <div className="absolute right-0 top-0 h-16 w-16 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <div className="absolute right-0 top-0 h-0.5 w-0 bg-gradient-to-l from-primary to-transparent transition-all duration-500 group-hover:w-full" />
        <div className="absolute right-0 top-0 h-0 w-0.5 bg-gradient-to-b from-primary to-transparent transition-all duration-500 delay-200 group-hover:h-full" />
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
};

export default ServiceCard;
