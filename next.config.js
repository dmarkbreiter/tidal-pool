/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inaturalist-open-data.s3.amazonaws.com",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "static.inaturalist.org",
        pathname: "/photos/**",
      },
    ],
  },
};

module.exports = nextConfig;
