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
          <a
            href="https://discord.com/invite/fRc6XxhfBq"
            target="_blank"
            className="flex items-center space-x-[10px]"
            rel="noreferrer"
          >
            <Image type="image" alt="" src={discord} />
            <span className="font-normal text-[20px] hover:underline duration-300">
              Discord
            </span>
          </a>

          <a
            href="https://twitter.com/DefiEdge/"
            target="_blank"
            className="flex items-center space-x-[10px]"
            rel="noreferrer"
          >
            <Image type="image" alt="" src={twitter} />
            <span className="font-normal text-[20px] hover:underline duration-300">
              Twitter
            </span>
          </a>

          <a
            href="https://defiedge.substack.com/"
            target="_blank"
            className="flex items-center space-x-[10px]"
            rel="noreferrer"
          >
            <Image type="image" alt="" src={substack} />
            <span className="font-normal text-[20px] hover:underline duration-300 ">
              Substack
            </span>
          </a>
        </div>
      </section>
    </Fade>
  );
}

export default Community;
