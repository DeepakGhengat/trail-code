//* Import Required Images
import p1 from "../public/images/p1.svg";
import p2 from "../public/images/p2.svg";
import p3 from "../public/images/p3.svg";

// * Import React Libraries
import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";

import rightarrow from "../public/images/rightarrow.svg";

function Participants() {
  return (
    <Fade>
      <section className="sm:mt-[70px] mt-[50px]">
        <div className="text-center flex flex-col items-center mb-[48px]">
          <span className="sm:text-[42px] text-[26px] font-semibold">
            DefiEdge Participants
          </span>
          <p className="text-textgray sm:text-[18px] leading-[26px] font-normal text-[16px] sm:mt-[25px] mt-[12px] max-w-[600px]">
            The protocol caters to the needs of all types of participants.
            Browse to the section of your choice and know how you can benefit by
            using DefiEdge
          </p>
        </div>
        <Fade duration={2000}>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-[25px]">
            <a
              href="https://docs.defiedge.io/category/liquidty-provider"
              target="_blank"
              className="relative group"
              rel="noreferrer"
            >
              <div className="absolute w-[335px] 	">
                <div className="w-full sm:w-[384px] h-[330px] bg-gradient-to-tl to-transparent from-[#58C0FB] opacity-16 group-hover:opacity-30 duration-300 border border-[#3F4077]/30"></div>
              </div>
              <div className="p-[20px] sm:p-[32px] items-start flex flex-col  relative h-[330px]">
                <div>
                  <Image
                    type="image"
                    className="w-[111px] h-[31px]"
                    alt=""
                    src={p1}
                  />
                </div>
                <span className="sm:text-[24px] text-[20px] font-semibold sm:mt-[28px] mt-[20px]">
                  Liquidity Provider
                </span>
                <p className="text-textgray text-[16px] mt-[12px]">
                Uniswap V3 LPs can make use of DefiEdge to get access to many advanced features making the protocol a go-to-platform for managing liquidity.
                </p>

                <a
                  href="https://docs.defiedge.io/category/liquidty-provider"
                  target="_blank"
                  className="absolute bottom-[32px]  flex group cursor-pointer"
                  rel="noreferrer"
                >
                  <p className="">Read More &nbsp;</p>{" "}
                  <span className=" group-hover:translate-x-2 duration-300 items-center flex">
                    <Image type="image" className="" alt="" src={rightarrow} />{" "}
                  </span>
                </a>
              </div>
            </a>

            <a
              href="https://docs.defiedge.io/category/defiedge-participants"
              target="_blank"
              className="relative group"
              rel="noreferrer"
            >
              <div className="absolute w-[335px] 	">
                <div className="w-full sm:w-[384px] h-[330px] bg-gradient-to-tl to-transparent from-[#FABB18] opacity-16 group-hover:opacity-30 duration-300 border border-[#3F4077]/30"></div>
              </div>
              <div className="p-[20px] sm:p-[32px] items-start flex flex-col  relative h-[330px]">
                <div>
                  <Image
                    type="image"
                    className="w-[111px] h-[31px]"
                    alt=""
                    src={p2}
                  />
                </div>
                <span className="sm:text-[24px] text-[20px] font-semibold sm:mt-[28px] mt-[20px]">
                  Treasury managers{" "}
                </span>
                <p className="text-textgray text-[16px] mt-[12px]">
                  Invest smartly in the best strategies managed by some of the
                  best in the industry. Just sit back, relax and watch your
                  funds grow.
                </p>

                <a
                  href="https://docs.defiedge.io/category/defiedge-participants"
                  target="_blank"
                  className="absolute bottom-[32px]  flex group cursor-pointer"
                  rel="noreferrer"
                >
                  <p className="">Read More &nbsp;</p>{" "}
                  <span className=" group-hover:translate-x-2 duration-300 items-center flex">
                    <Image type="image" className="" alt="" src={rightarrow} />{" "}
                  </span>
                </a>
              </div>
            </a>

            <a
              href="https://docs.defiedge.io/category/strategy-manager"
              target="_blank"
              className="relative group"
              rel="noreferrer"
            >
              <div className="absolute w-[335px] 	">
                <div className="w-full sm:w-[384px] h-[330px] bg-gradient-to-tl to-transparent from-[#45C646] opacity-16 group-hover:opacity-30 duration-300 border border-[#3F4077]/30"></div>
              </div>
              <div className="p-[20px] sm:p-[32px] items-start flex flex-col  relative h-[330px]">
                <div>
                  <Image type="image" alt="" src={p3} />
                </div>
                <span className="sm:text-[24px] text-[20px] font-semibold sm:mt-[28px] mt-[20px]">
                  Strategy Manager{" "}
                </span>
                <p className="text-textgray text-[16px] mt-[12px]">
                Efficiently manage UnisawapV3 strategies, generate high yields and earn fees on profits. Trusted managers can join Liquidity Alliance, the DefiEdge ecosystem.
                </p>

                <a
                  href="https://docs.defiedge.io/category/strategy-manager"
                  target="_blank"
                  className="absolute bottom-[32px]  flex group cursor-pointer"
                  rel="noreferrer"
                >
                  <p className="">Read More &nbsp;</p>{" "}
                  <span className=" group-hover:translate-x-2 duration-300 items-center flex">
                    <Image type="image" className="" alt="" src={rightarrow} />{" "}
                  </span>
                </a>
              </div>
            </a>
          </div>
        </Fade>
      </section>
    </Fade>
  );
}

export default Participants;
