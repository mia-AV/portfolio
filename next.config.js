/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Prioritize modern formats for smaller file sizes and faster LCP
    formats: ['image/avif', 'image/webp'],
    // Optimized device sizes for the hero portrait and cards
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable gzip compression
  compress: true,
}
module.exports = nextConfig
