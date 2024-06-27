/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pwdoalxbjdudcjnftvsw.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/court-images/**",
      },
    ],
  },
};

export default nextConfig;
