import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-gradient-to-r from-sky-100 via-neutral-200 to-gray-200 w-fit h-[120px] sm:h-[137px]">
        <div className="pt-[15px] pl-[100px] pr-[100px] divide-y-2 divide-[#D9D9D9B2]">
          <p className="w-[194px] text-[20px] font-bold pb-[15px]">
            Portfolio
          </p>
          <div className=" flex justify-between items-center pt-[15px] text-[16px] font-semibold">
            <div className=" flex gap-[28px]">
              <a className="w-[102px] h-[27px]" href="">
                Feedback
              </a>
              <a className="w-[102px] h-[27px]" href="">
                Contact
              </a>
            </div>
            <div className=" flex gap-1 text-[13px]">
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
