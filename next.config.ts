import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  env: {
    APP_URL: process.env.APP_URL,
  },
};

export default nextConfig;
