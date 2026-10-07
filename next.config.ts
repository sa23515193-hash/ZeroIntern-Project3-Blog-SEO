import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages && repo ? `/${repo}` : "",
  assetPrefix: isGithubPages && repo ? `/${repo}/` : "",
};

export default nextConfig;
