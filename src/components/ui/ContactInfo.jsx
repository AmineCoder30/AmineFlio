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
    <div className="space-y-4 cursor-default">
      {infoItems.map((item, index) => (
        <div key={index} className="flex items-start gap-4 ">
          <div className="w-9 h-9 mt-0.5 rounded-lg bg-surface border border-border flex items-center justify-center flex-shrink-0  transition-all duration-300 shadow-sm">
            <item.icon className="text-text-secondary  w-4 h-4 transition-colors duration-300" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[10px] text-text-secondary font-bold tracking-[0.15em] uppercase mb-0.5">
              {item.label}
            </h3>
            <p className="text-text text-sm font-medium  transition-colors duration-300">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
