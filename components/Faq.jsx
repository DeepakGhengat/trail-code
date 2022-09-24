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
        <span className=" mb-[48px] text-[42px] font-semibold">FAQs</span>
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
