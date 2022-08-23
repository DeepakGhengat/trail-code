import Link from "next/link";
import mainlogo from "../public/images/mainlogo.svg";
import discord from "../public/images/discord.svg";
import medium from "../public/images/medium.svg";
import twitter from "../public/images/twitter.svg";
import insta from "../public/images/insta.svg";
import youtube from "../public/images/youtube.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <main>
      <section className="bg-[#000015] border-t border-textgray/20">
        <div className="mt-[75px] container mx-auto max-w-[335px]  sm:max-w-[1200px] ">
          <div className="flex flex-col sm:flex-row  justify-between border-b border-white/10  pb-[50px] ">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex flex-col sm:items-start">
                <Image
                  type="image"
                  className="w-[111px] h-[31px]"
                  alt=""
                  src={mainlogo}
                />
                <span className="text-[16px] text-textgray mt-[30px] text-center sm:text-left">
                  There are many variations of passages of <br /> Lorem the
                  Ipsum it majority.
                </span>
              </div>
              <div className="mt-[30px] flex space-x-[10px]">
                <span>
                  <Image type="image" alt="" src={discord} />
                </span>
                <span>
                  <Image type="image" alt="" src={medium} />
                </span>
                <span>
                  <Image type="image" alt="" src={twitter} />
                </span>
                {/* <span>
                  <Image type="image" alt="" src={insta} />
                </span>
                <span>
                  <Image type="image" alt="" src={youtube} />
                </span> */}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row">
              <div className="text-[16px] sm:pr-[100px] text-center sm:text-left mt-[30px] sm:mt-0">
                <span className="font-semibold">Company</span>
                <ul className="text-textgray justify-center mt-[15px] sm:mt-[25px] sm:space-y-[18px] sm:space-x-0 space-x-[10px] flex sm:flex-col	 ">
                  <li>
                    <a
                      href="app.defiedge.io"
                      target="_blank"
                      className="hover:text-white"
                    >
                      <p>Web app</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="app.defiedge.io"
                      target="_blank"
                      className="hover:text-white"
                    >
                      <p>Privacy Policy</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="app.defiedge.io"
                      target="_blank"
                      className="hover:text-white"
                    >
                      <p>Terms of Use</p>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-[16px] sm:pr-[80px] text-center sm:text-left mt-[30px] sm:mt-0">
                <span className="font-semibold">Resources</span>
                <ul className="text-textgray mt-[15px] sm:mt-[25px] sm:space-y-[18px] sm:space-x-0 space-x-[10px] flex sm:flex-col	">
                  <li>
                    <a
                      href="https://medium.com/@DefiEdge#:~:text=DefiEdge%20is%20a%20decentralized%2C%20non,5%20min%20read"
                      target="_blank"
                      className="hover:text-white" rel="noreferrer"
                    >
                      <p>Medium</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      target="_blank"
                      className="hover:text-white"
                    >
                      <p>Github</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      target="_blank"
                      className="hover:text-white"
                    >
                      <p>Brand Assets</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://docs.defiedge.io/"
                      target="_blank"
                      className="hover:text-white" rel="noreferrer"
                    >
                      <p>Whitepaper</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="font-regular text-textgray py-[30px] text-center w-full">
            <span className="">© 2022 DefiEdge. All Rights Reserved</span>
          </div>
        </div>
      </section>
    </main>
  );
}
