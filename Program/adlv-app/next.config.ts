import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
      {
        protocol: "https",
        hostname: "egawytlytzkzpuuxkpjw.supabase.co",
      },
      {
        protocol: "https",
        hostname: "upbzyjodemmdkfdlvasg.supabase.co",
      },
    ],
  },
  eslint: {
    dirs: ["app", "components", "lib", "utils"], // Directories to run ESLint on
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
};

export default nextConfig;
