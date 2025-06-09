// src/components/ContactInfo.jsx
import React from "react";
import { Mail, Phone, Calendar, MapPin } from "lucide-react";

const ContactInfo = () => {
  const infoItems = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "code30a@gmail.com",
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+212 651167495",
    },
    {
      icon: Calendar,
      label: "BIRTHDAY",
      value: "June 30",
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "Morocco, Meknés",
    },
  ];

  return (
    <div className="mt-5 space-y-4">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-card-hover flex items-center justify-center">
            <item.icon className="text-accent text-xl" />
          </div>
          <div>
            <h3 className="text-text font-semibold">{item.label}</h3>
            <p className="text-text-secondary text-sm">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
