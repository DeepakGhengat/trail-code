"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = exports.getStrategies = void 0;
const axios_1 = __importDefault(require("axios"));
const queries_1 = require("./queries");
const URL = "https://api.defiedge.io/graphql";

var Network;
(function (Network) {
  Network["arbitrum"] = "arbitrum";
  Network["kovan"] = "kovan";
  Network["mainnet"] = "mainnet";
  Network["matic"] = "matic";
  Network["rinkeby"] = "rinkeby";
  Network["rinkeby_staging"] = "rinkeby_staging";
  Network["polygon_staging"] = "polygon_staging";
  Network["arbitrum_staging"] = "arbitrum_staging";
  Network["optimism"] = "optimism";
  Network["optimism_staging"] = "optimism_staging";
})(Network || (Network = {}));
async function getStrategies(
  limit = 3,
  sortBy = "aum",
  networks = ["optimism", "arbitrum", "matic"]
) {
  const list = await Promise.all(
    networks.map((network) =>
      axios_1.default
        .post(URL, {
          operationName: "Query",
          query: queries_1.STRATEGY_LIST_QUERY,
          variables: {
            strategyListNetwork: network,
            strategyListOrder: "desc",
            strategyListSortBy: sortBy,
            strategyListTake: 10,
            strategyListPage: 1,
            strategyListSearch: "",
            strategyListType: null,
            strategyReturnInToken: null,
          },
        })
        .then(({ data: { data } }) => {
          return data.strategyList.data.map((e) => ({
            ...e,
            since_inception: e.inception,
            network,
          }));
        })
        .catch((e) => (console.log(e.message, e.response?.data?.errors), []))
    )
  );
  return list
    .flat()
    .sort((a, b) => b[sortBy] - a[sortBy])
    .slice(0, limit);
}
exports.getStrategies = getStrategies;
async function getStats(networks = ["optimism", "arbitrum", "matic"]) {
  return axios_1.default
    .post(URL, {
      operationName: "Stats",
      query: queries_1.STATS_QUERY,
      variables: {
        network: networks,
        manager: null,
      },
    })
    .then(({ data: { data } }) => {
      return data.stats;
    });
}
exports.getStats = getStats;
