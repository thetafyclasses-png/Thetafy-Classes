// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['img.youtube.com', 'i.ytimg.com'],
//   },
//   env: {
//     YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
//   }
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  env: {
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  },
};

module.exports = nextConfig;
