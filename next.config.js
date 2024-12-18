/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "raw.githubusercontent.com",
      "s2.coinmarketcap.com",
      "assets.coingecko.com",
      "crypto.com",
    ],
  },
  experimental: { images: { allowFutureImage: true } }
};

module.exports = nextConfig;
