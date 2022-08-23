import React from "react";
import CountUp from "react-countup";

function heroBar() {
  return (
    <section className="relative z-10 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg flex ">
      <div className="container mx-auto max-w-[1200px] sm:h-[80px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 h-full w-full">
          <div className="flex justify-between items-center pr-[25px] pl-[20px] sm:pl-0 py-[6px] border-b-2 sm:border-b-0 sm:border-r-4 border-[#33333D]/10 font-regular">
            <span className="sm:text-[16px] text-[12px] text-textgray">
              Assets under <br /> managment
            </span>
            <span className="sm:text-[40px] text-[32px]">
              $<CountUp end={458.33} />K
            </span>
          </div>

          <div className="flex justify-between items-center pr-[25px] sm:pl-[25px] pl-[20px]  py-[6px] border-b-2 sm:border-b-0 sm:border-r-4 border-[#33333D]/10 font-regular">
            <span className="sm:text-[16px] text-[12px] text-textgray">
              24 hours <br /> volume
            </span>
            <span className="sm:text-[40px] text-[32px] font-[400px]">
              $<CountUp end={21.12} />K
            </span>
          </div>

          <div className="flex justify-between items-center pl-[20px] sm:pl-[25px] pr-[20px] sm:pr-0">
            <span className="sm:text-[16px] text-[12px] text-textgray">
              Total <br /> Strategies
            </span>
            <span className="sm:text-[40px] text-[32px]">
              <CountUp end={110} />+
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default heroBar;
