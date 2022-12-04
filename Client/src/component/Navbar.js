import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();
  const handelHomePage = () => {
    Navigate("/");
  };
  return (
    <div className="bg-black h-16">
      <div className="justify-between items-center h-[72px] shadow-header_box flex pl-[147px] md:pl-[36px] sm:h-[36px] sm:pl-[17px] ">
        <div className="flex items-center justify-center sm:pt-[4px]">
          <div
            onClick={handelHomePage}
            className="flex gap-2 cursor-pointer font-bold text-[24.69px] mt-4 md:text-[20px] sm:text-[12px] sm:gap-1">
            <p className=" text-[#bebabd]">Kavin 's</p>
            <p className=" text-[#747485]">Intro</p>
          </div>
        </div>
        <div className="flex sm:gap-[10px]">
          <div className="pt-[43px] pb-[22px] text-[16px] text-[#adadbb] md:pr-[30px] md:text-[14px] sm:text-[10px]">
            <ul className="flex gap-[30px] md:gap-[27px] sm:gap-[20px]">
              <Link to="/education">Education</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/add-info">Additional Info</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
