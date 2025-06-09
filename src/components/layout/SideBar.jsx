import React from "react";
import socialMediaLinks from "../../constants/socialMedia";
import avatar from "../../assets/avatar.png";
import ContactInfo from "../ui/ContactInfo";
import { ArrowDown } from "lucide-react";

function SideBar() {
  const [showSocialMedia, setShowSocialMedia] = React.useState(false);
  return (
    <div className="w-full  xl:w-[320px] relative">
      <button
        className="absolute top-[1px] left-0 xl:hidden z-40 bg-gradient-to-r from-accent to-accent-hover border-l border-b border-accent p-1 rounded-tl-md rounded-bl-md"
        onClick={() => setShowSocialMedia(!showSocialMedia)}
      >
        <ArrowDown size={20} className="text-white" />
      </button>
      <div className="w-full sticky top-10 rounded-md flex flex-col justify-between border border-border p-5 bg-card-bg">
        <div className="w-full">
          <div className="flex flex-row gap-2 lg:flex-col items-center lg:text-center">
            <div className="rounded-lg w-28 lg:w-40 bg-card-hover">
              <img className="" src={avatar} alt="my photo" />
            </div>
            <div>
              <h2 className="text-2xl lg:mt-3 mb-3 font-bold text-text">
                Amine Mohamed
              </h2>
              <p className="bg-card-hover lg:bg-transparent font-light px-2 py-1 rounded-md text-text">
                Full Stack Developer
              </p>
              <p className="text-text-secondary text-sm mt-2">
                Specializing in MERN Stack & Modern Web Technologies
              </p>
            </div>
          </div>
        </div>

        <div
          className={`border-t border-border overflow-hidden duration-500 transition-all xl:mt-5 xl:opacity-100 xl:max-h-fit ${
            showSocialMedia
              ? "max-h-[400px] mt-5 opacity-100"
              : "max-h-0 mt-0 opacity-0"
          }`}
        >
          <ContactInfo />
          <ul className="w-full mt-5 flex justify-center items-center gap-2 text-text-secondary">
            {socialMediaLinks.map((item, index) => {
              return (
                <li
                  className="hover:text-accent hover:bg-card-hover transition-colors p-2 border border-border rounded-md"
                  key={index}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-secondary hover:text-accent"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
