import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Three.js WebGPU requires these packages to be transpiled */
  transpilePackages: ["three"],
  webpack: (config) => {
    // Support for Three.js TSL/WebGPU modules
    config.resolve = config.resolve || {};
    config.resolve.extensionAlias = {
      ".js": [".ts", ".tsx", ".js", ".jsx"],
    };
    return config;
  },
  // Configure turbopack to silence the error about having webpack config
  turbopack: {},
};

export default nextConfig;
