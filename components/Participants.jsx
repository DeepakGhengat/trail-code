import ico1 from "../public/images/ico1.svg";
import ico2 from "../public/images/ico2.svg";
import ico3 from "../public/images/ico3.svg";
import rightarrow from "../public/images/rightarrow.svg";
import gradient1 from "../public/images/gradient1.svg";
import gradient2 from "../public/images/gradient2.svg";
import gradient3 from "../public/images/gradient3.svg";
import Image from "next/image";
import Link from "next/link";
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
          <div className="">
            <div className="absolute max-w-[335px] sm:max-w-none	">
              <Image type="image" className="" alt="" src={gradient1} />
            </div>
            <div className="p-[20px] sm:p-[32px] items-start flex flex-col  relative h-[320px]">
              <div>
                <Image
                  type="image"
                  className="w-[111px] h-[31px]"
                  alt=""
                  src={ico1}
                />
              </div>
              <span className="sm:text-[24px] text-[20px] font-semibold sm:mt-[28px] mt-[20px]">
                Liquidity Provider
              </span>
              <p className="text-textgray text-[16px] mt-[12px]">
                Create personalized strategies to manage your own liquidity.
              </p>
              <span className="absolute sm:bottom-[32px] bottom-[60px] flex group cursor-pointer">
                <p className="">Read More &nbsp;</p>{" "}
                <span className=" group-hover:translate-x-2 duration-300 items-center flex">
                  <Image type="image" className="" alt="" src={rightarrow} />{" "}
                </span>
              </span>
            </div>
          </div>

          <div className="">
            <div className="absolute max-w-[335px] sm:max-w-none	">
              <Image type="image" className="" alt="" src={gradient2} />
            </div>
            <div className="p-[20px] sm:p-[32px] items-start flex flex-col  relative h-[320px]">
              <div>
                <Image
                  type="image"
                  className="w-[111px] h-[31px]"
                  alt=""
                  src={ico2}
                />
              </div>
              <span className="sm:text-[24px] text-[20px] font-semibold sm:mt-[28px] mt-[20px]">
                Yield Hunter{" "}
              </span>
              <p className="text-textgray text-[16px] mt-[12px]">
                Invest and earn alongside dedicated strategy managers on the
                platform by selecting a strategy that suits your needs.{" "}
              </p>

              <span className="absolute sm:bottom-[32px] bottom-[60px] flex group cursor-pointer">
                <p className="">Read More &nbsp;</p>{" "}
                <span className=" group-hover:translate-x-2 duration-300 items-center flex">
                  <Image type="image" className="" alt="" src={rightarrow} />{" "}
                </span>
              </span>
            </div>
          </div>

          <div className="">
            <div className="absolute max-w-[335px] sm:max-w-none	">
              <Image type="image" className="" alt="" src={gradient3} />
            </div>
            <div className="p-[20px] sm:p-[32px] items-start flex flex-col  relative h-[320px]">
              <div>
                <Image
                  type="image"
                  alt=""
                  src={ico3}
                />
              </div>
              <span className="sm:text-[24px] text-[20px] font-semibold sm:mt-[28px] mt-[20px]">
                Strategy Manager{" "}
              </span>
              <p className="text-textgray text-[16px] mt-[12px]">
                Accelerate returns on your managed assets through DefiEdge’s
                management tools.{" "}
              </p>

              <span className="absolute sm:bottom-[32px] bottom-[60px] flex group cursor-pointer">
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
