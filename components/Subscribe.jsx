import React from "react";
import Image from "next/image";
import strategymanager from "../public/images/strategymanager.svg";
import rightarrow from "../public/images/rightarrow.svg";
import Fade from "react-reveal/Fade";


function Subscribe() {
  return (
    <Fade>
      <section className="sm:mt-[140px] mt-[120px]">
        <div className="bg-opacity-5 bg-white ring-2 ring-white/10 bg-clip-padding backdrop-filter backdrop-blur-xl flex flex-col-reverse sm:flex-row">
          <div className="p-[32px]">
            <span className="sm:text-[32px] text-[20px] w-[150px] font-semibold">
              Trusted by best in market
              strategy managers.
            </span>
            <span className="mt-[25px] flex group">
              <p>Explore more &nbsp;</p>
              <span className="group-hover:translate-x-2 duration-300 flex items-center">
                <Image type="image" alt="" src={rightarrow} />
              </span>
            </span>
          </div>
          <div className="">
            <Image
              type="image"
              alt=""
              src={strategymanager}
            />
          </div>
        </div>
      </section>

      <section className="my-[80px] sm:my-[140px]">
        <div className="bg-opacity-5 bg-white ring-2 ring-white/10 bg-clip-padding backdrop-filter backdrop-blur-xl flex">
          <div className="p-[32px] flex flex-col sm:flex-row justify-between w-full items-center">
            <div className="sm:text-[32px] text-[20px] text-center w-[150px] sm:w-auto font-semibold">
              Subscibe to our newsletter
            </div>
            <div className="w-full mt-[20px] sm:mt-0 bg-opacity-5 bg-white rounded-full sm:w-[473px] flex items-center justify-between border border-white/10 hover:border-defaultblue">
              <input
                type="text"
                placeholder="Sign up for our newsletter"
                className=" px-[21px] text-16px bg-transparent w-full	p-3 focus:outline-none"
              />
              <button className="hidden sm:block bg-defaultblue rounded-full text-[16px] px-[20px] py-[8px] m-1 hover:bg-[#3F1DF0] duration-300">
                Subscribe
              </button>
            </div>
            <button className="w-full mt-[20px] sm:hidden bg-defaultblue rounded-full text-[16px] px-[20px] py-[12px] m-1 hover:bg-[#3F1DF0] duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default Subscribe;
