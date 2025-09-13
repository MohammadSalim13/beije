import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'beije.co',
      },
      {
        protocol: 'https',
        hostname: 'static.beije.co',
      },
    ],
  },
};

export default nextConfig;
