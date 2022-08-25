//* Import Required Images 
import p1 from "../public/images/p1.svg";
import p2 from "../public/images/p2.svg";
import p3 from "../public/images/p3.svg";
import rightarrow from "../public/images/rightarrow.svg";

// * Import React Libraries
import Image from "next/image";
import Fade from "react-reveal/Fade";

function Participants() {
  return (
    <Fade>
      <section className="sm:mt-[70px] mt-[50px]">
        <div className="text-center flex flex-col items-center mb-[48px]">
          <span className="sm:text-[42px] text-[26px] font-semibold">
            DefiEdge Participants
          </span>
          <p className="text-textgray sm:text-[18px] leading-[26px] font-normal text-[16px] sm:mt-[25px] mt-[12px] max-w-[600px]">
            Minimize risk & maximize returns with DefiEdge’s scalable solution
            for liquidity provision on Uniswap v3
          </p>
        </div>
        <Fade duration={2000}>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-[25px]">
            <div className="relative group">
              <div className="absolute w-[335px] 	">
                <div className="w-full sm:w-[384px] h-[320px] bg-gradient-to-tl to-transparent from-[#58C0FB] opacity-16 group-hover:opacity-30 duration-300 border border-[#3F4077]/30"></div>
              </div>
              <div className="p-[20px] sm:p-[32px] items-start flex flex-col  relative h-[320px]">
                <div>
                  <Image
                    type="image"
                    className="w-[111px] h-[31px]"
                    alt=""
                    src={p3}
                  />
                </div>
                <span className="sm:text-[24px] text-[20px] font-semibold sm:mt-[28px] mt-[60px]">
                  Liquidity Provider
                </span>
                <p className="text-textgray text-[16px] mt-[12px]">
                  Create personalized strategies to manage your own liquidity.
                </p>
                <span className="absolute bottom-[32px]  flex group cursor-pointer">
                  <p className="">Read More &nbsp;</p>{" "}
                  <span className=" group-hover:translate-x-2 duration-300 items-center flex">
                    <Image type="image" className="" alt="" src={rightarrow} />{" "}
                  </span>
                </span>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute w-[335px] 	">
                <div className="w-full sm:w-[384px] h-[320px] bg-gradient-to-tl to-transparent from-[#FABB18] opacity-16 group-hover:opacity-30 duration-300 border border-[#3F4077]/30"></div>
              </div>
              <div className="p-[20px] sm:p-[32px] items-start flex flex-col  relative h-[320px]">
                <div>
                  <Image
                    type="image"
                    className="w-[111px] h-[31px]"
                    alt=""
                    src={p2}
                  />
                </div>
                <span className="sm:text-[24px] text-[20px] font-semibold sm:mt-[28px] mt-[20px]">
                  Yield Hunter{" "}
                </span>
                <p className="text-textgray text-[16px] mt-[12px]">
                  Invest and earn alongside dedicated strategy managers on the
                  platform by selecting a strategy that suits your needs.{" "}
                </p>

                <span className="absolute bottom-[32px] bottom-[60px] flex group cursor-pointer">
                  <p className="">Read More &nbsp;</p>{" "}
                  <span className=" group-hover:translate-x-2 duration-300 items-center flex">
                    <Image type="image" className="" alt="" src={rightarrow} />{" "}
                  </span>
                </span>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute w-[335px] 	">
                <div className="w-full sm:w-[384px] h-[320px] bg-gradient-to-tl to-transparent from-[#45C646] opacity-16 group-hover:opacity-30 duration-300 border border-[#3F4077]/30"></div>
              </div>
              <div className="p-[20px] sm:p-[32px] items-start flex flex-col  relative h-[320px]">
                <div>
                  <Image type="image" alt="" src={p1} />
                </div>
                <span className="sm:text-[24px] text-[20px] font-semibold sm:mt-[28px] mt-[20px]">
                  Strategy Manager{" "}
                </span>
                <p className="text-textgray text-[16px] mt-[12px]">
                  Accelerate returns on your managed assets through DefiEdge’s
                  management tools.{" "}
                </p>

                <span className="absolute bottom-[32px] bottom-[60px] flex group cursor-pointer">
                  <p className="">Read More &nbsp;</p>{" "}
                  <span className=" group-hover:translate-x-2 duration-300 items-center flex">
                    <Image type="image" className="" alt="" src={rightarrow} />{" "}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </Fade>
  );
}

export default Participants;
