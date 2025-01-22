import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.output.publicPath = "auto";
    config.plugins.push(
      new NextFederationPlugin({
        name: "landingApp",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Index": "./src/pages/index.tsx",
        },
        shared: {
          // react: {
          //   singleton: true,
          //   requiredVersion: deps.react,
          //   eager: true,
          // },
          // "react-dom": {
          //   singleton: true,
          //   requiredVersion: deps["react-dom"],
          //   eager: true,
          // },
          "@mui/core-downloads-tracker": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/icons-material": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/system": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/utils": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/material-pigment-css": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/material-nextjs": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/styled-engine": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/private-theming": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/material": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@material-ui/core": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@material-ui/styles": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
        },
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
