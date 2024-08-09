const STRATEGY_LIST_QUERY = /* GraphQL */ `
query Query($strategyListTake: Float, $strategyListNetwork: [Network!]!, $strategyListPage: Float, $strategyListOrder: SortOrder, $strategyListSearch: String, $strategyListSortBy: StrategyTableSortBy, $strategyListType: StrategyFilterType, $strategyReturnInToken: StrategyReturnInToken, $strategyListAddresses: [String!]) {
  strategyList(
    take: $strategyListTake
    networks: $strategyListNetwork
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
      network
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

const STATS_QUERY = /* GraphQL */ `
query GlobalStats($network: [Network!], $manager: String, $dex: [Dex!] = [Uniswap, Apeswap, Pancakeswap, Arbidex]) {
  stats(network: $network, manager: $manager, dex: $dex) {
    assets {
      ...networks
      __typename
    }
    aumSummary {
      ...networks
      __typename
    }
    countSummary {
      ...networks
      __typename
    }
    fees {
      ...networks
      __typename
    }
    pools {
      ...networks
      __typename
    }
    ranges {
      ...networks
      __typename
    }
    users {
      ...networks
      __typename
    }
    volumeSummary {
      ...networks
      __typename
    }
    assetCount
    poolCount
    rangesCount
    totalFees
    totalStrategies
    totalValueManaged
    totalVolume
    uniqueDepositor
    __typename
  }
}

fragment networks on CleanedNetworkStats {
  arbitrum
  avalanche
  base
  baseTestnet
  bsc
  goerli
  kovan
  mainnet
  mantle
  moonbeam
  optimism
  polygon
  rinkeby
  zksyncEra
  zkEVM
  __typename
}
`.trim();

export { STRATEGY_LIST_QUERY, STATS_QUERY };
