import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion';
import Image from 'next/image';
import React from 'react';

import minus from '../public/images/minus.png';
import plus from '../public/images/plus.png';

function Faq() {
  return (
    <section className="mx-auto my-[70px]  max-w-[792px]">
      <div className="text-center">
        <span className=" mb-[48px] text-[42px] font-semibold">FAQs</span>
      </div>
      <div>
        <Accordion allowMultiple>
          <AccordionItem className="border-b border-white/10 py-[24px] text-[20px]">
            {({ isExpanded }) => (
              <>
                <AccordionButton className="flex w-full space-x-3  transition duration-300">
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
                  className="mt-[16px]  ml-[39px] opacity-80"
                >
                  <span className=" font-medium opacity-50">
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
