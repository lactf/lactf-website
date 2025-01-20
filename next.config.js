/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/uZM6vxqHDq",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
