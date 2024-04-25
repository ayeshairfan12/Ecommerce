'use client'
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <nav className=" sticky bg-[#8D769A] ">
      <div className=" flex justify-around items-center h-[10vh]">
        <button onClick={toggleSidebar}
        >
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            id="menu"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
        <div 
        className=""
        
       
            style={{display: isOpen ? "block" : "none"}}>

          <Sidebar toggleSidebar={toggleSidebar}/>
          </div>
        <div>
          <h1 className=" font-serif font-bold italic"
          
          >INTROBELLE.</h1>
        </div>
        <div className=" flex gap-4">
          <div></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            id="heart"
            viewBox="0 0 100 100"
            className=" hidden lg:block"
          >
            <path d="M48.6 85.4 15.7 52.8c-1.4-1.3-2.5-2.8-3.5-4.4-5.4-8.9-4-20.3 3.5-27.7C20 16.4 25.8 14 31.9 14c9.6 0 15.6 5.6 18.1 8.8 2.5-3.2 8.5-8.8 18.1-8.8 6.1 0 11.9 2.4 16.2 6.7 7.4 7.4 8.9 18.8 3.5 27.7-1 1.6-2.1 3.1-3.5 4.4L51.4 85.4c-.8.8-2 .8-2.8 0zM31.9 18c-5.1 0-9.8 2-13.4 5.5-6.1 6.1-7.3 15.5-2.9 22.8.8 1.3 1.8 2.6 2.9 3.7L50 81.2 81.5 50c1.1-1.1 2.1-2.3 2.9-3.7 4.4-7.4 3.3-16.8-2.9-22.8C77.9 20 73.1 18 68.1 18c-7.2 0-13.2 3.9-16.4 9.3-.8 1.3-2.7 1.3-3.5 0-3.1-5.4-9.1-9.3-16.3-9.3z"></path>
            <path
              fill="#00F"
              d="M944-370v1684H-840V-370H944m8-8H-848v1700H952V-378z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            id="user"
            viewBox="0 0 100 100"
            className=" hidden lg:block"
          >
            <path d="M59.3 52.2C65.8 48.2 70 40.3 70 33c0-10.4-8.5-22-20-22S30 22.6 30 33c0 7.3 4.2 15.2 10.7 19.2C25.3 56.3 14 70.4 14 87c0 1.1.9 2 2 2h68c1.1 0 2-.9 2-2 0-16.6-11.3-30.7-26.7-34.8zM34 33c0-10.3 8.5-18 16-18s16 7.7 16 18-8.5 18-16 18-16-7.7-16-18zM18.1 85c1-16.7 15-30 31.9-30s30.9 13.3 31.9 30H18.1z"></path>
            <path
              fill="#00F"
              d="M1224-790V894H-560V-790h1784m8-8H-568V902h1800V-798z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            id="search"
            width="24"
            height="24"
            className=" hidden lg:block"
          >
            <path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path>
          </svg>
          <img
            src="/assets/icons8-shopping-bag-32.png"
            alt=""
            className=" h-6 w-6"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
