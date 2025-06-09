// src/components/ServiceCard.jsx

import { useAnimation } from "../../hooks/useAnimation";

const ServiceCard = ({ Icon, title, description }) => {
  const cardRef = useAnimation();

  return (
    <div
      ref={cardRef}
      className="flex gap-3 bg-card-bg border border-border text-text p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className={` text-accent text-4xl mb-4`}>
        <Icon />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
