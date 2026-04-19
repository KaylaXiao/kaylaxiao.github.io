import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // basePath: "/kaylaxiao.github.io", // 不需要，因为仓库名是 username.github.io
};

export default nextConfig;
