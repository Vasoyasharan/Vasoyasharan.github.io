/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,   // required for static export (no Next.js image server)
  },
}

module.exports = nextConfig;
