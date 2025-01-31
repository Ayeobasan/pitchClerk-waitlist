/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pitch-clerk-waitlist.vercel.app",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "example.com",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
