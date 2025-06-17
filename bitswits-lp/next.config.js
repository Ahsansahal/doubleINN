/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})
module.exports = withBundleAnalyzer({})

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp23.cryscampus.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/mobile-app-design-company',
        destination: '/top-mobile-app-development-company',
      },
    ]
  },
}

module.exports = nextConfig