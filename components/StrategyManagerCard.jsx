import React from "react";
import Image from "next/image";
import one from "../public/images/strategy/001.svg";
import two from "../public/images/strategy/002.svg";
import three from "../public/images/strategy/003.svg";
import four from "../public/images/strategy/004.svg";
import five from "../public/images/strategy/005.svg";
import six from "../public/images/strategy/006.svg";
import seven from "../public/images/strategy/007.svg";
import eight from "../public/images/strategy/008.svg";
import rightarrow from "../public/images/rightarrow.svg";

function StrategyManagerCard() {
  return (
    <div>
      <div className="bg-opacity-30 bg-[#141541] sm:h-[195px] overflow-hidden ring-1 ring-[#3F4077]/30 bg-clip-padding backdrop-filter backdrop-blur-xl flex flex-col-reverse sm:flex-row">
        <div className="p-[30px]">
          <span className="sm:text-[32px] sm:mt-0 mt-[24px] leading-[27px] sm:leading-[44px] text-[20px] w-[150px] font-semibold">
            Trusted by best in market strategy managers.
          </span>
          <span className=" flex group mt-[24px]">
            <p>Explore more &nbsp;</p>
            <span className="group-hover:translate-x-2 duration-300 flex items-center">
              <Image type="image" alt="" src={rightarrow} />
            </span>
          </span>
        </div>
        <div className="h-[93px] overflow-hidden">
          <div className="rotate-12 opacity-70 sm:mr-[24px] ">
            <div className="grid grid-cols-4 gap-[15px] sm:gap-[30px] pl-[62px]">
              <Image type="image" alt="" src={one} />
              <Image type="image" alt="" src={two} />
              <Image type="image" alt="" src={three} />
              <Image type="image" alt="" src={four} />
            </div>

            <div className="grid grid-cols-4 gap-[15px] sm:gap-[30px] mt-[15px] sm:mt-[30px] pr-[62px]">
              <Image type="image" alt="" src={five} />
              <Image type="image" alt="" src={six} />
              <Image type="image" alt="" src={seven} />
              <Image type="image" alt="" src={eight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrategyManagerCard;
