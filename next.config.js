/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: !debug ? 'https://uclaacm.github.io/lactf-website/' : '',
}

module.exports = nextConfig
