/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react';

const headers = [
  {
    text: 'All',
    count: '0',
    id: 0,
  },
  {
    text: 'Integrations',
    count: '0',
    id: 1,
  },
  {
    text: 'Networks Supported',
    count: '0',
    id: 2,
  },
  {
    text: 'Protocols Integrated',
    count: '0',
    id: 3,
  },
  {
    text: 'Ecosystem Collaborations',
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
    category_id: 2,
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
    category_id: 3,
    id: 4,
  },
  {
    name: '1inch',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 5,
  },
  {
    name: 'Chainlink',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 3,
    id: 6,
  },
  {
    name: 'Gelato',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 4,
    id: 7,
  },
  {
    name: 'StakeDao',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 8,
  },
  {
    name: 'Quicknode',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 3,
    id: 9,
  },
  {
    name: 'Defilab',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 1,
    id: 10,
  },
  {
    name: 'Solv',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 4,
    id: 11,
  },
  {
    name: 'SW DAO',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 3,
    id: 12,
  },
  {
    name: 'Celo',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 3,
    id: 13,
  },
  {
    name: 'Morpho',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 14,
  },
  {
    name: 'Multifarm',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 1,
    id: 15,
  },
  {
    name: 'Civilization',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 2,
    id: 16,
  },
  {
    name: 'Zapper',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 3,
    id: 17,
  },
  {
    name: 'Perpetual',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 3,
    id: 18,
  },
  {
    name: 'Genki web',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 1,
    id: 19,
  },
  {
    name: 'DefiBasket',
    description:
      'Lorem ipsum dolor sit amet consectetur. In mauris rhoncus adipiscing id mattis volutpat.',
    category_id: 3,
    id: 20,
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
                Swap, earn, vote, and more with hundreds of DeFi apps,
                integrations, and tools built on the Uniswap Protocol.
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
        className="mb-8 h-12 w-12 rounded-full"
        height={100}
        src={`/images/ecosystem/${card.id - 1}.png`}
        width={100}
      />
      <div className="leading-p120 mb-2 text-24 font-semibold">{card.name}</div>
      {/* <div className="opacity-70">{card.description}</div> */}
    </div>
  );
};
