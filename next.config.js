/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/fir-auth-1c3bc.appspot.com/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/fir-auth-1c3bc.appspot.com/**",
      },
    ],
  },
};

module.exports = nextConfig;
