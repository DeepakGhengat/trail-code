import * as queries from './queries';

import axios from 'axios';

const URL = 'https://api.defiedge.io/graphql';

const Network = {
  arbitrum: 'arbitrum',
  astarZkEVM: 'astarZkEVM',
  avalanche: 'avalanche',
  base: 'base',
  bsc: 'bsc',
  linea: 'linea',
  mainnet: 'mainnet',
  mantle: 'mantle',
  moonbeam: 'moonbeam',
  optimism: 'optimism',
  polygon: 'polygon',
  xLayer: 'xLayer',
  zkEVM: 'zkEVM',
  zksyncEra: 'zksyncEra',
};

async function getStrategies(
  limit = 3,
  sortBy = 'leaderboard',
  networks = Object.values(Network)
) {
  const list = axios
    .post(URL, {
      operationName: 'Query',
      fetchPolicy: 'network-only',
      query: queries.STRATEGY_LIST_QUERY,
      variables: {
        strategyListNetwork: networks,
        strategyListOrder: 'desc',
        strategyListSortBy: sortBy,
        strategyListTake: limit,
        strategyListPage: 1,
        strategyListSearch: '',
        strategyListType: null,
        strategyReturnInToken: null,
      },
    })
    .then(({ data: { data } }) => {
      return data.strategyList.data;
    })
    .catch((error) => {
      console.log(error.response.data.errors);
    });

  return list;
}

export const dexes = [
  'Apeswap',
  'Arbidex',
  'Baseswap',
  'Camelot',
  'Fusionx',
  'Horiza',
  'Lynex',
  'Pancakeswap',
  'Pangolin',
  'Quickswap',
  'Ramses',
  'Retro',
  'Stellaswap',
  'Sushiswap',
  'Thena',
  'Uniswap',
];

async function getStats() {
  return axios
    .post(URL, {
      operationName: 'GlobalStats',
      query: queries.STATS_QUERY,
      variables: {
        dex: dexes,
        network: Object.values(Network),
      },
    })
    .then(({ data: { data } }) => {
      return replaceNullWithZero(data.stats, 0);
    })
    .catch((error) => {
      console.log(error.response.data.errors);
    });
}

function replaceNullWithZero(data, replaceWith = 0) {
  if (typeof data === 'object' && data !== null) {
    // Check if it's an array or an object
    if (Array.isArray(data)) {
      return data.map((item) => replaceNullWithZero(item));
    } else {
      return Object.keys(data).reduce((acc, key) => {
        acc[key] = replaceNullWithZero(data[key]);
        return acc;
      }, {});
    }
  } else {
    // If not an object, return 0 for null and the original value otherwise
    return data === null ? replaceWith : data;
  }
}

export { getStats, getStrategies, Network };
