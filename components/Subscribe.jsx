// * Import Required Thirdparty Libraries
import Fade from "react-reveal/Fade";
import React from "react";

//* Import Components Required
import StrategyManagerCard from "./StrategyManagerCard";

function Subscribe() {
  return (
    <main>
      <Fade duration={2000}>
        <section className="sm:mt-[140px] mt-[120px]">
          <StrategyManagerCard />
        </section>
      </Fade>

      {/* <Fade duration={2000}>
        <section className="my-[80px] sm:my-[140px]">
          <div className="bg-opacity-30 bg-[#141541] ring-2 ring-white/10 bg-clip-padding backdrop-filter backdrop-blur-xl flex">
            <div className="p-[32px] flex flex-col sm:flex-row justify-between w-full items-center  ">
              <div className="sm:text-[32px] text-[20px] text-center w-[150px] sm:w-auto font-semibold">
                Subscibe to our newsletter
              </div>
              <div className="w-full mt-[24px] sm:my-[10px] bg-opacity-30 bg-[#141541] rounded-full sm:w-[473px] flex items-center justify-between border border-[#3F4077]/30 hover:border-defaultblue">
                <input
                  type="text"
                  placeholder="Sign up for our newsletter"
                  className=" px-[21px] text-16px bg-transparent w-full	p-3 focus:outline-none"
                />
                <button className="hidden sm:block bg-defaultblue rounded-full text-[16px] px-[20px] py-[8px] m-1 hover:bg-[#3F1DF0] duration-300">
                  Subscribe
                </button>
              </div>
              <div className="w-full mt-[20px] sm:hidden ">
                <button className="w-full bg-defaultblue rounded-full text-[16px] px-[20px] py-[8px] m-1 hover:bg-[#3F1DF0] duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </Fade> */}
    </main>
  );
}

export default Subscribe;
