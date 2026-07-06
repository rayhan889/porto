import type { NextConfig } from "next";

const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;

const buildVelite = async () => {
  if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
    process.env.VELITE_STARTED = "1";
    const { build } = await import("velite");
    await build({ watch: isDev, clean: !isDev });
  }
};

buildVelite().catch(console.error);

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
