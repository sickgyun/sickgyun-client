/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@sickgyun/design-token', '@sickgyun/libs', '@sickgyun/utils', '@sickgyun/ui'],
  images: {
    domains: ['cdn.rallit.com', 'pbs.twimg.com', 'i.namu.wiki'], 
  },
};

module.exports = nextConfig;
