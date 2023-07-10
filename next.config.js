/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NOTION_KEY: process.env.NOTION_KEY,
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
  },
  output: "export",
  images: {
    domains: ["search.pstatic.net", "*"],
    hostname: ["search.pstatic.net", "*"],
  },
};

module.exports = nextConfig;
