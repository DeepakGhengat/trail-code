import React from 'react';

function CardSkeleton() {
  return (
    <div>
      <div className="h-[538px] bg-white bg-opacity-5 bg-clip-padding p-[32px] ring-2 ring-white/10 backdrop-blur-xl backdrop-filter ">
        <div className="">
          <div className="flex ">
            <div className="h-[37px] w-[37px]  rounded-full bg-slate-700 bg-skeleton bg-opacity-10"></div>
            <div className="-ml-[20px] h-[37px] w-[37px]  rounded-full bg-skeleton bg-opacity-20 "></div>
          </div>
          <div className="pb-[42px] opacity-20">
            <div className="mt-[20px] h-[26px] w-[217px] rounded-full bg-skeleton"></div>
          </div>

          <div className="mt-[42px] space-y-[30px] text-[20px] font-normal opacity-20">
            <div className="h-[26px] max-w-[320px] rounded-full bg-skeleton"></div>
            <div className="h-[26px] max-w-[320px] rounded-full bg-skeleton"></div>
            <div className="h-[26px] max-w-[320px] rounded-full bg-skeleton"></div>
            <div className="h-[26px] max-w-[320px] rounded-full bg-skeleton"></div>
          </div>

          <div className="mt-[60px] w-full text-center opacity-20">
            <div className="h-[40px] max-w-[320px] rounded-full bg-skeleton"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
