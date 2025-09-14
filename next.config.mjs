/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'randomuser.me',
            }
        ],
    },
    experimental: {
        appDir: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    swcMinify: true,
};

export default nextConfig;
