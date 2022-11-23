import React from "react";

function PrivacyPolicy() {
  return (
    <section>
      <div>
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 -mt-[70px]  -ml-[250px]">
            <div className="bg-[#8692FF] h-[370px] w-[370px] blur-[354px] opacity-42"></div>
          </div>
        </div>

        <div className="max-w-[840px] mx-auto ">
          <div className="py-[32px] sm:py-[80px] text-center w-full border-b border-[#3F4077]/30">
            <p className="font-semibold text-[30px] sm:text-[44px]">
              Privacy Policy
            </p>
            <p className="text-[16px] ">Last updated Sep 23 , 2022</p>
          </div>
          <div className="sm:mt-[64px] mt-[20px] text-[20px] sm:text-[20px] sm:mx-[20px] mb-[120px]">
            <div>
              <p className="font-semibold ">What information do we collect?</p>
              <ul className="mt-[16px] font-normal text-gray-mid ml-[20px] disc">
                <li>
                  DefiEdge does not collect any personal information.
                  Occasionally, at our discretion, we may include or offer third
                  party products or services on our site which may collect
                  non-personally identifiable visitor information.
                </li>
                <li className="mt-[16px]">
                  Any information collected by third parties are subject to
                  their separate and independent privacy policies. We therefore
                  have no responsibility or liability for the content and
                  activities of these linked sites.
                  <p className="ml-[20px] mt-[12px]">
                    NOTE: Optional Twitter Verification is used for
                    identification of the strategy managers but the authenticity
                    of these identities should be researched by the user.
                  </p>
                </li>
                <li className="mt-[16px]">
                  Nonetheless, we seek to protect the integrity of our site and
                  welcome any feedback about these sites.
                </li>
              </ul>
            </div>

            <div className="mt-[40px]">
              <p className="font-semibold ">How do we use this information?</p>
              <ul className="mt-[16px] font-normal text-gray-mid ml-[20px] disc">
                <li>
                  Information collected by the third party product, Sentry.io is
                  used to improve user experience and our website. For further
                  details, please refer to Sentry.io{" "}
                  <a
                    target="_blank"
                    className="text-white underline"
                    href="https://sentry.io/privacy/"
                    rel="noreferrer"
                  >
                    privacy policy
                  </a>
                  .
                </li>
              </ul>
            </div>

            <div className="mt-[40px]">
              <p className="font-semibold ">
                How will this information be shared?
              </p>
              <ul className="mt-[16px] font-normal text-gray-mid ml-[20px] disc">
                <li>
                  DefiEdge being a decentralised platform, does not collect any
                  personally identifiable information and hence, does not sell,
                  trade, or otherwise transfer it to outside parties.
                  <br /> <br />
                </li>
                <li>
                  This does not include trusted third parties who assist us in
                  operating our site, conducting our business, or servicing you,
                  so long as those parties agree to keep this information
                  confidential.
                </li>
              </ul>
            </div>

            <div className="mt-[40px]">
              <p className="font-semibold ">
                Do US residents have access to the protocol?
              </p>
              <ul className="mt-[16px] font-normal text-gray-mid ml-[20px] disc">
                <li>
                  US residents are currently not blocked from using the
                  protocol. However, a few functionalities might not be
                  available to them. If this policy is changed, we will post
                  those changes on this page.
                </li>
              </ul>
            </div>

            <div className="mt-[40px]">
              <p className="font-semibold ">
                Children’s Online Privacy Protection?
              </p>
              <ul className="mt-[16px] font-normal text-gray-mid ml-[20px] disc">
                <li>
                  Our site, products and services are all directed to people who
                  are at least 13 years old or older.
                </li>
              </ul>
            </div>

            <div className="mt-[40px]">
              <p className="font-semibold ">
                Is social media information stored with the protocol?
              </p>
              <ul className="mt-[16px] font-normal text-gray-mid ml-[20px] disc">
                <li>
                  Currently, strategy managers can share their twitter handle
                  with the protocol for verifying the strategies they create (if
                  they choose to).
                  <br /> <br />
                </li>
                <li>
                  This information may only be used for marketing or advertising
                  initiatives by the protocol.
                </li>
              </ul>
            </div>

            <div className="mt-[40px]">
              <p className="font-semibold ">
                Do strategy managers have access to investor information?
              </p>
              <ul className="mt-[16px] font-normal text-gray-mid ml-[20px] disc">
                <li>
                  Strategy managers only have view access to the wallet
                  addresses of investors.
                </li>
              </ul>
            </div>

            <div className="mt-[40px]">
              <p className="font-semibold ">
                When does DE shares ownership ends for a particular investor?
              </p>
              <ul className="mt-[16px] font-normal text-gray-mid ml-[20px] disc">
                <li>
                  {" "}
                  DE shares are a proof of liquidity added in a strategy.
                  <br /> <br />
                </li>
                <li>
                  Investors have ownership of their DE shares as long as they
                  are invested in a strategy. These shares are minted at the
                  prevailing price when the investment is made and are burned
                  once an investor removes the funds from the strategy.
                </li>
              </ul>
            </div>

            <div className="mt-[40px]">
              <p className="font-semibold ">
                Is information shared with the government?
              </p>
              <ul className="mt-[16px] font-normal text-gray-mid ml-[20px] disc">
                <li>
                  NO information is shared with the government of any state or
                  country.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
