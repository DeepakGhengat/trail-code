import React from 'react';

function PrivacyPolicy() {
  return (
    <section>
      <div>
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 -mt-[70px]  -ml-[250px]">
            <div className="h-[370px] w-[370px] bg-[#8692FF] opacity-42 blur-[354px]"></div>
          </div>
        </div>

        <div className="mx-auto max-w-[840px] ">
          <div className="w-full border-b border-[#3F4077]/30 py-[32px] text-center sm:py-[80px]">
            <p className="text-[30px] font-semibold sm:text-[44px]">
              Privacy Policy
            </p>
            <p className="text-[16px]">Last updated March 4, 2024</p>
          </div>
          <div className="mt-[20px] mb-[120px] text-[20px] sm:mx-[20px] sm:mt-[64px] sm:text-[20px]">
            <div>
              <p className="font-semibold">What information do we collect?</p>
              <ul className="disc mt-[16px] ml-[20px] font-normal text-gray-mid">
                <li>
                  DefiEdge does not collect any personal information.
                  Occasionally, at our discretion, we may include or offer
                  third-party products or services on our site, which may
                  collect non-personally identifiable visitor information.
                </li>
                <li className="mt-[16px]">
                  Any information collected by third parties is subject to their
                  separate and independent privacy policies. We, therefore, have
                  no responsibility or liability for the content and activities
                  of these linked sites.
                  <br />
                  NOTE: Optional Twitter verification is used to identify
                  strategy managers, but the authenticity of these identities
                  should be researched by the user.
                </li>
                <li className="mt-[16px]">
                  Nonetheless, we seek to protect the integrity of our site and
                  welcome any feedback about these sites.
                </li>
              </ul>
            </div>

            <div className="mt-[40px]">
              <p className="font-semibold ">How do we use this information?</p>
              <ul className="disc mt-[16px] ml-[20px] font-normal text-gray-mid">
                <li>
                  Information collected by the third-party product Sentry.io is
                  used to improve user experience and our website. For further
                  details, please refer to Sentry.io&apos;s{' '}
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
              <ul className="disc mt-[16px] ml-[20px] font-normal text-gray-mid">
                <li>
                  DefiEdge, a decentralised platform, does not collect any
                  personally identifiable information and, hence, does not sell,
                  trade, or otherwise transfer it to outside parties.
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
                Children&apos;s Online Privacy Protection?
              </p>
              <ul className="disc mt-[16px] ml-[20px] font-normal text-gray-mid">
                <li>
                  Our site, products, and services are all directed to people
                  who are at least 13 years old or older.
                </li>
              </ul>
            </div>

            <div className="mt-[40px]">
              <p className="font-semibold ">
                Is social media information stored with the protocol?
              </p>
              <ul className="disc mt-[16px] ml-[20px] font-normal text-gray-mid">
                <li>
                  Currently, strategy managers can share their Twitter handle
                  with the protocol for verifying the strategies they create (if
                  they choose to).
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
              <ul className="disc mt-[16px] ml-[20px] font-normal text-gray-mid">
                <li>
                  Strategy managers only have view access to the wallet
                  addresses of investors.
                </li>
              </ul>
            </div>

            <div className="mt-[40px]">
              <p className="font-semibold ">
                When does DE share ownership end for a particular investor?
              </p>
              <ul className="disc mt-[16px] ml-[20px] font-normal text-gray-mid">
                <li>DE shares are proof of liquidity added to a strategy.</li>
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
              <ul className="disc mt-[16px] ml-[20px] font-normal text-gray-mid">
                <li>
                  No information is shared with the government of any state or
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
