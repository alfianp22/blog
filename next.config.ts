/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "wallpapercave.com",
      "cdn.motor1.com",
      "s2.mojalbum.com",
      "th.bing.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ ESLint dimatikan saat proses build
  },
};

module.exports = nextConfig;
