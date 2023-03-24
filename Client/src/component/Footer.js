import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="bg-black text-red-200 border-t border-gray-700 h-[100px] sm:h-[80px]">
        <div className="pt-[10px] pl-[100px] pr-[100px] divide-y-2 divide-[#d6cdcdb2] sm:pl-[40px] sm:pr-[40px] sm:pt-[8px]">
          <div className="flex justify-between">
            <p className="w-[194px] text-[20px] font-bold pb-[10px] sm:text-[16px] sm:pb-[7px]">
              Portfolio
            </p>
            <Link to='/lock'>Maintain</Link>
          </div>
          <div className=" flex justify-between items-center pt-[5px] text-[16px] font-semibold sm:text-[13px]">
            <div className=" flex gap-[28px] sm:gap-[12px]">
              <a href="">
                Feedback
              </a>
              <a href="">
                Contact
              </a>
            </div>
            <div className="flex gap-1 text-[10px] sm:text-[8px]">
              <div className="flex gap-1">
                <p className="">© 2022</p>
                <p className="font-bold">Kavinkumar.</p>
              </div>
              <p className="" >All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
