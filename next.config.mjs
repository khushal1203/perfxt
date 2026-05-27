/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
