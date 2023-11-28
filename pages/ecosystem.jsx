/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react';

import iconMap from '../json/iconMap';

const headers = [
  {
    text: 'All',
    count: '0',
    id: 0,
  },
  {
    text: 'Networks Supported',
    count: '0',
    id: 1,
  },
  {
    text: 'Protocols Integrated',
    count: '0',
    id: 2,
  },
  {
    text: 'Analytics',
    count: '0',
    id: 3,
  },
  {
    text: 'Miscellaneous',
    count: '0',
    id: 4,
  },
];

const coins = [
  {
    name: 'Ethereum',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 1,
    id: 1,
  },
  {
    name: 'Polygon',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 1,
    id: 2,
  },
  {
    name: 'Arbitrum',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 1,
    id: 3,
  },
  {
    name: 'Optimism',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 1,
    id: 4,
  },
  {
    name: 'BNB Smart Chain',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 1,
    id: 5,
  },
  {
    name: 'Base',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 1,
    id: 6,
  },
  {
    name: 'Camelot',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 7,
  },
  {
    name: 'Thena Finance',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 8,
  },
  {
    name: 'PancakeSwap',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 9,
  },
  {
    name: 'SushiSwap',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 10,
  },
  {
    name: 'Retro Finance',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 11,
  },
  {
    name: 'Arbidex',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 12,
  },
  {
    name: 'Apeswap',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 13,
  },
  {
    name: 'Chainlink',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 14,
  },
  {
    name: 'Angle Protocol (Merkl)',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 15,
  },
  {
    name: 'Equilibre',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 16,
  },
  {
    name: 'Algebra Protocol',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 17,
  },
  {
    name: 'Cruize Finance',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 18,
  },
  {
    name: 'SpaceID',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 19,
  },
  {
    name: 'Overnight Finance',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 20,
  },
  {
    name: 'Defillama',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 3,
    id: 21,
  },
  {
    name: 'Zapper',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 3,
    id: 22,
  },
  {
    name: '1Inch',
    description: '',
    category_id: 2,
    id: 23,
  },
  {
    name: 'Uniswap',
    description: '',
    category_id: 2,
    id: 24,
  },
  {
    name: 'Kujira',
    description: '',
    category_id: 2,
    id: 25,
  },
  {
    name: 'Horiza',
    description: '',
    category_id: 2,
    id: 26,
  },
  {
    name: 'Ramses Exchange',
    description: '',
    category_id: 2,
    id: 27,
  },
  {
    name: 'BaseSwap',
    description: '',
    category_id: 2,
    id: 28,
  },
  {
    name: 'Unbound Finance',
    description: '',
    category_id: 2,
    id: 29,
  },
  {
    name: 'Quickswap',
    description: '',
    category_id: 2,
    id: 30,
  },
  {
    name: 'Pangolin',
    description: '',
    category_id: 2,
    id: 31,
  },
  {
    name: 'Avalanche',
    description: '',
    category_id: 1,
    id: 32,
  },
  {
    name: 'zkSync',
    description: '',
    category_id: 1,
    id: 33,
  },
  {
    name: 'Nexus Mutual',
    description: '',
    category_id: 4,
    id: 34,
  },
  {
    name: 'OpenCover',
    description: '',
    category_id: 4,
    id: 35,
  },
  {
    name: 'Fjord Foundry',
    description: '',
    category_id: 4,
    id: 36,
  },
  {
    name: 'OpenPad',
    description: '',
    category_id: 4,
    id: 37,
  },
];
export default function Ecosystem() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleHeaderClick = (id) => {
    setSelectedCategory(id);
  };

  const filteredCoins = useMemo(() => {
    const filteredCoinsArray = coins.filter((coin) => {
      if (selectedCategory === 0) {
        return true;
      }
      return coin.category_id === selectedCategory;
    });
    return filteredCoinsArray;
  }, [selectedCategory]);

  const categoryCounts = useMemo(() => {
    return coins.reduce((acc, coin) => {
      const categoryId = coin.category_id.toString();
      if (acc[categoryId]) {
        acc[categoryId] += 1;
      } else {
        acc[categoryId] = 1;
      }
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
              {headers.map((header, index) => {
                return (
                  <li
                    className={`leading-p160 flex cursor-pointer items-center gap-x-4 border border-grey-1 p-5 font-medium opacity-70 ${
                      header.id == selectedCategory ? 'bg-grey-2' : ''
                    }`}
                    key={`header-${index}`}
                    onClick={() => handleHeaderClick(header.id)} // pass null if id is 0
                  >
                    <span>{header.text}</span>
                    <span
                      className={`leading-p160 min-w-50 inline-block rounded-r-full rounded-l-full border bg-grey-2 px-3 ${
                        header.id == selectedCategory
                          ? 'border-grey-1'
                          : 'border-transparent'
                      }`}
                    >
                      {categoryCounts[header.id] || coins.length}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="coin-card-container col-span-full mx-auto grid w-2/3 sm:w-full sm:grid-cols-2  md:col-span-5 xl:col-span-6 xl:grid-cols-3">
              {filteredCoins.map((card) => {
                return <CoinCard card={card} key={`coin-${card.id}`} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const CoinCard = ({ card }) => {
  return (
    <div className="border border-grey-1 p-8">
      <img
        alt="Ecosystem image"
        className={`mb-8 h-10 w-10 ${
          card.id === 15 ? 'rounded-none' : 'rounded-full'
        }`}
        height={100}
        src={iconMap[card.id - 1]}
        width={100}
      />
      <div className="leading-p120 mb-2 text-24 font-semibold">{card.name}</div>
      {/* <div className="opacity-70">{card.description}</div> */}
    </div>
  );
};
