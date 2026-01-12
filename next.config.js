/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/DeekshaPortfolio',
  assetPrefix: '/DeekshaPortfolio/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
