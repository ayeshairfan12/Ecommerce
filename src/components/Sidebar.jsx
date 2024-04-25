"use client";
import React, { useState } from "react";

const Sidebar = ({ toggleSidebar }) => {
  const menuItems = [
    { title: "New In" },
    { title: "Collection", dropdown: ["Fluff", "Kidos", "Nora"] },
    { title: "Shoes", dropdown: ["Sandles", "Heels", "Boots"] },
    { title: "Tops" },
    { title: "Bottoms" },
    { title: "Scarfs"},
    { title: "Hats" },
    { title: "Winter"},
    { title: "Summer"},
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="h-screen lg:w-1/4 md:w-2/5 w-5/6 bg-slate-100 fixed z-50 top-0 left-0 overflow-scroll overflow-x-hidden flex flex-col gap-24 transition-all duration-300 ease-in-out ">
      <div className="relative">
        <button onClick={toggleSidebar} className="absolute top-0 right-0 mt-6 mr-6">
          <svg
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            id="cross"
          >
            <g>
              <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z"></path>
              <path d="M22.71 9.29a1 1 0 0 0-1.42 0L16 14.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L17.41 16l5.3-5.29a1 1 0 0 0 0-1.42Z"></path>
            </g>
          </svg>
        </button>
        <ul className="text-black text-xl flex flex-col gap-2 mt-20">
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className="relative"
            >
              <button 
                onClick={() => handleDropdownToggle(index)}
                className="flex items-center justify-between w-full"
              >
                {item.title}
                {item.dropdown && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 64 64"
                    viewBox="0 0 64 64"
                    height="24"
                    width="24"
                    id="arrow"
                    className={activeDropdown === index ? "transform rotate-180" : ""}
                  >
                    <path
                      fill="#134563"
                      d="m-218.7-308.6 2-2 11.7 11.8 11.7-11.8 2 2-13.7 13.7-13.7-13.7"
                      transform="translate(237 335)"
                    ></path>
                  </svg>
                )}
              </button>
              {item.dropdown && activeDropdown === index && (
                <ul className="absolute left-0 top-full z-10 text-base bg-slate-100 text-black w-full">
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <li key={dropdownIndex} className=" pt-3  ">
                      {dropdownItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <footer className="flex order-1 gap-16 h-1/4 mt-auto">
        <div>
          <h1 className="font-serif font-bold text-2xl italic">INTROBELLE.</h1>
        </div>
        {/* ... (same SVG code for footer) ... */}
      </footer>
    </div>
  );
};

export default Sidebar;
