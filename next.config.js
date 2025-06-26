/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  webpack: (config, { isServer }) => {
    // Ensure proper module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
      'react-dom/client': require.resolve('react-dom/client'),
    };
    
    // Handle browser-specific modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }
    
    return config;
  },
  // Remove experimental features that might cause issues
  images: {
    domains: [],
  },
}

module.exports = nextConfig