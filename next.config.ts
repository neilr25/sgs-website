import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
    ],
  },
  async redirects() {
    return [
      // Only redirect live pages that have external backlinks
      { source: "/blog2/:path*", destination: "/blog/:path*", permanent: true },
      { source: "/news-1/:path*", destination: "/news/:path*", permanent: true },
      { source: "/press-media", destination: "/press", permanent: true },
      { source: "/press-1", destination: "/press", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;