// src/components/ContactInfo.jsx
import React from "react";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdCalendarToday,
} from "react-icons/md";

const ContactInfo = () => {
  const infoItems = [
    {
      icon: MdEmail,
      label: "EMAIL",
      value: "code30a@gmail.com",
    },
    {
      icon: MdPhone,
      label: "PHONE",
      value: "+212 651167495",
    },
    {
      icon: MdCalendarToday,
      label: "BIRTHDAY",
      value: "June 30",
    },
    {
      icon: MdLocationOn,
      label: "LOCATION",
      value: "Morocco, Meknés",
    },
  ];

  return (
    <div className="py-5 mt-5">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 mb-6 last:mb-0 text-white"
        >
          {/* Icon */}
          <div className="bg-sideBg-950 p-3 rounded-full text-orange-400 text-xl">
            <item.icon />
          </div>
          {/* Text */}
          <div>
            <div className="text-gray-400 text-sm  uppercase">{item.label}</div>
            <div className="">{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
