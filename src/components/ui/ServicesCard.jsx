const ServiceCard = ({ Icon, title, description }) => {
  return (
    <div className="relative  inline-flex  w-full h-full overflow-hidden rounded-lg p-[2px] focus:outline-none">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#fbbf24_50%,#ea580c_100%)]"></span>
      <span className="flex gap-3 bg-card-bg  border border-border text-text p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-full relative z-10">
        <div className={`text-accent text-4xl mb-4`}>
          <Icon />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-1">{title}</h3>
          <p className="text-text-secondary">{description}</p>
        </div>
      </span>
    </div>
  );
};

export default ServiceCard;
