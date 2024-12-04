import { MdWeb, MdPhotoCamera } from "react-icons/md";
import { FaMobileAlt, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    Icon: MdWeb,
    title: "Web Design",
    description:
      "The most modern and high-quality design made at a professional level.",
    color: "text-[#c5ff41] ",
  },
  {
    Icon: FaLaptopCode,
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
    color: "text-white ",
  },
  {
    Icon: FaMobileAlt,
    title: "Mobile Apps",
    description:
      "Professional development of applications for iOS and Android.",
    color: "text-orange-600 ",
  },
  {
    Icon: MdPhotoCamera,
    title: "Desktop Apps",
    description: "I make high-quality desktop apps  at a professional level.",
    color: "text-violet-600 ",
  },
];

export default services;
