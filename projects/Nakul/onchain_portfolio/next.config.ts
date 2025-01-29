import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.d\.ts\.map$/,
      use: "null-loader",
    });
    return config;
  },
};

export default nextConfig;
