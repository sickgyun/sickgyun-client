/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@sickgyun/design-token', '@sickgyun/utils', '@sickgyun/ui'],
  images: {
    domains: [
      'cdn.rallit.com',
      'pbs.twimg.com',
      'i.namu.wiki',
      'image.rivers.co.kr',
      'sickgyun.s3.ap-northeast-2.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
