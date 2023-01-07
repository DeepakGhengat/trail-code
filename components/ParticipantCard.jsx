import React from "react";
import Image from "next/image";
import rightarrow from "../public/images/rightarrow.svg";

const ParticipantCard = ({ link, imgUrl, title, desc }) => {
  return (
    <div>
      <a
        href={link}
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
              src={imgUrl}
            />
          </div>
          <span className="sm:text-[24px] text-[20px] font-semibold sm:mt-[28px] mt-[20px]">
            {title}
          </span>
          <p className="text-gray-mid text-[16px] mt-[12px]">{desc}</p>

          <span className="absolute bottom-[32px]  flex group cursor-pointer">
            <p className="">Read More &nbsp;</p>{" "}
            <span className=" group-hover:translate-x-2 duration-300 items-center flex">
              <Image type="image" className="" alt="" src={rightarrow} />{" "}
            </span>
          </span>
        </div>
      </a>
    </div>
  );
};

export default ParticipantCard;
