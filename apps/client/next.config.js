/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@sickgyun/design-token', '@sickgyun/utils', '@sickgyun/ui'],
  images: {
    domains: ['cdn.rallit.com', 'sickgyun.s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
