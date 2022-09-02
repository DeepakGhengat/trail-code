import React from "react";
import Image from "next/image";

import Fade from "react-reveal/Fade";


import discord from "../public/images/community/discord.svg";
import twitter from "../public/images/community/twitter.svg";

import substack from "../public/images/substack.svg";


function Community() {
  return (
    <Fade>
      <section className="my-[70px] mt-[100px] flex flex-col items-center">
        <div>
          <span className="text-[24px] font-semibold">Join our community</span>
        </div>
        <div className="flex space-x-[70px] mt-[40px]">
          <p className="flex items-center space-x-[10px]">
            <Image type="image" alt="" src={discord} />
            <span className="font-normal text-[20px] hover:underline duration-300">
              Discord
            </span>
          </p>

          <p className="flex items-center space-x-[10px]">
            <Image type="image" alt="" src={twitter} />
            <span className="font-normal text-[20px] hover:underline duration-300">
              Twitter
            </span>
          </p>

          <p className="flex items-center space-x-[10px]">
            <Image type="image" alt="" src={substack} />
            <span className="font-normal text-[20px] hover:underline duration-300 ">
            Substack
            </span>
          </p>
        </div>
      </section>
    </Fade>
  );
}

export default Community;
