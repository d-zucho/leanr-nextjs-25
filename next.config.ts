import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'fastly.picsum.photos',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'picsum.photos',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'upload.wikimedia.org',
        protocol: 'https',
        port: '',
      },
    ],
  },
}

export default nextConfig
