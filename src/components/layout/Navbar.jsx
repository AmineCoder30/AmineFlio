import React from "react";
import navItems from "../../constants/navItems";

function Navbar() {
  return (
    <div
      className={`flex z-40 justify-around absolute top-0 bg-sideBg-900 rounded-b-[15px] gap-4 items-center left-1/2 -translate-x-1/2  mb-10 px-4 py-1   transition-all duration-300`}
    >
      {navItems.map((item) => (
        <a href={item.url} key={item.id}>
          <div className="relative group hover:cursor-pointer hover:text-orange-500 p-2 rounded-full transition-all duration-500">
            {item.icon}
            <div
              className={` top-[50px] absolute  left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-sideBg-950 rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100`}
            >
              {item.name}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Navbar;
