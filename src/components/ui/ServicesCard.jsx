// src/components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ Icon, title, description, colors }) => {
  return (
    <div
      className={`flex gap-3   bg-[#8f8f8f33]    border-gray-200 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}
    >
      <div className={`${colors}  text-4xl mb-4`}>
        <Icon />
      </div>
      <div>
        <h3 className={`text-xl font-semibold mb-1 `}>{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
