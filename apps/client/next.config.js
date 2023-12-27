/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@sickgyun/design-token', '@sickgyun/libs', '@sickgyun/utils', '@sickgyun/ui'],
};

module.exports = nextConfig;
