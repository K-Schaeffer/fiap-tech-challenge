import { NextFederationPlugin } from "@module-federation/nextjs-mf";
// import CopyWebpackPlugin from "copy-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.output.publicPath = "auto";
    config.plugins.push(
      new NextFederationPlugin({
        name: "dashboardApp",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Index": "./src/pages/index.tsx",
        },
        shared: {},
      })
      // new CopyWebpackPlugin({
      //   patterns: [{ from: "public/assets", to: "static/assets" }],
      // })
    );
    return config;
  },
  reactStrictMode: true,
  // images: {
  //   domains: ["localhost"],
  //   path: "/static/assets/",
  // },
};

export default nextConfig;
