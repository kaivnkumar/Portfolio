import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();
  const handelHomePage = () => {
    Navigate("/");
  };
  return (
    <div className="h-16 w-full bg-black border-b border-gray-700 fixed overflow-hidden z-50">
      <div className="justify-between items-center shadow-header_box h-[72px] flex pl-[80px] pr-[40px] md:pl-[36px] sm:h-[36px] sm:pl-[12px] sm:pr-[10px]">
        <div className="flex items-center justify-center sm:pt-[4px]">
          <div
            onClick={handelHomePage}
            className="flex gap-2 cursor-pointer font-bold text-[24px] mt-4 md:text-[20px] sm:text-[13px] sm:gap-[1px]">
            <p className=" text-[#8f898c]">Kavin 's</p>
            <p className=" text-[#986c6c]">Intro</p>
          </div>
        </div>
        <div>
          <div className="pt-[43px] pb-[22px] text-[18px] text-blue-50 font-bold md:pr-[30px] md:text-[14px] 
          sm:text-[12px] sm:font-semibold">
            <ul className="flex gap-[30px] md:gap-[27px] sm:gap-[8px]">
              <Link className="relative group" to="/about">
                About
                <div className="absolute w-full h-[2px] rounded-2xl bg-white scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </Link>
              <Link className="relative group" to="/education">
                Education
                <div className="absolute w-full h-[2px] rounded-2xl bg-white scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </Link>
              <Link className="relative group" to="/projects">
                Projects
                <div className="absolute w-full h-[2px] rounded-2xl bg-white scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </Link>
              <Link className="relative group" to="/skills">
                Skills
                <div className="absolute w-full h-[2px] rounded-2xl bg-white scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </Link>
              <Link className="relative group" to="/contact">
                Contact
                <div className="absolute w-full h-[2px] rounded-2xl bg-white scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
