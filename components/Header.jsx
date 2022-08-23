import { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";
import defiedgeLogo from "../public/images/mainlogo.svg";
import lightning from "../public/images/lightning.svg";
import closeButton from "../public/images/closeButton.svg";
import Fade from "react-reveal/Fade";


export default function Header() {
  const router = useRouter();

  const [showNav, setShowNav] = useState(true);


  return (
    <Fade duration={1000}>
      <section className="z-10 relative">
        <main className="bg-opacity-5 bg-white ring-2 ring-white/10 bg-clip-padding backdrop-filter backdrop-blur-xl  ">
          <div className="text-[16px] flex justify-between items-center py-[20px] sm:max-w-[1200px] max-w-[335px] container mx-auto ">
            <Image
              type="image"
              className="w-[111px] h-[31px]"
              alt=""
              src={defiedgeLogo}
            />

            <div className="flex space-x-[33px] hidden sm:block">
              <Link
                href="/"
                className="opacity-50 hover:opacity-100 duration-300"
              >
                <a
                  className={
                    router.pathname == "/"
                      ? "opacity-100 hover:opacity-100 duration-300"
                      : ""
                  }
                >
                  Home
                </a>
              </Link>
              <Link
                href="#features"
                className="opacity-50 hover:opacity-100 duration-300"
              >
                <a className="opacity-50 hover:opacity-100 duration-300">
                  Features
                </a>
              </Link>
              <Link
                href={"https://docs.defiedge.io/"}
                target="_blank"
                className="opacity-50 hover:opacity-100 duration-300"
              >
                <a
                  target="_blank"
                  className="opacity-50 hover:opacity-100 duration-300"
                >
                  Docs
                </a>
              </Link>
              <Link
                href="https://unboundfinance.notion.site/DefiEdge-Job-Board-0bde371c6cb74a8f9fbdb6ec45d56412"
                className="opacity-50 hover:opacity-100 duration-300"
              >
                <a
                  target="_blank"
                  className="opacity-50 hover:opacity-100 duration-300"
                >
                  Careers
                </a>
              </Link>
            </div>

            <div>
              <button className=" hidden sm:flex space-x-[6px] rounded-full   bg-defaultblue py-[8px] px-[20px] items-center justify-center hover:bg-[#3F1DF0] duration-300">
                <a href="https://app.defiedge.io/" target="_blank" className="flex" rel="noreferrer">
                  {" "}
                  <Image type="image" alt="" src={lightning} />
                  <p>&nbsp; Go To App</p>
                </a>
              </button>

              <button className="flex sm:hidden rounded-full w-[120px] bg-defaultblue p-[6px] items-center justify-center hover:bg-[#3F1DF0] duration-300">
                <a href="https://app.defiedge.io/" target="_blank" className="flex" rel="noreferrer">
                  {" "}
                  <p>&nbsp; Careers</p>
                </a>
              </button>
            </div>
          </div>
        </main>
        {/* subheader for notifications */}
        <main
        className={
          "h-[40px] text-[16px] py-[6px] bg-gradient-to-tr from-[#4D67A1] to-[#6248E9]" +
          (showNav
            ? "h-[40px] text-[16px] py-[9px] bg-gradient-to-tr from-[#4D67A1] to-[#6248E9]"
            : "transition -translate-y-32 duration-300 invisible opacity-5")
        }
      >
        <div className="max-w-[1200px] container mx-auto flex justify-between">
          <p className="">
            📣 DefiEdge provides the simplest solution to deploy smart liquidity
            and optimize yield on Uniswap V3. &nbsp;
            <a href="#" className="underline">
             Know more
            </a>
          </p>
          <button onClick={() => setShowNav(false)}>
            <Image type="image" alt="" src={closeButton} />
          </button>
        </div>
      </main>
      </section>
    </Fade>
  );
}
