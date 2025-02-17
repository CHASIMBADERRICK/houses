import React from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import logo from "../assets/logo.png";
import NavBtn from "./NavBtn";
import "./Navbar.css";

const Navbar = () => {
  // const buttons = [
  //   { title: "Our Added Advantage", underline: "-bottom-[1.3rem]   bg-[#e20112]" },
  //   { title: "Properties", underline: "-bottom-[1.3rem]" },
  //   { title: "Service", underline: "-bottom-[1.3rem]" },
  //   { title: "Mortgage", underline: "-bottom-[1.3rem]" },
  //   { title: "Find Realtors", underline: "-bottom-[1.3rem]" },
  //   { title: "My Home", underline: "-bottom-[1.3rem]" },
  //   { title: "Home", underline: "-bottom-[1.3rem]" },
  //   {
  //     title: "Advertise",
  //     border: "border p-1 rounded-[0.3rem] border-gray-400",
  //   },
  // ];
  return (
    <div className="bg-white">
      {" "}
      <div className="flex  justify-between  px-4 items-center max-w-[98vw] sm:max-w-[90vw]  lg:max-w-[85vw]  mx-auto whitespace-nowrap">
        {/* Left Menu */}
        <div className=" lg:hidden flex items-center ">
          <FiMenu className="w-7 h-7" />
        </div>
        {/* Mid Logo */}
        <div className="shrink-0 pr-2">
          {/* Logo */}
          <div className=" -my-[0.7rem] ">
            {/* <img src="/logo" alt="Real Estate Logo" className="w-40 shrink-0" /> */}
            <img src={logo} alt="Candid Realtor Logo" className="w-40  shrink-0" />
          </div>
        </div>
        {/* Links */}
        <nav>
      <ul>
        <li><a href="#">Our Added Advantage</a></li>
        <li><a href="#">Properties</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Mortgage</a></li>
        <li><a href="#">Find Realtors</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Home</a></li>
      </ul>
    </nav>
        {/* <div className="hidden lg:flex   ">
          <ul className="flex   space-x-1 items-center     py-4 ">
            {buttons.map((button) => (
              <NavBtn
                title={button.title}
                border={button.border}
                underline={button.underline}
              />
            ))}
          </ul>
        </div> */}
        {/* Right Authentification */}
        <div className="flex h-full items-center  lg:hidden">
          <div className="w-10 h-10 bg-[#b21f23] rounded-full text-white flex items-center justify-center ">
            <HiOutlineUser className="text-[28px] " />
          </div>
        </div>

        <div className="hidden lg:flex   items-center pl-6 text-[15px]">
          <button>Log in</button>
          <div className="   bg-[#b21f23] py-[6px] text-white rounded-full px-4 ml-6 flex items-center ">
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
