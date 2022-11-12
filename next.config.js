/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = {
  nextConfig,
  images: {
    domains: [
      "raw.githubusercontent.com",
      "s2.coinmarketcap.com",
      "assets.coingecko.com",
      "crypto.com",
    ],
  },
};
