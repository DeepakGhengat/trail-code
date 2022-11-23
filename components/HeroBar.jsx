import React, { useEffect, useState } from "react";

//* Import Thirdparty Library
import CountUp from "react-countup";

import { getStats } from "../services/trendingStrategies/index.js";

function heroBar() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getStats().then(setStats).catch(console.log);
  }, []);

  return (
    <section className="relative  z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg flex mt-[30px]">
      <div className="container mx-auto max-w-[1200px] sm:h-[80px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 h-full w-full">
          <div className="flex  justify-between items-center pr-[25px] pl-[20px] sm:pl-0 py-[6px] border-b-2 sm:border-b-0 sm:border-r-4 border-[#000021] font-regular">
            <span className="sm:text-[16px] text-[12px] font-normal leading-[22px] text-gray-mid">
              Assets under <br /> managment
            </span>
            <span className="sm:text-[40px] font-normal text-[32px]">
              $<CountUp end={stats && stats.totalValueManaged / 1000} /> K
            </span>
          </div>

          <div className="flex justify-between items-center pr-[25px] sm:pl-[25px] pl-[20px]  py-[6px] border-b-2 border-[#000021] sm:border-b-0 sm:border-r-4 2xl:border-[#000021] xl:border-[#05042E] font-regular">
            <span className="sm:text-[16px] text-[12px] font-normal leading-[22px] text-gray-mid">
              Total <br /> volume
            </span>
            <span className="sm:text-[40px] font-normal text-[32px] font-[400px]">
              $<CountUp end={stats && stats.totalVolume / 1000000} /> M
            </span>
          </div>

          <div className="flex justify-between items-center pl-[20px] sm:pl-[25px] py-[6px] pr-[20px] sm:pr-0">
            <span className="sm:text-[16px] text-[12px] font-normal leading-[22px] text-gray-mid">
              Total <br /> Strategies
            </span>
            <span className="sm:text-[40px] font-normal text-[32px]">
              <CountUp end={stats && stats.totalStrategies} />+
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default heroBar;
