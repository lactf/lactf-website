/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: !debug ? "https://lactf.uclaacm.com" : "",
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/uZM6vxqHDq',
        permanent: false,
      },
    ]
  },
};

module.exports = nextConfig;
