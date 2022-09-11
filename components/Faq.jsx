// import React from "react";

// import {
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
// } from "@chakra-ui/accordion";

// function Faq() {
//   return (
//     <section>
//       <div className="my-[200px] flex">
//         <div className="w-1/2">
//           <span className="text-[48px] font-bold leading-[64px] pb-[12px]">
//             Frequently Asked <br />
//             Questions
//           </span>
//           <span className="pt-[25px] text-[16px]  text-default">
//             <p>
//               Discord us in{" "}
//               <span className="bg-default text-white px-[4px]"># help</span>
//             </p>
//           </span>
//         </div>
//         <div className="w-1/2">
//           <Accordion allowMultiple>
// <AccordionItem className="border-t border-b border-black/10 py-[28px] text-black">
//   {({ isExpanded }) => (
//     <>
//       <AccordionButton className="duration-300 space-x-3 flex justify-between w-full transition">
//         <span className="flex text-left text-[16px] font-medium">
//           <p>How do i get RemoteLoop premium account?</p>
//         </span>
//         <div>
//           {isExpanded ? (
//             <Image type="image" alt="" src={minus} />
//           ) : (
//             <Image type="image" alt="" src={plus} />
//           )}
//         </div>
//       </AccordionButton>

//       <AccordionPanel
//         pb={4}
//         className="mt-[10px] text-[14px] font-medium opacity-80"
//       >
//         <span className=" text-black opacity-50">
//           We’ll generate a unique payment link while setting up the
//           bot for your workspace. Make sure to use same email as
//           your workspace’s admin email.
//         </span>
//       </AccordionPanel>
//     </>
//   )}
// </AccordionItem>

//             <AccordionItem className="border-b border-black/10 py-[28px] text-black">
//               {({ isExpanded }) => (
//                 <>
//                   <AccordionButton className="duration-300 space-x-3 flex justify-between w-full transition">
//                     <span className="flex text-left text-[16px] font-medium">
//                       <p>Can I suggest features to RemoteLoop Team?</p>
//                     </span>
//                     <div>
//                       {isExpanded ? (
//                         <Image type="image" alt="" src={minus} />
//                       ) : (
//                         <Image type="image" alt="" src={plus} />
//                       )}
//                     </div>
//                   </AccordionButton>

//                   <AccordionPanel
//                     pb={4}
//                     className="mt-[10px] text-[14px] font-medium opacity-80"
//                   >
//                     <span className=" text-black opacity-50">
//                       We’ll generate a unique payment link while setting up the
//                       bot for your workspace. Make sure to use same email as
//                       your workspace’s admin email.
//                     </span>
//                   </AccordionPanel>
//                 </>
//               )}
//             </AccordionItem>

//             <AccordionItem className="border-b border-black/10 py-[28px] text-black">
//               {({ isExpanded }) => (
//                 <>
//                   <AccordionButton className="duration-300 space-x-3 flex justify-between w-full transition">
//                     <span className="flex text-left text-[16px] font-medium">
//                       <p>Can I cancel subscription anytime?</p>
//                     </span>
//                     <div>
//                       {isExpanded ? (
//                         <Image type="image" alt="" src={minus} />
//                       ) : (
//                         <Image type="image" alt="" src={plus} />
//                       )}
//                     </div>
//                   </AccordionButton>

//                   <AccordionPanel
//                     pb={4}
//                     className="mt-[10px] text-[14px] font-medium opacity-80"
//                   >
//                     <span className=" text-black opacity-50">
//                       We’ll generate a unique payment link while setting up the
//                       bot for your workspace. Make sure to use same email as
//                       your workspace’s admin email.
//                     </span>
//                   </AccordionPanel>
//                 </>
//               )}
//             </AccordionItem>
//           </Accordion>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Faq;

import React from "react";

import plus from "../public/images/plus.png";
import minus from "../public/images/minus.png";
import Image from "next/image";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/accordion";

function Faq() {
  return (
    <section className="max-w-[792px] mx-auto  my-[70px]">
      <div className="text-center">
        <span className=" mb-[48px] text-[42px] font-semibold">
          FAQs
        </span>
      </div>
      <div>
        <Accordion allowMultiple>

          <AccordionItem className="border-b border-white/10 py-[24px] text-[20px]">
            {({ isExpanded }) => (
              <>
                <AccordionButton className="duration-300 space-x-3 flex  w-full transition">
                  <div>
                    {isExpanded ? (
                      <Image type="image" alt="" src={minus} />
                    ) : (
                      <Image type="image" alt="" src={plus} />
                    )}
                  </div>
                  <span className="flex text-left font-[400] font-semibold">
                    <p>What information do we collect?</p>
                  </span>
                </AccordionButton>

                <AccordionPanel
                  pb={4}
                  className="mt-[16px]  opacity-80 ml-[39px]"
                >
                  <span className=" opacity-50 font-medium">
                    Contact the administration team via Discord or Email
                  </span>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
}

export default Faq;
