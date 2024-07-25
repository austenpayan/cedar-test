/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/payment",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
