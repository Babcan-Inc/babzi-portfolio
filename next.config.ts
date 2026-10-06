import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/og.png", destination: "/opengraph-image" },
      { source: "/og/:slug.png", destination: "/work/:slug/opengraph-image" },
    ];
  },
};

export default nextConfig;
