/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "i.imgur.com",
      },
    ],
  },
};

module.exports = nextConfig;
