import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();
  const handelHomePage = () => {
    Navigate("/");
  };
  return (
    <div className="h-16 w-full bg-gradient-to-r from-violet-500 via-slate-400 to-stone-300 fixed overflow-hidden">
      <div className="justify-between items-center shadow-header_box h-[72px] flex pl-[80px] pr-[40px] md:pl-[36px] sm:h-[36px] sm:pl-[12px]">
        <div className="flex items-center justify-center sm:pt-[4px]">
          <div
            onClick={handelHomePage}
            className="flex gap-2 cursor-pointer font-bold text-[24px] mt-4 md:text-[20px] sm:text-[16px] sm:gap-[2px]">
            <p className=" text-[#535052]">Kavin 's</p>
            <p className=" text-[#e8aaaa]">Intro</p>
          </div>
        </div>
        <div>
          <div className="pt-[43px] pb-[22px] text-[17px] text-gray-700 font-semibold md:pr-[30px] md:text-[14px] 
          sm:text-[14px] sm:font-bold">
            <ul className="flex gap-[30px] md:gap-[27px] sm:gap-[10px]">
              <Link to="/about">About</Link>
              <Link to="/education">Education</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
