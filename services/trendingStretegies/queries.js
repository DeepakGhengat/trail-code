"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATS_QUERY = exports.STRATEGY_LIST_QUERY = void 0;
exports.STRATEGY_LIST_QUERY = `
query Query($strategyListTake: Float, $strategyListNetwork: Network, $strategyListPage: Float, $strategyListOrder: SortOrder, $strategyListSearch: String, $strategyListSortBy: StrategyTableSortBy, $strategyListType: StrategyType, $strategyReturnInToken: StrategyReturnInToken, $strategyListAddresses: [String!]) {
  strategyList(
    take: $strategyListTake
    network: $strategyListNetwork
    page: $strategyListPage
    order: $strategyListOrder
    search: $strategyListSearch
    type: $strategyListType
    forcedRefresh: false
    sortBy: $strategyListSortBy
    returnInToken: $strategyReturnInToken
    addresses: $strategyListAddresses
  ) {
    data {
      id
      createdAt
      title
      subTitle
      aum
      apy
      inception
      token0Url
      token1Url
      is_archived
      sharePrice
      since_inception
      fees
      volume
      manager
      twitterHandle
      fees_apr
      one_day_apy
      seven_day_apy
      lp_apr
      lp_one_day_apy
      lp_seven_day_apy
      lp_since_inception
      strategyLimit
      manager
      performanceFee
      managementFee
      __typename
    }
    page
    totalItems
    totalPages
    pageSize
    returnInToken
    __typename
  }
}
`.trim();
exports.STATS_QUERY = `
query Stats($network: [Network!], $manager: String) {
  stats(network: $network, manager: $manager) {
    aumSummary {
      arbitrum
      kovan
      mainnet
      matic
      rinkeby
      rinkeby_staging
      polygon_staging
      arbitrum_staging
      optimism
      optimism_staging
      __typename
    }
    countSummary {
      arbitrum
      kovan
      mainnet
      matic
      rinkeby
      rinkeby_staging
      polygon_staging
      arbitrum_staging
      optimism
      optimism_staging
      __typename
    }
    users {
      arbitrum
      kovan
      mainnet
      matic
      rinkeby
      rinkeby_staging
      polygon_staging
      arbitrum_staging
      optimism
      optimism_staging
      __typename
    }
    ranges {
      arbitrum
      kovan
      mainnet
      matic
      rinkeby
      rinkeby_staging
      polygon_staging
      arbitrum_staging
      optimism
      optimism_staging
      __typename
    }
    pools {
      arbitrum
      kovan
      mainnet
      matic
      rinkeby
      rinkeby_staging
      polygon_staging
      arbitrum_staging
      optimism
      optimism_staging
      __typename
    }
    volumeSummary {
      arbitrum
      kovan
      mainnet
      matic
      rinkeby
      rinkeby_staging
      polygon_staging
      arbitrum_staging
      optimism
      optimism_staging
      __typename
    }
    fees {
      arbitrum
      kovan
      mainnet
      matic
      rinkeby
      rinkeby_staging
      polygon_staging
      arbitrum_staging
      optimism
      optimism_staging
      __typename
    }
    assets {
      arbitrum
      kovan
      mainnet
      matic
      rinkeby
      rinkeby_staging
      polygon_staging
      arbitrum_staging
      optimism
      optimism_staging
      __typename
    }
    totalVolume
    totalFees
    poolCount
    assetCount
    rangesCount
    totalStrategies
    totalValueManaged
    uniqueDepositor
    __typename
  }
}
`.trim();
