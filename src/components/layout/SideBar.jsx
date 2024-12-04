import React from "react";
import socialMediaLinks from "../../constants/socialMedia";
import avatar from "../../assets/avatar.png";
import ContactInfo from "../ui/ContactInfo";
import { MdMenu } from "react-icons/md";

function SideBar() {
  const [showSocialMedia, setShowSocialMedia] = React.useState(false);
  return (
    <div className=" w-full lg:w-[280px] xl:w-[320px] relative  ">
      <button
        className="absolute top-[1px] right-0 lg:hidden z-50 bg-gradient-to-r from-orange-500 to-[#fff0] border-l border-b border-orange-500 p-2 rounded-tl-md rounded-bl-md"
        onClick={() => setShowSocialMedia(!showSocialMedia)}
      >
        <MdMenu size={20} color="white" />
      </button>
      <div className="w-full sticky top-10 rounded-md flex flex-col justify-between   border border-gray-300 p-5   bg-sideBg-900">
        <div className=" w-full">
          <div className="flex flex-row gap-2 lg:flex-col items-center lg:text-center">
            <div className="rounded-lg w-28 lg:w-40 bg-[#dfdfdf13]">
              <img className="  " src={avatar} alt="my photo" />
            </div>
            <div>
              <h2 className="text-2xl lg:mt-3 mb-3 font-bold text-white">
                Amine Mohamed
              </h2>
              <p className=" bg-[#dfdfdf13] lg:bg-transparent font-light   px-2  py-1  rounded-md text-white   ">
                Full Stack Developer
              </p>
            </div>
          </div>
        </div>

        <div
          className={` border-t border-gray-400 overflow-hidden duration-500 transition-all lg:mt-5  lg:opacity-100 lg:max-h-fit  ${
            showSocialMedia
              ? "max-h-[400px]  mt-5 opacity-100"
              : "max-h-0 mt-0 opacity-0 "
          } `}
        >
          <ContactInfo />
          <ul className=" w-full flex justify-center items-center gap-2 text-gray-500">
            {socialMediaLinks.map((item, index) => {
              return (
                <li className="hover:text-orange-500" key={index}>
                  <a href={item.url} target="_blank" rel="noreferrer">
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
