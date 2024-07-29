/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.inrainconstruction.in',
        port: '',
        pathname: './public/**',
      },
    ]
  }
};

export default nextConfig;