/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['lh3.googleusercontent.com', 'pbs.twimg.com'],
  },
};

module.exports = nextConfig;
