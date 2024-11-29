import { useState } from "react";
import { LuMove } from "react-icons/lu";
import { IoBarChartSharp } from "react-icons/io5";
import { PiUserFocusBold } from "react-icons/pi";
import { AiFillProduct } from "react-icons/ai";
import { IoIosMailUnread } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import LogoutButton from "../hooks/logoutButton";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("Overview");

  const menuItems = [
    { name: "Overview", icon: <LuMove size={30} /> },
    { name: "Statistics", icon: <IoBarChartSharp size={30} /> },
    { name: "Customers", icon: <PiUserFocusBold size={30} /> },
    { name: "Products", icon: <AiFillProduct size={30} /> },
    { name: "Messages", icon: <IoIosMailUnread size={30} /> },
    { name: "Wallet", icon: <IoWalletOutline size={30} /> },
  ];

  const generalItems = [
    { name: "Settings", icon: <CiSettings size={30} /> },
    { name: "Security", icon: <MdOutlineSecurity size={30} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#012706] ">
      <div className="flex-grow flex flex-col justify-between p-4 border rounded-lg bg-[#012706]">
        <p className="text-center text-2xl text-white py-6 lg:py-0">RB</p>

        <div className="my-6  flex-grow">
          <p className=" text-lg text-white lg:p-0 py-4">MENU</p>
          <div className="flex flex-col lg:space-y-5 space-y-10 mt-4">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group flex items-center space-x-3 lg:space-x-4 cursor-pointer h-full"
                onClick={() => setActiveLink(item.name)}
              >
                <span
                  className={`absolute inset-y-0 left-0 w-1 bg-[#a0f333] rounded-tr-md rounded-br-md transition-all duration-300 ${activeLink === item.name || "group-hover:h-full"} ${activeLink === item.name ? "h-full" : "h-0"}`}
                ></span>
                <div className={`relative z-10 ${activeLink === item.name ? "text-[#a0f333]" : "text-gray-400"}`}>
                  {item.icon}
                </div>
                <p className={`hidden lg:block text-white ${activeLink === item.name ? "text-[#a0f333]" : "text-gray-400"}`}>
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-gray-500 my-2"></div>

          <div className="space-y-6">
            <p className="hidden lg:block text-lg text-white">GENERAL</p>
            {generalItems.map((item) => (
              <div
                key={item.name}
                className="relative group flex items-center space-x-3 lg:space-x-4 cursor-pointer"
                onClick={() => setActiveLink(item.name)}
              >
                <span
                  className={`absolute inset-y-0 left-0 w-1 bg-[#a0f333] rounded-tr-md rounded-br-md transition-all duration-300 ${activeLink === item.name || "group-hover:h-full"} ${activeLink === item.name ? "h-full" : "h-0"}`}
                ></span>
                <div className={`relative z-10 ${activeLink === item.name ? "text-[#a0f333]" : "text-gray-400"}`}>
                  {item.icon}
                </div>
                <p className={`hidden lg:block text-white ${activeLink === item.name ? "text-[#a0f333]" : "text-gray-400"}`}>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="lg:flex-row flex flex-col items-center space-x-3 space-y-4 pb-5">
          <div className="lg:w-[56px] lg:h-[56px] w-[32px] h-[32px] border rounded-full bg-[#a0f333] border-none"></div>
          <div >
            <LogoutButton   />  
          </div>
        </div>
        
      </div>
    </div>
  );
}
