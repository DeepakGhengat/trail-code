import React from "react";

function CardSkeleton() {
  return (
    <div>
      <div className="bg-opacity-5 h-[538px] bg-white ring-2 ring-white/10 bg-clip-padding backdrop-filter backdrop-blur-xl p-[32px] ">
        <div className="">
          <div className="flex ">
            <div className="h-[37px] w-[37px]  bg-slate-700 bg-opacity-10 rounded-full bg-skeleton"></div>
            <div className="h-[37px] -ml-[20px] w-[37px]  bg-skeleton bg-opacity-20 rounded-full "></div>
          </div>
          <div className="pb-[42px] opacity-20">
            <div className="h-[26px] w-[217px] mt-[20px] bg-skeleton rounded-full"></div>
          </div>

          <div className="mt-[42px] text-[20px] font-normal space-y-[30px] opacity-20">
            <div className="h-[26px] max-w-[320px] bg-skeleton rounded-full"></div>
            <div className="h-[26px] max-w-[320px] bg-skeleton rounded-full"></div>
            <div className="h-[26px] max-w-[320px] bg-skeleton rounded-full"></div>
            <div className="h-[26px] max-w-[320px] bg-skeleton rounded-full"></div>
          </div>

          <div className="mt-[60px] text-center w-full opacity-20">
            <div className="h-[40px] max-w-[320px] bg-skeleton rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
