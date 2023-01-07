import Image from "next/image";
import React from "react";
import Fade from "react-reveal/Fade";

const FeatureCard = ({ imgUrl, title, desc }) => {
  return (
    <Fade duration={500} bottom>
      <span className="min-h-[300px] rounded-xl border border-gray-500 bg-white bg-opacity-5 p-[15px] shadow-md backdrop-blur-xl backdrop-filter  duration-300 hover:bg-opacity-0 hover:border-gray-200 md:w-full md:p-[31px]">
        <Image src={imgUrl} alt={title} height={40} width={40} />
        <p className="py-[28px] text-[20px] text-gray-300 font-semibold md:text-[24px]">
          {title}
        </p>
        <p className="text-[16px] font-thin text-gray-500">{desc}</p>
      </span>
    </Fade>
  );
};

export default FeatureCard;
