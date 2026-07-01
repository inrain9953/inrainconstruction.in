/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp']
  },
  /* config options here */
  reactCompiler: true
}

export default nextConfig
