/* eslint-disable no-undef */
'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.getStats = exports.getStrategies = void 0;
const axios_1 = __importDefault(require('axios'));
const queries_1 = require('./queries');
const URL = 'https://api.defiedge.io/graphql';

var Network;
(function (Network) {
  Network['arbitrum'] = 'arbitrum';
  Network['mainnet'] = 'mainnet';
  Network['polygon'] = 'polygon';
  Network['bsc'] = 'bsc';
  Network['optimism'] = 'optimism';
})(Network || (Network = {}));

async function getStrategies(
  limit = 3,
  sortBy = 'leaderboard',
  networks = ['optimism', 'arbitrum', 'polygon', 'mainnet', 'bsc']
) {
  const list = axios_1.default
    .post(URL, {
      operationName: 'Query',
      fetchPolicy: 'network-only',
      query: queries_1.STRATEGY_LIST_QUERY,
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
    });

  return list;
}
exports.getStrategies = getStrategies;
export const dexes = [
  "Uniswap",
  "Apeswap",
  "Arbidex",
  "Pancakeswap",
  "Sushiswap",
];

async function getStats(
  networks = ['optimism', 'arbitrum', 'polygon', 'mainnet', 'bsc']
) {
  return axios_1.default
    .post(URL, {
      operationName: 'Stats',
      fetchPolicy: 'network-only',
      query: queries_1.STATS_QUERY,
      variables: {
      dex: dexes,
        network: networks,
        manager: null,
      },
    })
    .then(({ data: { data } }) => {
      return data.stats;
    });
}
exports.getStats = getStats;