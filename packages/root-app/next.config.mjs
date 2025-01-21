import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.output.publicPath = "auto";
    config.plugins.push(
      new NextFederationPlugin({
        name: "rootApp",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          landingApp:
            "landingApp@http://localhost:3000/_next/static/chunks/remoteEntry.js",
        },
        shared: {},
      })
    );
    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;
