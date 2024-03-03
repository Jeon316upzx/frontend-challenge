"use client";

import Logo from "../shared/Logo";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center h-20 text-gray-500 mt-5 px-4 lg:px-20">
      <div className="row-span-3">
        {" "}
        <Logo />
      </div>

      <div className="grid lg:hidden grid-cols-3 grid-rows-2 gap-2 justify-center items-center ">
        <span className=" whitespace-nowrap text-sm">Contact Support</span>
        <span className=" whitespace-nowrap text-sm">About Us</span>
        <span className=" whitespace-nowrap text-sm">Terms</span>
        <span className=" text-sm" >Privacy</span>
        <span className=" text-sm">LinkedIn</span>
        <span className="text-sm">X</span>
      </div>
      <div className="hidden lg:flex flex-col lg:flex-row">
        <span className="px-4 whitespace-nowrap ">Contact Support</span>
        <span className="px-4 whitespace-nowrap">About Us</span>
        <span className="px-4 whitespace-nowrap">Terms</span>
        <span className="px-4">Privacy</span>
        <span className="px-4">LinkedIn</span>
        <span className="">X</span>
      </div>
    </div>
  );
};

export default Footer;
