import Image from 'next/image';
import React from 'react';
import Fade from 'react-reveal/Fade';

import discord from '../public/images/community/discord.svg';
import twitter from '../public/images/community/twitter.svg';
import medium from '../public/images/medium.svg';
import substack from '../public/images/substack.svg';

function Community() {
  return (
    <Fade>
      <section className="my-[70px] mt-[100px] flex flex-col items-center">
        <div>
          <span className="text-[24px] font-semibold">Join our community</span>
        </div>
        <div className="mt-[40px] grid grid-cols-2 gap-6 md:flex md:space-x-[70px]">
          <a
            href="https://discord.gg/veGVeDbnBe"
            target="_blank"
            className="flex items-center space-x-[10px]"
            rel="noreferrer"
          >
            <Image type="image" alt="" src={discord} />
            <span className="text-[20px] font-normal duration-300 hover:underline">
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
            <span className="text-[20px] font-normal duration-300 hover:underline">
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
            <span className="text-[20px] font-normal duration-300 hover:underline ">
              Substack
            </span>
          </a>

          <a
            href="https://medium.com/@DefiEdge"
            target="_blank"
            className="flex items-center space-x-[10px]"
            rel="noreferrer"
          >
            <Image type="image" height={40} width={40} alt="" src={medium} />
            <span className="text-[20px] font-normal duration-300 hover:underline ">
              Medium
            </span>
          </a>
        </div>
      </section>
    </Fade>
  );
}

export default Community;
