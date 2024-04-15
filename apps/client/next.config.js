/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@sickgyun/design-token', '@sickgyun/ui'],
  images: {
    domains: ['cdn.rallit.com', 'sickgyun.s3.ap-northeast-2.amazonaws.com'],
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_GOOGLE_LOGIN_URL: process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID
  }
};

module.exports = nextConfig;
