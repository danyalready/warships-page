import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [{ protocol: 'https', hostname: 'glossary.korabli.su' }],
    },
};

export default nextConfig;
