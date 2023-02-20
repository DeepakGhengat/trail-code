/* eslint-disable react/prop-types */

import CardCourosel from "./CardCourosel";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import React from "react";
import arrowcross from "../public/images/arrowcross.svg";
import arrowupper from "../public/images/arrowupper.svg";
import info from "../public/images/info.svg";
import one from "../public/images/one.svg";
import three from "../public/images/three.svg";
import two from "../public/images/two.svg";
import line from "../public/images/line.svg";

function Strategies({ strategies }) {
  return (
    <div>
      <section className="sm:mt-[140px] mt-[90px]">
        <div className="pb-20">
          <Image
            type="image"
            className="w-[111px] h-[31px]"
            alt=""
            src={line}
          />
        </div>
        <div className="relative w-full">
          <div className="absolute left-0 -mt-[70px]  -ml-[250px]">
            <div className="bg-[#8692FF] h-[370px] w-[370px] blur-[354px] opacity-42"></div>
          </div>
        </div>
        <Fade diration={2000}>
          <div className="text-center mb-[42px] relative z-10">
            <span className="text-[26px] sm:text-[42px] font-semibold">
              Trending Strategies on DefiEdge{" "}
            </span>

            <p className="text-gray-mid  text-[16px] font-normal leading-[26px] sm:text-[18px] mt-[12px] sm:mt-[25px]">
              Here are the current leading strategies trading on the protocol.
              Browse to the <br /> one that interests you most and start earning
              yields{" "}
            </p>
          </div>
        </Fade>

        <Fade duration={2000}>
          <div className="hidden sm:grid sm:grid-cols-3 grid-cols-1 gap-[25px] ">
            {strategies.map((s, idx) => {
              return (
                <div
                  key={s.id + s.network}
                  className="bg-opacity-30 rounded-xl bg-[#141541] ring-1 ring-[#3F4077]/30 bg-clip-padding backdrop-filter backdrop-blur-xl p-[32px] "
                >
                  <div className="flex justify-between">
                    <div className="flex">
                      <span className="z-10">
                        <Image
                          type="image"
                          className=""
                          width={33}
                          height={33}
                          alt="token1"
                          src={s.token0Url}
                        />
                      </span>

                      <span className="-ml-[12px]">
                        <Image
                          type="image"
                          className=""
                          width={33}
                          height={33}
                          alt="token2"
                          src={s.token1Url}
                        />
                      </span>
                    </div>

                    <Image
                      type="image"
                      alt={idx}
                      width={32}
                      height={32}
                      src={
                        idx == 0
                          ? one
                          : null || idx == 1
                          ? two
                          : null || idx == 2
                          ? three
                          : null
                      }
                    />
                  </div>
                  <div className="pb-[42px] border-b-2 border-[#4452FE]/20">
                    <span className="text-[20px] flex font-semibold mt-[20px]">
                      <p className="pr-[6px]">
                        {s.title ? s.title : s.subTitle}
                      </p>

                      <span className="z-20">
                        <p>
                          <Image type="image" alt="" src={info} />
                        </p>
                      </span>
                    </span>
                    <p className="text-[16px] text-gray-mid">
                      {s.subTitle ? s.subTitle : s.title}
                    </p>
                  </div>
                  <div className="mt-[42px] text-[20px] font-thin tracking-wide">
                    <span className="justify-between flex  items-center">
                      <p className="text-gray-mid font-light text-[16px]">
                        AUM
                      </p>
                      <p className="">
                        $
                        {Intl.NumberFormat("en-us", {
                          notation: "compact",
                          maximumFractionDigits: 2,
                        }).format(s.aum)}
                      </p>
                    </span>

                    <span className="justify-between flex mt-3 items-center">
                      <p className="text-gray-mid font-light text-[16px]">
                        Accu. Fees
                      </p>
                      <p>
                        $
                        {Intl.NumberFormat("en-us", {
                          notation: "compact",
                          maximumFractionDigits: s.fees > 1e3 ? 1 : 2,
                        }).format(s.fees)}
                      </p>
                    </span>

                    {/* <span className="justify-between flex mt-3 items-center ">
                      <p className="text-gray-mid font-light text-[16px]">
                        Return Since Inception
                      </p>

                      <p
                        className={`${
                          s.since_inception > 0
                            ? "text-green-700 bg-green-700"
                            : s.since_incepton === 0
                            ? "text-white bg-transparent"
                            : "text-[#D56665] bg-[#D56665]"
                        } bg-opacity-10 px-[12px] py-[6px] rounded-full text-[14px] items-center flex space-x-`}
                      >
                        {s.since_inception > 0 ? "+" : ""}
                        {+s.since_inception.toFixed(2)}% &nbsp;
                        {s.since_inception > 0 ? (
                          <Image type="image" alt="" src={arrowupper} />
                        ) : s.since_inception === 0 ? undefined : undefined}
                      </p>
                    </span> */}
                    <span className="justify-between flex mt-3 items-center ">
                      <p className="text-gray-mid font-light text-[16px]">
                        Fees Apr.
                      </p>

                      <p
                        className={`${
                          s.fees_apr > 0
                            ? "text-green-700 bg-green-700"
                            : s.since_incepton === 0
                            ? "text-white bg-transparent"
                            : "text-[#D56665] bg-[#D56665]"
                        } bg-opacity-10 px-[12px] py-[6px] rounded-full text-[14px] items-center flex space-x-`}
                      >
                        {s.fees_apr > 0 ? "+" : ""}
                        {+s.fees_apr.toFixed(2)}% &nbsp;
                        {s.fees_apr > 0 ? (
                          <Image type="image" alt="" src={arrowupper} />
                        ) : s.fees_apr === 0 ? undefined : undefined}
                      </p>
                    </span>

                    <span className="justify-between flex mt-3 items-center">
                      <p className="text-gray-mid font-light  text-[16px]">
                        Network
                      </p>
                      <span className="text-sm capitalize">{s.network}</span>
                    </span>
                  </div>
                  <div className="mt-[42px] group text-center w-full">
                    <a
                      href={`https://app.defiedge.io/s/${s.network}/${s.id}`}
                      target="_blank"
                      className=" bg-[#4452FE] rounded-lg hover:bg-[#3F1DF0] duration-300  w-full py-3 flex items-center justify-center"
                      rel="noreferrer"
                    >
                      <p>Trade Now &nbsp;</p>
                      <span className="group-hover:-translate-y-1  duration-300 flex items-end">
                        <Image type="image" alt="" src={arrowcross} />
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <CardCourosel />
        </Fade>
      </section>
    </div>
  );
}

export default Strategies;
