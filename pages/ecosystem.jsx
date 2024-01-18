/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';

const Category = {
  All: 'All',
  NetworksSupported: 'Networks Supported',
  ProtocolsIntegrated: 'Protocols Integrated',
  Analytics: 'Analytics',
  Miscellaneous: 'Miscellaneous',
};

const coins = [
  {
    name: 'Ethereum',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.NetworksSupported,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png',
  },
  {
    name: 'Polygon',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.NetworksSupported,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/3890.png',
  },
  {
    name: 'Arbitrum',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.NetworksSupported,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/11841.png',
  },
  {
    name: 'Optimism',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.NetworksSupported,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/11840.png',
  },
  {
    name: 'BNB Smart Chain',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.NetworksSupported,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1839.png',
  },
  {
    name: 'Base',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.NetworksSupported,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/27716.png',
  },
  {
    name: 'Camelot',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.ProtocolsIntegrated,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/22949.png',
  },
  {
    name: 'Thena Finance',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.ProtocolsIntegrated,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/23335.png',
  },
  {
    name: 'PancakeSwap',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.ProtocolsIntegrated,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/7186.png',
  },
  {
    name: 'SushiSwap',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.ProtocolsIntegrated,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/6758.png',
  },
  {
    name: 'Retro Finance',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.ProtocolsIntegrated,
    icon: 'https://s2.coinmarketcap.com/static/img/exchanges/128x128/7516.png',
  },
  {
    name: 'Arbidex',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.ProtocolsIntegrated,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/3179.png',
  },
  {
    name: 'Apeswap',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.ProtocolsIntegrated,
    icon: 'https://s2.coinmarketcap.com/static/img/exchanges/128x128/1281.png',
  },
  {
    name: 'Chainlink',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.ProtocolsIntegrated,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1975.png',
  },
  {
    name: 'Angle Protocol (Merkl)',
    roundedIcon: false,
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.ProtocolsIntegrated,
    icon: '/images/ecosystem/merkl.png',
  },
  {
    name: 'Equilibre',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.ProtocolsIntegrated,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/23836.png',
  },
  {
    name: 'Algebra Protocol',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.ProtocolsIntegrated,
    icon: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/1553.png',
  },
  {
    name: 'Cruize Finance',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.ProtocolsIntegrated,
    icon: 'https://pbs.twimg.com/profile_images/1592782887006269440/_KjiKgiG_400x400.jpg',
  },
  {
    name: 'SpaceID',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.ProtocolsIntegrated,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21846.png',
  },
  {
    name: 'Overnight Finance',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.ProtocolsIntegrated,
    icon: 'https://img.api.cryptorank.io/coins/overnight1670302763403.png',
  },
  {
    name: 'Defillama',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.Analytics,
    icon: 'https://pbs.twimg.com/profile_images/1377743719089254405/LQwS_x0l_400x400.jpg',
  },
  {
    name: 'Zapper',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category: Category.Analytics,
    icon: 'https://pbs.twimg.com/profile_images/1681396816737181707/MZVvpTPr_400x400.jpg',
  },
  {
    name: '1Inch',
    description: '',
    category: Category.ProtocolsIntegrated,
    icon: 'https://1inch.io/assets/token-logo/1inch_token.png',
  },
  {
    name: 'Uniswap',
    description: '',
    category: Category.ProtocolsIntegrated,
    icon: 'https://pbs.twimg.com/profile_images/1696986796478091264/79NZgGom_400x400.jpg',
  },
  {
    name: 'Kujira',
    description: '',
    category: Category.ProtocolsIntegrated,
    icon: 'https://pbs.twimg.com/profile_images/1645802735164608515/vOPYwvDf_400x400.jpg',
  },
  {
    name: 'Horiza',
    description: '',
    category: Category.ProtocolsIntegrated,
    icon: 'https://pbs.twimg.com/profile_images/1019034006883627008/Svj4w-sg_400x400.jpg',
  },
  {
    name: 'Ramses Exchange',
    description: '',
    category: Category.ProtocolsIntegrated,
    icon: 'https://pbs.twimg.com/profile_images/1660041171736080384/8Tt13tu7_400x400.png',
  },
  {
    name: 'BaseSwap',
    description: '',
    category: Category.ProtocolsIntegrated,
    icon: 'https://pbs.twimg.com/profile_images/1702394800043868161/EGsd-c2z_400x400.jpg',
  },
  {
    name: 'Unbound Finance',
    description: '',
    category: Category.ProtocolsIntegrated,
    icon: 'https://pbs.twimg.com/profile_images/1526851278453751810/Tf2egz-j_400x400.jpg',
  },
  {
    name: 'Quickswap',
    description: '',
    category: Category.ProtocolsIntegrated,
    icon: 'https://pbs.twimg.com/profile_images/1668560071490502656/HMr5khOI_400x400.jpg',
  },
  {
    name: 'Pangolin',
    description: '',
    category: Category.ProtocolsIntegrated,
    icon: 'https://pbs.twimg.com/profile_images/1607809611834298369/f-MClvFk_400x400.png',
  },
  {
    name: 'Avalanche',
    description: '',
    category: Category.NetworksSupported,
    icon: 'https://pbs.twimg.com/profile_images/1605605053901021184/9LNylZAA_400x400.png',
  },
  {
    name: 'zkSync Era',
    description: '',
    category: Category.NetworksSupported,
    icon: 'https://pbs.twimg.com/profile_images/1647563917349060608/S1P_lNAN_400x400.jpg',
  },
  {
    name: 'Polygon zkEVM',
    description: '',
    category: Category.NetworksSupported,
    icon: 'https://moralis.io/wp-content/uploads/2023/11/Polygon-zkEVM.png',
  },
  {
    name: 'Nexus Mutual',
    description: '',
    category: Category.Miscellaneous,
    icon: 'https://pbs.twimg.com/profile_images/1618226686511747072/s_X7BLTk_400x400.png',
  },
  {
    name: 'OpenCover',
    description: '',
    category: Category.Miscellaneous,
    icon: 'https://pbs.twimg.com/profile_images/1630924828592033796/_48-NsTv_400x400.png',
  },
  {
    name: 'Fjord Foundry',
    description: '',
    category: Category.Miscellaneous,
    icon: 'https://pbs.twimg.com/profile_images/1572885646112219136/XpMRWwtg_400x400.jpg',
  },
  {
    name: 'OpenPad',
    description: '',
    category: Category.Miscellaneous,
    icon: 'https://pbs.twimg.com/profile_images/1725258984683393024/MWidnLnQ_400x400.jpg',
  },
  {
    name: 'Quantstamp',
    category: Category.Miscellaneous,
    icon: 'https://cdn.worldvectorlogo.com/logos/quantstamp-1.svg',
  },
];

export default function Ecosystem() {
  const [selectedCategory, setSelectedCategory] = useState(Category.All);

  const handleHeaderClick = useCallback((categoryId) => {
    setSelectedCategory(Category[categoryId]);
  });

  const filteredCoins = useMemo(() => {
    const items = [...coins].sort((a, b) => a.name.localeCompare(b.name));
    if (selectedCategory === Category.All) return items;

    return items.filter((coin) => coin.category === selectedCategory);
  }, [selectedCategory]);

  const categoryCounts = useMemo(() => {
    return coins.reduce((acc, coin) => {
      acc[coin.category] = (acc[coin.category] || 0) + 1;
      return acc;
    }, {});
  }, [coins]);

  return (
    <div className="bg-[#0B0C0F]">
      <main className="mx-auto max-w-7xl">
        <div className="pb-20 text-white">
          <div className="bg-hero-ecosystem-gradient bg-cover bg-center py-28">
            <div className="mx-auto w-4/5  text-center md:w-1/2">
              <h3 className="leading-p130 font-primary text-42 font-semibold sm:text-48 md:text-52">
                Explore the DefiEdge Ecosystem
              </h3>
              <p className="my-3 text-20 opacity-70">
                Dive into the DefiEdge Ecosystem to find the best way to grow
                your DeFi wealth
              </p>
            </div>
          </div>
          <div className="grid grid-cols-8 items-start gap-y-4">
            <ul className="col-span-full flex flex-wrap justify-center text-center md:col-span-3 md:flex-col md:justify-start   xl:col-span-2 ">
              {Object.entries(Category).map(([index, header]) => {
                return (
                  <li
                    className={`leading-p160 flex cursor-pointer items-center gap-x-4 border border-grey-1 p-5 font-medium opacity-70 ${
                      header.id == selectedCategory ? 'bg-grey-2' : ''
                    }`}
                    key={`header-${index}`}
                    onClick={() => handleHeaderClick(index)} // pass null if id is 0
                  >
                    <span>{header}</span>
                    <span
                      className={`leading-p160 min-w-50 inline-block rounded-r-full rounded-l-full border bg-grey-2 px-3 ${
                        header.id == selectedCategory
                          ? 'border-grey-1'
                          : 'border-transparent'
                      }`}
                    >
                      {categoryCounts[header] || coins.length}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="coin-card-container col-span-full mx-auto grid w-2/3 sm:w-full sm:grid-cols-2  md:col-span-5 xl:col-span-6 xl:grid-cols-3">
              {filteredCoins.map((card) => {
                return (
                  <CoinCard
                    card={card}
                    key={`coin-${card.category}-${card.name}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/**
 * Renders a CoinCard component.
 *
 * @param {Object} card - The card object containing information about the coin.
 * @return {JSX.Element} - The rendered CoinCard component.
 */
const CoinCard = ({ card }) => {
  return (
    <div className="border border-grey-1 p-8">
      <div className={`mb-8 flex h-10 w-10`}>
        <img
          alt="Ecosystem image"
          className={`object-fit m-auto h-auto w-10 ${
            card.roundedIcon === false ? '' : 'rounded-full'
          }`}
          src={card.icon}
        />
      </div>
      <div className="leading-p120 mb-2 text-24 font-semibold">{card.name}</div>
      {/* <div className="opacity-70">{card.description}</div> */}
    </div>
  );
};

CoinCard.propTypes = {
  card: PropTypes.object.isRequired, // Replace `object` with the appropriate data type for the `card` prop
};
