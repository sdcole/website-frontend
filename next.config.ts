import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  // Uncomment the following if hosting on github.com/username/repo-name
  // (not needed for username.github.io sites)
  // basePath: '/repo-name',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
