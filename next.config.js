/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // هذا السطر يخبر Vercel ألا يتوقف عن البناء حتى لو وجد أخطاء ESLint
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
