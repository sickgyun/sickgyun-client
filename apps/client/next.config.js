/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@sickgyun/design-token', '@sickgyun/libs', '@sickgyun/utils', '@sickgyun/ui'],
  images: {
    domains: ['cdn.rallit.com', 'auth.bssm.kro.kr'], 
  },
};

module.exports = nextConfig;
