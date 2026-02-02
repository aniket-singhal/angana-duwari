import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Allow Cloudinary
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com', // Allow Google Images (from your error)
      },
    ],
  },
};

export default nextConfig;